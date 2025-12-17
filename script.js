/**
 * Sélectionne tous les éléments boutons et l'élément d'affichage.
 * On suppose que les boutons ont la classe "button" et que le display a id "display".
 * (Vérifier null si on veut éviter d'utiliser // @ts-ignore)
 */
/** @type {NodeListOf<HTMLButtonElement>} */
const buttons = document.querySelectorAll(".button");
/** @type {HTMLInputElement | null} */
const display = /** @type {HTMLInputElement | null} */ (document.getElementById("display"));

if (!display) {
  throw new Error('Element with id "display" not found.');
}

/**
 * Effectue l'opération arithmétique entre deux valeurs.
 * @param {string|number} val_1 - première valeur (sera convertie en float)
 * @param {string} operation - opérateur: "+", "-", "*", "/"
 * @param {string|number} val_2 - deuxième valeur (sera convertie en float)
 * @returns {number} résultat de l'opération (0 si opérateur inconnu)
 */
function calculer(val_1, operation, val_2) {
  val_1 = parseFloat(String(val_1));
  val_2 = parseFloat(String(val_2));
  switch (operation) {
    case "+":
      return val_1 + val_2;
    case "-":
      return val_1 - val_2;
    case "*":
      return val_1 * val_2;
    case "/":
      if (val_2 === 0) {
        return NaN; // caller handles division-by-zero
      }
      return val_1 / val_2;
    default:
      return 0;
  }
}

// états de la calculatrice (stockent les valeurs sous forme de chaîne)
let value_1 = "";
let operation = "";
let value_2 = "";

/**
 * Pour chaque bouton : gestion du clic.
 * Filtre d'entrée : n'autorise que chiffres, opérateurs, point, parenthèses, %, delete, all-clear.
 * Cas gérés :
 * - all-clear : réinitialise l'affichage
 * - delete : supprime le dernier caractère
 * - % : convertit la valeur courante en pourcentage
 * - opérateurs (+ - * /) : stocke la valeur courante dans value_1 et l'opération, vide l'affichage
 * - = : calcule (en utilisant calculer), affiche le résultat et réinitialise les états
 * - default : concatène la valeur du bouton à l'affichage
 * En cas d'entrée invalide ou d'exception : affiche "Error".
 */
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // validation simple de la valeur du bouton
    if (/^(?:[0-9+\-*/.()=% ]+|delete|all-clear)$/.test(button.value)) {
      switch (button.value) {
        case "all-clear":
          display.value = "";
          break;
        case "delete":
          display.value = display.value.slice(0, -1);
          break;
        case "%":
          display.value = String(parseFloat(display.value) / 100);
          break;
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          value_1 = display.value;
          operation = button.value;
          display.value = "";
          break;
        case "=":
          try {
            if (operation === "") {
              // rien à faire si aucune opération sélectionnée
              display.value = display.value;
              break;
            } else {
              value_2 = display.value;
              display.value = "";
              const result = calculer(value_1, operation, value_2);
              display.value = String(result);
              operation = "";
              value_1 = "";
              value_2 = "";
              break;
            }
          } catch (error) {
            display.value = "Error";
            break;
          }
        default:
          display.value += button.value;
          break;
      }
    } else {
      display.value = "Error";
    }
  });
});
