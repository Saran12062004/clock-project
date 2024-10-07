let ampm = document.getElementById('ampm')
function displayTime(){
    let dataTime = new Date()
    let hr = dataTime.getHours();
    let min = padZero(dataTime.getMinutes());
    let sec = padZero(dataTime.getSeconds());
    if(hr>12){
        hr = hr -12
        ampm.innerHTML = 'pm'
    }
    
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = min
    document.getElementById('sec').innerHTML = sec
}

function padZero(num){
    return num<10?'0'+num:num
}

setInterval(displayTime,500)