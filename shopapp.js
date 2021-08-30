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
/*
let decBtns = document.querySelectorAll(".decrement-button");
let incBtns = document.querySelectorAll(".increment-button");
let inputCntr = document.querySelectorAll(".product-quantity input");
document.addEventListener("DOMContentLoaded", function() {
  for(let i=0; i<decBtns.length; i++){
    decBtns[i].disabled = true;
    inputCntr[i].value = 1;
    inputCntr[i].readonly = true;
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
*/
//===================================================
/*let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityInput = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 5;

function toggleButtonsState(count, decrementBtn, incrementBtn) {
  decrementBtn.disabled = count <= minCount;
  incrementBtn.disabled = count >= maxCount;
}

quantityInput.forEach((item, i) =>
  toggleButtonsState(item.value, decrementBtns[i], incrementBtns[i])
);
incrementBtns.forEach((item, i) =>
  item.addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue + 1;
    quantityInput[i].value = nextValue;
    toggleButtonsState(nextValue, decrementBtns[i], item);
  })
);
decrementBtns.forEach((item, i) =>
  item.addEventListener("click", function () {
    let currentValue = +quantityInput[i].value;
    let nextValue = currentValue - 1;
    quantityInput[i].value = nextValue;

    toggleButtonsState(nextValue, item, incrementBtns[i]);
  })
);*/

// ===============slider=============================

$('.slider-block').slick({
  dots: true
});

//==================== counter constructor ====================
/*let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let quantityInput = document.querySelectorAll(".product-quantity input")[0];

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };
}

const counter = new Counter(incrementBtns, decrementBtns, quantityInput);

console.log(counter);*/

/*function Car(model, year, color) {
  this.year = year;
  this.model = model;
  this.color = color;
};

let audi = new Car("q7", 2015, "black");
let kia = new Car("sorento", 2009,"black");
console.log(kia);
console.log(audi);
function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calc1 = new Calculator(5, 15);
let calc2 = new Calculator(15, 15);

console.log(calc2.sum());
console.log(calc2.mul());*/

