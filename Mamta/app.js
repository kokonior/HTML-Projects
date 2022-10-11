function test(){
  var number = document.getElementById("num").value;
  var number = parseInt(number);
  if(number<0){
    alert("enter positive value");
  }
  else{
    var x = number +2;
    var y = number + 4;
    var z = number +6;
    if(number %2===0){
      alert("the next 3 even numbers are "+x+", "+y+", and "+z);
    }
    else{
      alert("the next 3 odd numbers are "+x+", "+y+", and "+z);
    }
  }
}
