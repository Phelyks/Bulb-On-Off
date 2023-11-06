function imgOn() {
    var img = document.getElementById('myImg');
    if (img.src.endsWith('./Assets/bulboff.gif')){
        img.src = './Assets/bulbon.gif';
        img.alt = 'Bulb On';
    } else {
        img.src = './Assets/bulbon.gif';
        img.alt = 'Bulb On';
    }


    var btn = document.getElementById('btn');
    if (btn.style.backgroundColor === 'red') {
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    } else {
        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';
    }
}

function imgOff() {
    var img = document.getElementById('myImg');
    if (img.src.endsWith('./Assets/bulbon.gif')){
        img.src = './Assets/bulboff.gif';
        img.alt = 'BUlb Off';
    } else {
        img.src = './Assets/bulboff.gif';
        img.alt = 'Bulb Off';
    }
}