function divFadeOut(elementID) {
    const element = document.getElementById(elementID);
    element.style.opacity = "0";
    element.style.top = "-50%";
    setTimeout(() => {
        element.style.display = "none";
    }, 300);
}

function divFadeIn(elementID) {
    const element = document.getElementById(elementID);
    element.style.display = "flex";
    setTimeout(() => {
        element.style.top = "50%";
        setTimeout(() => {
            element.style.opacity = "100";
        }, 200)
    }, 10);
}