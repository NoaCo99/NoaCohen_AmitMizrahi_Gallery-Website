var slideNum = 1;
picVisible(slideNum);

function moveBTN(i) {
    picVisible(slideNum += i);
}

function choosedPic(i) {
    picVisible(slideNum = i);
}

function picVisible(i) {
    var n;
    var slides = document.getElementsByClassName("photos");
    var points = document.getElementsByClassName("demo");
    var text = document.getElementById("imgDes");

    if (i > slides.length) {
        slideNum = 1;
    }

    if (i < 1) {
        slideNum = slides.length;
    }

    for (n = 0; n < slides.length; n++) {
        slides[n].style.display = "none";
    }

    for (n = 0; n < points.length; n++) {
        points[n].className = points[n].className.replace(" active", "");
    }

    slides[slideNum - 1].style.display = "block";
    points[slideNum - 1].className += " active";
    text.innerHTML = points[slideNum - 1].alt;
}