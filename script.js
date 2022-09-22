function MyFunction() {
  var dots = document.getElementById("moredots");
  var moreText = document.getElementById("moredata");
  var btnText = document.getElementById("Btn");

  if (dots.style.display === "none") {
    moredots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    moredots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
