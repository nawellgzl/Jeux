var images = ['../assets/media/img/img-1.jpg', '../assets/media/img/img-2.jpg', '../assets/media/img/img-3.jpg', '../assets/media/img/img-4.jpg'],
    i = 1;

for (var j = images.length; j--;) {
    var img = new Image();
    img.src = images[j];
}

let box = document.querySelectorAll('img');

let div = document.getElementById('images');

// box.forEach((box) => {
//     div.addEventListener('click', function() {
//         this.src = images[i >= images.length - 1 ? i = 0 : ++i];
//     }, false);
// });


div.addEventListener('click', () => {
    box.forEach((box) => {

        this.src = images[i >= images.length - 1 ? i = 0 : ++i];
    });



});