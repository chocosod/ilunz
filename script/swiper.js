
// <<일러앤즈, 특별한 순간을 마법처럼 이어주다.>> Swiper
let full_page_swiper = new Swiper("#moment_magic_slider",{
    wrapperClass: 'container',
    slideClass: 'slider_content',

    slidesPerView: 1,
    loop: true,
    speed:1200,
    spaceBetween: 140,

    effect: 'fade',

    autoplay: {
        // 자동재생 여부
        delay: 5000, // 시작시간 설정
    },
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});