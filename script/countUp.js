const counterBig = ($counter, max, flag, num) => {
  if(flag[num] == true){
    return;
  }
  flag[num] = true;
  // 초기화 now는 max에서 0으로
  let now = max;
  let step = Math.ceil(max * 0.2);

  const handle = setInterval(() => {
    // 출력할 숫자
    $counter.innerHTML = Math.ceil(max - now).toLocaleString();
    /*
    if(num == "2")
    {
      console.log("앞------------------");
      console.log("step : ", step);
      console.log("now : ", now);
    }
    */
    // 목표수치에 도달하면 정지
    if (now < 1) {
      now = 0;
      $counter.innerHTML = max.toLocaleString();;
      clearInterval(handle);
      return
    }
    
    // 증가되는 값이 계속하여 작아짐
    new_step =  Math.ceil(now*0.1);
    if( new_step < 1 ){
      step = 1;
    }else{
      step = new_step;
    }
    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now = now - Math.abs(step);
    /*
    if(num == "2")
      {
        console.log("뒤------------------");
        console.log("step : ", step);
        console.log("now : ", now);
      }
    */
  }, 50);

}

const counterSmall = ($counter, max, flag, num) => {
  if(flag[num] == true){
    return;
  }
  flag[num] = true;
  // 초기화 now는 max에서 0으로
  let now = max;
  let step = Math.ceil(max * 0.1);

  const handle = setInterval(() => {
    // 출력할 숫자
    $counter.innerHTML = Math.ceil(max - now).toLocaleString();

    /*if(num == "2")
    {
      console.log("앞------------------");
      console.log("step : ", step);
      console.log("now : ", now);
    }
      */
    // 목표수치에 도달하면 정지
    if (now < 1) {
      now = 0;
      $counter.innerHTML = max.toLocaleString();;
      clearInterval(handle);
      return
    }
    
    // 증가되는 값이 계속하여 작아짐
    new_step =  Math.ceil(now*0.05);
    if( new_step < 1 ){
      step = 1;
    }else{
      step = new_step;
    }
    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now = now - Math.abs(step);
    /*
    if(num == "2")
      {
        console.log("뒤------------------");
        console.log("step : ", step);
        console.log("now : ", now);
      }
  */
  }, 80);

}
  
    window.addEventListener('load', function(){
    // // 카운트를 적용시킬 요소
    // const $counter = document.querySelector(".count");
    // const $counter2 = document.querySelector(".count2");
    // const $counter3 = document.querySelector(".count3");
    // const $counter4 = document.querySelector(".count4");
    // const $counter5 = document.querySelector(".count5");
    // const $counter6 = document.querySelector(".count6");
    // const $counter7 = document.querySelector(".count7");
    
    // // 목표 수치
    // const max1 = 8057;
    // const max2 = 150000;
    // const max3 = 12000;
    // const max4 = 128;
    // const max5 = 1500;
    // const max6 = 12;
    // const max7 = 577;
    
    // setTimeout(() => counter($counter, max1));
    // setTimeout(() => counter($counter2, max2));
    // setTimeout(() => counter($counter3, max3));
    // setTimeout(() => counter($counter4, max4));
    // setTimeout(() => counter($counter5, max5));
    // setTimeout(() => counter($counter6, max6));
    // setTimeout(() => counter($counter7, max7));
    });