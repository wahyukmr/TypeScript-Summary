// Penambahan tanda seru untuk memberi tahu TS bahwa ini tidak akan pernah menghasilkan `null` dan karena ini sudah pasti berupa elemen input maka bisa menambahkan "typecasting" `HTMLButtonElement` atau `HTMLInputElement`.
const buttonTs = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// memberikan "type" di parameter untuk memperjelas inputnya berupa number
function add(num1: number, num2: number) {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return +num1 + +num2;
  } else {
    return num1 + num2;
  }
}

buttonTs.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
