const bgImg=["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const bgRan= Math.floor(Math.random()*bgImg.length);
const bgImages=document.createElement("img");
bgImages.src=`./images/${bgImg[bgRan]}`;
document.body.appendChild(bgImages);
