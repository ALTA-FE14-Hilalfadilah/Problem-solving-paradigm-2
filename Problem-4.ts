function convertToRoman(num: number): string {
  const romanNumerals: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";
  let remainingNum = num;

  Object.keys(romanNumerals)
    .reverse()
    .forEach((key) => {
      const value = romanNumerals[Number(key)];

      while (remainingNum >= Number(key)) {
        // apakah remainingnum lebih besar sama dengan key
        result += value;
        remainingNum -= Number(key);
      }
    });

  return result;
}

console.log(convertToRoman(4));
console.log(convertToRoman(9));
console.log(convertToRoman(23));
console.log(convertToRoman(2021));
console.log(convertToRoman(1646));
