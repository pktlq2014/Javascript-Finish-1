const latest_center = document.querySelector(".latest-center");
const categoryCenter = document.querySelector(".category__center");
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");
const mySearch = document.getElementById('mySearch');
//const new__price_total = document.querySelector(".new__price_total");
const cart_items = document.querySelector(".cart-items"); // đây
let cart = [];
let buttonsDOM = [];



const getProducts = async () => {
  try {
    const results = await fetch("./../data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};



var render_lists = function (lists) {
  displayProductItems(lists);
}
const displayProductItemsSearch = (products) => {
  var filterUsers = function (event) {
    var keyword = mySearch.value.toLowerCase();
    var filtered_users = products.filter(function (user) {
      user = user.title.toLowerCase();
      return user.indexOf(keyword) > -1;
    });
    render_lists(filtered_users);
  }
  mySearch.addEventListener('keyup', filterUsers);
}



const displayProductItems = (items) => {
  let result = '';
  items.forEach(product => {
    result += `
      <div class="glide__slide_products">
      <div class="product">
        <div class="product__header">
          <img src="${product.image}" alt="product">
        </div>
  
  
  
        <div class="product__footer">
          <h3>${product.title}</h3>
  
  
  
  
          <div class="product__price">
            <div class="home-product-item__price">
              <span class="home-product-item__price-old">${product.priceOld}$</span>
              <span class="home-product-item__price-current">${product.price}$</span>
            </div>
          </div>
  
  
  
  
          <div class="home-product-item__origin">
            <span class="home-product-item__brand">${product.origin}</span>
            <span class="home-product-item__origin-name">${product.category}</span>
          </div>
  
  
  
          <div class="home-product-action">
            <span class="home-product-item__like home-product-item__like--liked">
              <i class="home-product-item__like-fill fa fa-heart"></i>
              <i class="home-product-item__like-empty fa fa-heart-o"></i>
            </span>
  
  
  
  
            <div class="home-product-item__rating">
              <i class="home-product-item__start--gold fa fa-star"></i>
              <i class="home-product-item__start--gold fa fa-star"></i>
              <i class="home-product-item__start--gold fa fa-star"></i>
              <i class="home-product-item__start--gold fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
  
  
  
            <span class="home-product-item-sold">${product.sold} sold</span>
          </div>
  
  
  
  
          <button class="product__btn" data-id=${product.id}>Add To Cart</button>
        </div>
  
  
        <div class="home-product-item__favourite">
          <i class="home-product-item__favourite-icon fas fa-check-circle"></i>
          <span>favourite</span>
        </div>
  
  
  
        <div class="home-product-item__sale-off">
          <span class="home-product-item__sale-off-percent">${product.sale}%</span>
          <span class="home-product-item__sale-off-label">SALE</span>
        </div>
  
  
  
        <ul>
          <li>
            <a href="./product.html" class="watch_product" data-id=${product.id} data-tip="Quick View" data-place="left">
              <i class="fas fa-eye"></i>
            </a>
          </li>
          <li>
            <a data-tip="Add To Wishlist" data-place="left">
              <i class="fas fa-heart"></i>
            </a>
          </li>
          <li>
            <a data-tip="Add To Compare" data-place="left">
              <i class="fas fa-undo"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
      `
  });
  // có tồn tại cái class này
  if (categoryCenter) {
    categoryCenter.innerHTML = result;
  }
};



const displayProductItemsTop = (items) => {
  let result = '';
  items.forEach(item => {
    result += `
    <li class=" glide__slide_products_top">
    <div class="product product_top">
      <div class="product__header">
        <img src="${item.image}" alt="product">
      </div>



      <div class="product__footer">
        <h3>${item.title}</h3>




        <div class="product__price">
          <div class="home-product-item__price">
            <span class="home-product-item__price-old">${item.price}$</span>
            <span class="home-product-item__price-current">${item.priceOld}$</span>
          </div>
        </div>




        <div class="home-product-item__origin">
          <span class="home-product-item__brand">${item.origin}</span>
          <span class="home-product-item__origin-name">${item.category}</span>
        </div>



        <div class="home-product-action">
          <span class="home-product-item__like home-product-item__like--liked">
            <i class="home-product-item__like-fill fa fa-heart"></i>
            <i class="home-product-item__like-empty fa fa-heart-o"></i>
          </span>




          <div class="home-product-item__rating">
            <i class="home-product-item__start--gold fa fa-star"></i>
            <i class="home-product-item__start--gold fa fa-star"></i>
            <i class="home-product-item__start--gold fa fa-star"></i>
            <i class="home-product-item__start--gold fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>



          <span class="home-product-item-sold">${item.sold} sold</span>
        </div>




        <button class="product__btn" data-id=${item.id}>Add To Cart</button>
      </div>


      <div class="home-product-item__favourite">
        <i class="home-product-item__favourite-icon fas fa-check-circle"></i>
        <span>favourite</span>
      </div>



      <div class="home-product-item__sale-off">
        <span class="home-product-item__sale-off-percent">10%</span>
        <span class="home-product-item__sale-off-label">SALE</span>
      </div>



      <ul>
        <li>
          <a href="./product.html" data-tip="Quick View" data-place="left">
            <i class="fas fa-eye"></i>
          </a>
        </li>
        <li>
          <a data-tip="Add To Wishlist" data-place="left">
            <i class="fas fa-heart"></i>
          </a>
        </li>
        <li>
          <a data-tip="Add To Compare" data-place="left">
            <i class="fas fa-undo"></i>
          </a>
        </li>
      </ul>
    </div>
  </li>
    `
  });
  latest_center.innerHTML = result;
}



const displayProductItemsFilter = (products) => {
  // nếu tồn tại cái class này
  if (categoryContainer) {
    categoryContainer.addEventListener("click", async e => {
      const target = e.target.closest(".section__title");
      if (!target) return;
      // lấy dc data-id khi click vào
      const id = target.dataset.id;
      // nếu user click vào và đã lấy dc data-id
      if (id) {
        // hiển thị hiệu ứng người dùng đang chọn cái nào thôi
        // hay nói cách khác là trạng thái btn lọc
        Array.from(filterBtn).forEach(btn => {
          btn.classList.remove("active");
        });
        target.classList.add("active");

        // Load Products
        let menuCategory = products.filter(product => {
          if (product.origin === id) {
            return product;
          }
          if (product.category === id) {
            return product;
          }
          if (id === "609" && product.price < 700) {
            return product;
          }
          if (id === "701" && product.price >= 700) {
            return product;
          }
          if (id === "15" && product.sale === "15") {
            return product;
          }
        });
        // if (id === "low") {

        //   return news;
        // }
        // thêm điều kiện id = all product vì trong product k có loại all product
        if (id === "All Products") {
          displayProductItems(products);
        }
        else if (id === "low") {
          products.sort(function (a, b) {
            return a.price - b.price;
          });
          displayProductItems(products);
        }
        else if (id === "high") {
          products.sort(function (a, b) {
            return b.price - a.price;
          });
          displayProductItems(products);
        }
        else {
          displayProductItems(menuCategory);
        }
      }
    });
  }
}


const watch_product = [];
const getBagButtons = () => {
  // id của nút add to cart
  const buttons = [...document.querySelectorAll(".product__btn")];
  const buttonss = [...document.querySelectorAll(".watch_product")];
  console.log("test 5: ");
  console.log(buttons);
  buttonss.forEach(button => {
    var id = button.dataset.id;
    button.addEventListener("click", event => {
      var cartItem = { ...getProduct(id), amount: 1 };
      watch_product.push(cartItem);
      saveCartWatchProduct(watch_product);
    });
  });
  // buttonsDOM là 1 array rỗng
  // gán array chứa các class của các button này vào array rỗng
  buttonsDOM = buttons;
  setButtonsDOM(buttonsDOM);
  buttons.forEach(button => {
    // lấy ra dataset-id của 8 cái button 
    var id = button.dataset.id;
    console.log("test 6: " + id);
    // cart cũng là 1 array rỗng
    console.log("test 7: ");
    console.log(cart);
    // tìm trong cái array cart (hay nói cách khác là trong giỏ hàng) 
    // này xem có sản phẩm nào có id dataset (id của button) 
    // giống với cái id của người dùng click thêm vào giỏ hàng
    // hay không
    // nếu có thì trả về duy nhất 1 object thỏa điều kiện đầu tiên
    let inCart = cart.find(item => item.id === id);
    console.log("test 8: ");
    console.log(inCart);
    // sản phẩm đã được thêm vào giỏ hàng
    // và id của sản phẩm tồn tại
    if (inCart) {
      button.innerText = "In Cart";
      button.disabled = true;
    }
    // các sản phẩm chưa được thêm vào giỏ hàng
    // khi người dùng click vào 1 sản phẩm
    // thì đã lấy được 1 id dataset rồi
    button.addEventListener("click", event => {
      event.target.innerText = "In Cart";
      // khi users click vào sản phẩm này 
      // nghĩa là sản phẩm này sẽ được thêm vào trong giỏ hàng
      // thì sau đó user sẽ không thể thêm sp này vào 
      // giỏ hàng được nữa, vì vậy phải vô hiệu
      // hóa cái button của sản phẩm này sau khi 
      // thêm vào giỏ hàng xong
      event.target.disabled = true;


      // get product from products
      // let cartItem = Storage.getProduct(id);
      // mỗi lần người dùng click vào 1 sp
      // sẽ lấy ra được 1 object sản phẩm người
      // dùng vừa click vào từ 8 object sản phẩm
      // trên storage, thêm vào 1 thuộc tính mới
      // lấy ra được 1 object sp lấy từ storage về thông qua id
      var cartItem = { ...getProduct(id), amount: 1 };
      console.log("test 9: ");
      console.log(cartItem);
      // add product to the cart
      // cart lúc này vẫn đang là rỗng (tính từ giỏ hàng đang là 0)
      // đưa cái object sp người dùng vừa click vào array cart
      //cart = [...cart, cartItem];
      cart.push(cartItem);
      console.log("test 10: ");
      console.log(cart);
      // save cart in local storage
      // mỗi lần như vậy sẽ lưu 1 object sp người dùng
      // vừa click lên storage
      // lưu lên store để khi refresh lại
      // lấy dữ liệu giỏ hàng từ store về
      // để lưu lại sản phẩm mà người dùng
      // đã thêm vào giỏ hàng
      saveCart(cart);
      // set cart values
      setCartValues(cart);
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
  });
}



// item này chứa array các object sản phẩm mà người dùng vừa click
setCartValues = (item) => {
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
  var total = cart.reduce((tempInitial, value) => {
    //tempInitial += value.price * value.amount;
    itemsTotal += value.amount;
    // return tempInitial;
    return tempInitial + value.price * value.amount;
  }, 0);
  tempTotal = total;
  console.log(itemsTotal);
  // tổng số lương all sp hiển thị trong giỏ hàng t in ra nè
  cart_items.innerText = itemsTotal;
  saveProductsAmount(itemsTotal);
  //console.log(parseFloat(tempTotal.toFix(2)));
  saveProductsTotal(parseFloat(tempTotal.toFixed(2)));
}
/*
=============
Product Details Left
=============
 */
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;
// khi người dùng rê chuột vào
["mouseover", "touchstart"].forEach(event => {
  // 1 trong 5 ảnh
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      // slice(3) là lấy từ vị trí 3 của id trở đi
      const id = target.id.slice(3);
      console.log(id);
      changeImage(`./images/laptop${id}.jpg`, id);
    });
  }
});

// change active image
const changeImage = (imgSrc, n) => {
  // thay đổi đường dẫn của ảnh lớn
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgroundImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};

/*
=============
Product Details Bottom
=============
 */

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", e => {
    const target = e.target.closest(".detail-btn");
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      // trạng thái 3 nút lọc
      Array.from(btns).forEach(btn => {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      });
      // lần đầu tiên active nội dung (là hiện nội dung lên) 1 thằng đầu tiên (trước đó đã ẩn hết)
      // sau đó xóa hết all active trong contents đi
      // sao khi user click vào btn lọc sẽ tìm dc 1 id
      // tiến hành quét toàn bộ detail để tìm id này
      // thêm .active vào id này
      Array.from(contents).forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
// lưu các object của mỗi sản phẩm lên storage
const saveProducts = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
}
const setButtonsDOM = (buttonsDOM) => {
  localStorage.setItem("buttonsDOM", JSON.stringify(buttonsDOM));
}
const saveCartWatchProduct = (watch_product) => {
  localStorage.setItem("watch_product", JSON.stringify(watch_product));
}
const saveTotal = (totalProduct) => {
  localStorage.setItem("totalProduct", JSON.stringify(totalProduct));
}
const saveProductsTotal = (total) => {
  localStorage.setItem("total", JSON.stringify(total));
}
const saveProductsAmount = (amount) => {
  localStorage.setItem("amount", JSON.stringify(amount));
}
const getProduct = (id) => {
  // lấy hết all object sp về từ storage
  // sau đó parse về dạng JSON
  let products = JSON.parse(localStorage.getItem("products"));
  console.log("test 11: ");
  console.log(products);
  // test thử nếu không phải dạng JSON thì nó ntn :)))
  let productss = localStorage.getItem("products");
  console.log("test 12: " + productss);
  // tìm trong các object sản phẩm lấy về từ storage
  // lấy ra 1 object sản phẩm có id giống với id người dùng vừa click
  return products.find(product => product.id === id);
}
// array cart lúc này chứa các object mà người dùng vừa click
// lưu lên storage các object sản phẩm mà người dùng vừa click or mua
const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}
/*
=============
Load Category Products
=============
 */
document.addEventListener("DOMContentLoaded", () => {
  getProducts().then(products => {
    console.log("|||");
    console.log(products);
    displayProductItems(products);
    displayProductItemsTop(products);
    displayProductItemsSearch(products);
    displayProductItemsFilter(products);
    // lưu các object sản phẩm đọc từ .json lên storage
    saveProducts(products);
  }).then(() => {
    getBagButtons();
  });
});