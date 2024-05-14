

function getTime(){
const time=new Date();
let hrs=time.getHours();
let min=time.getMinutes();
let sec=addZero(time.getSeconds());
if(hrs>12){
  hrs=hrs-12;
  document.getElementById('hours').innerHTML=hrs;
  document.getElementById('am').innerHTML='PM';
}
else{
  document.getElementById('hours').innerHTML=hrs;
}

  document.getElementById('minutes').innerHTML=min;
  document.getElementById('seconds').innerHTML=sec;

}
function addZero(sec){
if(sec<10){
  return "0"+sec;
}
return sec;
}
setInterval(getTime,500);