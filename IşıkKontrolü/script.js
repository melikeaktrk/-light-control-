
const light = document.getElementById("light");
const toggleButton = document.getElementById("toggle-btn");


let isLightOn = false;


function toggleLight() {
    isLightOn = !isLightOn;

    if (isLightOn) {
        light.classList.add("on");
        toggleButton.textContent = "Işığı Kapat";
    } else {
        light.classList.remove("on");
        toggleButton.textContent = "Işığı Aç";
    }
}


toggleButton.addEventListener("click", toggleLight);
