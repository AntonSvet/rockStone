const $message = document.getElementById('message'),
  $btn = document.querySelector('.btn'),
  $text = document.querySelector('.text'),
  $time = document.querySelector('.time')

$btn.addEventListener('click', printaMessage)

function printaMessage() {
  const newMessage = document.createElement('p')
  newMessage.innerText = $message.value
  if ($message.value !== '') {
    $text.appendChild(newMessage)
    $message.value = ''
  }
}
//////////////////////////////

const $hours = document.querySelector('#hours'),
  $minutes = document.querySelector('#minutes'),
  $seconds = document.querySelector('#seconds')

function currentTime() {
  const now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds()

  $hours.innerText = getZero(hour)
  $minutes.innerText = getZero(minute)
  $seconds.innerText = getZero(second)
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return '0' + num
  } else {
    return num
  }
}
setInterval(currentTime, 1000)
currentTime()
