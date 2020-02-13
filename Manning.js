

//function Manning() {
// var resultDIV = document.getElementById('result');
//// Declaration variables
// var Area = parseFloat(document.getElementById('AreaValue').value);
// var Per = parseFloat(document.getElementById('PerValue').value);
// var n = parseFloat(document.getElementById('n').value);
// var slope = parseFloat(document.getElementById('slope').value);
//
//    if(document.getElementById("K").checked){
//       var k = document.getElementById("K").value;
//       var c= " ft/s"
////       alert (k);
//    }
//    if(document.getElementById("KSI").checked){
//       var k = document.getElementById("KSI").value;
//       var c= " m/s"
////       alert (k);
//    }
//
////Multiplication
//r=Math.pow(Area/Per,2/3);
//s=Math.pow(slope,1/2);
//v=(k/n)*r*s;
////Print result
//    resultDIV.innerHTML="<p>"+ "Computed flow velocity is " + v + c +"</p>"
//
//
//}




function Manning() {
 var resultDIV = document.getElementById('result');
// Declaration variables
 var Area = parseFloat(document.getElementById('AreaValue').value);
 var Per = parseFloat(document.getElementById('PerValue').value);
 var n = parseFloat(document.getElementById('n').value);
 var slope = parseFloat(document.getElementById('slope').value);
//
    if ( isNaN(Area) || Area < 0 || isNaN(Per) || Per < 0 || isNaN(n) || n < 0 || isNaN(slope) || slope < 0 ) {
    confirm (" the inputs are not complete, or are significantly out of range");
    }


    if(document.getElementById("K").checked){
       var k = document.getElementById("K").value;
       var c= " ft/s"
//
    }
    if(document.getElementById("KSI").checked){
       var k = document.getElementById("KSI").value;
       var c= " m/s"
    } else {
    confirm (" the inputs are not complete, or are significantly out of range");
    }

//Multiplication
r=Math.pow(Area/Per,2/3);
s=Math.pow(slope,1/2);
v=(k/n)*r*s;
//Print result
    resultDIV.innerHTML="<p>"+ "Computed flow velocity is " + v + c +"</p>"


}
