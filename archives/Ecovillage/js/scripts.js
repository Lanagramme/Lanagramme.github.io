cl = console.log

const Catch = function(a) {
    //recuperer l'id de l'article dans l'url
    temp = window.location.search.substr(1).split("=")
    id = temp[1]

    //remplir la page en fonction des id des balises
    $("#title").html(a[id].title);
    $("#date").html(a[id].date);
    $("#author").html(`<a href="auteur.html?${a[id].author}">${a[id].author}</a>`);
    
    for(f=0; f< a[id].tags.length; f++){
        $("#tags").append(` <a href="tag.html?${a[id].tags[f]}">${a[id].tags[f]}</a>`);
        if (f < a[id].tags.length -1) $("#tags").append(`,`) ;
    }

    $("#extract").html(a[id].extract);
    $("#content").append(a[id].content);
}

const Launch = function() {
    //recuperer le tableau des articles sur le serveur
    Reload();

    //ajouter l'article entré dans le form au tableau
    a.push({
        date: $("#date").val(),
        author: $("#author").val(),
        title: $("#title").val(),
        tags: document.getElementById("tags").value.split(","),
        extract: $("#extract").val(),
        content: $("#content").val()
    });
    
    //envoyer la liste mise à jour au serveur
    Save(a);
}

async function Reload(){
    //recuperer le tableau des articles sur le serveur par une promesse
    //exploiter les données sur la page: Reload().then((data) => {a=data ; callback})
    const result = await $.ajax({
        url: "http://mondesperdus.com/Eden/readeden",
        type: "GET"
    });
    return JSON.parse(result)
}

Save = (z) => {
    //envoyer des informations au serveur pour remplacer la liste existante d'articles
    $.post( 
        "http://mondesperdus.com/Eden/writeden", 
        { data: z }, 
        (data, status) => { cl(status) }
    );
}


function Find(w, x) {
    //affiche la liste des articles possédant le tag "x"
    // a faire : envoyer par l'url le champ a chercher et la veleur désirée
    j = 0
    $("#pageTitle").html(x)
    for (i of a) {
        if (i[w].includes(x)) $("#content").append(`<li><a href="./templateArticle.html?id=${j}">${i.title}</a></li>`);
        j++;
    }
}

Reload();