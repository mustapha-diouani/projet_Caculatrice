const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

/**
 * @param {string} operation
 */
function calculer(operation) {}
{
}

// @ts-ignore
buttons.forEach((button) => {
  button.addEventListener("click", () => {
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
      case "+" || "-" || "*" || "/" || "%":
        break;
      case "=":
        try {
          // @ts-ignore
          display.value = eval(display.value);
        } catch (error) {
          // @ts-ignore
          display.value = "Error";
        }
        break;

      default:
        // @ts-ignore
        display.value += button.value;
        break;
    }
    // @ts-ignore
    console.log(display.value);
  });
});
