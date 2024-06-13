import './styles.css'
import Home from './home.js';
import Menu from './menu.js';

const TabBar = { 
    home: "home",
    menu: "menu",
    about: "about"
};
let activeTab = TabBar.home;

const didClickButton = (event) => {
    const buttonName = event.target.name;
    switchTab(buttonName);
};

const buttonPrimaryClass = "button-primary";
const buttonTertiaryClass = "button-tertiary";

const switchTab = (buttonName) => { 
    let pageNode;
    if (buttonName === "home") {
        activeTab = TabBar.home;
        pageNode = Home();
    } else if (buttonName === "menu") {
        activeTab = TabBar.menu;
        pageNode = Menu();
    } else if (buttonName === "about") {
        activeTab = TabBar.about;
    }

    makeActiveButton(buttonName);
    clearContent();

    if (pageNode !== undefined) {
        document.querySelector("#content").appendChild(pageNode);
    }
}

const makeActiveButton = (buttonName) => {
    document.querySelectorAll(".button").forEach((button) => {
        button.classList.remove(buttonPrimaryClass);
        button.classList.remove(buttonTertiaryClass);
        
        if(button.name === buttonName) {
            button.classList.add(buttonPrimaryClass);
        } else {
            button.classList.add(buttonTertiaryClass);
        }
    });
};

const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

document.querySelectorAll(".button").forEach((button) => button.addEventListener("click", didClickButton));
clearContent();
document.querySelector("#content").appendChild(Home());