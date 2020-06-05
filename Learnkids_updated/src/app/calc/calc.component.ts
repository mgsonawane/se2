import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public send(val1,val2,val3){
    var x=32;
    if (val1){
      if(val2){
        if(val3){
          if (val3==(Number(val1)* Number(val2))){
            alert("Your answer is correct");}
          else{
            var ans:number =Number(val1)* Number(val2);
          alert("Correct answer is "+(ans)); }
        }
        else 
     alert("You  missed something!!!!!!!!!");
  
      }
      else 
     alert("You  missed something!!!!!!!!!");
  
    }
    else 
     alert("You  missed something!!!!!!!!!");
  
  }

public sendadd(val1,val2,val3){
  var x=32;
  if (val1){
    if(val2){
      if(val3){
        if (val3==(Number(val1)+Number(val2))){
          alert("Your answer is correct");}
        else{
          var ans:number =Number(val1)+Number(val2);
        alert("Correct answer is "+(ans)); }
      }
      else 
   alert("You  missed something!!!!!!!!!");

    }
    else 
   alert("You  missed something!!!!!!!!!");

  }
  else 
   alert("You  missed something!!!!!!!!!");

}
public sendm(val1,val2,val3){
  var ans:number =Number(val1)-Number(val2);
  if (val1){
    if(val2){
      if(val3){
        if (val3==ans)
          alert("Your answer is correct");
        else
         alert("Correct answer is "+(ans)); 
      }
    }
    else 
   alert("You  missed something!!!!!!!!!");

  }
  else 
   alert("You  missed something!!!!!!!!!");

}
public sendd(val1,val2,val3){
  var x=32;
  if (val1){
    if(val2){
      if(val3){
        if (val3==(Number(val1)/Number(val2))){
          alert("Your answer is correct");}
        else{
          var ans:number =Number(val1)/Number(val2);
        alert("Correct answer is "+(ans)); }
      }
      else 
   alert("You  missed something!!!!!!!!!");

    }
    else 
   alert("You  missed something!!!!!!!!!");

  }
  else 
   alert("You  missed something!!!!!!!!!");

}
public homee(){
  this.router.navigate(['/home']);
}
}
