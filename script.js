function imgOn() {
    var img = document.getElementById('myImg');
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



function toggleButtonColors(clickedButton){
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var container = document.getElementById('cont');

    if (clickedButton === 1) {
        button1.style.backgroundColor = 'green';
        button1.style.color = 'white';
        button2.style.backgroundColor = 'red';
        button2.style.color = 'black';
        container.style.backgroundColor = 'gray';
    } else if (clickedButton === 2) {
        button1.style.backgroundColor = 'red';
        button1.style.color = 'green';
        button2.style.backgroundColor = 'green';
        button2.style.color = 'white';
        container.style.backgroundColor = 'black';

    }
}