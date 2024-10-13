

//تابع حمع اعداد
function  handelSubmitFormSumation () {
    const value1=document.getElementById("input1").value;
    const value2=document.getElementById("input2").value;
    if(value1&&value2){    
    let number= parseInt(value1) + parseInt(value2);
    alert('حاصل:'+number);
    }else{
        alert("مقادیر خالی")

    }
}
    // btn.addEventListener("click",handelSubmitForm(value1,value2))
    // `<div>result :${number}</div>`
    //تابع ضرب اعداد
    function  handelSubmitFormMultiplication () {
        const value1=document.getElementById("input1").value;
        const value2=document.getElementById("input2").value;
        if(value1&&value2){
        let number= parseInt(value1) * parseInt(value2);
        alert('حاصل:'+number)
    }else{
            alert("مقادیر خالی")

        }
    }
    // تابع تقسیم 
    function  handelSubmitFormDivide () {
        const value1=document.getElementById("input1").value;
        const value2=document.getElementById("input2").value;
        if(value1&&value2){
            
        let number= parseInt(value1) / parseInt(value2);
        alert('حاصل:'+number)

        }else{
            alert("مقادیر خالی")
        }
    }
    //تابع تفریق
    function  handelSubmitFormSubstrack () {
        const value1=document.getElementById("input1").value;
        const value2=document.getElementById("input2").value;
        if(value1&&value2){
            let number= parseInt(value1)  - parseInt(value2);
            alert('حاصل:'+number)
        }
        else{
            alert("مقادیر خالی")
        }
    }


