let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (a) => {
    if (a.target.innerHTML === "=") {
      // Replace X with * and ^ with ** for exponentiation
      string = string
        .replace(/X/g, "*")
        .replace(/\^/g, "")
        .replace(/%/g, "/100");
      try {
        string = eval(string);
      } catch (error) {
        string = "Error";
      }
      document.querySelector(".display").value = string;
    } else if (a.target.innerHTML === "C") {
      if (string.length <= 1) {
        string = "0";
      } else {
        string = string.slice(0, -1);
      }
      document.querySelector(".display").value = string;
    } else if (a.target.innerHTML === "AC") {
      string = "0";
      document.querySelector(".display").value = string;
    } else {
      if (string === "0") {
        string = a.target.innerHTML;
      } else {
        string += a.target.innerHTML;
      }
      document.querySelector(".display").value = string;
    }
  });
});