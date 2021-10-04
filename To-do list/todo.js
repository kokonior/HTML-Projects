function addTodo(event) {
    if(event.code === "Enter")
    {
        let todo = document.getElementById("input-todo").value;

        if(todo){
            let itemList =  
                 
                 `<li>
                    <i class="fa fa-trash"></i></span>${todo}
                </li>`
        console.log(itemList);
        let container = document.getElementById("contain-todo").innerHTML +=itemList;
        }else{
            alert("Enter a valid todo")
        }
        document.getElementById("input-todo").value = "";
    }
}

document.querySelector("ul").addEventListener
('click',function(event){
    if(event.target.tagName === "I"){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
});