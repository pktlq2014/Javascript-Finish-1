let cartWatch = [];
const product__btn_product = document.querySelector(".product__btn_product");






const getBagButtonsCart = () => {
    product__btn_product.addEventListener("click", event => {
        //event.target.innerText = "In Cart";
        // khi users click vào sản phẩm này 
        // nghĩa là sản phẩm này sẽ được thêm vào trong giỏ hàng
        // thì sau đó user sẽ không thể thêm sp này vào 
        // giỏ hàng được nữa, vì vậy phải vô hiệu
        // hóa cái button của sản phẩm này sau khi 
        // thêm vào giỏ hàng xong
        //event.target.disabled = true;


        // get product from products
        // let cartItem = Storage.getProduct(id);
        // mỗi lần người dùng click vào 1 sp
        // sẽ lấy ra được 1 object sản phẩm người
        // dùng vừa click vào từ 8 object sản phẩm
        // trên storage, thêm vào 1 thuộc tính mới
        // lấy ra được 1 object sp lấy từ storage về thông qua id
        //var cartItem = ;
        console.log("test 9: ");
        //console.log(cartItem);
        // add product to the cart
        // cart lúc này vẫn đang là rỗng (tính từ giỏ hàng đang là 0)
        // đưa cái object sp người dùng vừa click vào array cart
        //cart = [...cart, cartItem];
        //cartWatch.push(cartItem);
        var cart = JSON.parse(localStorage.getItem("cart"));
        //cart.push(JSON.parse(localStorage.getItem("watch_product")));
        var cart1 = cart.concat(JSON.parse(localStorage.getItem("watch_product")));
        // save cart in local storage
        // mỗi lần như vậy sẽ lưu 1 object sp người dùng
        // vừa click lên storage
        // lưu lên store để khi refresh lại
        // lấy dữ liệu giỏ hàng từ store về
        // để lưu lại sản phẩm mà người dùng
        // đã thêm vào giỏ hàng
        saveCartWatch(cart1);
        // set cart values
        setCartValuesWatch(cart1);
        // display cart item
        // để vào đây mỗi lần 1 object sp
        // mà người dùng vừa thêm vào giỏ hàng 
        // mỗi lần người dùng click thêm sp vào
        // giỏ hàng, nó sẽ tạo ra 1 thẻ div
        // sau đó thêm vào làm con của cart-content
        //addCartItem(cartItem);
        // show the cart
        // this.showCart();
    });
}




// item này chứa array các object sản phẩm mà người dùng vừa click
setCartValuesWatch = (item) => {
    // thằng này là tổng tiền all sp
    var itemsTotal = 0;
    // thằng này là tổng số lượng hiển thị trong giỏ hàng
    var tempTotal = 0;
    // cart.forEach(item => {
    //     tempTotal += item.price * item.amount;
    //     itemsTotal += item.amount;
    // });
    // array cart lúc này đã có object sp người dùng vừa click
    // mỗi 1 sp trong cart or trong giỏ hàng sẽ tính toán 1 lần
    var total = item.reduce((tempInitial, value) => {
        //tempInitial += value.price * value.amount;
        itemsTotal += value.amount;
        // return tempInitial;
        return tempInitial + value.price * value.amount;
    }, 0);
    tempTotal = total;
    console.log(itemsTotal);
    // tổng số lương all sp hiển thị trong giỏ hàng t in ra nè
    cart_items.innerText = itemsTotal;
    saveProductsAmountWatch(itemsTotal);
    //console.log(parseFloat(tempTotal.toFix(2)));
    saveProductsTotalWatch(parseFloat(tempTotal.toFixed(2)));
}




// const getProductWatch = () => {
//     // lấy hết all object sp về từ storage
//     // sau đó parse về dạng JSON
//     let products = JSON.parse(localStorage.getItem("watch_product"));
//     return products;
// }
// array cart lúc này chứa các object mà người dùng vừa click
// lưu lên storage các object sản phẩm mà người dùng vừa click or mua
const saveCartWatch = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const saveProductsAmountWatch = (amount) => {
    localStorage.setItem("amount", JSON.stringify(amount));
}
const saveProductsTotalWatch = (total) => {
    localStorage.setItem("total", JSON.stringify(total));
  }




document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cart-items").innerText = localStorage.getItem("amount");
    getBagButtonsCart();
});