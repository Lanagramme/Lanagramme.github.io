const Catch = function(a) {
    let TT = document.getElementById("tags");
    for(i=0; i < a.tags.length; i++) {
        TA = document.createElement("a");
        TA.href = "tag.html?"+a.tags[i];
        TA.innerHTML = a.tags[i];
        TT.appendChild(TA);
    }
    document.getElementById("date").innerHTML = a.date;
    document.getElementById("author").innerHTML = a.author;
    document.getElementById("title").innerHTML = a.title;
    document.getElementById("extract").innerHTML = a.extract;
    document.getElementById("content").innerHTML = a.content;
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

let a = {
	id1 : {
		title: "Compte rendu de la reunion du 19.02",
		date: "19 Fevrier 2020",
		author: "ecovillage",
		tags: ["none", "second", "third"],
		extract: "Pour cette première réunion nous avons établi des réunions régulières afin de garder un rythme d'avancée régulier sur le projet.",
        content: 
            `
                <h3>Thèmes principaux autour desquels axer nos les recherches.</h3>
                <ul>
                    <li>Architecture (baubiologie)</li>
                    <li>Agriculture</li>
                    <li>hotêllerie</li>
                    <li>Production d'électricité</li>
                    <li>Phytoépuration</li>
                </ul>

                <h3>Architecture</h3>

                <p>bois charpente</p>

                <h3>Hôtellerie</h3>
                <p>De quoi à t'on besoin dans une maison, et est-ce que cela polur ?</p>
                <ul>
                    <li>dormir</li>
                    <li>stocker</li>
                    <li>manger</li>
                    <li>laver</li>
                    <li>cuisiner</li>
                </ul>
                <br>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Besoin\Pollution</th>
                            <th scope="col">Production</th>
                            <th scope="col">Consommation</th>
                        </tr>
                        <tbody>
                            <tr>
                              <th scope="row">Ammeublement</th>
                              <td> X </td>
                              <td> </td>
                        </tbody>
                    </thead>
                </table>
                

                </table>
                <p>Biogaz pour cuisiner</p>
                <p>Puis de lumière</p>
                <p>chauffage de l'eau</p>
                <p>refroidissement de l'eau</p>
                <p>evacuation des eaux usées</p>
                <p>recuperation des eaux de pluie</p>
                <p>si l'on a pas un terrain proche d'une rivière comment fait-on</p>
                <p>refrigateur eau fraiche voir cave pour stocker</p>
                <p>Construire les meubles de l'écovillage</p>

                <h3>Phytoépuration</h3>
                <p>Traitement dmédicaments eau ? faire des stages</p>
                <p>faire des recherches sur le bicarbonate et le vinaigre</p>

                <p></p>

                <h3>Relations humaines au sein de l'écovillage</h3>
                <p>Bien que nous choisierons nous même les individus qui participerons au projet, les tempérament humains étant changeant, un mediateur pourrait s'avérer necessaire afin de résoudre les conflits interpersonnels.</p>
		`,
	},
	id2 : {
		title: "Compte rendu de la reunion du 20.02",
		date: "20 Fevrier 2020",
		author: "ecovillage",
		tags: ["none"],
		extract: "Lors de cette réunion nous avons discuté de plusieurs alternatives architecturales pour les habitations du village. Au vues de la nature de notre projet et de no possibilitées financières nous avons convenus qu'il nous fallait sortir des sentiers battus. Nous nous sommes donc tourné vers les methodes alternatives de construction autour de la planète pour de l'inspiration, et principalement dans les pays ou l'argent est un problème. \n Le mot clé de notre phylosophie étant 'penser de façon non conventionnelle'",
		content: `<h3>Design explorés</h3>

                <ul>
                    <li>Maisons en dôme. <i>Article à créer</i></li>
                    <li>Maisons en sac de sable. <i>Article à créer</i></li>
                    <li>Maisons souterraines ou à flanc de coline. <i>Article à créer</i></li>
                    <li>puits de lumière. <i>Article à créer</i></li>
                    <li>toits thermorégulants. <i>Article à créer</i></li>
                    <li>Comment creuser des puits. <i>Article à créer</i></li>
                </ul>


                <h3>Autres idées</h3>
                <ul>
                    <li>Mise au point du design des toitures végtétales. <a href="Architecture">Voir la page.</a></li>
                    <hr>
                    <li>Entrer en contact avec un expert pour définir nos constructions peuvent résister aux tremblements de terre et aux cyclones</li>
                    <li>Combiner le concept de tiny house et les architectures alternatives nous permettrai de louer des chambres à la fois au nombre d'occupant et au type de logement.</li>
                    </ul>

                <h3>Conclusion</h3>

                <p>A l'issue de la réunion, nous sommes arrivés à une réalisation : qu'est ce qui nous empêche de combiner différents types d'habitations au sein du village ? Pourquoi ne pas combiner différents styles architecturaux <i>au sein d'une même maison</i> ?</p>
		`
	},
	id3 : {
		title: "Compte rendu de la reunion du 21.02",
		date: "21 Fevrier, 2020",
		author: "Ecovillage",
		tags: "",
		extract: "",
		content: `<h3>Cahier de route du projet</h3>

        <p>Que pouvons nous faire durant les deux années à venir pour faire avancer le projet ?</p>

        <h4>Cultiver le jardin</h4>

        <p>Réunir les plantes que nous allons cultiver dans l'écovillage et s'essayer à la permaculture sur une plus petite échelle.</p>

        <h4>Se former</h4>

        <div class="row" style="margin-left: 25px;">
            <p style="margin-left: -25px;">Pour gérer l'écovillage nous aurons besoin de connaissance dans les dommaines suivant :</p>
            <ul class="col-6">
                <li>Agriculture</li>
                <li>Menuiserie</li>
                <li>Cuisine</li>
                <li>Maçonnerie</li>
                <li>Plomberie</li>
            </ul>
            <ul class="col-6">
                <li>Architecture</li>
                <li>Comptabilité / Gestion de projet</li>
                <li>Electronique / Ingenurie</li>
                <li>Psuchologie / Gestion de ressources humaines</li>
                <li>Psychologie</li>
            </ul>
        </div>

        <h4>Preparer le dossier du projet</h4>

        <ul>
            <li>Faire des recherches sur la façon de rédiger un dossier de projet de cette envergure</li>
            <li>Préparer notre présentation</li>
            <li>Rencontrer les proféssionnels necessaires à la validation de notre projet</li>
        </ul>

        <h4>Budjeter</h4>

        <p></p>

        <ul>
            <li>Projet Bokito Days. <a href="">Fiche à créer</a></li>
            <li>Formation restauration (300€).</li>
        </ul>

        <h4>Créer l'association du vilage</h4>

        <h4>Permis de conduire</h4>

        <h3>Autres idées</h3>
        <ul>
            <li>Mise au point du design des toitures végtétales. <a href="Architecture">Voir la page.</a></li>
        </ul>

        <h3>Conclusion</h3>
`
	},
	id4 : {
		title: "0",
		date: "0",
		author: "0",
		tags: "0",
		extract: "0",
		content: "0"
	},
	id5 : {
		title: "0",
		date: "0",
		author: "0",
		tags: "0",
		extract: "0",
		content: "0"
	},
}