var gri = document.getElementsByClassName('section');

function creer() {

    let act = "", pos = 0, dex = [];
    let col = Number(document.getElementById("col").value);
    let row = Number(document.getElementById("row").value);

    if (isNaN(col) || isNaN(row)) {alert("Veuillez entrer des valeurs numériques.");}
    else {
        let max = col - 1,  min = 0;

        act += "<table>";
        for (i = 0; i < row; i++) {
            act += "<tr>";
            for (j = 0; j < col; j++) {
                act += "<td class='section' onclick='z(" + pos + ")'></td>"; 
                dex.push([min, max]);
                pos++;
            }
            act += "</tr>";
            max += col;
            min += col;
        }
        act += "</table>";

        document.getElementById('board').innerHTML = act;
        localStorage.setItem("index", JSON.stringify(dex));
    }
} //crée le plateau

function a(pos) {
    f();
    gri[pos].className += " active";

    let col = Number(document.getElementById("col").value);
    let row = Number(document.getElementById("row").value);
    let dex = JSON.parse(localStorage.getItem("index"));
    let tot = (col * row) - 1, min = dex[pos][0], max = dex[pos][1];

    gri[pos].style.backgroundColor = 'red';

    if (pos - 1 >= min) { gri[pos - 1].style.backgroundColor = 'red'; }
    if (pos + 1 <= max) { gri[pos + 1].style.backgroundColor = 'red'; }
    if (pos - col >= 0) { gri[pos - col].style.backgroundColor = 'red'; }
    if (pos + col <= tot) { gri[pos + col].style.backgroundColor = 'red'; }
} //dessine une portée de 1 autour de la case active

function b(pos) {
    f();
    gri[pos].className += " active";

    let col = Number(document.getElementById("col").value);
    let row = Number(document.getElementById("row").value);
    let dex = JSON.parse(localStorage.getItem("index"));
    let tot = (col * row) - 1, min = dex[pos][0], max = dex[pos][1];

    gri[pos].style.backgroundColor = 'red';

    if (pos - 1 >= min) { gri[pos - 1].style.backgroundColor = 'red'; }
    if (pos - 2 >= min) { gri[pos - 2].style.backgroundColor = 'red'; }
    if (pos-1-col >= min-col && pos-1-col >= 0) { gri[pos-1-col].style.backgroundColor = 'red'; }
    if (pos-1+col >= min+col && pos-1+col <tot) { gri[pos-1+col].style.backgroundColor = 'red'; }

    if (pos + 1 <= max) { gri[pos + 1].style.backgroundColor = 'red'; }
    if (pos + 2 <= max) { gri[pos + 2].style.backgroundColor = 'red'; }
    if (pos+1-col <= max-col && pos+1-col >= 0) { gri[pos+1-col].style.backgroundColor = 'red'; }
    if (pos+1+col <= max+col && pos+1+col <=tot) { gri[pos+1+col].style.backgroundColor = 'red'; }

    if (pos - col >= 0) { gri[pos - col].style.backgroundColor = 'red'; }
    if (pos - col*2 >= 0) { gri[pos - col*2].style.backgroundColor = 'red'; }

    if (pos + col <= tot) { gri[pos + col].style.backgroundColor = 'red'; }  
    if (pos + col*2 <= tot) { gri[pos + col*2].style.backgroundColor = 'red'; }  
} //dessine une portée de 2 autour de la case active

function f() {
    for (k = 0; k < gri.length; k++) {
        gri[k].style.backgroundColor = '#f1f3f5';
        gri[k].className = 'section';
    }
} //retourne toutes les cases du plateau à leur état initial

document.addEventListener('keydown', function (event) {

    let col = Number(document.getElementById("col").value);
    let row1 = Number(document.getElementById("row").value);
    let dex = JSON.parse(localStorage.getItem("index"));
    let tot = (col * row1) - 1, pos = 0;

    if (event.keyCode === 37) {
        for (let i = 0; i <= gri.length - 1; i++) {
            if (gri[i].classList.contains("active")) {
                pos = i;
                if (pos > dex[pos][0]) {
                    f();
                    z(pos - 1);
                }
                break;
            }
        }
    } else if (event.keyCode === 39) {
        for (let i = 0; i <= gri.length - 1; i++) {
            if (gri[i].classList.contains("active")) {
                pos = i;
                if (pos < dex[pos][1]) {
                    f();
                    z(pos + 1);
                }
                break;
            }
        }
    } else if (event.keyCode === 38) {
        for (let i = 0; i <= gri.length - 1; i++) {
            if (gri[i].classList.contains("active")) {
                pos = i;
                if (pos - col >= 0) {
                    f();
                    z(pos - col);
                }
                break;
            }
        }
    } else if (event.keyCode === 40) {
        for (let i = 0; i <= gri.length - 1; i++) {
            if (gri[i].classList.contains("active")) {
                pos = i;
                if (pos + col <= tot) {
                    f();
                    z(pos + col);
                }
                break;
            }
        }
    }
}); //déplacement  de la case active en fonction de keybard input

function g(a, b, c){
    let tabi = document.getElementsByClassName(b);
    let taba = document.getElementsByClassName(c);
    for (i=0; i<tabi.length; i++){
        tabi[i].style.border = '1px solid gray';
        tabi[i].style.borderBottom = '2px solid black';
    }
    for (i=0; i<taba.length; i++){
        if (i == a){taba[i].style.display = "block";}
        else {taba[i].style.display = "none";}
        
    }
    tabi[a].style.border = '2px solid black';
    tabi[a].style.borderBottom = '2px solid white';
}



function z (pos){
    f();

    gri[pos].style.backgroundColor = 'red';
    gri[pos].className += " active";
}

function h(rrr){
    let pos = -1;
    for (let i = 0; i <= gri.length - 1; i++) {
        if (gri[i].classList.contains("active")) {
            pos = i;
            break;
        }
    }
    console.log(pos);
    if (pos != -1) {
        switch (rrr){
            case 1:
            a(pos);
            break;
            case 2:
            b(pos);
            break;
        }
    }
}
