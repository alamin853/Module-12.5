function number(num){
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result = number(13);
var square = result * result;
console.log(square);
