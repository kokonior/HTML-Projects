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
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy5",
        img: "toy5",
        category: "toy",
        price: "Rs.1199",
        incart: 0
    },
    {
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy4",
        img: "toy4",
        category: "toy",
        price: "Rs.1299",
        incart: 0
    },
    {
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy3",
        img: "toy3",
        category: "toy",
        price: "Rs.1199",
        incart: 0
    },
    {
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy2",
        img: "toy2",
        category: "toy",
        price: "Rs.999",
        incart: 0
    },
    {
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy1",
        img: "toy1",
        category: "toy",
        price: "Rs.1399",
        incart: 0
    },
    
    {
        name: "ThePetNest X BarkButler™ :Plush toy",
        tag: "ThePetNest X BarkButler™ :Plush toy6",
        img: "toy6",
        category: "toy",
        price: "Rs.1299",
        incart: 0
    },
    
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
            <img src="./assests/images/${item.img}.jpg"style="opacity:100%">
            <span>${item.name}</span>
                </div>
                <div class ="price">${item.price}</div>
                <div class ="quantity">
                <span>${item.incart}</span>
                </div>
              
            </div>`;
            
        });
    }
    
}

onLoadCartNumbers();
displayCart();