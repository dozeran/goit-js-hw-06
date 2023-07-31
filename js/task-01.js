const categories = document.querySelectorAll("#categories .item");
const categoriesCount = categories.length;
console.log("Number of categories: ", categoriesCount);
categories.forEach((element) => {
  const title = element.firstElementChild;
  const elementCount = element.lastElementChild.children.length;
  console.log(`Category: ${title.textContent}`);
  console.log("Elements:", elementCount);
});
