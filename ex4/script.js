document.write("Les nombres premiers compris entre 0 et 100 sont :<br>");
for(let i=2;i<=100;i++)
{ let trouve=false;
for(j=2;j<i/2;j++)
{
if(i%j==0)
trouve=true;
}
if(trouve==false)
document.write(i,",");
}


