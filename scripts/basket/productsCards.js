"use strict"

const pathToImages = "img";
const pathToProductsImages = `${pathToImages}/catalog`;
const itemBoxEl = document.querySelector(".item_box");

function getProductsMarkup(product) {
    return `
                <div class="item">
                    <a class="item_link" href="single_page.html">
                        <img class="item_img" src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                        <div class="txt_box">
                            <h3 class="item_desc">${product.description}</h3>
                            <p class="item_price">${product.price}</p>
                        </div>
                    </a>
                    <div class="add_box" data-productId="${product.id}" >
                        <a class="add" href="#">
                            <img src="img/forma_1_copy_1287.png" alt="cart">
                            <p class="add_txt">Add to Cart</p>
                        </a>
                    </div>
                </div>
    `;
}


function insertProductsIntoPage(products, itemBoxEl) {
    let productsMarkup = "";
    for (let product of products) {
        productsMarkup += getProductsMarkup(product);
    }
    itemBoxEl.insertAdjacentHTML("afterbegin", productsMarkup);
}

function addEventListenerForAddToCardBox() {
    const addToCardBox = document.querySelectorAll(".add_box[data-productId]");
    addToCardBox.forEach(function (button) {
        button.addEventListener("click", addedProductHandler);
    });
}

function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute("data-productId");
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, itemBoxEl);
addEventListenerForAddToCardBox();
