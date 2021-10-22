var images = ['../assets/media/img/img-1.jpg', '../assets/media/img/img-2.jpg', '../assets/media/img/img-3.jpg', '../assets/media/img/img-4.jpg'];


let box = document.querySelectorAll('img');
moveImages();

function moveImages() {
    images.push(images.shift())
    box.forEach((box, index) => {
        box.setAttribute("src", images[index]);
        box.addEventListener("click", moveImages);
    });
}