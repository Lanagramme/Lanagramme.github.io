function next(){
    let compteur = Number(document.getElementById('compteur').innerHTML);
    let etat = Number(document.getElementById('etat').innerHTML);
    let pv = Number(document.getElementById('vie').innerHTML);
    console.log({compteur, etat, pv});
    switch (etat){
        case 1:
            if (compteur <= 0)
            {
                etat = 0;
                document.getElementById('state').className = 'nor';
                document.getElementById('etat').innerHTML = 0;
            }
            else {
                compteur--;
                document.getElementById('state').className = 'eau';
                document.getElementById('compteur').innerHTML = compteur;
            }
        break;
        case 2:
            if (compteur <= 0) 
            {
                etat = 0;
                document.getElementById('state').className = 'nor';
                document.getElementById('etat').innerHTML = 0;
            }
            else {
                pv -= 4;
                animateCSS('state', 'tada');
                compteur--;
                document.getElementById('vie').innerHTML = pv;
                document.getElementById('state').className = 'feu';
                document.getElementById('compteur').innerHTML = compteur;
            }
        break;
        default:
    }
}

function chang(a){
    if (a == 2){
        document.getElementById('state').className = 'eau';
        document.getElementById('etat').innerHTML = '1';
        document.getElementById('compteur').innerHTML = '3';}
    else if (a == 1){
        document.getElementById('state').className = 'feu';
        document.getElementById('etat').innerHTML = '2';
        document.getElementById('compteur').innerHTML = '3';}
    
}

function animateCSS(element) {
    const node = document.getElementById(element);
    node.classList.add('vie');

    function handleAnimationEnd() {
        node.classList.remove('vie');
        console.log('bite')
        node.removeEventListener('animationend', handleAnimationEnd);
    }

    node.addEventListener('animationend', handleAnimationEnd);
}