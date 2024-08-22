// function checkNumbers(num1, num2) {
//   if (num1 == 100 || num1 + num2 == 100) {
//     return true;
//   }
// }

// console.log(checkNumbers(80, 20));

// ================================================================================

// const check = (a, b) =>
//   a === 100 || b === 100 || a + b === 100 ? true : false;

// console.log(check(0, 100));

// ================================================================================

// const extension = (a) => console.log(a.slice(a.indexOf(".")));
// extension("a.txt");

// ================================================================================

// function shiftStr(str) {
//   const newStr = [];
//   for (let char of str) {
//     newStr.push(
//       String.fromCharCode(
//         char.charCodeAt() + 1 == "z".charCodeAt() + 1
//           ? "a".charCodeAt()
//           : char.charCodeAt() + 1
//       )
//     );
//   }
//   return newStr.join("");
// }

// console.log(shiftStr("abcd"));

// ================================================================================

// function shiftStr2(str) {
//   return str
//     .replace(/[a-y]/g, (char) => String.fromCharCode(char.charCodeAt() + 1))
//     .replace(/z/g, "a");
// }
// console.log(shiftStr2("abcd"));

// ================================================================================

// function getDate() {
//   const d = new Date();
//   const date = String(d.getDate()).padStart(2, "0");

//   const month = String(d.getMonth() + 1).padStart(2, "0");

//   const year = d.getFullYear();

//   return `${date}/${month}/${year}`;
// }
// console.log(getDate());

// ================================================================================

// function addNew(str) {
//   return str.toLowerCase().startsWith("new") ? str : `new ${str}`;
// }
// console.log(addNew(" ahmed new"));
// ''.startsWith

// ================================================================================
