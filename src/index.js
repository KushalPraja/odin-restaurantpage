import "./styles.css";
import odinImage from "./odin.png";
import { greeting } from "./greeting.js";

const image = new Image();
console.log(greeting);
image.src = odinImage;
   
document.body.appendChild(image);
