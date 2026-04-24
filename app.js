function calculate() {
  const type = document.getElementById("type").value;

  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  let result = 0;

  if (type === "area") {
    result = a * b;
    document.getElementById("result").innerText = "Area = " + result;

  } else if (type === "volume") {
    result = a * b * c;
    document.getElementById("result").innerText = "Volume = " + result;

  } else if (type === "flow") {
    result = a / b;
    document.getElementById("result").innerText = "Flow Rate = " + result;
  }
}