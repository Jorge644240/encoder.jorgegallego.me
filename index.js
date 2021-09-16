document.querySelector("#encode").addEventListener("click", () => {
    document.querySelector("#result").innerHTML = encodeURIComponent(document.querySelector("textarea").value);
    if (document.querySelector("textarea").value.includes("http")) {
        document.querySelector("#result").href = document.querySelector("textarea").value;
        document.querySelector("#result").target = "_blank";
    }
    document.querySelector("#shorten").style.display = "block";
});

document.querySelector("#decode").addEventListener("click", () => {
    document.querySelector("#result").innerHTML = decodeURIComponent(document.querySelector("textarea").value);
    if (document.querySelector("textarea").value.includes("http")) {
        document.querySelector("#result").href = decodeURIComponent(document.querySelector("textarea").value);
        document.querySelector("#result").target = "_blank";
    }
    document.querySelector("#shorten").style.display = "block";
});

window.onload = window.onresize = () => {
    if (window.innerWidth < 450) {
        document.querySelector("textarea").cols = 35;
        document.querySelector("textarea").rows = 8;
    } else {
        document.querySelector("textarea").cols = 50;
        document.querySelector("textarea").rows = 10;
    }
}

document.querySelector("#shorten").addEventListener("click", () => {
    window.location.replace(`https://tinyurl.jorgegallego.me/shorten?url=${encodeURIComponent(document.querySelector("textarea").value)}`);
});