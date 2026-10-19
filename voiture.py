class Voiture:
    def __init__(self, marque, modele, annee, kilometrage):
        self.marque = marque
        self.modele = modele
        self.annee = annee
        self.kilometrage = kilometrage

    def afficher_info(self):
        print("la Marque est :", self.marque)
        print("le Modèle est:", self.modele)
        print("l'Année est:", self.annee)
        print("le Kilométrage est:", self.kilometrage, "km")

    def conduire(self, distance):
        self.kilometrage += distance
        print("Nouveau kilométrage :", self.kilometrage, "km")

    def __del__(self):
        print("La voiture est supprimée de la mémoire.")



v1 = Voiture("Toyota", "Yris", 2022, 15000)

v1.afficher_info()
v1.conduire(100)
