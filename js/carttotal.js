const cart_items_product = document.querySelector(".cart-items");
const new__price_total = document.querySelector(".new__price_total");
const product_parent = document.querySelector(".product_parent");
const new__price_total_finish = document.querySelector(".new__price_total_finish");
var cartNow;


const cartLogicProduct = () => {
    product_parent.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove__cart-item")) {
            console.log("|||123");
            let removeItem = event.target;
            let id = removeItem.dataset.id;
            product_parent.removeChild(removeItem.parentElement.parentElement);
            removeItemProduct(id);
        }
    });
}




const removeItemProduct = (id) => {
    console.log(cartNow);
    cartNow = cartNow.filter(item => {
        return item.id !== id;
    });
    setCartValuesProduct(cartNow);

    let button = getSingleButton(id);
    button.disabled = false;
    button.innerText = "Add To Cart";
}



const setCartValuesProduct = (cart) => {
    let tempTotal = 0;
    let itemsTotal = 0;
    // cart.forEach(item => {
    //     tempTotal += item.price * item.amount;
    //     itemsTotal += item.amount;
    // });
    // array cart lúc này đã có object sp người dùng vừa click
    // mỗi 1 sp trong cart or trong giỏ hàng sẽ tính toán 1 lần
    var total = cart.reduce((tempInitial, value) => {
        //tempInitial += value.price * value.amount;
        itemsTotal += value.amount;
        // return tempInitial;
        return tempInitial + value.price * value.amount;
    }, 0);
    tempTotal = total;
    new__price_total.innerText = parseFloat(tempTotal.toFixed(2));
    cart_items_product.innerText = itemsTotal;
    document.querySelector(".fee_shipping").innerText = "7$";
    tempTotal += 7;
    new__price_total_finish.innerText = tempTotal;
    if(tempTotal <= 7) {
        new__price_total_finish.innerText = 0;
    }
}



const getSingleButton = (id) => {

}




const displayProductItemsCart = (carts) => {
    let result = '';
    carts.forEach(cart => {
        var total = cart.amount * cart.price;
        console.log(total);
        result += `
            <tr>
            <td class="product__thumbnail">
            <a href="#">
                <img src="${cart.image}" alt="">
            </a>
        </td>
        <td class="product__name">
            <a href="#">${cart.title}</a>
        </td>
        <td class="product__price">
            <div class="price">
                <span class="new__price">${cart.price}$</span>
            </div>
        </td>
        <td class="product__quantity">
            <div class="input-counter">
                <div>
                    <span class="minus-btn" data-id=${cart.id}>
                        <i class="fas fa-minus"></i>
                    </span>
                    <input type="text" min="1" value=${cart.amount} max="10" class="counter-btn">
                    <span class="plus-btn" data-id=${cart.id}>
                        <i class="fas fa-plus"></i>
                    </span>
                </div>
            </div>
        </td>
        <td class="product__subtotal">
            <div class="price">
                <span class="new__price">${total}$</span>
            </div>
            <a href="#" class="remove__cart-item" data-id=${cart.id}>
                Delete
            </a>
        </td>
            </tr>
        `
    });
    product_parent.innerHTML = result;
}



document.addEventListener("DOMContentLoaded", () => {
    var carts = getProductCart();
    cartNow = carts;




    // var carts = getProductCart();
    // cartNow = carts;
    //console.log(carts);
    //addCartItem(carts);
    displayProductItemsCart(cartNow);




    setCartValuesProduct(cartNow);




    const proceed_checkout = document.querySelector(".proceed_checkout");
    proceed_checkout.addEventListener("click", (e) => {
        confirm("Evolving Functions!!!");
    });




    //cart_items_product.innerText = localStorage.getItem("amount");



    console.log(localStorage.getItem("total"));
    //var price = parseInt(localStorage.getItem("total"));
    // new__price_total.innerText = `${price}$`;
    //setCartValuesProduct(cartNow);




    cartLogicProduct();
});
const getProductCart = () => {
    let productCart = JSON.parse(localStorage.getItem("cart"));
    return productCart;
}