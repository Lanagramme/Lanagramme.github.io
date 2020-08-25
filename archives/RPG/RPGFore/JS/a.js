var button = 0;

function a(lien, menu)
{
    let elmt = document.getElementById(lien);
    


    if (button == lien)  { 
        elmt.style.display = 'none';

        button = 0;
    }
    else {
        let x = document.getElementsByClassName(menu);

        for (i = 0; i < x.length; i++)
        { x[i].style.display = 'none';}

        elmt.style.display = 'block';

        button = lien;
    }   
}

function c(lien, menu, open, close)
{
    let elmt = document.getElementById(lien);
    let hub = document.getElementById(menu);

    if (elmt.style.display == 'none')
        { elmt.style.display = 'block';

        hub.className = open;}
    else {elmt.style.display = 'none';
        hub.className = close;}

}          