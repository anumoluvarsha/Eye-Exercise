const balls = document.getElementsByClassName('ball');
const balls1 = document.getElementsByClassName('ball1');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

for (let i=0;i<2;i++){
  let change = [balls,balls1];
  change[i][0].style.left = x;
   change[i][0].style.top = y;
    change[i][0].transform = 'translate(-' + x + ',-' + y + ')';
}

};
