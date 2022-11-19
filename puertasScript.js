//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'Puerta1',
    price: 120,
    image: './puertasImagenes/10puerta.jpeg',
});
productList.push({
    name: 'Puerta2',
    price: 125,
    image: './puertasImagenes/2puerta.jpeg',
});
productList.push({
    name: 'Puerta3',
    price: 100,
    image: './puertasImagenes/3puerta.jpeg',
});
productList.push({
    name: 'Puerta3',
    price: 100,
    image: './puertasImagenes/3puerta.jpeg',
});
productList.push({
    name: 'Puerta3',
    price: 100,
    image: './puertasImagenes/3puerta.jpeg',
});
productList.push({
    name: 'Puerta3',
    price: 100,
    image: './puertasImagenes/3puerta.jpeg',
});
//Función para mostrar las lista
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
                
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
                
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
                
        const productInfoDiv = document.createElement('div');
                
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
                
        const productName = document.createElement('p');
        productName.innerText = product.name;
                
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/whatsapp.png');
    
        productInfoFigure.appendChild(productImgCart);
                
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
         cardsContainers.appendChild(productCard);
    
    }
}
renderProducts(productList);