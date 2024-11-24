const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export const getPassword = (num, isUpper, isLower, isNumber, isSymbol) => {
  let pass = "";

  for (let i = 0; i < num; i++) {
    if (isLower) {
      pass +=
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }
    if (isUpper) {
      pass +=
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }
    if (isNumber) {
      pass += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (isSymbol) {
      pass += symbols[Math.floor(Math.random() * symbols.length)];
    }
  }

  const finalPass = [...pass].sort(() => Math.random() - 0.5).join("");
  return finalPass.slice(0, num);
};
