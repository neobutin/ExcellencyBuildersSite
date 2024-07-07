const buyButton = document.querySelector(".buy-button");
const buyForm = document.querySelector(".buy-form");
const closeFormButton = document.querySelector("#close-form");

//buyButton.addEventListener("click", () => {
//  buyForm.style.display = "block";
//});

closeFormButton.addEventListener("click", () => {
  buyForm.style.display = "none";
});