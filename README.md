# Smart Table

The ```.smart-table``` class is used to create a user-friendly and easy-to-use report table view. Just by adding ```class = "smart-table"``` to ```<table>``` , adding ```class="draggable sortable filterable"``` in ```<th>``` you can use it. Like dragging and dropping columns, showing or hiding columns, filtering data per column, exporting to excel, and we can customize the columns according to their contents.<br>Some buttons use icon buttons from [w3school](http://w3schools.com/icons/) and excel export CDN library from [jsDelivr](https://www.jsdelivr.com/). So make sure you add them in the meta header.<br>
You can try it [here](https://galihkar.github.io/smart-table/index.html)

--------------------------------------
# Script
```
<body>
  <table class="smart-table">
    <thead>
      <tr>
        <th class="draggable sortable filterable">..../th>
      </tr>
    </thead>
      <tbody>
        <tr>....</tr>
      </tbody>
  </table>
```
--------------------------------------
# Installation
Download `smart-table.css` and `smart-table.js` then link them to your HTML page.

--------------------------------------
# Features
**Drag & Drop Columns**: Drag column headers to change column positions<br>
**Sorting**: Click column headers to sort data<br>
**Filtering**: Filter data per column<br>
**Layout Settings**: Show/hide columns as needed<br>
**Adjust Column Width**: Adjust column width to fit content<br>
**Export to Excel**: Export table data to Excel file<br>

--------------------------------------
# Browser Compatibility
Supported on modern Chrome, Firefox, Edge, and Safari.

--------------------------------------
# Requirements
Font Awesome (for toolbar icons)<br>
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
```
XLSX.js library from jsDelivr (for excel export)
```
<script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
```

--------------------------------------
# Contributions
Please create an issue or pull request if you would like to contribute.
