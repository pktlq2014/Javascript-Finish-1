const latest_center = document.querySelector(".latest-center");
const categoryCenter = document.querySelector(".category__center");
const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");
const mySearch = document.getElementById('mySearch');



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
/*
=============
Load Category Products
=============
 */
document.addEventListener("DOMContentLoaded", () => {
  getProducts().then(products => {
    console.log(products);
    displayProductItems(products);
    displayProductItemsTop(products);
    displayProductItemsSearch(products);
    displayProductItemsFilter(products);
  }).then(() => {

  });
});



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
  let displayProduct = items.map(product =>
    ` 
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




        <a><button type="submit" class="product__btn">Add To Cart</button></a>
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
          <a data-tip="Quick View" data-place="left">
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
  );

  displayProduct = displayProduct.join("");
  // có tồn tại cái class này
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
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




        <a><button type="submit" class="product__btn">Add To Cart</button></a>
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
          <a data-tip="Quick View" data-place="left">
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



/*
=============
Filtering
=============
 */
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
      changeImage(`./images/products/iPhone/iphone${id}.jpeg`, id);
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