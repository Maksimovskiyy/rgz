let imgIndex = 1;
let intervalId;
showImg(imgIndex);

function showImg(n) {
    let i;
    let images = document.getElementsByClassName("galleryImgContainer");
    let dots = document.getElementsByClassName("preview");
    if (n > images.length) {imgIndex = 1}
    if (n < 1) {imgIndex = images.length}
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[imgIndex-1].style.display = "block";
    dots[imgIndex-1].className += " active";
}

function nextImg(n) {
    showImg(imgIndex += n);
}

function setImg(n) {
    showImg(imgIndex = n);
}

function previewPlus() {
    let previewPlusCheckBox = document.getElementById("preview_plus");
    let previewMinusCheckBox = document.getElementById("preview_minus");
    let preview_columns = document.getElementsByClassName("column");
    if (previewPlusCheckBox.checked){
        for(let i = 0; i < preview_columns.length; i++){
            preview_columns[i].style.width = "20%";
            previewMinusCheckBox.checked = false;
        }
    } else {
        for(let i = 0; i < preview_columns.length; i++){
            preview_columns[i].style.width = "10%";
            previewMinusCheckBox.checked = true;
        }
    }
}

function previewMinus() {
    let previewMinusCheckBox = document.getElementById("preview_minus");
    let previewPlusCheckBox = document.getElementById("preview_plus");
    let preview_columns = document.getElementsByClassName("column");
    if (previewMinusCheckBox.checked){
        for(let i = 0; i < preview_columns.length; i++){
            preview_columns[i].style.width = "10%";
            previewPlusCheckBox.checked = false;
        }
    } else {
        for(let i = 0; i < preview_columns.length; i++){
            preview_columns[i].style.width = "20%";
            previewPlusCheckBox.checked = true;
        }
    }
}

function startSlideShow() {
    let slideShowCheckBox = document.getElementById("slide_show_check_box");
    if (slideShowCheckBox.checked){
       intervalId = setInterval(slideShow, 3000);
    } else {
        clearInterval(intervalId);
    }
}

function slideShow(){
    nextImg(1);
}

