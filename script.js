function nextPage() {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.currentTime = 0;
        music.play().catch(() => {});
    }

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

function showFinal() {
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
}

setInterval(function () {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}, 500);


