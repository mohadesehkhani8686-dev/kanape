//=== image container ===
const panorama = new PANOLENS.ImagePanorama( "images/shot-panoramic-composition-library.jpg" );
const header=document.querySelector(".container-top__image-container");
const viewer = new PANOLENS.Viewer({
    container : header,
    autoRotate : true,
    autoRotateSpeed : 0.3,
    controlBar : false,
});
viewer.add( panorama );

//=== top-nav ===
function showSlidebar(){
    const slidebar = document.querySelector('.sidebar');
    slidebar.style.display = 'flex';
}

function hideSidebar(){
    const slidebar = document.querySelector('.sidebar');
    slidebar.style.display = 'none';
}


//=== container-slider ===
const cardWrapper = document.querySelector('.wrapper__card')
const widthToScroll = cardWrapper.children[0].offsetwidth
const cardBounding = cardWrapper.getBoundingClientRect()
const cardImageAndLink = cardWrapper.querySelectorAll('img, a')
let currScroll =0
let initPos = 0
let clicked = false

cardWrapper.onmousedown = function(e){
    cardWrapper.classList.add('grab')
    initPos = e.clientX - cardBounding.left
    currScroll =cardWrapper.scrollLeft
    clicked = true
}

cardWrapper.onmousemove = function(e){
    if(clicked){
        const xPos = e.clientX - cardBounding.left
        cardWrapper.scrollLeft = currScroll + -(xPos - initPos)  
    }
}

cardWrapper.onmouseup = mouseUpAndLeave
cardWrapper.onmouseleave = mouseUpAndLeave

function mouseUpAndLeave(){
    cardWrapper.classList.remove('grab')
    clicked = false
}


//play audio
  document.querySelectorAll(".play-button").forEach(div => {
    div.addEventListener("click", function() {
      var audio = document.getElementById("audioPlayer");
      audio.src = this.getAttribute("data-audio"); // تغییر فایل صوتی
      audio.play();
    });
  });

  console.log(header);
console.log(header.offsetWidth);
console.log(header.offsetHeight);