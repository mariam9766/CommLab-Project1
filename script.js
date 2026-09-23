if (window.location.search == "?open=true") {
    document.querySelector(".closed-door").style.display = "none";
    document.querySelector(".right-door").style.display = "none";
    document.querySelector(".left-door").style.display = "none";
    document.querySelector(".opened-door").style.display = "block";
}

let clickCount = 0;

function doorAnimation() {
    clickCount = clickCount + 1;

    if (clickCount == 1) {
        document.querySelector(".closed-door").style.display = "none";
        document.querySelector(".right-door").style.display = "block";
    }

    if (clickCount == 2) {
        document.querySelector(".right-door").style.display = "none";
        document.querySelector(".closed-door").style.display = "block";
    }

    if (clickCount == 3) {
        document.querySelector(".closed-door").style.display = "none";
        document.querySelector(".left-door").style.display = "block";
    }

    if (clickCount == 4) {
        document.querySelector(".left-door").style.display = "none";
        document.querySelector(".closed-door").style.display = "block";
    }

    if (clickCount == 5) {
        document.querySelector(".closed-door").style.display = "none";
        document.querySelector(".opened-door").style.display = "block";
    }
}

document.body.addEventListener("click", doorAnimation);