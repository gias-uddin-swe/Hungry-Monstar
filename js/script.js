//search  button click handler
const foodName = document.getElementById("search-box").value;
document.getElementById("search-btn").addEventListener("click", function () {
  const foodName = document.getElementById("search-box").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f&s=${foodName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItem(data));
});
function displayItem(data) {
  data.meals.forEach((foodName) => {
    // console.log(foodName.strMeal);
    const checkValue = document.getElementById("search-box").value;

    if (checkValue != foodName.strMeal) {
      confirm("you didn't input Full name");
    }
    const mainDiv = document.getElementById("main-Div");
    const subDiv = document.createElement("div");
    subDiv.className = "sub-div";

    const foodNameTemplate = `
          <img id ="click-details" onclick="displayFoodDetails('${foodName.strMeal}')" src="${foodName.strMealThumb}" alt="">
          <h1 id="item-name" > ${foodName.strMeal} </h1>
          `;
    subDiv.innerHTML = foodNameTemplate;
    mainDiv.appendChild(subDiv);
  });
}
const displayFoodDetails = (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayBlock("food-details", "block");
      document
        .getElementById("image")
        .setAttribute("src", data.meals[0].strMealThumb);
      sum("foodName", data.meals[0].strMeal);
      sum("li-1", data.meals[0].strIngredient1);
      sum("li-2", data.meals[0].strIngredient2);
      sum("li-3", data.meals[0].strIngredient3);
      sum("li-4", data.meals[0].strIngredient4);
      sum("li-5", data.meals[0].strIngredient5);
      sum("li-6", data.meals[0].strIngredient6);
      sum("li-7", data.meals[0].strIngredient7);
    });
};
// common function for innerTex
const sum = (id, item) => {
  document.getElementById(id).innerText = item;
};
//control display function
const displayBlock = (id, name) => {
  document.getElementById(id).style.display = name;
};
