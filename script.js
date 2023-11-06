function imgOn() {
    var img = document.getElementById('myImg');
    var btnOn = document.getElementById('btnOn');
    var btnOff = document.getElementById('btnOff');
    if (img.src.endsWith('./Assets/bulboff.gif')){
        img.src = './Assets/bulbon.gif';
        img.alt = 'Bulb On';
    } else {
        img.src = './Assets/bulbon.gif';
        img.alt = 'Bulb On';
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
