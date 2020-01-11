// https://stackoverflow.com/questions/14321862/javascript-get-value-from-multiple-inputs-in-an-array
function getMultipleInputValue(form) {
 var inputs = form.querySelectorAll('input, select, textarea'),
     names  = [].map.call(inputs, function( input ) {
         if(input.value.trim().length > 0) 
             return input.value;
     });

 return names;
}

export default getMultipleInputValue;