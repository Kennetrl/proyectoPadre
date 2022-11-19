//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'Puerta N1',
    price: 120,
    image: './puertasImagenes/1puerta.jpeg',
});
productList.push({
    name: 'Puerta N2',
    price: 120,
    image: './puertasImagenes/2puerta.jpeg',
});
productList.push({
    name: 'Puerta N3',
    price: 120,
    image: './puertasImagenes/3puerta.jpeg',
});
productList.push({
    name: 'Puerta N4',
    price: 120,
    image: './puertasImagenes/4puerta.jpeg',
});
productList.push({
    name: 'Puerta N5',
    price: 120,
    image: './puertasImagenes/5puerta.jpeg',
});
productList.push({
    name: 'Puerta N6',
    price: 120,
    image: './puertasImagenes/6puerta.jpeg',
});
productList.push({
    name: 'Puerta N7',
    price: 120,
    image: './puertasImagenes/7puerta.jpeg',
});
productList.push({
    name: 'Puerta N8',
    price: 120,
    image: './puertasImagenes/8puerta.jpeg',
});
productList.push({
    name: 'Puerta N9',
    price: 120,
    image: './puertasImagenes/9puerta.jpeg',
});
productList.push({
    name: 'Puerta N10',
    price: 120,
    image: './puertasImagenes/10puerta.jpeg',
});
productList.push({
    name: 'Puerta N11',
    price: 120,
    image: './puertasImagenes/11puerta.jpeg',
});
productList.push({
    name: 'Puerta N12',
    price: 120,
    image: './puertasImagenes/12puerta.jpeg',
});
productList.push({
    name: 'Puerta 13',
    price: 120,
    image: './puertasImagenes/13puerta.jpeg',
});
productList.push({
    name: 'Puerta N14',
    price: 120,
    image: './puertasImagenes/14puerta.jpeg',
});
productList.push({
    name: 'Puerta 15',
    price: 120,
    image: './puertasImagenes/15puerta.jpeg',
});
productList.push({
    name: 'Puerta 16',
    price: 120,
    image: './puertasImagenes/1puerta.jpeg',
});
productList.push({
    name: 'Puerta1',
    price: 120,
    image: './puertasImagenes/16puerta.jpeg',
});
productList.push({
    name: 'Puerta N17',
    price: 120,
    image: './puertasImagenes/17puerta.jpeg',
});
productList.push({
    name: 'Puerta N18',
    price: 120,
    image: './puertasImagenes/18puerta.jpeg',
});
productList.push({
    name: 'Puerta N19',
    price: 120,
    image: './puertasImagenes/19puerta.jpeg',
});
productList.push({
    name: 'Puerta N20',
    price: 120,
    image: './puertasImagenes/20puerta.jpeg',
});
productList.push({
    name: 'Puerta N21',
    price: 120,
    image: './puertasImagenes/21puerta.jpeg',
});
productList.push({
    name: 'Puerta N22',
    price: 120,
    image: './puertasImagenes/22puerta.jpeg',
});
productList.push({
    name: 'Puerta N23',
    price: 120,
    image: './puertasImagenes/23puerta.jpeg',
});
productList.push({
    name: 'Puerta N24',
    price: 120,
    image: './puertasImagenes/24puerta.jpeg',
});
productList.push({
    name: 'Puerta N25',
    price: 120,
    image: './puertasImagenes/25puerta.jpeg',
});
productList.push({
    name: 'Puerta N26',
    price: 120,
    image: './puertasImagenes/26puerta.jpeg',
});
productList.push({
    name: 'Puerta N27',
    price: 120,
    image: './puertasImagenes/27puerta.jpeg',
});
productList.push({
    name: 'Puerta N28',
    price: 120,
    image: './puertasImagenes/28puerta.jpeg',
});
productList.push({
    name: 'Puerta N29',
    price: 120,
    image: './puertasImagenes/29puerta.jpeg',
});
productList.push({
    name: 'Puerta N30',
    price: 120,
    image: './puertasImagenes/30puerta.jpeg',
});
productList.push({
    name: 'Puerta N31',
    price: 120,
    image: './puertasImagenes/31puerta.jpeg',
});
productList.push({
    name: 'Puerta N32',
    price: 120,
    image: './puertasImagenes/32puerta.jpeg',
});
productList.push({
    name: 'Puerta N33',
    price: 120,
    image: './puertasImagenes/33puerta.jpeg',
});
productList.push({
    name: 'Puerta N34',
    price: 120,
    image: './puertasImagenes/34puerta.jpeg',
});
productList.push({
    name: 'Puerta N35',
    price: 120,
    image: './puertasImagenes/35puerta.jpeg',
});
productList.push({
    name: 'Puerta N36',
    price: 120,
    image: './puertasImagenes/36puerta.jpeg',
});
productList.push({
    name: 'Puerta N37',
    price: 120,
    image: './puertasImagenes/37puerta.jpeg',
});
productList.push({
    name: 'Puerta N38',
    price: 120,
    image: './puertasImagenes/38puerta.jpeg',
});
productList.push({
    name: 'Puerta N39',
    price: 120,
    image: './puertasImagenes/39puerta.jpeg',
});
productList.push({
    name: 'Puerta N40',
    price: 120,
    image: './puertasImagenes/40puerta.jpeg',
});
productList.push({
    name: 'Puerta N41',
    price: 120,
    image: './puertasImagenes/41puerta.jpeg',
});
productList.push({
    name: 'Puerta N42',
    price: 120,
    image: './puertasImagenes/42puerta.jpeg',
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
        productLink.setAttribute('href', 'https://api.whatsapp.com/send?phone=+593983252717&text=Hola,%20vengo%20de%20la%20p%C3%A1gina%20web%20HIERRO,%20ACERO%20Y%20ALUMINIO%20EC,%20en%20la%20secci%C3%B3n%20de%20puertas%20y%20quer%C3%ADa%20saber%20sobre...');
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