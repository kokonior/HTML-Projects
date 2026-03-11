
const form= document.getElementById("form");
const uname= document.getElementById("uname");
const email= document.getElementById("email");
const number= document.getElementById("number");
const password= document.getElementById("password");
const cpassword= document.getElementById("cpassword");

//add event

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    validate();
})

const sendData =(unameVal ,sRate, count) =>{
    if(sRate === count){
        alert('registration done successfully');
        swal("Welcome!" + unameVal, "Registration Successful", "success");
        // location.href ='name of page'
    }
}

const successMsg = (unameVal) =>{
    let formCon = document.getElementsByClassName("form-control");
    var count =formCon.length-1;
    for(var i = 0; i<formCon.length; i++){
        if(formCon[i].className ==='form-control success'){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(unameVal,sRate, count);
        }
        else{
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbole = emailVal.indexOf('a');
    if(atSymbole < 1)return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot < atSymbole + 2)return false;
    if(dot ===emailVal.length-1) return false;
    return true;
}

//define the validation function

const validate = ()=>{
    const unameVal= uname.value.trim();
const emailVal= email.value.trim();
const numberVal= number.value.trim();
const passwordVal= password.value.trim();
const cpasswordVal= cpassword.value.trim();


// validate username
if(unameVal === ""){
    setErrorMsg(uname, "username can not be blank");
}
else if(unameVal.length<2){
    setErrorMsg(uname, "username min 3 char");
}
else{
    setSucessMsg(uname);
}
//validate email
if(emailVal === ""){
    setErrorMsg(email, "email can not be blank");
}
else if(!isEmail(emailVal)){
    setErrorMsg(emailVal, "Not a valid Email");
}
else{
    setSucessMsg(email);
}
//validate number
if(numberVal === ""){
    setErrorMsg(number, "Number can not be blank");
}
else if(numberVal.length != 10){
    setErrorMsg(number, "Not a valid Number");
}
else{
    setSucessMsg(number);
}
//validate password
if(passwordVal === ""){
    setErrorMsg(password, "Password can not be null");
}
else if(passwordVal.length <= 5){
    setErrorMsg(password, "Minimum 6 char required ");
}
else{
    setSucessMsg(password);
}
//validate confirm password
if(cpasswordVal === ""){
    setErrorMsg(cpassword, "confirm Password can not be null");
}
else if(passwordVal != cpasswordVal){
    setErrorMsg(cpassword, "Password not match ");
}
else{
    setSucessMsg(cpassword);
}


successMsg(unameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSucessMsg(input ){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}