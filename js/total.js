const product_parent = document.querySelector(".product_parent");



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
            <br><br>
            <small>White/6.25</small>
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
                <i class="fas fa-trash-alt"></i>
            </a>
        </td>
            </tr>
        `
    });
    product_parent.innerHTML = result;
}



document.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.getItem("total"));
    document.querySelector(".new__price_total").innerText = localStorage.getItem("total");



    var carts = getProductCart();
    console.log(carts);
    //addCartItem(carts);
    displayProductItemsCart(carts);
});
const getProductCart = () => {
    let productCart = JSON.parse(localStorage.getItem("cart"));
    return productCart;
}