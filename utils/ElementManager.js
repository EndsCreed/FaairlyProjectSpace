function divFadeOut(elementID) {
    const element = document.getElementById(elementID);
    element.style.transition = "opacity 0.3s ease-in-out, top 0.5s ease-in-out";
    element.style.opacity = "0";
    element.style.top = "-50%";
    setTimeout(() => {
        element.style.display = "none";
    }, 300);
}

function divFadeIn(elementID) {
    const element = document.getElementById(elementID);
    element.style.transition = "opacity 0.3s ease-in-out, top 0.5s ease-in-out";
    element.style.display = "flex";
    setTimeout(() => {
        element.style.opacity = "100";
        element.style.top = "50%";
    }, 0);
}
