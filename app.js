"use strict "
fetch("https://fakestoreapi.com/").then((res) => {
    if (!res.ok) throw new Error("Something went wrong!"); return res.json();
}).then((data) => { console.log(data); }).catch((error) => { console.log(error.message); });

// CRUD
const productsContainer = document.querySelector('.productsContainer');
fetch("https://dummyjson.com/products")
    .then((res) => {
        if (!res.ok) throw new Error("An error occurred");
        return res.json();
    })
    .then((data) => {
        renderData(data.products);
    })
    .catch((error) => {
        renderError(error.message);
    });

function renderData(products) {
    products.forEach((product) => {
        const template = `<div><h1>${product.id}</h1><h2>${product.title}</h2><p>$${product.price}</p></div>`;
        productsContainer.insertAdjacentHTML("beforeend", template);
    });
}

function renderError(message) {
    const el = document.createElement("p");
    el.textContent = message;
    productsContainer.append(el);
}
