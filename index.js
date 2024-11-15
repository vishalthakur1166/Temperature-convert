const caluclation = () => {
    const numberTemp = document.getElementById('temp').value;
     const tempSelected = document.getElementById('temp_diff');
     const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; 
     const celToFeh = (cel) => {
         let fahrenhiet =  Math.round((cel * 9 /5) + 32);
         return fahrenhiet;
     }
 
     const fehToCel = (fehr) => {
         let Celsius =  Math.round((fehr-32)* 9 /5);
         return Celsius;
     }
 
     let result;
     
     if (valueTemp === 'cel') {
         result = celToFeh(numberTemp);
         document.getElementById('result').innerHTML= `=${result} Fahrenheit`;
      }
      else{
         result = fehToCel(numberTemp);
         document.getElementById('result').innerHTML= `= ${result} Celsius`;
      }
 }