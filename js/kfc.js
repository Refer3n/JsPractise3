import foodData from "./data/dataFood.js";

const menuItemsContainer = document.querySelector(".menuItemsContainerJs");

console.log(menuItemsContainer);

const menuItems = foodData.map((item) => {
  const name = document.createElement("p");
  name.classList.add("nameText");
  name.textContent = item.name;

  const description = document.createElement("p");
  description.classList.add("descriptionText");
  description.textContent = item.description;

  const image = document.createElement("img");
  image.src = item.image;

  const price = document.createElement("p");
  price.textContent = item.price;

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("itemContainer");
  itemContainer.append(image, CreateInfoContainer(name, description, price));
  return itemContainer;
});

console.log(menuItems);

function CreateInfoContainer(name, description, price) {
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("infoContainer");
  infoContainer.append(name, description, price);
  return infoContainer;
}

menuItemsContainer.append(...menuItems);
