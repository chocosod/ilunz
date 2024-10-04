// 일러앤즈, 특별한 순간을 마법처럼 이어주다
let scroll_magic = new ScrollGiveClass(".scroll_comment", {
    baseline:'bottom',
    add:-0.15,
})

let scroll_magic_2 = new ScrollGiveClass(".scroll_comment_2",{
    baseline:'bottom',
    add:-0.25,
})

let scroll_magic1 = new ScrollGiveClass(".scroll_up1", {
    baseline:'bottom',
    add:-0.22,
})

let scroll_magic2 = new ScrollGiveClass(".scroll_up2", {
    baseline:'bottom',
    add:-45,
})

// 업계 선두주자로서의 자부심
let scroll_vanguard = new ScrollGiveClass(".scroll_comment2", {
    baseline:'bottom',
    add:-0.2,
})

    // 카운트를 적용시킬 요소
    const $counter = document.querySelector(".count");
    const $counter2 = document.querySelector(".count2");
    const $counter3 = document.querySelector(".count3");
    const $counter4 = document.querySelector(".count4");
    const $counter5 = document.querySelector(".count5");
    const $counter6 = document.querySelector(".count6");
    const $counter7 = document.querySelector(".count7");
    
    // 목표 수치
    const max1 = 8057;
    const max2 = 150000;
    const max3 = 12000;
    const max4 = 128;
    const max5 = 1500;
    const max6 = 12;
    const max7 = 577;
    
let scroll_vanguard1 = new ScrollGiveClass(".scroll_count", {
    baseline:'bottom',
    add:-0.24,
    addFunction:function(){
        counter($counter, max1);
        counter($counter2, max2);
        counter($counter3, max3);
        counter($counter4, max4);
        counter($counter5, max5);
        counter($counter6, max6);
        counter($counter7, max7);
    }
})