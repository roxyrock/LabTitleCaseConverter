function titleCase(string) {
  let newString = string.toLowerCase();
  let modifiedString = "";
  modifiedString += newString[0].toUpperCase();
  for (let i = 1; i < newString.length; i++) {
    modifiedString += newString[i];
    if (newString[i] === " ") {
      modifiedString += newString[i + 1].toUpperCase();
      i++;
    }
  }
  return modifiedString;
};

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));