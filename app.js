const el1 = document.querySelector(".elementExample_first");
const el2 = document.querySelector(".elementExample_last");

el1.addEventListener("click", () => {
  el1.classList.toggle("elementExample_isActive");
  el2.classList.add("elementExample_isActive");
});
el2.addEventListener("click", () => {
  el2.classList.toggle("elementExample_isActive");
  el1.classList.add("elementExample_isActive");
});
