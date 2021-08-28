//console.log(document.documentElement);
//console.log(document.body);
//console.log(document.body.children)
//console.log(document.body.children[1].children[1]);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);
//console.log(document.body.firstElementChild.nextElementSibling);
//console.log(document.body.lastElementChild.previousElementSibling);
//console.log(document.body.firstElementChild.parentElement);
let title = document.getElementById("title");
console.log(title);
//let text = document.getElementsByClassName("text");
//console.log(text);
//let li = document.getElementsByTagName("li");
//console.log(li);
let text = document.querySelectorAll(".text");
console.log(text);
let titSel = document.querySelector("#title");
console.log(titSel);
titSel.innerHTML = "<div>Hallo</>";
titSel.textContent = "Hallo JS";

console.log(titSel.hasAttribute("id"));
titSel.setAttribute("src", "test");
titSel.removeAttribute("src");
const div = document.createElement("div");
div.innerHTML = "Hello div";

//let tit = document.querySelector("#title");

//tit.onclick = function () {
//  alert("Hello world");
//};
title.addEventListener("click", function () {
    alert("hello JS");
  });
  
  title.addEventListener("click", function () {
    alert("hello React");
  });