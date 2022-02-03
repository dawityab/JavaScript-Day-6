// let arrayOfName = [ "Marta","Dani","Jolia","Sara"];
// localStorage.setItem("kids", JSON.stringify(arrayOfName));
// console.log(JSON.parse(localStorage.getItem("kids")));

var sandwiches = {
    "sandwich":"hamburger",
    "calories":"260"
};
var fries = {
    "fries_size":"Large French Fries",
    "calories": "570"
};

document.getElementById("food").innerHTML = `My favorite sandwich is a ${sandwiches.sandwich} which has approximatley ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`;