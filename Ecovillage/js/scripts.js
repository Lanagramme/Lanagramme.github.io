const Catch = function(a) {
    document.getElementById("id").innerHTML = a.id;
    document.getElementById("date").innerHTML = a.date;
    document.getElementById("author").innerHTML = a.author;
    document.getElementById("title").innerHTML = a.title;
    tags(a.tags);
    document.getElementById("extract").innerHTML = a.extract;
    document.getElementById("content").innerHTML = a.content;
    let tags = function (tags){
        let CE = document.createElement;
        let TT = document.getElementById("tags");
        for(i=0; i < tags.length; i++) {
            TA[i]=CE("a");
            TA[i].href = "tag.html?"+tags[i];
            TA[i].innerHTML = tags[i];
            TT.appendChild(TA);
        }
    }
}

const Launch = function() {
    let f = document.getElementById("form");
    let a = {
        id: f.getElementById("id").value,
        date: f.getElementById("date").value,
        author: f.getElementById("author").value,
        title: f.getElementById("title").value,
        tags: f.getElementById("tags").value.split(","),
        extract: f.getElementById("extract").value,
        content: f.getElementById("content").value
    }
}