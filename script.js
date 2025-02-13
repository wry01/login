function openEnvelope() {
    document.querySelector(".top").style.transform = "rotateX(180deg)";
    document.querySelector(".letter").style.transform = "translateY(-50px)";
    document.querySelector(".hearts").style.opacity = "1";
    document.querySelector(".hearts").style.transform = "translateY(-10px)";
}

function resetEnvelope() {
    document.querySelector(".top").style.transform = "rotateX(0deg)";
    document.querySelector(".letter").style.transform = "translateY(0px)";
    document.querySelector(".hearts").style.opacity = "0";
    document.querySelector(".hearts").style.transform = "translateY(20px)";
}
