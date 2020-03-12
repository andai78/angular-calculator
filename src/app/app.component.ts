import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentNumber: string = '0';
  firstNumber: number = null;
  operator: string = null;
  isSecondNumber: boolean = false;

  public keyPress(num: string){
    if(this.isSecondNumber)
    {
      this.currentNumber = num;
      this.isSecondNumber = false;
    }
    else {
      this.currentNumber === '0'? this.currentNumber = num: this.currentNumber += num;
    }
  }

  public getDecimal() {
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private calculate(operator , secondNumber){
    switch (operator){
      case '+':
      return this.firstNumber += secondNumber; 
      case '-': 
      return this.firstNumber -= secondNumber; 
      case '*': 
      return this.firstNumber *= secondNumber; 
      case '/': 
      return this.firstNumber /= secondNumber; 
      case '=':
      return secondNumber;
    }
  }

  public getOperator(op: string){

    if(this.firstNumber === null){
      this.firstNumber = Number(this.currentNumber);

    } else if(this.operator) {
      const result = this.calculate(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstNumber = result;
    }
    this.operator = op;
    this.isSecondNumber = true;

  }

  public allClear() {
    this.currentNumber = '0';
    this.firstNumber = null;
    this.operator = null;
    this.isSecondNumber = false;
  }

}
