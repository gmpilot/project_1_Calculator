let screen = document.querySelector('#display');
let screenBtn = document.querySelectorAll('.disBtn');

for (eachBtn of screenBtn) {
    eachBtn.addEventListener('click', (e) => {
        btnList = e.target.innerText;

        if (btnList == 'X') {
            btnList = '*';
        }
        if (btnList == '÷') {
            btnList = '/';
        }

        if (btnList == "=") {

            btnList = "=" + (eval(screen.value));
        }
        screen.value += btnList;
    })
}

function sin() {
    let num;
    if (screen.value == '0') {
        num = 0;
        screen.value = "sin(" + screen.value + "˚) = " + num;
    } else if (screen.value == '30') {
        num = 1 / 2;
        screen.value = "sin(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '45') {
        num = Math.sqrt(2) / 2;
        screen.value = "sin(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '60') {
        num = Math.sqrt(3) / 2;
        screen.value = "sin(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '90') {
        num = 1;
        screen.value = "sin(" + screen.value + "˚) = " + num;
    }else{
        screen.value = "sin(" + screen.value + ") = " + Math.sin((screen.value) * Math.PI / 180);
    }  
}

function cos() {
    let num;
    if (screen.value == '0') {
        num = 1;
        screen.value = "cos(" + screen.value + "˚) = " + num;
    } else if (screen.value == '30') {
        num = Math.sqrt(3) / 2;
        screen.value = "cos(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '45') {
        num = Math.sqrt(2) / 2;
        screen.value = "cos(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '60') {
        num = 1 / 2;
        screen.value = "cos(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '90') {
        num = 0;
        screen.value = "cos(" + screen.value + "˚) = " + num;
    }else{
        screen.value = "cos(" + screen.value + ") = " + Math.cos((screen.value) * Math.PI / 180);
    }  
}

function tan() {
    let num;
    if (screen.value == '0') {
        num = 0;
        screen.value = "tan(" + screen.value + "˚) = " + num;
    } else if (screen.value == '30') {
        num = 1 / Math.sqrt(3);
        screen.value = "tan(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '45') {
        num = 1;
        screen.value = "tan(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '60') {
        num = Math.sqrt(3);
        screen.value = "tan(" + screen.value + "˚) = " + num;
    }
    else if (screen.value == '90') {
        screen.value = "tan(" + screen.value + "˚) is undefined";
    }else{
        screen.value = "tan(" + screen.value + ") = " + Math.tan((screen.value) * Math.PI / 180);
    }  
}

function log() {
    screen.value = "log(" + screen.value + ") = " + Math.log(screen.value);
}
function eValue() {
    screen.value += Math.E;
}
function pie() {
    screen.value += Math.PI;
}

function pow() {
    screen.value = screen.value + "² = " + parseFloat(screen.value) * parseFloat(screen.value);
}

function fact() {
    let n = screen.value;
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac = fac * (i);
    }
    screen.value = screen.value + "! = " + fac;
}

function sqrt(params) {
    screen.value = "√(" + screen.value + ") = " + Math.sqrt(screen.value);
}

function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
