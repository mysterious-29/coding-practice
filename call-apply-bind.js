const name = {
  firstName: "atul",
  lastName: "agarwal",
  printFullName: function () {
    console.log("Name: " + this.firstName + " " + this.lastName);
  },
};

name.printFullName();

const name2 = {
  firstName: "anand",
  lastName: "gupta",
};

name.printFullName.call(name2); // concept: funtion borrowing

const printName = function (homeTown, state) {
  console.log(
    "Name: " +
      this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      ", " +
      state
  );
};

printName.call(name, "Jaipur", "Rajasthan"); // call -> sends ref of this as argument
printName.call(name2, "Pune", "India"); // individual args

printName.apply(name, ["Jaipur", "Rajasthan"]); // apply -> sends ref of this as argument
printName.apply(name2, ["Pune", "India"]); // args in array

const name3 = {
  firstName: "Shreya",
  lastName: "Srivastav",
};

const printFullNameCopy = printName.bind(name3);

printFullNameCopy("Allahbad", "UP");
