'use strict';


// navmenu
const navBtn = document.querySelector('.navmenu');
navBtn.addEventListener("click", function() {
    navBtn.classList.toggle("is-active");
});

//navmenu2
const navBtn2 = document.querySelector('.navmenu2');
navBtn2.addEventListener("click", function() {
    navBtn2.classList.toggle("is-active2");
    const navLine = document.querySelector('.navline');
    navLine.classList.toggle("is-active2");
});

//navmenu3
const navMenuButton = document.querySelector('.navmenu3');
navMenuButton.addEventListener('click', () => {
  navMenuButton.classList.toggle('active');
});


//スライド速度
document.addEventListener("DOMContentLoaded", function() {
  const slideDuration = 30000; // 表示時間（ms）10m

  const gallery = document.querySelector('.gallery-heroitems');
  const item = gallery.querySelectorAll('.gallery-heroitems-item');
  const currentImageIndex = 0;

  function showNextImage() {
      item[currentImageIndex].style.opacity = "1";
      currentImageIndex = (currentImageIndex + 1) % item.length;
      item[currentImageIndex].style.opacity = "1";
  }

  function startSlideShow() {
      setInterval(showNextImage, slideDuration);
  }

  // 最初の画像を表示開始
  item[currentImageIndex].style.opacity = "1";

  // アニメーションを開始
  startSlideShow();
});
