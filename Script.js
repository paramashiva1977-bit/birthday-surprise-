function nextPage() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("passwordPage").style.display = "block";
}

function checkPassword() {
  let pass = document.getElementById("password").value.toLowerCase();

  if (pass === "sijo") {
    document.getElementById("passwordPage").style.display = "none";
    document.getElementById("loadingPage").style.display = "block";

    setTimeout(function () {
    document.getElementById("loadingPage").style.display = "none";
     document.getElementById("letterPage").style.display = "block";
      
    }, 3000);

  } else {
    document.getElementById("wrong").innerHTML =
      "❌ Oops... that's not the key to my heart ❤️";
  }
}
