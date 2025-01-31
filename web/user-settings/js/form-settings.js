const fileInputPhoto = document.getElementById("file-upload-photo");
const fileInputCV = document.getElementById("file-upload-cv");
const userPhoto = document.querySelector(".actions__upload-photo-icon");
const cvPhoto = document.querySelector(".actions__upload-cv-icon");
const labelForPhoto = document.querySelector(".custom-file-upload-photo");
const labelForCV = document.querySelector(".custom-file-upload-cv");
const resetButton = document.querySelector(".actions__reset");
fileInputPhoto.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        console.log("Выбран файл:", file.name);
        userPhoto.src = URL.createObjectURL(file);
        userPhoto.classList.add("add");
        labelForPhoto.textContent = "Змінити фото";
    }
});


fileInputCV.addEventListener("change", function () {
    const file = this.files[0];
    cvPhoto.src ="./img/cv-photo-download.svg"
    labelForCV.textContent = "Файл: " + file.name;
});


resetButton.addEventListener("click", function () {
    fileInputPhoto.value = "";
    fileInputCV.value = "";
    userPhoto.src = "./img/user-photo.svg";
    userPhoto.classList.remove("add");
    cvPhoto.src = "./img/upload-files.svg";
    labelForPhoto.textContent = "Завантажити фото";
    labelForCV.textContent = "Завантажити резюме";
});





