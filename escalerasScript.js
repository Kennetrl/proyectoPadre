//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'Escalera 1',
    price: 120,
    image: './escalerasImagenes/1Escalera.jpeg',
});
productList.push({
    name: 'Escalera 2',
    price: 120,
    image: './escalerasImagenes/2Escalera.jpeg',
});
productList.push({
    name: 'Escalera 3',
    price: 120,
    image: './escalerasImagenes/3Escalera.jpeg',
});
productList.push({
    name: 'Escalera 4',
    price: 120,
    image: './escalerasImagenes/4Escalera.jpeg',
});
productList.push({
    name: 'Pasamanos 1',
    price: 120,
    image: './escalerasImagenes/1Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 2',
    price: 120,
    image: './escalerasImagenes/2Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 3',
    price: 120,
    image: './escalerasImagenes/3Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 4',
    price: 120,
    image: './escalerasImagenes/4Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 5',
    price: 120,
    image: './escalerasImagenes/5Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 6',
    price: 120,
    image: './escalerasImagenes/6Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 7',
    price: 120,
    image: './escalerasImagenes/7Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 8',
    price: 120,
    image: './escalerasImagenes/8Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 9',
    price: 120,
    image: './escalerasImagenes/9Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 10',
    price: 120,
    image: './escalerasImagenes/10Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 11',
    price: 120,
    image: './escalerasImagenes/11Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 12',
    price: 120,
    image: './escalerasImagenes/12Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 13',
    price: 120,
    image: './escalerasImagenes/13Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 14',
    price: 120,
    image: './escalerasImagenes/14Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 15',
    price: 120,
    image: './escalerasImagenes/15Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 16',
    price: 120,
    image: './escalerasImagenes/16Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 17',
    price: 120,
    image: './escalerasImagenes/17Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 18',
    price: 120,
    image: './escalerasImagenes/18Pasamanos.jpeg',
});
productList.push({
    name: 'Pasamanos 19',
    price: 120,
    image: './escalerasImagenes/19Pasamanos.jpeg',
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
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593983252717&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20escaleras-pasamanos%20y%20quer%C3%ADa%20saber%20sobre...');
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