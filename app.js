const images = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')

let counter = 0;
images.forEach(function (image, index) {
 image.style.left = `${index * 100}%`
})


nextBtn.addEventListener("click", function () {
 // console.log("hello");
 counter++;
 // console.log(counter);
 slide()
})

prevBtn.addEventListener("click", () => {
 counter--;
 // console.log(counter);
 slide()
})

function slide() {

 if (counter < images.length - 1) {
  nextBtn.style.display = "block";
 } else {
  nextBtn.style.display = "none";
 }
 if (counter > 0) {
  prevBtn.style.display = "block";

 } else {
  prevBtn.style.display = "none";
 }
 images.forEach(function (image) {
  image.style.transform = `translateX(-${counter * 100}%)`;
 });
}
