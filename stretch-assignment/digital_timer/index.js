let currentTime = 0;
let intervalId = null;
const digits = document.getElementsByClassName('digits')[0];
const increment = () => {
  currentTime += 0.01;
  currentTime = parseFloat(currentTime.toFixed(2));
  if (currentTime === 10) {
    clearInterval(intervalId);
    document.getElementById('secondTens').innerText = 1;
    document.getElementById('secondOnes').innerText = 0;
    document.getElementById('msHundreds').innerText = 0;
    document.getElementById('msTens').innerText = 0;
    digits.style.color = 'red';
    return;
  }
  document.getElementById('secondOnes').innerText = currentTime.toString().substr(0, 1);
  document.getElementById('msHundreds').innerText = currentTime.toString().substr(-2, 1);
  document.getElementById('msTens').innerText = currentTime.toString().substr(-1, 1);
}

const startInterval = () => {
  document.getElementById('secondTens').innerText = 0;
  intervalId = setInterval(increment, 10);
}

const resetInterval = () => {
  digits.style.color = 'black';
  clearInterval(intervalId);
  currentTime = 0;
  document.getElementById('secondTens').innerText = '-';
  document.getElementById('secondOnes').innerText = '-';
  document.getElementById('msHundreds').innerText = '-';
  document.getElementById('msTens').innerText = '-';
}

const makeButton = (content, event) => {
  let button = document.createElement('button');
  button.innerText = content;
  button.onclick = event;
  button.className = `btn btn-${content}`;
  return button;
}

const css = 'body { flex-direction: column; } .btn { text-transform: capitalize; display: inline-block; margin-bottom: 0; font-weight: 400; text-align: center; white-space: nowrap; vertical-align: middle; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; background-image: none; border: 1px solid transparent; padding: 6px 12px; font-size: 14px; line-height: 1.42857143; border-radius: 4px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .btn-start { color: #fff; background-color: #5cb85c; border-color: #4cae4c; } .btn-reset { color: #fff; background-color: #d9534f; border-color: #d43f3a; }';

const style = document.createElement('style');
document.head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

const buttonDiv = document.createElement('div');
buttonDiv.className = 'button-grp';
document.body.append(buttonDiv);

buttonDiv.append(makeButton('start', startInterval));
buttonDiv.append(makeButton('reset', resetInterval));
