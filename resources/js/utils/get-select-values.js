// https://stackoverflow.com/questions/5866169/how-to-get-all-selected-values-of-a-multiple-select-box/39363742
function getSelectValues(select) {
 var result = [];
 var options = select && select.options;
 var opt;

 for (var i=0, iLen=options.length; i<iLen; i++) {
     opt = options[i];

     if (opt.selected) {
         result.push(opt.value || opt.text);
     }
 }
 return result;
}

export default getSelectValues;