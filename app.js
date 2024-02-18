const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-end Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelancer";
    },4050);
    setTimeout(() => {
        text.textContent = "Software Developer";
    },8300);
}

textLoad();
setInterval(textLoad, 12250); 