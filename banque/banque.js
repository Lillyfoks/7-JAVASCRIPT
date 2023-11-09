class Client {
    constructor(NoCompte=0, Nom, Prenom, Adresse, SoldeCompte = 0, MaxDécouvert = 800, DébitMax = 1000) {
        this.NoCompte = NoCompte;
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Adresse = Adresse;
        this.SoldeCompte = SoldeCompte;
        this.MaxDécouvert = MaxDécouvert;
        this.DébitMax = DébitMax;
    }
}

let Client1 = new Client("", "Dubois", "Bertrand", "12, rue des Capucines 54000 JoliCourt");
let Client2 = new Client("", "Saintyves", "Louise", "2 rue Jean Lot 54100 Rémicourt");
let Client3 = new Client("", "Petitpretre", "Emile", "47, avenue de la libération 54200 Chenicourt");
let Client4 = new Client("", "Orgueil", "Emilie", "23, rue principale 54300 Nomeny");
let Client5 = new Client("", "Pierre", "Julie", "8, rue Loza 54400 Euvezin");

