function compute() {
  let a = document.getElementById("first").value;
  let b = document.getElementById("second").value;
  let ops = document.getElementsByName("op");
  for (let i = 0; i < ops.length; i++) {
    if (ops[i].checked) {
      operation = ops[i].value;
      break;
    }
  }
  let c = 0;
  switch (operation) {
    case "Addition":
      c = +a + +b;
      break;
    case "Subtraction":
      c = +a - +b;
      break;
    case "Multiplication":
      c = +a * +b;
      break;
    case "Division":
      if (+b !== 0) c = +a / +b;
      else c = "Cant Divide by zero";
      break;
  }
  document.getElementById("result").value = c;
}
