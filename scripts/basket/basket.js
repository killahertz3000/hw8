"use strict"

const basketCounterEl = document.querySelector(".card_desc span");
const basketEl = document.querySelector(".card_menu");
const openBasketBtn = document.querySelector(".basket_flex");
const basketTotalEl = document.querySelector(".card_menu");
const basketTotalValueEl = document.querySelector(".basketTotalValue");

openBasketBtn.addEventListener("click", function () {
    basketEl.classList.toggle("hidden");
});

let basket = {};

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductsCount(productId);
        calculateTotalPrice(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

function renderNewProductInBasket(productId) {
    let productCardItem = `
                        <div class="card_item">
                            <div class="card_foto"> <a href="#"><img src="${pathToProductsImages}/${products.image}" alt="${products[productId].name}"></a>
                            </div>
                            <div class="card_desc">
                                <p class="card_txt_b">${products[productId].description}</p>
                                <img src="img/______1824.png" alt="stars">
                                <p class="card_txt_p"><span data-productId="${productId}">${products[productId]}</span> x ${products[productId].price}</p>
                            </div>
                            <div class="card_button">
                                <i class="fas fa-times-circle"></i>
                            </div>
                        </div>
                        <hr class="card_hr">
                        <div class="total_price">
                            <div class="total">total
                            </div>
                            <div class="total basketTotal basketTotalValue">$0
                            </div>
                        </div>
    `;
    basketTotalEl.insertAdjacentHTML("afterbegin", productCardItem);
}

function increaseProductsCount(productId) {
    let productsCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productsCountEl.textContent++;
}

function calculateTotalPrice(productId) {
    let totalPrice = 0;
    for (let productId in basket) {
        totalPrice += basket[productId] * products[productId].price;
    }
    basketTotalValueEl.textContent = totalPrice.toFixed(2);
}

function addProductIntoBasket(productId) {
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateTotalPrice(productId)
}
