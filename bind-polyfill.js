const name = {
  firstName: "atul",
  lastName: "agarwal",
};

const printName = function (homeTown, country) {
  console.log(
    "Name: " +
      this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      ", " +
      country
  );
};

const printAtulName = printName.bind(name);
printAtulName("Jaipur", "india");

Function.prototype.bindPloyfill = function (...args) {
  // this -> printName
  const fn = this;
  const restArgs = args.slice(1);
  return function (...innerArgs) {
    fn.apply(args[0], [...restArgs, ...innerArgs]);
  };
};

const printAtulName2 = printName.bindPloyfill(name, "Jaipur");
printAtulName2("India");
