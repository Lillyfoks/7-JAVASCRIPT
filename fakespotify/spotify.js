let playlist = [
	{
		musique: "sons/Blue_Skies.mp3",
		titre: "Blue Skies",
		artiste: "Artiste1",
		image: "img/340/1.jpg"
	},
	{
		musique: "sons/Cartoon_Hoedown.mp3",
		titre: "Cartoon Hoedown",
		artiste: "Artiste2",
		image: "img/340/2.jpg"
	},
	{
		musique: "sons/Earthy_Crust.mp3",
		titre: "Earthy Crust",
		artiste: "Artiste3",
		image: "img/340/3.jpg"
	},
	{
		musique: "sons/Hold_On_a_Minute.mp3",
		titre: "Hold On a Minute",
		artiste: "Artiste4",
		image: "img/340/4.jpg"
	},
	{
		musique: "sons/JohnDunbarTheme.mp3",
		titre: "John Dunbar Theme",
		artiste: "Artiste5",
		image: "img/340/5.jpg"
	},
	{
		musique: "sons/Stay_With_You.mp3",
		titre: "Stay With You",
		artiste: "Artiste6",
		image: "img/340/6.jpg"
	},
	{
		musique: "sons/Symphony_No_5_by_Beethoven.mp3",
		titre: "Symphony No5",
		artiste: "Beethoven",
		image: "img/340/7.jpg"
	}
]

let playpause = false;
let index = 0; //uniquement pour la fonction suivant/précédent
let indexbis = 0;
let songduration = document.getElementById('songduration');
let lecteur = document.getElementById('lecteur');
let playorpause = document.getElementById('playorpause');

function init() {
	document.getElementById('lecteur').src = playlist[index].musique;
	document.getElementById('artiste').innerHTML = playlist[index].artiste;
	document.getElementById('titre').innerHTML = playlist[index].titre;
	let html = '';  //pour tranduire le langage brut en html
	for (let i = 0; i < playlist.length; i++) { //pour incrémenter dans mon tableau et créer les cards
		html += `<article class="card" id= onclick = "clicCard(' + i + ')"><img src=' + playlist[i].image + ' alt="pochette"><h1>' + playlist[i].artiste + '</h1><h2>' + playlist[i].titre + '</h2></article>`;
	} //le += est pour la concaténation. On rajoute le nom du tableau, le i et l'index pour indiquer les infos qui doivent apparaître.
	document.getElementById('cards').innerHTML = html; // pour traduire en html et insérer les éléments dans la bonne section.
}

function search() {
	let search = document.getElementById(recherche).value.toUpperCase();
for (let i = 0; i < playlist.length; i++) {
	let artiste = playlist[i].artiste.toUpperCase();
	let titre = playlist[i].titre.toUpperCase();
}

let card = getElementById('card${i}');

if (artiste.indexOf(search)!==-1 || titre.indexOf(search)!==-1) {
	card.style.display = "block"; 
} else {
	card.style.display = "none";
}
}


//clicCard('+i+') = pour incrémenter pour chaque article onclick
function clicCard(indexClic) { // index = +i+   indice carte sélectionnée =/= variable index
	//pour récupérer l'article à l'index correspondant
	index = indexClic;
	document.getElementById('lecteur').src = playlist[indexClic].musique;
	document.getElementById('artiste').innerHTML = playlist[indexClic].artiste;
	document.getElementById('titre').innerHTML = playlist[indexClic].titre;
}

/* la fonction init() permet de démarrer la playlist à l'indice 0 du tableau de musiques */

function lecturepause() { //pour créer la possibilité de mettre en lecture ou en pause sur un seul bouton

	document.getElementById('lecteur').autoplay = true; // condition de départ
	if (playpause == false) { //pour lancer la musique
		document.getElementById('lecteur').play();
		playpause = true; //pour acter le fait d'avoir lancé la musique
		playorpause.innerHTML = '<i class="fa-solid fa-pause"></i>'; //pour appliquer l'icone correspondante
	} else {
		document.getElementById('lecteur').pause(); //pour couper la musique
		playpause = false; //pour acter le fait d'avoir coupé la musique
		playorpause.innerHTML = '<i class="fa-solid fa-play"></i>'; //pour appliquer l'icone correspondante
	}
}
/* ici, on crée une autre variable pour utiliser le booléen (faux par défaut) */
/* dans le if, on indique que la musique se lance au clic et que le booléen passe vrai */
/* dans le else, le booléen est vrai, et on passe en false au clic */

/* cette fonction est le lien entre le bouton play et le fait que la musique se lance */
/* On retour l'id 'lecteur' dans la balise <audio> et la fonction lecture() est appelée dans le bouton lecture */
/* la fonction 'play()' est pré-existante en JS (voir la doc sur internet) */




function duration() {
	lecteur.currentTime = songduration.value;
}

function progression() {
	songduration.value = lecteur.currentTime;
}

function changeduration() {
	songduration.setAttribute("max", lecteur.duration);
}

function suivant() { //calibrage du bouton suivant et corriger l'interruption en fin de tableau
	if (index == playlist.length - 1) { //pour retourner à la première cellule du tableau quand on arrive à la dernière
		index = -1;
	} else {
		index++;  //pour aller à la musique suivante quand on est pas au bout du tableau
		document.getElementById('lecteur').src = playlist[index].musique;
		document.getElementById('artiste').innerHTML = playlist[index].artiste;
		document.getElementById('titre').innerHTML = playlist[index].titre;
	}
}

function précédent() { // comme pour suivant mais pour retourner en arrière
	if (index == 0) {
		index = playlist.length - 1;
	} else {
		index--;
		document.getElementById('lecteur').src = playlist[index].musique;
		document.getElementById('artiste').innerHTML = playlist[index].artiste;
		document.getElementById('titre').innerHTML = playlist[index].titre;
	}
}

function volumemoins() { //pour baisser le volume
	/*document.getElementById('lecteur').volume=document.getElementById('lecteur').volume-0.1;*/
	if (document.getElementById('lecteur').volume.toFixed(1) > 0) {  // pour fixer la limite à 0
		document.getElementById('lecteur').volume -= 0.1; /*version courte*/ //pour indiquer qu'on diminue de 0.1
		document.getElementById('rangevolume').value = document.getElementById('lecteur').volume; //pour appliquer le réglage sur le bouton correspondant
	}
}

/*la fonction ci-dessus permet de diminuer le volume. If permet de créer une limite pour qu'on ne puisse pas descendre en dessous de 0. */
/*.toFixed permet de pallier à un bug JS qui compte les centièmes et qui descend donc au delà de 0 */
/* le -=0.1 est la version abrégée du commentaire au dessus. Ca permet de diminuer de -0.1. */
/* la dernière ligne du If permet de lier le range au bouton et à sa fonction. */

function volumeplus() {
	if (document.getElementById('lecteur').volume.toFixed(1) < 1) { //comme volume moins mais pour augmenter le volume avec limite max 1
		document.getElementById('lecteur').volume += 0.1;
		document.getElementById('rangevolume').value = document.getElementById('lecteur').volume;
	}
}

/* même chose que pour la fonction volumemoins() mais pour augmenter le son */

function volumechange() { //pour appliquer le changement de volume sur le range plutôt que sur les boutons

	document.getElementById('lecteur').volume = document.getElementById('rangevolume').value;
}

/* Cette fonction permet d'appliquer les autres fonctions + et - sur le range (la barre de slide du son) */

