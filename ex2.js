function equation(num) {
    const temp = num;
    let operator = "";
    let calc = "";
    for(let i = 0 ; i < num.length ; i++){
      if(temp[i] == '+'){
        operator += '+';
      }else if(temp[i] == '-'){
        operator += '-';
      }else if(temp[i] == '*'){
        operator += '*';
      }else if(temp[i] == '/'){
        operator += '/';
      }else calc += temp[i];
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
console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));