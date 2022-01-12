import name from "./name";
import surname from "./surname";
import "./css/style.css";

let fullname = document.getElementById("return");
let button = document.getElementById("fullname");

button.addEventListener("click", () => {
  fullname.innerText = name() + " " + surname();
});
