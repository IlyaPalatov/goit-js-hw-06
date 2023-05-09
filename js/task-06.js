const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.target.value.length;
  const dataLength = Number(event.target.dataset.length);

  if (inputLength === dataLength) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  }

}