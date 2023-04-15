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
    screen.value = "sin(" + screen.value + ") = " + Math.sin(screen.value);
}
function cos() {
    screen.value = "cos(" + screen.value + ") = " + Math.cos(screen.value);
}
function tan() {
    screen.value = "tan(" + screen.value + ") = " + Math.tan(screen.value);
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

function pow(){
    screen.value = screen.value+"² = " + parseFloat(screen.value)*parseFloat(screen.value);
}

function fact() {
    let n = screen.value;
    let fac=1;
    for (let i = 1; i <= n; i++) {
        fac=fac*(i);
    }
    screen.value=screen.value+"! = "+fac;
}

function sqrt(params) {
    screen.value ="√("+screen.value +") = " + Math.sqrt(screen.value);
}

function backspace() {
    screen.value=screen.value.substr(0,screen.value.length-1);
}