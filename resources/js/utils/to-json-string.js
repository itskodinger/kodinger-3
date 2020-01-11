// https://codepen.io/gabrieleromanato/pen/LpLVeQ
function toJSONString( form ) {
 var obj = {};
 var elements = form.querySelectorAll( "input, select, textarea" );
 for( var i = 0; i < elements.length; ++i ) {
     var element = elements[i];
     var name = element.name;
     var value = element.value;

     if( name ) {
         obj[ name ] = value;
     }
 }

 return JSON.stringify( obj );
}

export default toJSONString;