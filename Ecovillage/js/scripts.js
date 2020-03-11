cl = console.log

const Catch = function(a) {
    //recuperer l'id de l'article dans l'url
    temp = window.location.search.substr(1).split("=");
    id = temp[1]
    
    //entrer les tags
    let TT = document.getElementById("tags");
    for(i=0; i < a[id].tags.length; i++) {
        TA = document.createElement("a");
        TA.href = "tag.html?"+a[id].tags[i];
        TA.innerHTML = a[id].tags[i];
        TT.appendChild(TA);
    }

    //remplir la page en fonction des id des balises
    $("#date").html(a[id].date);
    $("#author").html(a[id].author);
    $("#title").html(a[id].title);
    $("#extract").html(a[id].extract);
    $("#content").append(a[id].content);
}

const Launch = function() {
    let f = document.getElementById("form");
    //recuperer le tableau des articles sur le serveur
    Reload();

    //ajouter l'article entré dans le form au tableau
    a.push({
        date: f.getElementById("date").value,
        author: f.getElementById("author").value,
        title: f.getElementById("title").value,
        tags: f.getElementById("tags").value.split(","),
        extract: f.getElementById("extract").value,
        content: f.getElementById("content").value
    })
    
    //envoyer la liste mise à jour au serveur
    Atall(a)
    
}

Reload = () => { 
    //recuperer le tableau des articles sur le serveur
    $.ajax({
       url: "http://mondesperdus.com/Eden/readeden",
       success: function(result){ a = JSON.parse(result); cl(a) }
   });
}; 

Atall = (z) => {
    //envoyer des informations au serveur pour remplacer la liste existante d'articles
    $.post(
        "http://mondesperdus.com/Eden/writeden",
        { data: z },
        function(data, status){ cl(status) }
    );
}


Reu = () => {
    //affiche la liste des articles possédant le tag "Réunion"
    j = 0
    for (i of a) {
        if (i.tags.includes("Reunion")) {
            $("#content").append(`<li><a href="./templateArticle.html?id=${j}">${i.title}</a>  </li>`)
        } 
        j++
    }
}

Reload()