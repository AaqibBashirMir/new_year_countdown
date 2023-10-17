
let day=document.getElementById("day")
let hour=document.getElementById("hour")
let min=document.getElementById("minute")
let sec=document.getElementById("sec");
let body=document.querySelector("body");
let container=document.querySelector(".container")
let colors = [
    "#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF",
    "#FF3366", "#66FF33", "#3366FF", "#FF33FF", "#FF9933",
    "#33FF99", "#9933FF", "#FF33CC", "#CCFF33", "#33CCFF",
    "#FF66CC", "#CCFF66", "#66CCFF", "#FF66FF", "#FFCC33",
    "#33FFCC", "#CC33FF", "#FF6633", "#3366FF", "#FF3333",
    "#FF6633", "#33FF33", "#3333FF", "#FF3333", "#FFFF33",
    "#33FFFF", "#3333FF", "#FF33FF", "#FF9933", "#33FF99",
    "#9933FF", "#FF33CC", "#CCFF33", "#33CCFF", "#FF66CC",
    "#CCFF66", "#66CCFF", "#FF66FF", "#FFCC33", "#33FFCC",
    "#CC33FF", "#FF6633", "#3366FF", "#FF3333", "#FF6633",
    "#33FF33", "#3333FF", "#FF3333", "#FFFF33", "#33FFFF",
    "#3333FF", "#FF33FF", "#FF9933", "#33FF99", "#9933FF",
    "#FF33CC", "#CCFF33", "#33CCFF", "#FF66CC", "#CCFF66",
    "#66CCFF", "#FF66FF", "#FFCC33", "#33FFCC", "#CC33FF",
    "#FF6633", "#3366FF", "#FF3333", "#FF6633", "#33FF33",
    "#3333FF", "#FF3333", "#FFFF33", "#33FFFF", "#3333FF",
    "#FF33FF", "#FF9933", "#33FF99", "#9933FF", "#FF33CC",
    "#CCFF33", "#33CCFF", "#FF66CC", "#CCFF66", "#66CCFF",
    "#FF66FF", "#FFCC33", "#33FFCC", "#CC33FF", "#FF6633",
    "#3366FF", "#FF3333", "#FF6633", "#33FF33", "#3333FF",
    "#FF3333", "#FFFF33", "#33FFFF", "#3333FF", "#FF33FF",
    "#FF9933", "#33FF99", "#9933FF", "#FF33CC", "#CCFF33",
    "#33CCFF", "#FF66CC", "#CCFF66", "#66CCFF", "#FF66FF",
    "#FFCC33", "#33FFCC", "#CC33FF", "#FF6633", "#3366FF",
    "#FF3333", "#FF6633", "#33FF33", "#3333FF", "#FF3333",
    "#FFFF33", "#33FFFF", "#3333FF", "#FF33FF", "#FF9933",
    "#33FF99", "#9933FF", "#FF33CC", "#CCFF33", "#33CCFF",
    "#FF66CC", "#CCFF66", "#66CCFF", "#FF66FF", "#FFCC33",
    "#33FFCC", "#CC33FF", "#FF6633", "#3366FF", "#FF3333",
    "#FF6633", "#33FF33", "#3333FF", "#FF3333", "#FFFF33",
    "#33FFFF", "#3333FF", "#FF33FF", "#FF9933", "#33FF99",
    "#9933FF", "#FF33CC", "#CCFF33", "#33CCFF", "#FF66CC",
    "#CCFF66", "#66CCFF", "#FF66FF", "#FFCC33", "#33FFCC",
    "#CC33FF", "#FF6633", "#3366FF", "#FF3333", "#FF6633",
    "#33FF33", "#3333FF", "#FF3333", "#FFFF33", "#33FFFF",
    "#3333FF", "#FF33FF", "#FF9933", "#33FF99", "#9933FF",
    "#FF33CC", "#CCFF33"]
    let index=0;
    const colors1 = [
        "#FF5733",
        "#33FF57",
        "#5733FF",
        "#FF33A6",
        "#33B2FF",
        "#A633FF",
        "#FF337D",
        "#33FF9B",
        "#9B33FF",
        "#FF8E33",
        "#8EFF33",
        "#3381FF",
        "#FF3381",
        "#B533FF",
        "#FFBE33",
        "#33FFCA",
        "#33FFCA",
        "#8E33FF",
        "#33FFC9",
        "#C933FF",
        "#FF3364",
        "#33FFAB",
        "#AB33FF",
        "#3365FF",
        "#FFD333",
        "#FF3365",
        "#33FFD2",
        "#D333FF",
        "#33D3FF",
        "#FFE533",
        "#33FFE5",
        "#FF33E5",
        "#33E6FF",
        "#E533FF",
        "#33FF55",
        "#55FF33",
        "#FF3358",
        "#33FF69",
        "#6933FF",
        "#FF6933",
        "#33FFCC",
        "#CC33FF",
        "#33FF88",
        "#8833FF",
        "#FF33FF",
        "#33FF33",
        "#FF33B3",
        "#33FF22",
        "#B333FF",
        "#33A5FF",
        "#FF3393",
        "#3393FF",
        "#33FF94",
      ];
      let index1=0;
    


function time(){
   
    let newYearDate=new Date("january 1, 2024 00:00:00").getTime();
    let now=new Date().getTime();
    if(now==newYearDate){
        clearInterval(id);
    }

let timePending=newYearDate-now;

let oneSecond=1000;
let oneMin=oneSecond*60;
let oneHour=oneMin*60;
let oneDay=oneHour*24;

let remDays=Math.floor(timePending/oneDay);
let remHours=Math.floor((timePending%oneDay)/oneHour);
let remMins=Math.floor((timePending%oneHour)/oneMin);
let remSecs=Math.floor((timePending%oneMin)/oneSecond);


day.innerText=remDays+" days left";
hour.innerText=remHours+" hours left";
min.innerText=remMins+" minutes left";
sec.innerText=remSecs+" seconds left";

body.style.backgroundColor=colors[index];
    index++;
if(index==colors.length){
    index=1;
}
day.style.backgroundColor=colors1[index1];
hour.style.backgroundColor=colors1[index1+1];
min.style.backgroundColor=colors1[index1+2];
sec.style.backgroundColor=colors1[index1+3];
day.style.color=colors[index];
hour.style.color=colors[index+1];
min.style.color=colors[index+2];
sec.style.color=colors[index+3];
container.style.backgroundColor=colors1[index1+4];
index1++;
if(index1==colors1.length){
    index1=1;
}





}
let id=setInterval(time,1000)
