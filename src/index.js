let a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
];
let b = [
    "",
    "",
    "twenty ",
    "thirty ",
    "forty ",
    "fifty ",
    "sixty ",
    "seventy ",
    "eighty ",
    "ninety ",
];

module.exports = function (number) {
    const strNum = String(number);
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return `${a[number]}`.trim();
  
    }
    if (number >= 20 && number < 100) {
        return `${b[strNum[0]]}${a[strNum[1]]}`.trim();
  
    }
    if (
        number >= 100 &&
        +strNum.substring(1) >= 10 &&
        +strNum.substring(1) <= 19
   
    ) {
        return `${a[strNum[0]]}hundred ${a[+strNum.substring(1)]}`.trim();
   
    }
    if (number >= 100) {
        return `${a[strNum[0]]}hundred ${b[strNum[1]]}${a[strNum[2]]}`.trim();
   
    }
};
