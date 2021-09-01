let sliders = document.querySelectorAll(".myrange");
let output = document.querySelector(".value");
let pageViews = document.querySelector(".page-views");
let price = document.querySelector(".pricefix");
let priceSwitch = document.querySelector("#switch");
let month = document.querySelector(".month");

// var slider = document.getElementById("myRange-test");
// var output = document.querySelector(".valueNumber");

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };

if(!priceSwitch.checked){
  sliders.forEach(slider => {
    slider.addEventListener("input", function () {
      switch (slider.value) {
        case "0":
          pageViews.innerHTML = "10k "
          yearlyFare("8")
          break;
        case "25":
          pageViews.innerHTML = "50k "
          yearlyFare("12")
          break
        case "50":
          pageViews.innerHTML = "100k "
          yearlyFare("16")
          break
        case "75":
          pageViews.innerHTML = "500k "
          yearlyFare('24')
          break
        case "100":
          pageViews.innerHTML = "1M "
          yearlyFare('36')
        default:
          break;
      }
    })
  })
}

sliders.forEach(slider => {
  slider.addEventListener("input", function () {
    var x = slider.value;
    var color = `linear-gradient(
      90deg,
      rgb(165, 243, 235) ${x}%,
      rgb(234, 238, 251) ${x}%
    )`;
    slider.style.background = color
  });
});


function yearlyFare(value) {
  console.log(value);
  if (priceSwitch.checked) {
    let yearlyPrice = value * 12;
    month.innerHTML = " / year";
    price.innerHTML = parseInt(value * 12 - yearlyPrice * 0.25);
  } else {
    price.innerHTML = value;
    month.innerHTML = " / month";
  }
}
