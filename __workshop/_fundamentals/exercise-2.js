// Exercise 2
//
// Below are two objects of the same "format".
// Each object is a mapping between individual people
// and their favourite desserts
// Notice that there are duplicates (eg. both Riley and John like "ice-cream").

const favoriteDessertsGroupA = {
  scott: "brownies",
  fred: "tiramisu",
  lisa: "chocolate cake",
  riley: "ice-cream",
  sunny: "cheese cake",
  john: "ice-cream",
  beth: "cheese cake",
  summer: "ice-cream",
  morty: "apple pie",
  rick: "brownies",
  andrew: "cheese cake",
  jerry: "rhubard pie",
  "jean-luc": "cheese cake",
  tiffany: "waffles",
  melissa: "profiteroles",
};

const favoriteDessertsGroupB = {
  alice: "pie",
  betty: "deep-fried mars bar",
  colin: "gummy bears",
  damien: "child tears",
  ellicia: "panda express",
  fertrude: "gummy bears",
  glinda: "pie",
  hethel: "not applicable",
  irsula: "rum cake",
  judas: "revenge (served cold)",
  khloe: "pie",
  lyndon: "easter eggs",
  minda: "dessert",
};

// Write a function which takes one of these objects and puts them into an
// array which is sorted from most popular to least popular. For example,
// in Group B, the most popular dessert is "pie", so it should be first
// in the array.
//
// For "ties", the order doesn't matter.
//
// HINT: You'll need to do this in 2 steps:
// - First, count how often each dessert appears
// - Second, put them in order

// Your function should work with both objects and any other objects of the same shape.

function sortByPopularity(obj) {
  // Write code
  let inner_obj = {};
  // I would skip the special cases, e.g. revenge (served cold) and revenge would be considered two seperate categories
  let l_input = Object.values(obj);  // retrieve all values from obj

  l_input.forEach(element => {
    // check if it's inside the keys of inner obj
    if(inner_obj.hasOwnProperty(element)){
      // if it's in, then it's at least 1, increment it
      inner_obj[element]++;
    }else{
      // if it's not in, then add it to obj and default value equals to 1
      inner_obj[element] = 1;
    }
  });
  // then sort the object by first pushing them into array then sort by comparator
  let l_count = [];
  Object.keys(inner_obj).forEach(element => {
    l_count.push([element, inner_obj[element]]);
  });

  //console.log(l_count);
  l_count.sort(function(in_a, in_b){
    // console.log(in_a[0]);
    return in_b[1] - in_a[1];   // add an comparator
  });
  //console.log(l_count);
  // get the element[0] in each pair
  let result = []
  l_count.forEach(element => {
    result.push(element[0]);
  });

  return result;
}

//Verification via console.log()
console.log(
  "Popular desserts in Group A:",
  sortByPopularity(favoriteDessertsGroupA)
);
console.log(
  "Popular desserts in Group B:",
  sortByPopularity(favoriteDessertsGroupB)
);

//sortByPopularity(favoriteDessertsGroupB)

// Test your code: "yarn test exercise-2"

module.exports = sortByPopularity;
