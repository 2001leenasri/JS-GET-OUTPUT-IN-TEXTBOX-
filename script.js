var get=function() {
    let lowcase = document.querySelector(".element").value;
    document.querySelector(".ans").value=lowcase.toUpperCase();
    
  };

 function displayText() {
//   Get the input value from text box and stored in variable.

  const input_Value = document.getElementById("inputResultData").value;

  // Displaying  the getting input data
 document.getElementById("dataDisplay").innerText = input_Value;
}

