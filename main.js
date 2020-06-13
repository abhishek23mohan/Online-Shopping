let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Black Tshirt",
        tag: "black_tshirt",
        price: 499,
        inCart: 0
    },
    {
        name: "White Tshirt",
        tag: "white_tshirt",
        price: 599,
        inCart: 0
    },
    {
        name: "Blue Tshirt",
        tag: "blue_tshirt",
        price: 459,
        inCart: 0
    },
    {
        name: "Red Tshirt",
        tag: "red_tshirt",
        price: 559,
        inCart: 0
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
        
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");
    
    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers + 1;
        
    }
}

function cartNumbers(products){
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(products);
}

function setItems(products){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if(cartItems !=null)
    {
        if(cartItems[products.tag] == undefined){
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    }
    else{
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(products){
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartCost != null){

    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
    }
    else{
        localStorage.setItem("totalCost", products.price);
    }
}


/****************not completed *******************************/
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector("products-container");
        
    }


onLoadCartNumbers();
displayCart();