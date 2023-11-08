class Car {
    /* état initial de l'objet */
    constructor( model, brand, color, kms=0, engine) { /*on définit un kms par défaut pour qu'il n'apparaisse pas undefined sur la page*/
        
        this.model=model;
        this.brand=brand;
        this.color=color;
        this.kms=kms;
        this.engine=engine;
    }

    drive(nb_kms_parcourus) {
        this.kms+=nb_kms_parcourus;
        /* this.setKms(this.getKms()+nb_kms_parcourus) */
    }

    getEngine() {
        return this.engine;
    }

    setEngine(engine) {
        this.engine=engine;
    }

    getKms() {
        return this.kms;
    }

    setKms(kms) {
        this.kms=kms;
    }

    toString() {
        return "La voiture "+this.model+" est de la marque "+this.brand+" de couleur "+this.color+" de motorisation "+this.engine+" avec "+this.kms+" de kilomètres "
    }

}
