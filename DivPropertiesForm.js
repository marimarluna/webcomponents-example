const divPropertiesForm = document.querySelector("#div-properties-form");

const square = document.getElementById("square");

divPropertiesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const objData = Object.fromEntries(data.entries());
  console.log("objData", objData);
  square.setAttribute("backgroundColor", objData.backgroundColor);
  square.setAttribute("textColor", objData.textColor);
  square.setAttribute("size", objData.size);
});
