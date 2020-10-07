// Exercise 1
//
// Write a function will transform the inputData object into a new shape (As provided below.)

const inputData = {
  name: "Will Byers",                 //0
  age: 9,                             //1
  status: "upside down",              //2

  superpower1: "can-blink-lights",    //3
  superpower2: null,                  //4

  address1: "123 Whatever street",    //5
  addressCity: "Hawkins",             //6
  addressState: "Indiana",            //7
  addressCountry: "United States",    //8
  
  motherName: "Joyce Byers",          //9
  motherAge: 35,                      //10
  motherStatus: "worried",            //11
  motherSuperpower1: null,            //12
  motherSuperpower2: null,            //13

  bestFriendName: "Mike Wheeler",     //14
  bestFriendAge: 9,                   //15
  bestFriendStatus: "frenetic",       //16
  bestFriendSuperpower1: null,        //17
  bestFriendSuperpower2: null,        //18

  girlfriendName: "Eleven",             //19
  girlfriendAge: 9,                     //20
  girlfriendStatus: "angry",            //21
  girlfriendSuperpower1: "telepathy",   //22
  girlfriendSuperpower2: "multiverse portal sealing", //23
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",

//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },

//   "superpowers": [
//     "can-blink-lights"
//   ],

//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]

// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

function transformData(data) {
  // Your code here
  // helper function: check if it's null
  let isNull = function(ele){
    return ele==null;
  }
  let bothSuper = function(r, s1, s2){
    if(!isNull(s1)){
      r.push(s1);
    }
    if(!isNull(s2)){
      r.push(s2);
    }
  }

  let createRelationship = function(arr){
    let obj = {};
    obj["type"] = arr[0];
    obj["name"] = arr[1];
    obj["age"] = arr[2];
    obj["status"] = arr[3];
    obj["superpowers"] = [];
    bothSuper(obj["superpowers"], arr[4], arr[5]);
    return obj;
  }

  // assume the input structue is exact
  let result = {};
  // 0~3
  result["name"] = data["name"];
  result["age"] = data["age"];
  result["status"] = data["status"];
  // 5~8
  result["address"] = {
    streetAddress: data["address1"],
    city: data["addressCity"],
    state: data["addressState"],
    country: data["addressCountry"]
  }
  // 3~4
  result["superpowers"] = [];
  bothSuper(result["superpowers"], data['superpower1'], data['superpower2']);

  // relationships
  // mother
  let r_list = [];
  let r_type = ["mother", "bestFriend", "girlfriend"];
  r_type.forEach(element => {
    let o = createRelationship([`${element}`, data[`${element}Name`], data[`${element}Age`], data[`${element}Status`],data[`${element}Superpower1`],data[`${element}Superpower2`]]);
    r_list.push(o);
  });
  result["relationships"] = r_list;

  return result;
}

// Use a console.log to verify
// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.
//console.log(JSON.stringify(transformData(inputData), null, 2));

// Test your code: "yarn test exercise-1"

module.exports = { inputData, transformData };
