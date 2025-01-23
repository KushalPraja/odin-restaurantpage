
import createHomePage from "./homepage.js";
import createMenuPage from "./menupage.js";
import createAboutPage from "./aboutpage.js";
import "./menupage.css";
import "./aboutpage.css"; 


createHomePage();
document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createMenuPage();
});

document.getElementById("home").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createHomePage();
}
);

document.getElementById("about").addEventListener("click", () => {
    document.getElementById("content").innerHTML = "";
    createAboutPage();
}
);


