//Añadir elementos
const cardsContainers = document.querySelector('.cards-container');
const productList = [];

//Lisa de los elementos
productList.push({
    name: 'N1 - Puerta con tol perforado',
    price: 180,
    image: './puertasImagenes/1puerta.jpeg',
});
productList.push({
    name: 'N2 - Puerta con tol galvanizado',
    price: 160,
    image: './puertasImagenes/2puerta.jpeg',
});
productList.push({
    name: 'N3 - Puerta de Garage',
    price: 550,
    image: './puertasImagenes/3puerta.jpeg',
});
productList.push({
    name: 'N4 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/4puerta.jpeg',
});
productList.push({
    name: 'N5 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/5puerta.jpeg',
});
productList.push({
    name: 'N6 - Puerta corrediza de aluminio sencilla',
    price: 220,
    image: './puertasImagenes/6puerta.jpeg',
});
productList.push({
    name: 'N7 - Puerta de garage con alucobond',
    price: 550,
    image: './puertasImagenes/7puerta.jpeg',
});
productList.push({
    name: 'N8 - Cubre-puerta',
    price: 180,
    image: './puertasImagenes/8puerta.jpeg',
});

productList.push({
    name: 'N11 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/11puerta.jpeg',
});
productList.push({
    name: 'N12 - Puerta batiente',
    price: 220,
    image: './puertasImagenes/12puerta.jpeg',
});
productList.push({
    name: 'N14 - Puerta de Garage',
    price: 500,
    image: './puertasImagenes/14puerta.jpeg',
});
productList.push({
    name: 'N15 - Puerta mixta',
    price: 240,
    image: './puertasImagenes/15puerta.jpeg',
});
productList.push({
    name: 'N16 - Puerta batiente de aluminio',
    price: 180,
    image: './puertasImagenes/16puerta.jpeg',
});
productList.push({
    name: 'N17 - Puerta de garage',
    price: 550,
    image: './puertasImagenes/17puerta.jpeg',
});
productList.push({
    name: 'N22 - Puerta de garage',
    price: 550,
    image: './puertasImagenes/22puerta.jpeg',
});
productList.push({
    name: 'N23 - Puerta lanford',
    price: 280,
    image: './puertasImagenes/23puerta.jpeg',
});
productList.push({
    name: 'N25 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/25puerta.jpeg',
});
productList.push({
    name: 'N28 - Cubre-puerta',
    price: 150,
    image: './puertasImagenes/28puerta.jpeg',
});
productList.push({
    name: 'N29 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/29puerta.jpeg',
});
productList.push({
    name: 'N30 - Puerta de tol',
    price: 180,
    image: './puertasImagenes/30puerta.jpeg',
});
productList.push({
    name: 'N31 - Puerta de tol',
    price: 180,
    image: './puertasImagenes/31puerta.jpeg',
});
productList.push({
    name: 'N32 - Puerta de tol',
    price: 160,
    image: './puertasImagenes/32puerta.jpeg',
});
productList.push({
    name: 'N33 - Cubre-puerta',
    price: 160,
    image: './puertasImagenes/33puerta.jpeg',
});
productList.push({
    name: 'N34 - Puerta de garage',
    price: 550,
    image: './puertasImagenes/34puerta.jpeg',
});
productList.push({
    name: 'N35 - Puerta de garage',
    price: 550,
    image: './puertasImagenes/35puerta.jpeg',
});
productList.push({
    name: 'N36 - Puerta peatonal',
    price: 160,
    image: './puertasImagenes/36puerta.jpeg',
});
productList.push({
    name: 'N37 - Puerta mixta',
    price: 240,
    image: './puertasImagenes/37puerta.jpeg',
});
productList.push({
    name: 'N38 - Puerta tamborada de tol',
    price: 250,
    image: './puertasImagenes/38puerta.jpeg',
});
productList.push({
    name: 'N40 - Cubre-puerta',
    price: 150,
    image: './puertasImagenes/40puerta.jpeg',
});
productList.push({
    name: 'N41 - Puerta lanford',
    price: 280,
    image: './puertasImagenes/41puerta.jpeg',
});
productList.push({
    name: 'N42 - Cubre-puerta',
    price: 150,
    image: './puertasImagenes/42puerta.jpeg',
});
productList.push({
    name: 'N43 - Puerta de Vidrio',
    price: 0,
    image: './puertasImagenes/43puerta.jpeg',
});
productList.push({
    name: 'N44 - Puerta metálica peatonal tipo madera',
    price: 0,
    image: './puertasImagenes/44puerta.jpeg',
});
productList.push({
    name: 'N45 - Puerta metálica peatonal tipo madera',
    price: 0,
    image: './puertasImagenes/45puerta.jpeg',
});
productList.push({
    name: 'N46 - Puerta metálica de garaje',
    price: 0,
    image: './puertasImagenes/46puerta.jpeg',
});
productList.push({
    name: 'N47 - Puerta metálica tamborada o blindada',
    price: 0,
    image: './puertasImagenes/47puerta.jpeg',
});
productList.push({
    name: 'N48 - Puerta metálica de garaje tipo madera',
    price: 0,
    image: './puertasImagenes/48puerta.jpeg',
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