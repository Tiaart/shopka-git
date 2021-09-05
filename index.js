let products =[

    {
    content: "Professional teadrinking set for every designer and developer",
    price: "$11.68",
    rating: 4.99,
    description: "Eligible for nothing :(",
    img: "image/image36.svg",
    },
    {
    content: "One string Bonsai description",
    price: "$1.25",
    rating: 4.77, 
    description: "Wordwide shifting available Buyers protection possible!",
    img: "image/image35.svg",
    },
    {
    content: "Simply best item in town to shine bright with your Nine Inch Nails",
    price: "$128.99",
    rating: 4.87,   
    description: "Eligible for Shipping To Mars or somewhere else",
    img: "image/image37.svg",
    },
    {
    content: "KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!",
    price: "$23.25",
    rating: 4.56,   
    description: "1258 bids, 359 watchers $5.95 for shipping",
    img: "image/image38.svg", 
    }
    
];

products.forEach(item => {
    let div = document.createElement("div");
div.className = "card";
div.innerHTML = `
        <img src="${item.img}" alt="35">
        <p>${item.content}</p>
        <h1>${item.price}</h1>
        <span>${item.description}</span>
        <div class="stars">
            <img src="image/Vector19.svg" alt="19">
            <img src="image/Vector19.svg" alt="19">
            <img src="image/Vector19.svg" alt="19">
            <img src="image/Vector19.svg" alt="19">
            <img src="image/Vector20.svg" alt="20">
            <span>${item.rating}</span>
            <button>
            <img src="image/Vector18.svg" alt="18">
            <span>Watch</span>
            </button>
        </div>
`
document.getElementById("product_card").append(div);
});









