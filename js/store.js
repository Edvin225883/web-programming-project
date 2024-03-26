const url = '../db/products.json';

fetch(url)
.then((response) => response.json())
.then((data) => {

    let output = '';

    data.forEach(product => {
        output += '<div class="item"><img src="../assets/kasnije/4070ti.jpg" alt=""><p id="name">' + product.name + '</p><p id="price">' + product.price + '</p><div class="buttons"><button id="more-b">See More</button><button id="add-b"><img src="../assets/home/icons/addcart.jpg" alt=""></button></div></div>';
        
    });
    
    const itemsGrid = document.querySelector(".items-grid");
    itemsGrid.innerHTML = output;

}).catch((error) => console.log("Error"));