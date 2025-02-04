const ALGO_EXEC_SPEED = 1000;

function initRubik(updateAlgo, rotation) {
    rubikWindow = document.getElementById("rubik-window");

    rubik = new Rubik(rubikWindow, rotation.X, rotation.Y);
    // setTimeout(() => rubik._updateByAlgo(["x", "l", "U", "l'", "B'", "l", "U", "U", "l'", "B'"]), 100);
    setTimeout(() => rubik._updateByAlgo(updateAlgo), 100);
}

// TODO: Rotation
function init_and_demonstrate(updateAlgo, algoToBeExec, rotation) {
    initRubik(updateAlgo);
    setTimeout(() => rubik._execAlgo(algoToBeExec), ALGO_EXEC_SPEED);
}

function parseAlgo(algoStr) {
    return algoStr.split(" ");
}


Array.from(document.getElementsByClassName("card-body")).forEach(cardElement => {
    const button = cardElement.getElementsByTagName("button")[0];
    const algoText = cardElement.getElementsByClassName("algo-display-box")[0];
    algoText.innerText = button.getAttribute("exec-algo");
});