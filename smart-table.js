  class SmartTable {
    constructor(table) {
      this.table = table;
      this.startIndex = null;
      this.sortState = {};
      this.init();
    }

    init() {
      this.wrapTable();
      this.injectToolbar();
      this.enhanceHeaders();
      this.generateCheckboxes();
      this.initFilterEvents();
      this.initDraggableHeaders();
      this.bindToggleEvents();
    }

    wrapTable() {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-wrapper-with-toolbar';

      const scrollable = document.createElement('div');
      scrollable.className = 'scrollable-table';

      this.table.parentNode.insertBefore(wrapper, this.table);
      this.table.parentNode.removeChild(this.table);
      scrollable.appendChild(this.table);
      wrapper.appendChild(scrollable);
    }

    injectToolbar() {
      const wrapper = this.table.closest('.table-wrapper-with-toolbar');
      this.toolbar = document.createElement('div');
      this.toolbar.className = 'table-toolbar';

      // Column Panel
      const columnSection = document.createElement('div');
      columnSection.className = 'toolbar-section';
      this.columnBtn = document.createElement('button');
      this.columnBtn.className = 'dropdown-toggle';
      this.columnBtn.innerHTML = '<i class="fas fa-table"></i>';
      this.columnBtn.title = 'Layout Setting';
      this.columnPanel = document.createElement('div');
      this.columnPanel.className = 'dropdown-panel';
      columnSection.appendChild(this.columnBtn);
      columnSection.appendChild(this.columnPanel);

      // Filter Panel
      const filterSection = document.createElement('div');
      filterSection.className = 'toolbar-section';
      this.filterBtn = document.createElement('button');
      this.filterBtn.className = 'dropdown-toggle';
      this.filterBtn.innerHTML = '<i class="fas fa-filter"></i>';
      this.filterBtn.title = 'Column Filter';
      filterSection.appendChild(this.filterBtn);

      this.toolbar.appendChild(columnSection);
      this.toolbar.appendChild(filterSection);

      const scrollable = wrapper.querySelector('.scrollable-table');
      wrapper.insertBefore(this.toolbar, scrollable);

      // export to excel
      const exportSection = document.createElement('div');
      exportSection.className = 'toolbar-section';

      this.exportBtn = document.createElement('button');
      this.exportBtn.className = 'dropdown-toggle';
      this.exportBtn.innerHTML = '<i class="fas fa-file-excel"></i>';
      this.exportBtn.title = 'Export to Excel';

      exportSection.appendChild(this.exportBtn);
      this.toolbar.appendChild(exportSection);
    }

    enhanceHeaders() {
      const headerRow = this.table.querySelector('thead tr');
      const headers = headerRow.querySelectorAll('th');

      headers.forEach((th) => {
        if (th.classList.contains('sortable')) {
          const icon = document.createElement('i');
          icon.className = 'sort-icon fas';
          th.appendChild(icon);
        }
        if (th.classList.contains('draggable')) {
          th.setAttribute('draggable', true);
        }
      });

      if (!this.table.querySelector('#filterRow')) {
        const filterRow = document.createElement('tr');
        filterRow.id = 'filterRow';
        headers.forEach((th) => {
          const td = document.createElement('td');
          if (th.classList.contains('filterable')) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = th.textContent.trim();
            td.appendChild(input);
          }
          filterRow.appendChild(td);
        });
        headerRow.parentNode.appendChild(filterRow);
      }
    }

    generateCheckboxes() {
      this.columnPanel.innerHTML = '';
      const headers = Array.from(this.table.querySelectorAll('thead th'));

      headers.forEach((th, index) => {
        const labelText = th.textContent.trim() || `Kolom ${index + 1}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.dataset.col = index;

        checkbox.addEventListener('change', () => {
          const colIndex = parseInt(checkbox.dataset.col);
          const isChecked = checkbox.checked;
          for (const row of this.table.rows) {
            const cell = row.cells[colIndex];
            if (cell) cell.style.display = isChecked ? '' : 'none';
          }
        });

        const label = document.createElement('label');
        label.style.marginRight = '10px';
        label.appendChild(checkbox);
        label.append(" " + labelText);
        this.columnPanel.appendChild(label);
      });
    }

    initFilterEvents() {
      const filterRow = this.table.querySelector('#filterRow');
      if (!filterRow) return;

      const inputs = filterRow.querySelectorAll('input');
      const rows = this.table.querySelectorAll('tbody tr');

      inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
          const filters = Array.from(inputs).map(inp => inp.value.toLowerCase());

          rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            let show = true;

            filters.forEach((val, i) => {
              if (val && cells[i] && !cells[i].textContent.toLowerCase().includes(val)) {
                show = false;
              }
            });

            row.style.display = show ? '' : 'none';
          });
        });
      });
    }

    exportToExcel() {
      const headers = Array.from(this.table.querySelectorAll("thead th"));
      const visibleIndexes = headers
        .map((th, i) => (th.offsetParent !== null ? i : -1))
        .filter(i => i !== -1);

      const headerRow = headers.filter((_, i) => visibleIndexes.includes(i)).map(th => th.textContent.trim());
      const dataRows = Array.from(this.table.querySelectorAll("tbody tr")).map(row => {
        return visibleIndexes.map(i => row.cells[i]?.textContent.trim());
      });

      const worksheetData = [headerRow, ...dataRows];
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

      XLSX.writeFile(workbook, "Download.xlsx");
    }

    initDraggableHeaders() {
      const headers = this.table.querySelectorAll('thead th');
      headers.forEach((th) => {
        th.addEventListener('dragstart', this.onDragStart.bind(this));
        th.addEventListener('dragover', this.onDragOver.bind(this));
        th.addEventListener('drop', this.onDrop.bind(this));
        th.addEventListener('dragend', this.onDragEnd.bind(this));
        th.addEventListener('click', this.onHeaderClick.bind(this));
      });
    }

    onDragStart(e) {
      const headers = Array.from(e.target.parentNode.children);
      this.startIndex = headers.indexOf(e.target);
      e.target.classList.add('dragging');
    }

    onDragOver(e) {
      e.preventDefault();
    }

    onDrop(e) {
      const headers = Array.from(e.target.parentNode.children);
      const endIndex = headers.indexOf(e.target);
      if (this.startIndex !== endIndex) {
        this.moveColumn(this.startIndex, endIndex);
        this.resetSortIcons();
      }
      this.initDraggableHeaders();
    }

    onDragEnd(e) {
      e.target.classList.remove('dragging');
    }

    moveColumn(fromIndex, toIndex) {
      for (const row of this.table.rows) {
        const cells = row.cells;
        const fromCell = cells[fromIndex];
        const toCell = cells[toIndex];
        if (fromIndex < toIndex) {
          row.insertBefore(fromCell, toCell.nextSibling);
        } else {
          row.insertBefore(fromCell, toCell);
        }
      }
    }

    onHeaderClick(e) {
      if (e.target.tagName === 'I') return;
      const th = e.currentTarget;
      const headers = Array.from(th.parentNode.children);
      const index = headers.indexOf(th);
      const currentSort = this.sortState[index] === 'asc' ? 'desc' : 'asc';
      this.sortColumn(index, currentSort);
      this.updateSortIcons(index, currentSort);
      this.sortState = {};
      this.sortState[index] = currentSort;
    }

    sortColumn(index, direction) {
      const tbody = this.table.querySelector('tbody');
      const rows = Array.from(tbody.rows);

      rows.sort((a, b) => {
        const valA = a.cells[index].textContent.trim();
        const valB = b.cells[index].textContent.trim();
        const numA = parseFloat(valA), numB = parseFloat(valB);
        const isNumeric = !isNaN(numA) && !isNaN(numB);
        return isNumeric
          ? (direction === 'asc' ? numA - numB : numB - numA)
          : (direction === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA));
      });

      rows.forEach(row => tbody.appendChild(row));
    }

    updateSortIcons(activeIndex, direction) {
      const headers = this.table.querySelectorAll('thead th');
      headers.forEach((th, i) => {
        const icon = th.querySelector('.sort-icon');
        if (icon) {
          icon.className = 'sort-icon fas';
          if (i === activeIndex) {
            icon.classList.add(direction === 'asc' ? 'fa-sort-up' : 'fa-sort-down');
          }
        }
      });
    }

    resetSortIcons() {
      this.table.querySelectorAll('.sort-icon').forEach(icon => {
        icon.className = 'sort-icon fas';
      });
    }

    bindToggleEvents() {
      this.columnBtn.addEventListener('click', () => {
        if (!this.columnPanel.hasChildNodes()) {
          this.generateCheckboxes();
        }
        this.columnPanel.style.display = this.columnPanel.style.display === 'none' ? 'block' : 'none';
      });

      document.addEventListener('click', (e) => {
        if (!this.columnBtn.contains(e.target) && !this.columnPanel.contains(e.target)) {
          this.columnPanel.style.display = 'none';
        }
      });

      this.filterBtn.addEventListener('click', () => {
        const filterRow = this.table.querySelector('#filterRow');
        if (!filterRow) {
          this.enhanceHeaders();
          this.initFilterEvents();
        }
        const isHidden = getComputedStyle(filterRow).display === 'none';
        filterRow.style.display = isHidden ? 'table-row' : 'none';
      });

      this.exportBtn.addEventListener("click", () => {
        this.exportToExcel();
      });
    }
  }

  // Auto-init untuk semua table dengan class "smart-table"
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('table.smart-table').forEach(table => new SmartTable(table));
  });