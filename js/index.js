;(function(){
	/*轮播*/
$(document).ready(function () {
	
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    speed:2000,
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    autoplay:true//设置自动循环播放
    
  })     
 
 
})

	
	
	
})()
