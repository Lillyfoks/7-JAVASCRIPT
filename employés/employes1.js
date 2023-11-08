// Définition de la classe
class Society {
    constructor(sName, adress, postCode, city, food) {
        this.sName = sName;
        this.adress = adress;
        this.postCode = postCode;
        this.city = city;
        this.food = food;
    }
}

class Employe {

    // Le constructeur initialise les propriétés de l'objet Employe
    constructor(lastName, firstName, startDate, typeJob, rent, placeJob, Society, Child) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.startDate = new Date(startDate); // Date de début sous forme d'objet Date
        this.typeJob = typeJob;
        this.rent = parseFloat(rent); // Loyer (converti en nombre)
        this.placeJob = placeJob;
        this.Society = Society;
        this.Child = Child;
    }

    getNbAnnees() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());

        if (annees >= 2) {
            return "La prime d'ancienneté est disponible pour l'employé";
        } else {
            return "La prime d'ancienneté n'est pas disponible pour l'employé";
        }
    }

    getCalculPrimeAnnuelle() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());
        let anciennete = (annees * 0.02) * this.rent;
        let grossePrime = (this.rent * 0.05);
        let primeTotale = anciennete + grossePrime

        if (annees >= 2) {
            return primeTotale;
        } else {
            return grossePrime;
        }
    }

    getVirementBanque() {
        let today = new Date();
        let montantPrime = this.getCalculPrimeAnnuelle();

        if (today.getMonth() === 10 && today.getDate() === 30) {
            return "Ordre de transfert envoyé à la banque pour un montant de " + montantPrime + "€.";
        } else {
            return "Ordre de transfert d'un montant de " + montantPrime + "€ à la banque en attente.";
        }
    }

    getChqVac() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());

        if (annees >= 1) {
            return "L'employé à droit à un chèque vacances";
        } else {
            return "L'employé n'a pas droit à un chèque vacances";
        }
    }
}

class Director extends Employe {
    getCalculPrimeAnnuelleDir() {
        let dDate = new Date();
        let annees = (dDate.getFullYear() - this.startDate.getFullYear());
        let anciennete = (annees * 0.03) * this.rent;
        let grossePrime = (this.rent * 0.07);
        let primeTotale = anciennete + grossePrime

        if (annees >= 2) {
            return primeTotale;
        } else {
            return grossePrime;
        }
    }

    getVirementBanque() {
        let today = new Date();
        let montantPrime = this.getCalculPrimeAnnuelleDir();

        if (today.getMonth() === 10 && today.getDate() === 30) {
            return "Ordre de transfert envoyé à la banque pour un montant de " + montantPrime + "€.";
        } else {
            return "Ordre de transfert d'un montant de " + montantPrime + "€ à la banque en attente.";
        }
    }
}

class Child {
    constructor(lastName, firstName, age) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
    }

    getChqNoel() {
        if (this.age >= 0 && this.age <= 10) {
            return "L'enfant a droit à 20€.";
        } else if (this.age >= 11 && this.age <= 15) {
            return "L'enfant a droit à 30€.";
        } else if (this.age >= 16 && this.age <= 18) {
           return "L'enfant a droit à 50€.";
        } else if (this.age > 18) {
            return "L'enfant n'a pas droit à un chèque cadeau";
        }
    }
}


let Society1 = new Society("InfoGlam", "12, rue de l'imagination", "54000", "CreativeLand", "self");
let Society2 = new Society("GlamInfo", "21, rue de la créativité", "45000", "ImagineLand", "restaurant ticket");

let Child1 = new Child("Dupont", "Sophia", 5);
let Child2 = new Child("Dupont", "Benjamin", 14);
let Child3 = new Child("Martin", "Isabella", 17);
let Child4 = new Child("Lambert", "Mason", 20);

// Créez une instance d'Employe avec une date valide
let Employe1 = new Employe("Dupont", "Emma", "2010-07-09", "Chargé de Communication", "21600", "Marketing", Society1, [Child1, Child2]);
let Employe2 = new Employe("Martin", "Gabriel", "2007-02-24", "Ingénieur Réseau", "22650", "IT", Society1, Child3);
let Employe3 = new Employe("Dubois", "Clara", "2022-01-07", "Secrétaire Exécutif", "23700", "Secrétariat", Society1);
let Employe4 = new Employe("Moreau", "Lucas", "2023-09-07", "Comptable", "24650", "Comptabilité", Society1);
let Employe5 = new Employe("Lambert", "Zoé", "2017-04-02", "Gestionnaire des Ressources Humaines", "25700", "RH", Society2, Child4);


let Employes = [Employe1, Employe2, Employe3, Employe4, Employe5];

let Director1 = new Director("Tremblay", "Liam", "2023-04-12", "Directeur", "35000", "Direction", Society1);
let Director2 = new Director("Lefebvre", "Olivia", "2001-10-08", "Directrice", "36500", "Direction", Society2);


function NbEmployes() {
    let nbEmployes = Employes.length;
    return (nbEmployes);
}


function triParNom() {
    let tri = Employes.sort((a, b) => (a.lastName + a.firstName).localeCompare(b.lastName + b.firstName));
    return (tri);
}


function triParService() {
    let tri = Employes.sort((a, b) => (a.placeJob + a.lastName + a.firstName).localeCompare(b.placeJob + b.lastName + b.firstName));
    return (tri);
}


function masseSalariale() {
    const masseSalariale = Employes.reduce((total, Employe) => total + Employe.rent + Employe.getCalculPrimeAnnuelle(), 0);
    return "La masse salariale totale de l'entreprise est de " + masseSalariale.toFixed(2) + "€.";
}