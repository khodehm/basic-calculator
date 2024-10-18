//تابع حمع اعداد
function handelSubmitFormSumation() {
    const resultVisibility = document.getElementById("result");
  event.preventDefault();
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  if (value1 && value2) {
    let number = parseInt(value1) + parseInt(value2);
    document.getElementById("result").innerHTML=`<p>حاصل جمع =</p> <p>${number}</p>`
  } else {
    alert("مقادیر خالی");
  }
}
// btn.addEventListener("click",handelSubmitForm(value1,value2))
// `<div>result :${number}</div>`
//تابع ضرب اعداد
function handelSubmitFormMultiplication() {
  event.preventDefault();
  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  if (value1 && value2) {
    let number = parseInt(value1) * parseInt(value2);
    document.getElementById("result").innerHTML=`<p>حاصل ضرب =</p> <p>${number}</p>`
  } else {
    alert("مقادیر خالی");
  }
}
// تابع تقسیم
function handelSubmitFormDivide() {
  event.preventDefault();

  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  if (value1 && value2) {
    let number = parseInt(value1) / parseInt(value2);
    document.getElementById("result").innerHTML=`<p>حاصل تقسیم =</p> <p>${number}</p>`
  } else {
    alert("مقادیر خالی");
  }
}
//تابع تفریق
function handelSubmitFormSubstrack() {
  event.preventDefault();

  const value1 = document.getElementById("input1").value;
  const value2 = document.getElementById("input2").value;
  if (value1 && value2) {
    let number = parseInt(value1) - parseInt(value2);
    document.getElementById("result").innerHTML=`<p>حاصل تفریق =</p> <p>${number}</p>`
  } else {
    alert("مقادیر خالی");
  }
}
