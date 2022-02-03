function equation(num) {
    
    let operator = "";
    let calc = "";

    var converToDecimal = num.replace(/one|two|three|four|five|six|seven|eight|nine/g , (value) => {
      if(value === 'one') return '1';
      if(value === 'two') return '2';
      if(value === 'three') return '3';
      if(value === 'four') return '4';
      if(value === 'five') return '5';
      if(value === 'six') return '6';
      if(value === 'seven') return '7';
      if(value === 'eight') return '8';
      if(value === 'nine') return '9';
    });

    const temp = converToDecimal;

    for(let i = 0 ; i < num.length ; i++){
      if(temp[i] == '+'){
        operator += '+';
      }else if(temp[i] == '-'){
        operator += '-';
      }else if(temp[i] == '*'){
        operator += '*';
      }else if(temp[i] == '/'){
        operator += '/';
      } else calc += temp[i];
    }

    

    let result = parseInt(calc[0]) ;
    for(let i = 1 ; i < calc.length ; i++){
      if(operator[i-1] == '+'){
        result+=parseInt(calc[i]);
      }else if(operator[i-1] == '-'){
        result-=parseInt(calc[i]);
      }else if(operator[i-1] == '*'){
        result*=parseInt(calc[i]);
      }else if(operator[i-1] == '/'){
        result/=parseInt(calc[i]);
      }
    }
    return num + ' = ' + result;
}


console.log(equation("one+one"));
console.log(equation("seven*four-two"));
// console.log(equation("1+1+1+1+1"));