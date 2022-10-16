//preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})



// color customizer
document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themebuttons = document.querySelectorAll('.theme-buttons');
themebuttons.forEach(color => {
    color.addEventListener('click', () => {
        let datacolor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--primary-color', datacolor);
    })

});

// cart 
let products = [

    {
        name: "Top 4 Die Heart Succulents Plant",
        tag: "Top 4 Die Heart Succulents Plant",
        img: "sale2",
        category: "combo plants",
        price: "Rs.799",
        incart: 0
    },
    {
        name: "5 Best Indoor Plants Pack",
        tag: "5 Best Indoor Plants Pack",
        img: "sale5",
        category: "combo plants",
        price: "Rs.711",
        incart: 0
    },
    {
        name: "5 Best Fragnant Plants",
        tag: "5 Best Fragnant Plants",
        img: "sale4",
        category: "combo plants",
        price: "Rs.711",
        incart: 0
    },
    {
        name: "Plant Pack For Healthy Plants",
        tag: "Plant Pack For Healthy Plants",
        img: "sale3",
        category: "combo plants",
        price: "Rs.799",
        incart: 0
    },
    {
        name: "Sweet Summer Bulbs",
        tag: "Sweet Summer Bulbs",
        img: "flower2",
        category: "bulbs",
        price: "Rs.499",
        incart: 0
    },
    {
        name: "Glorious Gadolious",
        tag: "Glorious Gadolious",
        img: "flower1",
        category: "bulbs",
        price: "Rs.349",
        incart: 0
    },
    {
        name: "Zinggy Zephyranthes Lily",
        tag: "Zinggy Zephyranthes Lily",
        img: "flower4",
        category: "bulbs",
        price: "Rs.299",
        incart: 0
    },
    {
        name: "Year Round Bulbs",
        tag: "Year Round Bulbs",
        img: "flower3",
        category: "bulbs",
        price: "Rs.599",
        incart: 0
    },
    {
        name: "Set of 10 microgreen seeds",
        tag: "Set of 10 microgreen seeds",
        img: "seed1",
        category: "seeds",
        price: "Rs.499",
        incart: 0
    },
    {
        name: "set of 7 crunchy cucumber vegetable seeds",
        tag: "set of 7 crunchy cucumber vegetable seeds",
        img: "seed2",
        category: "seeds",
        price: "Rs.349",
        incart: 0
    },
    {
        name: "Set of 16 Best Seeds Used in Chinese Cuisines",
        tag: "Set of 16 Best Seeds Used in Chinese Cuisines",
        img: "seed3",
        category: "seeds",
        price: "Rs.699",
        incart: 0
    },
    {
        name: "Set of 8 Best Fruit Seeds",
        tag: "Set of 8 Best Fruit Seeds",
        img: "seed4",
        category: "seeds",
        price: "Rs.599",
        incart: 0
    }
]

let carts = document.querySelectorAll('.add-cart')

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// no of items in cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// products in cart
function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItem(products);
}


// name of products
function setItem(products) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems, [products.tag]: products
            }
        }
        cartItems[products.tag].incart += 1;
    }
    else {
        products.incart = 1;
        cartItems = {
            [products.tag]: products

        }

    }
    localStorage.setItem("productInCart", JSON.stringify(cartItems));
}


// total cost of products in cart
function totalCost(products) {
    let cartCost = localStorage.getItem('totalCost');
    console.log('cartCost is', cartCost);

    if (cartCost != null) {
        cartCost = parseInt(totalCost);
        localStorage.setItem('totalCost', cartCost + products * price);
    }
    else {
        localStorage.setItem('totalCost', products.price);
    }
}


// display items in  cart.html
function displayCart() {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product");

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class ="content">
                <div class ="product">
                <i class="bi bi-x-circle-fill" style="color : var(--primary-color)"></i>
                <img src="./assests/images/${item.img}.jpg">
                <span>${item.name}</span>
                </div>
                <div class ="price">${item.price}</div>
                <div class ="quantity">
                <span>${item.incart}</span>
                </div>
                <div class = "total">
                ${item.incart = item.price}
                </div>
            </div>`;

        });
    }

}

onLoadCartNumbers();
displayCart();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//form validation
const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

//add event

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
})

const sendData = (unameVal, sRate, count) => {
    if (sRate === count) {
        alert('registration done successfully');
        swal("Welcome!" + unameVal, "Registration Successful", "success");
        // location.href ='name of page'
    }
}

const successMsg = (unameVal) => {
    let formCon = document.getElementsByClassName("form-control");
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-control success') {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(unameVal, sRate, count);
        }
        else {
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbole = emailVal.indexOf('a');
    if (atSymbole < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot < atSymbole + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

//define the validation function

const validate = () => {
    const unameVal = uname.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // validate username
    if (unameVal === "") {
        setErrorMsg(uname, "username can not be blank");
    }
    else if (unameVal.length < 2) {
        setErrorMsg(uname, "username min 3 char");
    }
    else {
        setSucessMsg(uname);
    }
    //validate email
    if (emailVal === "") {
        setErrorMsg(email, "email can not be blank");
    }
    else if (!isEmail(emailVal)) {
        setErrorMsg(emailVal, "Not a valid Email");
    }
    else {
        setSucessMsg(email);
    }
    //validate number
    if (numberVal === "") {
        setErrorMsg(number, "Number can not be blank");
    }
    else if (numberVal.length != 10) {
        setErrorMsg(number, "Not a valid Number");
    }
    else {
        setSucessMsg(number);
    }
    //validate password
    if (passwordVal === "") {
        setErrorMsg(password, "Password can not be null");
    }
    else if (passwordVal.length <= 5) {
        setErrorMsg(password, "Minimum 6 char required ");
    }
    else {
        setSucessMsg(password);
    }
    //validate confirm password
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, "confirm Password can not be null");
    }
    else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, "Password not match ");
    }
    else {
        setSucessMsg(cpassword);
    }


    successMsg(unameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSucessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
