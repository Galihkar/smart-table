# smart-table

The .smart-table class is used to create a user-friendly and easy-to-use report table display. Just by adding class = "smart-table" to the &lt;table> tag you can use it. Such as drag and drop columns, show or hide columns, filter data per column, and export to excel.
![image](https://github.com/user-attachments/assets/9a2ff198-dbdc-4d32-ba90-1a478cbca768)
--------------------------------------
## Script
```
  <table class="smart-table">
    <thead>
      <tr>
        <th class="draggable sortable filterable">Firstname</th>
        <th class="draggable sortable filterable">Lastname</th>
        <th class="draggable sortable filterable">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
```
--------------------------------------
## Extras
Add this font-awesome and CDN excel library as toolbar feature support.
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
```
--------------------------------------
## Layout Setting
![image](https://github.com/user-attachments/assets/e70af0f1-e95f-4fba-842a-9fc440fdc69f)
--------------------------------------
## Column Filter
![image](https://github.com/user-attachments/assets/c5f47a6c-eedc-4ffb-859c-38a402059427)
--------------------------------------
## Sort Table
![image](https://github.com/user-attachments/assets/dc122971-da0a-43f2-89e3-6f538eeae30e)
--------------------------------------
## Row hover color
![image](https://github.com/user-attachments/assets/1fdcb27b-f179-4f69-b1f6-582d9cb87bd5)
--------------------------------------
## Export to Excel
Automatic download existing table (Download.xslx)
