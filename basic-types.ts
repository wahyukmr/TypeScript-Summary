const button = document.querySelector("button") as HTMLButtonElement | null;
const input1 = document.getElementById("num1") as HTMLInputElement | null;
const input2 = document.getElementById("num2") as HTMLInputElement | null;

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const resultFormatted = num1 + num2;

  if (showResult) {
    return console.log(`${phrase}: ${resultFormatted}`);
  } else {
    return resultFormatted;
  }
}

if (button && input1 && input2) {
  button.addEventListener("click", function () {
    add(+input1.value, +input2.value, true, "Result is");
  });
}
