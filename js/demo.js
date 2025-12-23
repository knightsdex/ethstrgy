const allLinks = document.querySelectorAll("a");

function demo() {


  document.body.append(demoBlock);
  let opacityValue = 1;

  setInterval(() => {
    if (opacityValue) {
      opacityValue = 0;
      demoBlock.style.opacity = opacityValue;
    } else {
      opacityValue = 1;
      demoBlock.style.opacity = opacityValue;
    }
  }, 1400);
}
demo();
