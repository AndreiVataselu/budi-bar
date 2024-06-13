
import bananaBreadImage from './resources/banana-bread.png';
import tropicalSmoothieImage from './resources/tropical-smoothie.png';
import bananaStackImage from './resources/banana-stack.png';
import bananaNutMuffinImage from './resources/banana-nut-mufin.png';
import bananaCrepeImage from './resources/banana-crepe.png';

class Product {
    constructor(imageSrc, title, description, price) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    get formattedPrice() { 
        return `$${this.price}`;
    }
}

const ProductCard = (product) => { 
    const productCardDiv = document.createElement("div");
    productCardDiv.className = "product-card";

    const productImg = document.createElement("img");
    productImg.src = product.imageSrc;
    productImg.width = "200px";
    productImg.height = "200px";
    productImg.alt = `Image of ${product.title}`;
    productCardDiv.appendChild(productImg);

    const productDetailsContainerDiv = document.createElement("div");
    productDetailsContainerDiv.className = "product-details-container";

    const wrapperDiv = document.createElement("div");

    const productTitleP = document.createElement("p");
    productTitleP.className = "product-title";
    productTitleP.innerText = product.title;
    wrapperDiv.appendChild(productTitleP);

    const productDescriptionP = document.createElement("p");
    productDescriptionP.className = "product-description";
    productDescriptionP.innerText = product.description;
    wrapperDiv.appendChild(productDescriptionP);

    productDetailsContainerDiv.appendChild(wrapperDiv);

    const priceP = document.createElement("p");
    priceP.className = "price";
    priceP.innerText = product.formattedPrice;
    productDetailsContainerDiv.appendChild(priceP);

    productCardDiv.appendChild(productDetailsContainerDiv);
    return productCardDiv;
};

const productsMock = [ 
    new Product(
        bananaBreadImage,
        "Budi's Famous Banana Bread",
        "Made with fresh bananas harvested every morning by Budi himself. We recommend you try this delight with a cup of Tropical Banana Smoothie.",
        "3.99"
    ),
    new Product(
        tropicalSmoothieImage,
        "Tropical Banana Smoothie",
        "A refreshing blend of ripe bananas, coconut milk, and a hint of pineapple, perfect for a hot day.",
        "4.50"
    ),
    new Product(
        bananaStackImage,
        "Banana Pancake Stack",
        "Fluffy pancakes layered with sliced bananas and drizzled with maple syrup. Served with a dollop of whipped cream.",
        "5.99"
    ),
    new Product(
        bananaNutMuffinImage,
        "Banana Nut Muffins",
        "Deliciously moist muffins loaded with bananas and crunchy walnuts, baked to perfection.",
        "2.99"
    ),
    new Product(
        bananaCrepeImage,
        "Choco-Banana Sundae",
        "Thin crepes filled with caramelized bananas and served with a scoop of vanilla ice cream.",
        "7.50"
    )
];

export default function Menu() {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    productsMock
    .map((product) => ProductCard(product))
    .forEach((productCardDiv) => menuDiv.appendChild(productCardDiv));
    return menuDiv;
}