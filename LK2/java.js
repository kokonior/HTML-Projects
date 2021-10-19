
function validateForm(form) {
  document.getElementById("nim").innerHTML = "";
  document.getElementById("nama").innerHTML = "";
  document.getElementById("alamat").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  var konfirmasi=confirm("Apakah Anda Yakin?");
  if (konfirmasi == true) {
    var nim= form.nim.value;
    var nama= form.nama.value;
    var alamat= form.alamat.value;
    var email= form.email.value;
    var c= form.nim.value.length;
    var d=form.nama.value.length;
    if(c < 6){
      document.getElementById("alertnim").innerHTML = "Minimal 6 Digit";
      return false;
    }
      else {
        document.getElementById("nim").innerHTML = nim;
        document.getElementById("nama").innerHTML = nama;
        document.getElementById("alamat").innerHTML = alamat;
        document.getElementById("email").innerHTML = email;
        return false;
      }


 }
}
