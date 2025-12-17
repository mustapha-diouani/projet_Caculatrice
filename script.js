const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

/**
 * @param {string} operation
 * @param {any} val_1
 * @param {any} val_2
 */
function calculer(val_1, operation, val_2) {
  val_1 = parseFloat(val_1);
  val_2 = parseFloat(val_2);
  switch (operation) {
    case "+":
      return val_1 + val_2;
      break;
    case "-":
      return val_1 - val_2;
      break;
    case "*":
      return val_1 * val_2;
      break;
    case "/":
      return val_1 / val_2;
      break;
    default:
      return 0;
  }
}

let value_1 = 0;
let operation = "";
let value_2 = 0;
// @ts-ignore
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // @ts-ignore
    if (/^(?:[0-9+\-*/.()=% ]+|delete|all-clear)$/.test(button.value)) {
      // @ts-ignore
      switch (button.value) {
        case "all-clear":
          // @ts-ignore
          display.value = "";
          break;
        case "delete":
          // @ts-ignore
          display.value = display.value.slice(0, -1);
          break;
        // @ts-ignore
        case "%":
          // @ts-ignore
          display.value = parseFloat(display.value) / 100;
          break;
        case "+":
          // @ts-ignore
          value_1 = display.value;
          // @ts-ignore
          operation = button.value;
          // @ts-ignore
          display.value = "";
          break;
        case "-":
          // @ts-ignore
          value_1 = display.value;
          // @ts-ignore
          operation = button.value;
          // @ts-ignore
          display.value = "";
          break;
        case "*":
          // @ts-ignore
          value_1 = display.value;
          // @ts-ignore
          operation = button.value;
          // @ts-ignore
          display.value = "";
          break;
        case "/":
          // @ts-ignore
          value_1 = display.value;
          // @ts-ignore
          operation = button.value;
          // @ts-ignore
          display.value = "";
          break;
        case "=":
          try {
            if (operation === "") {
              // @ts-ignore
              display.value = display.value;
              break;
            } else {
              // @ts-ignore
              value_2 = display.value;
              // @ts-ignore
              display.value = "";
              // @ts-ignore
              display.value = calculer(value_1, operation, value_2);
              operation = "";
              value_1 = 0;
              value_2 = 0;
              break;
            }
          } catch (error) {
            // @ts-ignore
            display.value = "Error";
          }

        default:
          // @ts-ignore
          display.value += button.value;
          break;
      }
    } else {
      // @ts-ignore
      display.value = "Error";
    }
  });
});
