//your JS code here. If required
function updateWindowSize() {
    document.getElementById("size").innerText =
        "Width: " + window.innerWidth +
        " and Height: " + window.innerHeight;
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);
