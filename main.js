let shop = document.getElementById("shop");
let shopItemsData = [{
    id:"cassss",
    name:"Casual Shirt",
    price: 45,
    desc: "Casual shirt to go out and look at trees or something",
    img : "images/img-1.jpg"
},
{ id:"offff",
    name:"Office Shirt",
    price: 100,
    desc: "Office shirt for work, you know the official look.",
    img : "images/img-2.jpg"
},
{ id:"tshiii",
    name:"T-Shirt",
    price: 25,
    desc: "Cool T-shirt for random events like buying milo or something.",
    img : "images/img-3.jpg"
},
{ id:"menssss",
    name:"Mens Suit",
    price: 300,
    desc: "A cool shirt that proves you are a man. So get it and prove it.",
    img : "images/img-4.jpg"
}

]

let generateShop = ()=>{

    return (shop.innerHTML = shopItemsData.map((dataItems)=>{
        let {id, price, img, desc, name} = dataItems;
        return  `
     <div id = product-id-${id} class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    `
    }).join(""));
};
generateShop();