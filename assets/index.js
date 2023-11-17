const customers = document.getElementById("customers");
const cartButton = document.querySelector('.cartButton')

axios.get('https://dummyjson.com/products')
.then(res => {
    db = res.data.products;
    console.log(db);
    db.filter((item) => {
        let card = document.createElement('div');
        card.className = "cardBox";
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="">
            <div class="cardTextBox">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.price} $</p>
            </div>
            <button onclick="addToCart(${item.id})">Add to cart</button>
        `;
        customers.appendChild(card);
    });
});


function addToCart(productIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(db.find(item => item.id === productIndex));
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartCount()
}

function displayCartCount () {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping" style="font-size: 20px;"></i><p class="cartCount">${cart.length}</p>`
}

window.onload = () => {
    displayCartCount()
}

















// const form = document.getElementById('form');
// const inp = document.getElementById('inp');
// const btn = document.getElementById('btn');
// const productsDiv = document.getElementById('productsDiv');

// fetch('https://dummyjson.com/products/2')
//   .then((res) => res.json())
//   .then((data) => {
//     data.products.forEach((item) => {
        
//       const img1 = document.createElement('img');
//       const h3 = document.createElement('h3');
//       const h5 = document.createElement('h5');
//       const h2 = document.createElement('h2');
      
//       img1.src = item.thumbnail;
//       h3.textContent = item.title;
//       h5.textContent = item.brand;
//       h2.textContent = item.price;

//       const productContainer = document.createElement('div');




       
        
//       productContainer.appendChild(img1);
//       productContainer.appendChild(h3);
//       productContainer.appendChild(h5);
//       productContainer.appendChild(h2);

//       productsDiv.appendChild(productContainer);
//     });
//   });










// function searchUser(p) {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         renderUser(data)
//     })
    
// }

// function renderUser(data) {
//     const img = document.createElement('img');
//     img.className = 'img1'
    // const p2 = document.createElement('h3');
    // const p3 = document.createElement('h5');
    // const p4 = document.createElement('h2');
//     p2.textContent = data.title;
//     p3.textContent = data.brand;
//     p4.textContent = data.price + '$';
//     img.src = data.thumbnail;
    
//     myDiv.append(img,p2,p3,p4)
// }
