<?php 
session_start();
date_default_timezone_set('Asia/Jakarta');
include '../lib/db/dbconfig.php';

if (isset($_POST['login'])) {
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$pwd = sha1(mysqli_escape_string($conn, $_POST['pwd']));

	$sql = "SELECT * FROM user WHERE email_user='$email' AND pwd_user='$pwd'";
	$query = $conn->query($sql);
	$hitung = $query->num_rows;
	
	if ($hitung!==0) {
		$ambil = $query->fetch_assoc();

		extract($ambil);

		
		if ($level_user==='pb') {
			$_SESSION['pb']=$email;
			$_SESSION['id']=$id_user;
			header("Location:../index.php");
		} elseif ($level_user==='sw') {
			$_SESSION['sw']=$email;
			$_SESSION['id']=$id_user;
			header("Location:../index.php");
		}
	}else{
		header("location:../index.php?log=2");
	}
}
elseif (isset($_GET['logout'])) {
	session_destroy();
	
}
/**********************************************************/
//
//				Proses untuk User Siswa
//
/**********************************************************/
elseif (isset($_GET['absen'])) {
	if($_GET['absen']==1){
		$month = date("m");
		$day_tgl = date("d");
		$day = date("N");
		$hour = date("H.i")." WIB";
		$status = "Menunggu";
		$sql = "INSERT INTO data_absen (
			id_user,
			id_bln,
			id_hri,
			id_tgl,
			jam_msk,
			st_jam_msk) VALUES (
			?,
			?,
			?,
			?,
			?,
			?)";
		if ($statement = $conn->prepare($sql)) {
			$statement->bind_param(
				"iiiiss", $_SESSION['id'], $month, $day, $day_tgl, $hour, $status
				);
			if ($statement->execute()) {
				// Absen sukses
				$conn->close();
				header("location:../absen&ab=1");
			} else {
				header("location:../absen&ab=2");
			}
		}else {
			header("location:../absen&ab=2");
		}
		
	} else {
		// Absensi pulang -> melakukan Update jam pulang
		$id_user = mysqli_real_escape_string($conn, $_SESSION['id']);
		$id_bln = date("m");
		$day_tgl = date("d");
		$day = date("N");
		$hour = date("H.i")." WIB";
		$status = "Menunggu";
		$sql = "UPDATE data_absen SET jam_klr=?, st_jam_klr=? WHERE id_user='$id_user' AND id_tgl='$day_tgl' AND id_bln='$id_bln'";

		if ($statement= $conn->prepare($sql)) {
			$statement->bind_param(
				"ss", $hour, $status
				);
			if ($statement->execute()) {
				$conn->close();
				header("location:../absen&ab=1");

			} else {
				header("location:../absen&ab=2");
			}
		} else {
			header("location:../absen&ab=2");
		}
		
	}
}

// Simpan Catatan
elseif (isset($_POST['simpan_note'])) {
	
	if ($note !== "") {
		$id_user = $_SESSION['id'];
		$note = $_POST['note']; //mysqli_real_escape_string($conn, );
		$month = date("m");
		$day_tgl = date("d");
		$day = date("N");
		$id_note = "NULL";
		$status = "Menunggu";
		$sql= "INSERT INTO catatan (id_cat,
			id_user,
			id_bln,
			id_hri,
			id_tgl,
			isi_cat,
			status_cat) VALUES (?,
			?,
			?,
			?,
			?,
			?,
			?)";
		if ($statement = $conn->prepare($sql)) {
			$statement->bind_param(
				"iiiiiss", $id_note, $id_user, $month, $day, $day_tgl, $note, $status
				);
			if ($statement->execute()) {
				header("location:../catatan&st=1");
				$statement->close();
			} else {
				header("location:../catatan&st=2");
			}
		}else {
			header("location:../catatan&st=2");
		}
	} else {
		header("location:../catatan&st=2");
	}
}

/**********************************************************/
//
//				Proses untuk User Pembimbing
//
/**********************************************************/
elseif (isset($_GET['accx_absen'])) {
	if (!isset($_SESSION['pb'])) {
		header("location:home");
	}else{
		$id_absen=$_GET['accx_absen'];
		$type = $_GET['type'];
		if ($type==="in") {
			$query = "UPDATE data_absen SET st_jam_msk=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Dikonfirmasi";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					echo "Sukses";
				}else{
					//gagal update
					echo "Gagal";
				}
				$conn->close();
			} else {
				echo "Ga siap";
			}
			
		} else {
			$query = "UPDATE data_absen SET st_jam_klr=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Dikonfirmasi";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					echo "Sukses";
				}else{
					//gagal update
					echo "Gagal";
				}
				$conn->close();
			} else {
				echo "Ga siap";
			}
		}
	}
}
// Aksi pembimbing buat konfirmasi absen
elseif (isset($_GET['acc_absen'])) {
	if (!isset($_SESSION['pb'])) {
		header("location:home");
	}else{
		$id_absen=$_GET['acc_absen'];
		$type = $_GET['type'];
		if ($type==="in") {
			$query = "UPDATE data_absen SET st_jam_msk=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Dikonfirmasi";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					header("location:../absen&ab=1");
				}else{
					//gagal update
					header("location:../absen&ab=2");
				}
				$conn->close();
			} else {
				header("location:../absen&ab=2");
			}
			
		} else {
			$query = "UPDATE data_absen SET st_jam_klr=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Dikonfirmasi";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					header("location:../absen&ab=1");
				}else{
					//gagal update
					header("location:../absen&ab=2");
				}
				$conn->close();
			} else {
				header("location:../absen&ab=2");
			}
		}
	}
}
// Acc absen V2
elseif (isset($_POST['acc_absen2'])) {
	
	if (!empty($_POST['id_absen'])) {
		$count_id = count($_POST["id_absen"]);
		for($i=0; $i < $count_id; $i++) 
		{
		    $item=explode(",", $_POST["id_absen"][$i]);
		    $id_absen = "$item[0]";
		    $type = "$item[1]";
		    
		    if ($type==="in") {
				$query = "UPDATE data_absen SET st_jam_msk=? WHERE id_absen='$id_absen'";
				if ($statement = $conn->prepare($query)) {
					$status = "Dikonfirmasi";
					$statement->bind_param(
						"s", $status);
					if ($statement->execute()) {
						// sukses update
						header("location:../absen&ab=1");
					}else{
						//gagal update
						header("location:../absen&ab=2");
					}
					
				} else {
					header("location:../absen&ab=6");
				}
				
			} else {
				$query = "UPDATE data_absen SET st_jam_klr=? WHERE id_absen='$id_absen'";
				if ($statement = $conn->prepare($query)) {
					$status = "Dikonfirmasi";
					$statement->bind_param(
						"s", $status);
					if ($statement->execute()) {
						// sukses update
						header("location:../absen&ab=1");
					}else{
						//gagal update
						header("location:../absen&ab=2");
					}
					
				} else {
					header("location:../absen&ab=2");
				}
			}
		}
		$conn->close();
	} else {
		header("location:../absen&ab=2");
	}

}
// Aksi pembimbing buat declie absen
elseif (isset($_GET['dec_absen'])) {
	if (!isset($_SESSION['pb'])) {
		header("location:home");
	}else{
		$id_absen=$_GET['dec_absen'];
		$type = $_GET['type'];
		if ($type==="in") {
			$query = "UPDATE data_absen SET st_jam_msk=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Ditolak";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					header("location:../absen&ab=3");
				}else{
					//gagal update
					header("location:../absen&ab=2");
				}
				$conn->close();
			} else {
				header("location:../absen&ab=2");
			}
			
		} else {
			$query = "UPDATE data_absen SET st_jam_klr=? WHERE id_absen='$id_absen'";
			if ($statement = $conn->prepare($query)) {
				$status = "Ditolak";
				$statement->bind_param(
					"s", $status);
				if ($statement->execute()) {
					// sukses update
					header("location:../absen&ab=3");
				}else{
					//gagal update
					header("location:../absen&ab=2");
				}
				$conn->close();
			} else {
				header("location:../absen&ab=2");
			}
		}
	}
}
// Decline absen v2
elseif (isset($_POST['dec_absen2'])) {
	
	if (!empty($_POST['id_absen'])) {
		$count_id = count($_POST["id_absen"]);
		for($i=0; $i < $count_id; $i++) 
		{
		    $item=explode(",", $_POST["id_absen"][$i]);
		    $id_absen = "$item[0]";
		    $type = "$item[1]";
		    
		    if ($type==="in") {
				$query = "UPDATE data_absen SET st_jam_msk=? WHERE id_absen='$id_absen'";
				if ($statement = $conn->prepare($query)) {
					$status = "Ditolak";
					$statement->bind_param(
						"s", $status);
					if ($statement->execute()) {
						// sukses update
						header("location:../absen&ab=3");
					}else{
						//gagal update
						header("location:../absen&ab=2");
					}
					
				} else {
					header("location:../absen&ab=2");
				}
				
			} else {
				$query = "UPDATE data_absen SET st_jam_klr=? WHERE id_absen='$id_absen'";
				if ($statement = $conn->prepare($query)) {
					$status = "Ditolak";
					$statement->bind_param(
						"s", $status);
					if ($statement->execute()) {
						// sukses update
						header("location:../absen&ab=3");
					}else{
						//gagal update
						header("location:../absen&ab=2");
					}
					
				} else {
					header("location:../absen&ab=2");
				}
			}
		}
		$conn->close();
	} else {
		header("location:../absen&ab=2");
	}
}
// acc Note
elseif (isset($_GET['acc_note'])) {
	if (!isset($_SESSION['pb'])) {
		header("location:home");
	}else{
		$id_note=$_GET['acc_note'];
		$sql = "UPDATE catatan SET status_cat=? WHERE id_cat='$id_note'";
		if ($statement = $conn->prepare($sql)) {
			$status= "Dikonfirmasi";
			$statement->bind_param(
				"s", $status
				);
			if ($statement->execute()) {
				header("location:../req_catatan&ab=1");
			}else{
				//gagal update
				header("location:../req_catatan&ab=2");
			}
			$conn->close();
		} else {
			header("location:../req_catatan&ab=2");
		}
		
	}
}
// Decline Note
elseif (isset($_GET['dec_note'])) {
	if (!isset($_SESSION['pb'])) {
		header("location:../home");
	}else{
		$id_note=$_GET['dec_note'];
		$sql = "UPDATE catatan SET status_cat=? WHERE id_cat='$id_note'";
		if ($statement = $conn->prepare($sql)) {
			$status= "D";
			$statement->bind_param(
				"s", $status
				);
			if ($statement->execute()) {
				header("location:../req_catatan&ab=3");
			}else{
				//gagal update
				header("location:../req_catatan&ab=2");
			}
			$conn->close();
		} else {
			header("location:../req_catatan&ab=2");
		}
		
	}
}
// Tambah siswa
elseif (isset($_POST['add_siswa'])) {
	$query = $conn->query("SELECT id_user FROM user ORDER BY id_user DESC");
	$ambil = $query->fetch_assoc();
	$id = $ambil['id_user']+1;
	$nis = mysqli_real_escape_string($conn, $_POST['nis']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$pwd = mysqli_real_escape_string($conn, sha1($_POST['pwd_cek']));
	$pwd_cek = mysqli_real_escape_string($conn, sha1($_POST['pwd']));
	
	$nama = mysqli_real_escape_string($conn, $_POST['nama']);
	$jk = mysqli_real_escape_string($conn, $_POST['jk']);
	$sklh = mysqli_real_escape_string($conn, $_POST['sklh']);
	$level = "sw";
	
	$sql_user = "INSERT INTO user (id_user,
		email_user,
		pwd_user,
		level_user) VALUES(?,
		?,
		?,
		?)";
	$sql_detail = "INSERT INTO detail_user (id_user,
		nis_user,
		name_user,
		sklh_user,
		jk_user) VALUES(?,
		?,
		?,
		?,
		?)";
	if ($nis==="" || $email==="" || $pwd==="" || $nama==="" || $jk==="" || $sklh==="") {
		header("location:../add_siswa&st=4");
	}else {
		if ($pwd !== "$pwd_cek") {
			header("location:../add_siswa&st=5");
		} else {
			$cek =$conn->query("SELECT*FROM user WHERE email_user='$email'")->num_rows;
			$cek_nis = $conn->query("SELECT (nis_user) FROM detail_user WHERE nis_user='$nis'")->num_rows;
			if ($cek==0) {
				if ($cek_nis==0) {
					if ($statement= $conn->prepare($sql_user) AND $statement1 = $conn->prepare($sql_detail)) {
						$statement->bind_param(
							"isss", $id, $email, $pwd, $level
							);
						$statement1->bind_param(
							"iisss", $id, $nis, $nama, $sklh, $jk
							);
						if ($statement->execute() && $statement1->execute()) {
							header("location:../add_siswa&st=1");
						} else {
							header("location:../add_siswa&st=2");
						}
					} else {
						header("location:../add_siswa&st=2");
					}
				} else {
					header("location:../add_siswa&st=6");
				}
				$conn->close();
			} else {
				header("location:../add_siswa&st=3");
			}
		}
	}
	
}
// Edit siswa
elseif (isset($_POST['edit_siswa'])) {
	$id = mysqli_real_escape_string($conn, $_POST['id_user']);
	$nis = mysqli_real_escape_string($conn, $_POST['nis']);
	//$pwd = mysqli_real_escape_string($conn, sha1($_POST['pwd_cek']));
	$nama = mysqli_real_escape_string($conn, $_POST['nama']);
	$jk = mysqli_real_escape_string($conn, $_POST['jk']);
	$sklh = mysqli_real_escape_string($conn, $_POST['sklh']);

	$sql_detail = "UPDATE detail_user SET nis_user=?, name_user=?, sklh_user=?, jk_user=? WHERE id_user='$id'";
	if ($nis==="" || $id==="" || $nama==="" || $jk==="" || $sklh==="") {
		header("location:../siswa&id=$id&st=4");
	}else {
		if ($statement= $conn->prepare($sql_detail)) {
				$statement->bind_param(
					"ssss", $nis, $nama, $sklh, $jk
					);
				if ($statement->execute()) {
					header("location:../siswa&id_siswa=$id&st=1");
				} else {
					header("location:../siswa&id_siswa=$id&st=2");
				}
			} else {
				header("location:../siswa&id_siswa=$id&st=2");
			}
		/*$cek_nis = $conn->query("SELECT (nis_user) FROM detail_user WHERE nis_user='$nis'")->num_rows;
		if ($cek_nis==0) {
			
		} else {
			header("location:../siswa&id=$id&st=6");
		}*/
		$conn->close();
		
	}
	
}
// Delete siswa
elseif (isset($_GET['del_siswa'])) {
	$id = mysqli_real_escape_string($conn, $_GET['del_siswa']);
	$sql_d = "DELETE FROM detail_user WHERE id_user=?";
	$sql_u = "DELETE FROM user WHERE id_user=?";
	if ($stmt= $conn->prepare($sql_d) AND $stmt1 = $conn->prepare($sql_u)) {
		$stmt->bind_param("i", $id);
		$stmt1->bind_param("i", $id);
		if ($stmt->execute() && $stmt1->execute()) {
			header("location:../siswa&st=3");
		} else {
			header("location:../siswa&st=5");
		}
	} else {
		header("location:../siswa&st=5");
	}
}
// Ganti password
elseif (isset($_POST['change-pwd'])) {
	$id = mysqli_real_escape_string($conn, $_POST['id']);
	$old = sha1(mysqli_real_escape_string($conn, $_POST['old-pwd']));
	$new = sha1(mysqli_real_escape_string($conn, $_POST['new-pwd']));
	$cek = sha1(mysqli_real_escape_string($conn, $_POST['new-pwd-cek']));
	if (!empty($old) || !empty($new) || !empty($cek) || !empty($id)) {
			if ($new !== $cek) {
				header("location:../katasandi&id=$id&st=5");
			} else {
				$sqlc = "UPDATE user SET pwd_user=? WHERE id_user='$id'";
				if ($update= $conn->prepare($sqlc)) {
					$update->bind_param("s", $new);
					if ($update->execute()) {
						header("location:../katasandi&id=$id&st=1");
					} else {
						header("location:../katasandi&id=$id&st=2");
					}
				} else {
					header("location:../katasandi&id=$id&st=2");
				}
			}
	} else {
		header("location:../katasandi&id=$id&st=4");
	}
}
/**********************************************************/
//
//				Proses Untuk Orang bandel!
//
/**********************************************************/
else {
	echo "<script>window.alert('Waaahh.. Bandel ya !! ');window.location=('../home');</script>";
}
?>

//hacktoberfest2021
