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
    const max2 = 17000;
    const max3 = 12000;
    const max4 = 128;
    const max5 = 1500;
    const max6 = 31;
    const max7 = 377;

    const flag_counter = {
        "1" : false,
        "2" : false,
        "3" : false,
        "4" : false,
        "5" : false,
        "6" : false,
        "7": false
     };

let scroll_vanguard1 = new ScrollGiveClass(".scroll_count", {
    baseline:'bottom',
    add:-0.24,
    addFunction:function(target){
       // console.log("addFunction()");
        if(target == "vanguard_contents" )
        {
            if( flag_counter["1"] != true ){
                counterBig($counter, max1, flag_counter, "1");
            }
            if( flag_counter["2"] != true ){
                counterBig($counter2, max2, flag_counter, "2");
            }
            if( flag_counter["3"] != true ){
                counterBig($counter3, max3, flag_counter, "3");
            }
            if( flag_counter["4"] != true ){
                counterSmall($counter4, max4, flag_counter, "4");
            }
            if( flag_counter["5"] != true ){
                counterBig($counter5, max5, flag_counter, "5");
            }
            if( flag_counter["6"] != true ){
                counterSmall($counter6, max6, flag_counter, "6");
            }
            if( flag_counter["7"] != true ){
                counterBig($counter7, max7, flag_counter, "7");
            }
        }
    }
})