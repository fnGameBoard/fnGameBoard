
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'roulette-game',
    templateUrl: './roulette-game.component.html',
    styleUrls: ['./roulette-game.component.css']
  })
  export class RouletteGameComponent {

    @ViewChild('canvas') c! : ElementRef<HTMLCanvasElement>;

    public ctx : any;
    public blockNo : number | undefined;
  
    public blockArry : string[] = [];
    public blockName : string | undefined;
    
    ngAfterViewInit():void {
        setTimeout(() => {
            this.ctx = this.c.nativeElement.getContext('2d');
  
            // ////// 룰렛에 들어갈 항목 배열선언 
            // // let Array : string[] = [];
            // let Arry = new Array(9);
            
            // for (let i = 0; i <Arry.length; i++) {     ////배열 요소만큼 push
            //   Arry.push(Arry[i]);
            // };
  
  
            // this.newMake();

          this.blockNo = 0;       //////몇 칸 입력받을 지 
          this.blockName = '';       //////어느 값을?

          }, 10 )
    }  //


    public newColors : string[] = [];

    


  /////테스트용~~~~
  making(){ 
    let slicenumber = <HTMLInputElement>document.getElementById('inputnumber');
    ////HTML에서 입력된 값 배열에 넣기 
    for(let i in this.blockArry){
      let inputnumber = <HTMLInputElement>document.getElementById('test'+i);
      // console.log(inputnumber);
      // console.log(inputnumber.value);
      this.blockArry.push(inputnumber.value);
      
    }
    // console.log('blockArry1    ', this.blockArry);
    
    //////배열선언하며 만들어준 공백값 삭제 
    for (let i = 0; i < this.blockArry.length; i++){
      if(this.blockArry[i] == ''){
        this.blockArry.splice(i, 1);
        i--;
      }
    }
    console.log('blockArry2    ', this.blockArry);
    
    //////색상 필요한 만큼 자르기 
    // let newColors = [];
    this.newColors = this.colors.slice(0, +slicenumber.value + 1);
    ///test
    console.log(this.newColors);
    // console.log(this.colors);



    this.newMake();
    
    // console.log(slicenumber.value);
    // console.log('newColors', newColors);

    ////몇 칸인지 확인 후 칸만큼 for문을 돌리기 위해서 변수 선언 
    // let inputnumber = <HTMLInputElement>document.getElementById('inputnumber');
    // console.log(this.blockNo);    //////몇칸 입력받을건지 
    // console.log(inputnumber);
    
    // for (let i = 0; i < +inputnumber.value; i++){
    //   let ArrayText = <HTMLInputElement>document.getElementById('ArrayText');
    //   console.log(ArrayText);

    // }



// console.log(ArrayText.tabIndex);

// let ArrayText = <HTMLInputElement>document.getElementById('ArrayText');
// console.log(ArrayText);



    // for (let i = 0; i < +inputnumber.value; i++){

    //   let ArrayText = <HTMLInputElement>document.getElementById('ArrayText');
    //   // let number222 = document.getElementById('number'); 
      
    //   console.log("ArrayText.tabIndex", ArrayText.tabIndex);
    //   console.log("ArrayText.value", ArrayText.value); 
    // // //   // console.log("number222",number222);
    // }


    console.log("룰렛만들기! 완료 ");
  };





  blockmaking($event : any) {
    if (+$event.target.value > 10 ) {
      alert("10칸 이상 지정할 수 없습니다. ");
      return 
    }


    // console.log(typeof(+$event.target.value));   //////값 크기만큼 
    // console.log($event.target.value);   //////값 크기만큼 
    // let number = document.getElementsByName('number');
    // console.log("number!!!", number);

    // this.blockArry = new Array(+$event.target.value).fill({'index' : '11'}); 
    this.blockArry = new Array(+$event.target.value).fill(''); 
    
  };






    // 룰렛에 들어갈 항목
      // product = [
      //   "떡볶이", '돈가스', "초밥", "피자", "냉면", "치킨", '족발', "피자", "삼겹살",
      // ];
  
      // 각 항목에 해당하는 색상
      colors = [
        "#dc0936", "#e6471d", "#f7a416", 
        "#efe61f ", "#60b236", "#209b6c", 
        "#169ed8", "#3f297e", "#87207b", 
        "#be107f", "#e7167b"
      ];
  
  
      newMake(){   ///함수 정의 
        // let [cw, ch] = [this.c.nativeElement.width / 2, this.c.nativeElement.height / 2];     ////캔버스의 중점 위치 구하기 >> CanVas의 높이 너비의 절반 값으로 함 
        let cw = this.c.nativeElement.width / 2;     ///////캔버스의 너비
        let ch = this.c.nativeElement.height / 2;    ///////캔버스의 높이
        
        let arc = Math.PI / (this.blockArry.length / 2);    //// 룰렛에 그릴 항목의 수에 따른 항목의 크기 값     Math.PI = 원주율
        // let arc = Math.PI / (this.product.length / 2);    //// 룰렛에 그릴 항목의 수에 따른 항목의 크기 값     Math.PI = 원주율
                                                          //>> 이 값을 통해 동그란 룰렛에 각 영역을 그리는 방법인 arc 메소드를 이용 
        ///////arc 값 참고 
        // x, y -> 중점, radius -> 반지름(x와 같은 값)
        // ctx.arc(x, y, radius, startAngle, endAngle);
        // ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);    >> 항목 개수로 나눈 크기를 이용해서 (i - 1) ~ i 지점까지 만의 원을 그리는 것임 
  
  
        // 룰렛 배경 그리기
        for (let i = 0; i < this.blockArry.length; i++) {
        // for (let i = 0; i < this.product.length; i++) {
          this.ctx.beginPath();
          this.ctx.fillStyle = this.newColors[i % (this.newColors.length -1)];
          // this.ctx.fillStyle = this.colors[i % (this.colors.length -1)];
          this.ctx.moveTo(cw, ch);
          this.ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);    //>> 항목 개수로 나눈 크기를 이용해서 (i - 1) ~ i 지점까지 만의 원을 그리는 것
          this.ctx.fill();
          this.ctx.closePath();
        }  
  
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "18px Pretendard";
        this.ctx.textAlign = "center";
  
        //save, restore 메서드를 이용해서 속성 값이 적용된 캔버스의 설정 값(이미지 X)을 저장하고 가져올 수 있음 
        //translate, rotate로 인해 변형된 콘텍스트 설정 값을 초기값으로 되돌려 주는 작업을 통해서 텍스트를 그려줌
        for (let i = 0; i < this.blockArry.length; i++) {
        // for (let i = 0; i < this.product.length; i++) {
          const angle = (arc * i) + (arc / 2);
          this.ctx.save()  ;
          this.ctx.translate(
            cw + Math.cos(angle) * (cw - 50),
            ch + Math.sin(angle) * (ch - 50),
          );
  
          this.ctx.rotate(angle + Math.PI / 2);
  
          this.blockArry[i].split(" ").forEach((text, j) => {
          // this.product[i].split(" ").forEach((text, j) => {
            this.ctx.fillText(text, 0, 30 * j);
          });
    
          this.ctx.restore();
        };
  
      }; 
  
      ////////버튼눌러서 룰렛 돌리기 
      rotate(){
        this.c.nativeElement.style.transform = 'initial';
        this.c.nativeElement.style.transition = 'initial';
        
        setTimeout(() => {
          //// 룰렛 당첨 결정 
          let ran = Math.floor(Math.random() * this.blockArry.length);     //////Math.random()으로 얻은 난수에 항목의 갯수를 곱해주면 랜덤한 당첨결과 얻을 수 있음 
          // let ran = Math.floor(Math.random() * this.product.length);     //////Math.random()으로 얻은 난수에 항목의 갯수를 곱해주면 랜덤한 당첨결과 얻을 수 있음 
      
          let arc = 360 / this.blockArry.length;    /////각도?
          // let arc = 360 / this.product.length;    /////각도?
          let rotate = (ran * arc) + 3600 + (arc * 3) - (arc/4);      ///// 랜덤한 결과값에 영역의 크기롤 곱해서 룰렛의 위치를 맞춰주고, 360도를 10번 돌라는 의미로 3600울 추가로 더해줌 
                                                                      ///// 오차범위를 조정하기 위해 (arc * 3)의 수식을 추가로 사용
          this.c.nativeElement.style.transform = 'rotate(-' + rotate + 'deg)';
          this.c.nativeElement.style.transition = '2s';   ///// css코드로 캔버스에 transition 속성을 2초 정도로 지정하기 
          
          setTimeout(() => alert('룰렛 결과는 '+ this.blockArry[ran] +'입니다'), 2000);   //////다 돌고나서 결과값 보여주기 
          // setTimeout(() => alert('룰렛 결과는 '+ this.product[ran] +'입니다'), 2000);   //////다 돌고나서 결과값 보여주기 
        }, 1);
      };
    
  
  
  }
  