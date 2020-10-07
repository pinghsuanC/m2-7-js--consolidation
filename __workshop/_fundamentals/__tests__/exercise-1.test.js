const { inputData, transformData } = require("../exercise-1");

test("Exercise 1", () => {
  expect(transformData(inputData)).toStrictEqual({
    name: "Will Byers",
    age: 9,
    status: "upside down",
    address: {
      streetAddress: "123 Whatever street",
      city: "Hawkins",
      state: "Indiana",
      country: "United States",
    },
    superpowers: ["can-blink-lights"],
    relationships: [
      {
        type: "mother",
        name: "Joyce Byers",
        age: 35,
        status: "worried",
        superpowers: [],
      },
      {
        "type": "bestFriend",
        "name": "Mike Wheeler",
        "age": 9,
        "status": "frenetic",
        "superpowers": []
      },
      {
        type: "girlfriend",
        name: "Eleven",
        age: 9,
        status: "angry",
        superpowers: ["telepathy", "multiverse portal sealing"],
      }

    ],
  });
});
