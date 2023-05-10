const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const digHr = document.querySelector('.digital-hour');
const digMin = document.querySelector('.digital-min');
const digSec = document.querySelector('.digital-sec');
const digAmpm = document.querySelector('.digital-ampm');

setInterval(()=>{
let day = new Date();

let hrArrow = day.getHours() * 30;
let minArrow = day.getMinutes() * 6;
let secArrow = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hrArrow+(minArrow/12)}deg)`;
min.style.transform = `rotateZ(${minArrow}deg)`;
sec.style.transform = `rotateZ(${secArrow}deg)`;

//digitalclock
let daydig = new Date().toLocaleString('en-US');
console.log();
let dh = day.getHours();
let dm = day.getMinutes();
let ds = day.getSeconds();
// let dampm = 'AM';

//add zero before single digit Num
dh = (dh < 10) ? '0' + dh : dh;
dm = (dm < 10) ? '0' + dm : dm;
ds = (ds < 10) ? '0' + ds : ds;

digHr.innerHTML = dh + ':';
digMin.innerHTML = dm + ':';
digSec.innerHTML = ds + '&nbsp';
// digAmpm.innerHTML = dampm;
})



