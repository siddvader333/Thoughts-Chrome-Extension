let visible = false;
console.log(visible);
function toggleTitleVisibility() {
    console.log("hello");
    visible = !visible;
    document.getElementById("title-1").style.visibility= visible ? "visible" : "hidden";
}

document.getElementById("toggle-button").addEventListener('click', toggleTitleVisibility);