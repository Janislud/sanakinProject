const root = document.querySelector('#root')

const showEachProducts = (arrayOfProducts) => {
    arrayOfProducts.forEach((products) => {
        const productCard = document.createElement('div')
        productCard.classList = 'deal-wrapper'
        const title = document.createElement('h2')
        title.innerText = products.title
        const price = document.createElement('p')
        price.innerText = products.price
        const description = document.createElement('p')
        description.innerText = products.description
        const img = document.createElement('img')
        const buttonAddToCard = document.createElement('button')
        buttonAddToCard.innerText = 'Add to cart'
        buttonAddToCard.classList = 'button-add-to-card'
        img.src = products.images[0]
        productCard.append(img,title,price,description,buttonAddToCard)
        root.append(productCard)
    });
}


const fetchProducts = (callback) => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        callback(data.products);
    });
}

fetchProducts((products) => showEachProducts(products))