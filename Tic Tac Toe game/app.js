const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

let flag = 1;

function myfunc(){

    if((b1.value == "X") && (b2.value == "X") && (b3.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b7.value == "X") && (b8.value == "X") && (b9.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    } else if ((b1.value == "X") && (b4.value == "X") && (b7.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b3.value == "X") && (b6.value == "X") && (b9.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b2.disabled = true;
        b4.disabled = true;
        b1.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    } else if ((b1.value == "X") && (b5.value == "X") && (b9.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    } else if ((b3.value == "X") && (b5.value == "X") && (b7.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b2.value == "X") && (b5.value == "X") && (b8.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b1.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    } else if ((b4.value == "X") && (b5.value == "X") && (b6.value == "X")){
        document.getElementById('print').textContent = "Player X Won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }



    if((b1.value == "O") && (b2.value == "O") && (b3.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b7.value == "O") && (b8.value == "O") && (b9.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
    } else if ((b1.value == "O") && (b4.value == "O") && (b7.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b2.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b3.value == "O") && (b6.value == "O") && (b9.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b5.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    } else if ((b1.value == "O") && (b5.value == "O") && (b9.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b2.disabled = true;
        b3.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
    } else if ((b3.value == "O") && (b5.value == "O") && (b7.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b1.disabled = true;
        b2.disabled = true;
        b4.disabled = true;
        b6.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    } else if ((b2.value == "O") && (b5.value == "O") && (b8.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b1.disabled = true;
        b3.disabled = true;
        b5.disabled = true;
        b6.disabled = true;
        b7.disabled = true;
        b9.disabled = true;
    } else if ((b4.value == "O") && (b5.value == "O") && (b6.value == "O")){
        document.getElementById('print').textContent = "Player O Won";
        b1.disabled = true;
        b2.disabled = true;
        b3.disabled = true;
        b7.disabled = true;
        b8.disabled = true;
        b9.disabled = true;
    }


   else if((b1.value == "X" || b1.value == "O") && (b2.value == "X" || b2.value == "O") && (b3.value == "X" || b3.value == "O") &&
    (b4.value == "X" || b4.value == "O") && (b5.value == "X" || b5.value == "O") && (b6.value == "X" || b6.value == "O") &&
    (b7.value == "X" || b7.value == "O") && (b8.value == "X" || b8.value == "O") && (b9.value == "X" || b9.value == "O")) {
        document.getElementById('print').textContent = "Match Tie";
    } else {
        // if (flag == 1){
        //     document.getElementById('print').textContent = "Player X Turn";
        // } else {
        //     document.getElementById('print').textContent = "Player O Turn";
        // }
    }

}


function myfunc_2(){
    location.reload();
    b1.value = "";
    b2.value = "";
    b3.value = "";
    b4.value = "";
    b5.value = "";
    b6.value = "";
    b7.value = "";
    b8.value = "";
    b9.value = "";
}


function myfunc_3(){
    if(flag == 1){
        b1.value = "X";
        b1.disabled = true;
        flag = 0;
    } else {
        b1.value = "O";
        b1.disabled = true;
        flag = 1;
    }
}

function myfunc_4(){
    if(flag == 1){
        b2.value = "X";
        b2.disabled = true;
        flag = 0;
    } else {
        b2.value = "O";
        b2.disabled = true;
        flag = 1;
    }
}

function myfunc_5(){
    if(flag == 1){
        b3.value = "X";
        b3.disabled = true;
        flag = 0;
    } else {
        b3.value = "O";
        b3.disabled = true;
        flag = 1;
    }
}

function myfunc_6(){
    if(flag == 1){
        b4.value = "X";
        b4.disabled = true;
        flag = 0;
    } else {
        b4.value = "O";
        b4.disabled = true;
        flag = 1;
    }
}

function myfunc_7(){
    if(flag == 1){
        b5.value = "X";
        b5.disabled = true;
        flag = 0;
    } else {
        b5.value = "O";
        b5.disabled = true;
        flag = 1;
    }
}

function myfunc_8(){
    if(flag == 1){
        b6.value = "X";
        b6.disabled = true;
        flag = 0;
    } else {
        b6.value = "O";
        b6.disabled = true;
        flag = 1;
    }
}

function myfunc_9(){
    if(flag == 1){
        b7.value = "X";
        b7.disabled = true;
        flag = 0;
    } else {
        b7.value = "O";
        b7.disabled = true;
        flag = 1;
    }
}

function myfunc_10(){
    if(flag == 1){
        b8.value = "X";
        b8.disabled = true;
        flag = 0;
    } else {
        b8.value = "O";
        b8.disabled = true;
        flag = 1;
    }
}

function myfunc_11(){
    if(flag == 1){
        b9.value = "X";
        b9.disabled = true;
        flag = 0;
    } else {
        b9.value = "O";
        b9.disabled = true;
        flag = 1;
    }
}
