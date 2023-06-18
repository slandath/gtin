document.getElementById("btnForm").addEventListener("click", function () {
  calcCheckDigit(
    "gtinInput",
    "resultDiv",
    "visible",
    "gtinResultDiv",
    "visible",
    "checkDigit",
    "gtin"
  );
});

const checkDigitArray = [];

function activateDiv(a, b) {
  document.getElementById(a).className = b;
}

function checkDigit(a) {
  checkDigitArray.length = 0;
  const oddArray = [];
  const evenArray = [];

  const newArray = a.split("");

  for (let i = 0; i < newArray.length; i += 2) {
    let b = parseInt(newArray[i]);
    oddArray.push(b);
  }

  for (let i = 1; i < newArray.length; i += 2) {
    let c = parseInt(newArray[i]);
    evenArray.push(c);
  }

  let d = 0;

  oddArray.forEach(sumArray);
  function sumArray(num) {
    d += num;
  }

  let e = 0;
  evenArray.forEach(addArray);
  function addArray(num) {
    e += num;
  }

  let f = d * 3;
  let g = e + f;
  let h = g % 10;
  let j = 10 - h;
  console.log(d, e, f, g, h, j);
  if ((j === 0) | (j === 10)) {
    j = 0;
  } else {
    j;
  }

  checkDigitArray.push(j);
}

function calcCheckDigit(a, b, c, d, e, f, g) {
  let x = document.getElementById(a).value;
  checkDigit(x);

  activateDiv(b, c);
  activateDiv(d, e);

  document.getElementById(f).innerText = checkDigitArray[0];
  document.getElementById(g).innerText = x + checkDigitArray[0];
  event.preventDefault();
}
