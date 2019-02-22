function efface() {
    let all = document.getElementsByClassName('case');
    for (i=0; i < all.length; i++){
        all[i].style.backgroundColor = 'white';
    }
}

function portee(a, b) {
    let xy = document.getElementById(a);
    xy.style.backgroundColor = 'red';
    
    let all = document.getElementsByClassName('case');
    if(b - 1 >= 0) {all[b - 1].style.backgroundColor = 'red';}
    if(b + 1 < all.length ) {all[b + 1].style.backgroundColor = 'red';}
}
