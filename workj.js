var i; ch=" "; S=array[" "," "," "," "," "," "," "];
r=array[" "," "," "," "," "," "," "]; j=0;
function create(i){
ch=ch+i;
return ch ;
}
function del() {
ch.substring(0,(ch.length)-1);
return(ch);
}
function fulldel() {
    ch=" ";
    return(ch);
}
function add(){
    S[j]=ch;
    ch= " ";
    S[j+1]="+";
    j=j+2;
    return(ch);
}
function sub(){
    S[j]=ch;
    ch= " ";
    S[j+1]="-";
    j=j+2;
    return(ch);
}
function mult(){
    S[j]=ch;
    ch= " ";
    S[j+1]="*"
    j=j+2;
    return (ch);
}
function div(){
    S[j]=ch;
    ch= " ";
    S[j+1]="/";
    j=j+2;
    return(ch);
}
function res(){
    j=0;
    for(i=0;i<=S.length;i++)
    {
       if (S[i]="*")
       {
         r[j]=Number(S[i-1])*Number(S[i+1]);
         S[i-1]=r[j];
         S[i]="";S[i+1]="";
         for(k=0;k<=S.length;k++)
          if (S[k]="") {do{
              S[k]=S[k+1];
              k=k+1;
          }while (k!=S.length);
         }

       }
       if (S[i]="/")
       {
         r[j]=Number(S[i-1])/Number(S[i+1]);
         S[i-1]=r[j];
         S[i]="";S[i+1]="";
         for(k=0;k<=S.length;k++)
          if (S[k]="") {do{
              S[k]=S[k+1];
              k=k+1;
          }while (k!=S.length);
         }

       }
    }
    for(i=0;i<=r.length;i++)
    {if (r[i]="+")
    {
      r[i+1]=Number(S[i-1])+Number(S[i+1]);
      r[i]="";r[i-1]=""
      for(k=0;k<=r.length;k++)
       if (r[k]="") {do{
           r[k]=r[k+1];
           k=k+1;
       }while (k!=r.length);
      }

    }

    }
    {if (r[i]="-")
    {
      r[i+1]=Number(S[i-1])-Number(S[i+1]);
      r[i]="";r[i-1]=""
      for(k=0;k<=r.length;k++)
       if (r[k]="") {do{
           r[k]=r[k+1];
           k=k+1;
       }while (k!=r.length);
      }
    }
    }
for (i=0;i<=r.length;i++){
    if (r[i]!=""){return r[i];}
}
}