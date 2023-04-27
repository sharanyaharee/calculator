const displayText = document.getElementById("displayScreen");
function btnClick(value) {
  switch (value) {
    case "=":
      {
        displayText.innerText = eval(displayText.innerText);
        setTimeout(() => {
          displayText.innerText = "";
        }, 4000);
      }
      break;
    case "c":
      displayText.innerText = "";
      break;
    case "del":
        displayText.innerText = displayText.innerText.slice(0, -1);
      break;
    case "%":
        displayText.innerText = displayText.innerText / 100;
      break;
    default:
      displayText.innerText += value;
  }
}
