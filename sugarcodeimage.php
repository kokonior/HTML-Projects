<html>
<head>
    <title>Tutorial Cara Menampilkan Gambar Dengan Script PHP</title>
</head>
<body>
    <h2>Menampilkan Gambar Foto Siswa Dengan PHP</h2>
    <p>Data Siswa</p>
    <hr/>
    <table border="1">
            <tr>
                <td width="20">No</td>
                <td width="80">Foto Siswa</td>
                <td width="120">Nama</td>
            </tr>
            <?php
                $no=0;
                $query    =mysql_query("SELECT * FROM tb_siswa");
                while ($data    =mysql_fetch_array($query)){
                $no++
            ?>
            <tr>
                <td><?php echo $no?></td>
                <td align="center"><?php echo "<img src='img/$data[foto]' width='70' height='90' />";?></td>
                <td><?php echo $data['nama']?></td>
            </tr>
            <?php
                }
            ?>
    </table>
</body>
</html>
