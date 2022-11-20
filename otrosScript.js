//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'Piso Flotante 1',
    price: 120,
    image: './otrosImagenes/1PisoFlotante.jpeg',
});
productList.push({
    name: 'Piso Flotante 2',
    price: 120,
    image: './otrosImagenes/1otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 3',
    price: 120,
    image: './otrosImagenes/2otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 4',
    price: 120,
    image: './otrosImagenes/3otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 5',
    price: 120,
    image: './otrosImagenes/4otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 6',
    price: 120,
    image: './otrosImagenes/5otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 7',
    price: 120,
    image: './otrosImagenes/6otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 8',
    price: 120,
    image: './otrosImagenes/7otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 9',
    price: 120,
    image: './otrosImagenes/8otros.jpeg',
});
productList.push({
    name: 'Piso Flotante 10',
    price: 120,
    image: './otrosImagenes/9otros.jpeg',
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
        const productLink = document.createElement('a');

        productImgCart.setAttribute('src', './icons/whatsapp.png');
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593983252717&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20Otros%20y%20quer%C3%ADa%20saber%20sobre...');
        productLink.setAttribute('target', '_blank');

    
        productInfoFigure.appendChild(productImgCart);
        
                
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productLink);
        productLink.appendChild(productInfoFigure);


        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
         cardsContainers.appendChild(productCard);
    
    }
}
renderProducts(productList);