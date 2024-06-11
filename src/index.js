import './styles.css'

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
    if (buttonName === "home") {
        activeTab = TabBar.home;
    } else if (buttonName === "menu") {
        activeTab = TabBar.menu;
    } else if (buttonName === "about") {
        activeTab = TabBar.about;
    }

    makeActiveButton(buttonName);
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

document.querySelectorAll(".button").forEach((button) => button.addEventListener("click", didClickButton));