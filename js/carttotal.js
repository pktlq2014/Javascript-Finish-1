const product_parent = document.querySelector(".product_parent");



const cartLogicProduct = () => {
    product_parent.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove__cart-item")) {
            console.log("|||123");
            let removeItem = event.target;
            let id = removeItem.dataset.id;
            product_parent.removeChild(removeItem.parentElement.parentElement);
            this.removeItemProduct(id);
        }
    });
}




const removeItemProduct = (id) => {
    var cart = getProductCart();
    console.log(cart);
    cart = cart.filter(item => {
        return item.id !== id;
    });
    let button = getSingleButton(id);
    button.disabled = false;
    button.innerText = "Add To Cart";
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
    const proceed_checkout = document.querySelector(".proceed_checkout");
    proceed_checkout.addEventListener("click", (e) => {
        confirm("Evolving Functions!!!");
    });




    document.querySelector(".cart-items").innerText = localStorage.getItem("amount");



    console.log(localStorage.getItem("total"));
    var price = parseInt(localStorage.getItem("total"));
    document.querySelector(".new__price_total").innerText = `${price}$`;



    document.querySelector(".fee_shipping").innerText = "7$";



    price += 7;
    document.querySelector(".new__price_total_finish").innerText = `${price}$`;



    var carts = getProductCart();
    console.log(carts);
    //addCartItem(carts);
    displayProductItemsCart(carts);
    cartLogicProduct();
});
const getProductCart = () => {
    let productCart = JSON.parse(localStorage.getItem("cart"));
    return productCart;
}