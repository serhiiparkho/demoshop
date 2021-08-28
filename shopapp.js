let productsCntrEl = document.querySelector(".products-cntr");
let addToCartBtns = document.querySelectorAll(".cart-btn");

addToCartBtns.forEach( (item) =>
item.addEventListener("click", function () {
    productsCntrEl.textContent = +productsCntrEl.textContent + 1;
})
);


let likeBtns = document.querySelectorAll(".fav-btn");

likeBtns.forEach((btn) => 
btn.addEventListener("click", function() {
       btn.classList.toggle("liked");
      }
 ));

// ===============  modal window ================================

 let moreDetBtns = document.querySelectorAll(".detales-btn");
 let modal = document.querySelector(".modal");
 let btnClose = document.querySelector(".btn-close");
 let callBtn = document.querySelector(".call-btn")

 function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
function showModal(){
    modal.classList.remove("hide");
    modal.classList.add("show");
}

 moreDetBtns.forEach((item) => item.addEventListener("click", function() {
    modal.classList.remove("hide")
    modal.classList.add("show");
 }));

 btnClose.addEventListener("click", function () {
     modal.classList.remove("show");
     modal.classList.add("hide");
 });

 callBtn.addEventListener("click", function () {
  modal.classList.remove("show");
  modal.classList.add("hide");
});


modal.addEventListener("click", function (e) {
   if (e.target === modal) {
     closeModal();    }
  });

function showModalByScroll(){
    if(window.pageYOffset >= document.body.scrollHeight/2){
    showModal();
    window.removeEventListener("scroll", showModalByScroll);
};
};

window.addEventListener("scroll", showModalByScroll);

// =========== products quantity changing ====================

let decBtns = document.querySelectorAll(".decrement-button");
let incBtns = document.querySelectorAll(".increment-button");
let inputCntr = document.querySelectorAll(".product-quantity input");
document.addEventListener("DOMContentLoaded", function() {
  for(let i=0; i<decBtns.length; i++){
    decBtns[i].disabled = true;
    inputCntr[i].value = 1;
  }
});

incBtns.forEach((btn, i) => btn.addEventListener("click", function () {
  let val = +inputCntr[i].value;
  let incVal = val+1;
   if (incVal > 5) {
    btn.disabled = true;
    inputCntr[i].value = val;
  } else {
    btn.disabled = false;
    inputCntr[i].value = incVal;
  };
  decBtns[i].disabled = false;
}));

decBtns.forEach((btn,i) => btn.addEventListener("click", function() {
  let val = +inputCntr[i].value;
  let decVal = val - 1;
    if (decVal < 1) {
     btn.disabled = true;
     inputCntr[i].value = val;
   } else {
     btn.disabled = false;
     inputCntr[i].value = decVal;
   }
   incBtns[i].disabled = false;
}));


