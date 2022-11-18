//Añadir elementos
const productList = [];
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

/*
    <div class="unidad">
                <img src="./puertasImagenes/10puerta.jpeg" alt="Imagen Puerta" class="imagenesPuertas">
                <h3>PUERTA EJEMPLO 1</h3>
                <div class="ordenar">
                    <p>$210.00</p>
                    <img src="./icons/whatsapp.png" alt="whatsappIcon" class="whatsappIcon">
                </div>
            </div>
    */
for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('unidad');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('ordenar');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productPrice.innerText = product.name;

    productInfo.appendChild(productInfoDiv);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);


}