(function ($) {


// 导航栏
window.onscroll = function() {  
  var navbar = document.getElementById("navbar");  
  if (window.pageYOffset >= 100) { // 滚动距离阈值，可根据需要调整  
      navbar.classList.add("sticky");  
  } else {  
      navbar.classList.remove("sticky");  
  }  
};



// 轮播图
$(document).ready(function() {  
  // 初始化轮播图和文字盒子  
  var currentIndex = 0;  
  var images = $('.carousel-images img');  
  var caption = $('.carousel-caption');  
  caption.addClass('visible'); // 加载时显示文字盒子  
  
  // 轮播图切换函数  
  function changeImage() {  
    images.eq(currentIndex).removeClass('active');  
    currentIndex = (currentIndex + 1) % images.length; // 环形切换  
    images.eq(currentIndex).addClass('active');  
  }  
  
  // 设置轮播图定时器  
  setInterval(changeImage, 2500); // 每隔2.5秒切换  
  
  // 点击或滑动图片时切换下一张  
  images.on('click touchmove', function() {  
    clearInterval(intervalId); // 清除定时器  
    changeImage(); // 立即切换  

  });  
  
 
});



// 点击切换图片
const images = [  
  'image/layout3/1.png', 'image/layout3/2.png', 'image/layout3/3.png',  
  'image/layout3/11.png', 'image/layout3/12.png', 'image/layout3/13.png',  
];  
   
let imageIndex = 0;  
  
// 获取所有的图片盒子  
const imageBoxes = document.querySelectorAll('.image-boxs');  
  
// 图片更换函数  
function changeImage(box) {  
  // 获取当前图片元素的索引（如果有的话）  
  const currentIndex = parseInt(box.dataset.imageIndex, 10) || 0;  
  // 更新索引并循环图片数组  
  imageIndex = (currentIndex + 1) % images.length;  
    
  // 获取图片元素并更新其src属性  
  const img = box.querySelector('img');  
  img.src = images[imageIndex];  
    
  // 更新图片盒子的data-image-index属性  
  box.dataset.imageIndex = imageIndex;  
}  
  
// 为每个图片盒子添加点击事件监听器  
imageBoxes.forEach(box => {  
  box.addEventListener('click', () => changeImage(box));  
});  
  
// 假设你也想为颜色盒子添加点击事件监听器以触发图片更换（例如，所有图片盒子都更换为同一张图片）  
const colorBoxes = document.querySelectorAll('.color-box');  
  
colorBoxes.forEach(box => {  
  box.addEventListener('click', () => {  
    // 选择要更换到的图片（这里简化为第一张图片）  
    const newIndex = 0; // 假设你根据点击的颜色盒子选择不同的图片  
      
    // 遍历所有图片盒子并更新它们的图片  
    imageBoxes.forEach(imageBox => {  
      const img = imageBox.querySelector('img');  
      img.src = images[newIndex];  
      imageBox.dataset.imageIndex = newIndex;  
    });  
  });  
});



})(jQuery);