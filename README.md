# smart-table

The ```.smart-table``` class is used to create a user-friendly and easy-to-use report table display. Just by adding ```class = "smart-table"``` to the ```<table>``` , adding ```class="draggable sortable filterable"``` in ```<th>``` you can use it. Such as drag and drop columns, show or hide columns, filter data per column, export to excel, and we can fit the columns according to their contents.<br>Some buttons using icon button from [w3school](http://w3schools.com/icons/) and excel export CDN library from [jsDelivr](https://www.jsdelivr.com/). So make sure you add it in meta header.
![image](https://github.com/user-attachments/assets/25c97932-e70a-4d07-9d97-fedeb9c4180a)


--------------------------------------
## Script
```
<body>
  <table class="smart-table">
    <thead>
      <tr>
        <th class="draggable sortable filterable">No</th>
        <th class="draggable sortable filterable">NIK</th>
        <th class="draggable sortable filterable">Nama</th>
        <th class="draggable sortable filterable">Jenis Kelamin</th>
        <th class="draggable sortable filterable">Tanggal Lahir</th>
        <th class="draggable sortable filterable">Tempat Lahir</th>
        <th class="draggable sortable filterable">Alamat</th>
        <th class="draggable sortable filterable">Kota</th>
        <th class="draggable sortable filterable">Provinsi</th>
        <th class="draggable sortable filterable">Kode Pos</th>
        <th class="draggable sortable filterable">Telepon</th>
        <th class="draggable sortable filterable">Email</th>
        <th class="draggable sortable filterable">Status</th>
        <th class="draggable sortable filterable">Pendidikan Terakhir</th>
        <th class="draggable sortable filterable">Sekolah</th>
        <th class="draggable sortable filterable">Jurusan</th>
        <th class="draggable sortable filterable">Tahun Masuk</th>
        <th class="draggable sortable filterable">Tahun Lulus</th>
        <th class="draggable sortable filterable">IPK</th>
        <th class="draggable sortable filterable">Pekerjaan</th>
      </tr>
    </thead>
      <tbody>
        <tr>....</tr>
      </tbody>
  </table>
```
--------------------------------------
## Extras
Add this font-awesome and CDN excel library as toolbar feature support.
```
  <title>Table Drag, Drop & Sort</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
  <link href="smart-table.css" rel="stylesheet">
  <script src="smart-table.js"></script>
```
--------------------------------------
## Layout Setting
You can show/hide the column by click _Layout Setting_ icon, and check/uncheck the header.
![image](https://github.com/user-attachments/assets/cdeff2cd-f574-4682-a506-e0d8300af130)
![image](https://github.com/user-attachments/assets/b300149c-b5ec-4326-b462-ec4c294acc7e)

--------------------------------------
## Column Filter
Click _Column Filter_ button to show/hide the filter input row.
![image](https://github.com/user-attachments/assets/4e29dde9-7d4d-46f4-a25f-fd7b5f732573)

--------------------------------------
## Sort Table
Just click the header column, you can sort column by asc/desc.
![image](https://github.com/user-attachments/assets/4b9763a5-0e07-49b4-a340-eb5104b9cc9f)

--------------------------------------
## Fit Column
Click _Fit Column Width_ to make the width of each column fit the content.
![image](https://github.com/user-attachments/assets/d518b05d-b46f-41af-b9e8-879f44c67894)

## Export to Excel
Click _Export to Excel_ icon to export the table to Ms. Excel as displayed.
![image](https://github.com/user-attachments/assets/afc1158a-e4b9-451a-a64c-c1d89e673a6d)


