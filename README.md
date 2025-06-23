# smart-table

The .smart-table class is used to create a user-friendly and easy-to-use report table display. Just by adding class = "smart-table" to the &lt;table> tag you can use it. Such as drag and drop columns, show or hide columns, filter data per column, export to excel, and we can fit the columns according to their contents.
![image](https://github.com/user-attachments/assets/ab7e5810-6445-430f-a0e1-23866eddfe6a)

--------------------------------------
## Script
```
<body>

  <table class="smart-table">
    <thead>
      <tr>
        <th class="sortable draggable filterable">No</th>
        <th class="sortable draggable filterable">Name</th>
        <th class="sortable draggable filterable">Symbol</th>
        <th class="sortable draggable filterable">Price</th>
        <th class="sortable draggable filterable">MarketCap</th>
        <th class="sortable draggable filterable">Current Price</th>
        <th class="sortable draggable filterable">Market Cap</th>
        <th class="sortable draggable filterable">Total Volume</th>
        <th class="sortable draggable filterable">Total Supply</th>
        <th class="sortable draggable filterable">Max Supply</th>
        <th class="sortable draggable filterable">Last Updated</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table.smart-table');
    const smartTableInstance = new SmartTable(table);

    fetch('api-endpoint.php')
      .then(response => response.json())
      .then(data => {
        smartTableInstance.updateTableData(data);
      })
      .catch(error => {
        console.error('failed to fetch data:', error);
      });
  });
</script>
</body>
```
--------------------------------------
## Extras
Add this font-awesome and CDN excel library as toolbar feature support.
```
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
  <!-- XLSX for Export -->
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
  <!-- Smart Table CSS & JS -->
  <link rel="stylesheet" href="smart-table.css" />
  <script src="smart-table.js"></script>
```
--------------------------------------
## Layout Setting
![image](https://github.com/user-attachments/assets/44697e13-465b-49f0-8e11-af3aaf775fb4)
--------------------------------------
## Column Filter
![image](https://github.com/user-attachments/assets/f240123b-85a2-4bed-bb5c-3c21a2ffac97)
--------------------------------------
## Sort Table
![image](https://github.com/user-attachments/assets/914bb347-47b3-4e32-801d-1e74983f21f5)
--------------------------------------
## Export to Excel
Automatic download existing table (Download.xslx)
