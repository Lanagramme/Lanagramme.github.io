var button = 0;

function a(lien) {    
    if (button  == lien) {
        /*Si le dernier menu sur lequel l'utilisateur a cliqué est ouvert on le ferme*/
        document.getElementById(lien).style.display = 'none';

        button = 0; 
    }
            else
            {
                /*sinon on ferme tous les menus */
                var y = document.getElementsByClassName("menu");
                
                var i;
                for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}

                /*et on ouvre le menu sur lequel l'utilisateur à cliqué*/
                document.getElementById(lien).style.display = 'block';

                button = lien; 
            }
        }


function onferme(lien) {document.getElementById(lien).style.display = 'none';}

function onouvre(lien, menu)
{
    let x = document.getElementsByClassName(menu);
                
        let i;
        for (i = 0; i < x.length; i++) { x[i].style.display = 'none';}

        document.getElementById(lien).style.display = 'block';
}

function b(lien, menu)
{
    switch (menu)
        case 1:
            if (lien = varmenu1) {   onferme(lien); varmenu1 = 0; }
            else {   onouvre(lien, menu); varmenu1 = lien; }
        break;
    
        case 2:
            if (lien = varmenu2) {   onferme(lien) ; varmenu2 = 0;}
            else {   onouvre(lien, menu); varmenu2 = lien; }
        break;
    
        case 3:
            if (lien = varmenu3) {   onferme(lien) ; varmenu3 = 0; }
            else {   onouvre(lien, menu); varmenu3 = lien; }
        break;
    
        case 4:
            if (lien = varmenu1) {   onferme(lien); varmenu1 = 0; }
            else {   onouvre(lien, menu); varmenu1 = lien; }
        break;
    
        case 5:
            if (lien = varmenu1) {  onferme(lien) ; varmenu1 = 0; }
            else {  onouvre(lien, menu); varmenu1 = lien; }
        break;
}