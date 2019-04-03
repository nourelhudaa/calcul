var i; ch=" "; S=array[" "," "," "," "," "," "," "];
r=array[" "," "," "," "," "," "," "]; j=0; 

function create(i){
ch=ch+i;
return ch ;
}
function del() {
    var boo=document.getElementById('aff');
ch=boo.value;
var y=ch.length-1;
ch=ch.substring(0,y);
return ch;

}
function fulldel() {
    ch=" ";
    return(ch);
}
function opp(opa){
var boo=document.getElementById('aff');
ch=boo.value;
if (opa='+'){ ch+='+';}
else if (opa='-'){ ch+='-';}
else if (opa='*'){ ch+='*';}
else if (opa='/'){ ch+='/';}
return ch ;

}

function res(){
    
}