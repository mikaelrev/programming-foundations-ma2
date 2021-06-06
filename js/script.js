// Question 1

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];


for (var i = 0; i < pets.length; i++) {
    if (pets[i].age >= 4) {
        console.log(pets[i].type);
    }
}



// Question 2

function boolean (isBoolean) {

    var typeofValue = typeof isBoolean;
    if (typeofValue !== "boolean") {
        return "Please pass a boolean value in"
    }
    return isBoolean;
}

var result = boolean(true);
console.log(result);



// Question 3

var buttonHeading = document.querySelector("button");

buttonHeading.onclick = function() {
    var heading = document.querySelector("h2");
    heading.innerHTML = "Updated subheading";
    heading.style.color = "blue";
}
    