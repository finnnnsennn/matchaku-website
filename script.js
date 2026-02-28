function menu() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("menuPage").classList.remove("hidden");
    document.body.style.background = "linear-gradient(135deg, #84B179, #A2CB8B)";
}

function back() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("menuPage").classList.add("hidden");
    document.body.style.background = "linear-gradient(135deg, #A2CB8B, #C7EABB, #E8F5BD)";
}
