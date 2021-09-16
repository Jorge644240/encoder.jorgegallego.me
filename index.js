document.querySelector("#encode").addEventListener("click", () => {
    document.querySelector("#result").innerHTML = encodeURIComponent(document.querySelector("textarea").value);
    document.querySelector("#result").target = "_blank";
    document.querySelector("#result").href = document.querySelector("textarea").value;
});

document.querySelector("#decode").addEventListener("click", () => {
    document.querySelector("#result").innerHTML = decodeURIComponent(document.querySelector("textarea").value);
    document.querySelector("#result").target = "_blank";
    document.querySelector("#result").href = decodeURIComponent(document.querySelector("textarea").value);
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