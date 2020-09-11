let year = parseInt(prompt("Mời bạn nhập vào năm:"));

/*Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận
Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận
Những năm chia hết đồng thời cho 100 và 400 là năm nhuận
 */
/*if(year%4==0){
    if(year%100==0)
    {
        if(year%400==0){
            alert(year+" là năm nhuận");
        }
        else{
            alert(year+" không phải là năm nhuận");
        }
    }
    else {
        alert(year+" là năm nhuận");
    }
}
else{
    alert(year+" không phải là năm nhuận");
}
 */


/*let isLeapYear = false;
if(year%4==0) {
    if(year%100==0)    {
        if(year%400==0) {
            isLeapYear = true;
        }
    }
    else{
        isLeapYear=true;
    }
}
if(isLeapYear==true){
    alert(year+" là năm nhuận");
}
else{
    alert(year+" không phải là năm nhuận");
}*/

let isLeapYear=false;
let isDivisibleBy4=year%4==0;
if(isDivisibleBy4){
    let isDivisibleBy100=year%100==0;
    if(isDivisibleBy100){
        let isDivisibleBy400=year%400==0;
        if(isDivisibleBy400)
        {
            isLeapYear=true;
        }
    }
    else
    {
        isLeapYear=true;
    }
}

if(isLeapYear){
    alert(year+" là năm nhuận");
}
else{
    alert(year + " không phải năm nhuận");
}