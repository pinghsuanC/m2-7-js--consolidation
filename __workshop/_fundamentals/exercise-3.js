// Exercise 3
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

// Write a function that accepts an object (like above) and returns a new object with the data sorted
// and classified like so:

// {
//   'name of dessert': ['name1', 'name2']
// }

// Expected output for groupByValue(favoriteDessertsGroupB) is
// {
//   'pie': [ 'alice', 'glinda', 'khloe' ],
//   'deep-fried mars bar': [ 'betty' ],
//   'gummy bears': [ 'colin', 'fertrude' ],
//   'child tears': [ 'damien' ],
//   'panda express': [ 'ellicia' ],
//   'not applicable': [ 'hethel' ],
//   'rum cake': [ 'irsula' ],
//   'revenge (served cold)': [ 'judas' ],
//   'easter eggs': [ 'lyndon' ],
//   'dessert': [ 'minda' ]
// }

function groupByValue(obj) {
  // do something
  let result = {};
  let k_list = Object.keys(obj);
  k_list.forEach(element => {   // go through the name list

    // check if result contains the food
    if(result.hasOwnProperty(obj[element])){
      // it's atleast one element, so append it to the list
      result[obj[element]].push(element);

    }else{
      // if it's not there, initialize one and push onself to the list
      result[obj[element]] = [element];
    }
  });
  //console.log(result);
  return result;
}

// Verification via console.log()
console.log("Group A", groupByValue(favoriteDessertsGroupA));
console.log("Group B", groupByValue(favoriteDessertsGroupB));

// Test your code: "yarn test exercise-3"

module.exports = groupByValue;
