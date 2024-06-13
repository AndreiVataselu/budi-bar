import budiImageSrc from './resources/budi.png';

const budiDescription = "Meet Budi, our extraordinary owner with a heartwarming story and a passion for bananas! Rescued from dire circumstances, Budi now thrives as the proud owner of his very own Banana Bar. Here, he delights visitors with his creative and delicious banana-based recipes. From banana smoothies to gourmet banana splits, Budi's culinary skills and charming personality make every visit a delightful experience. Come say hello to Budi and taste the magic of his banana creations!";

export default function About() { 
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";

    const budiContainerDiv = document.createElement("div");
    budiContainerDiv.className = "budi-container";

    const budiImg = document.createElement("img");
    budiImg.src = budiImageSrc;
    budiImg.width = "200px";
    budiImg.height = "200px";
    budiImg.alt = "Budi";
    budiImg.id = "budi";
    budiContainerDiv.appendChild(budiImg);

    const budiP = document.createElement("p");
    budiP.innerText = "Budi";
    budiContainerDiv.appendChild(budiP);
    aboutDiv.appendChild(budiContainerDiv);

    const budiDescriptionP = document.createElement("p");
    budiDescriptionP.id = "budi-description";
    budiDescriptionP.innerText = budiDescription;
    aboutDiv.appendChild(budiDescriptionP);

    return aboutDiv;
}