import "./styles.scss";

var list = document.getElementById("top");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
