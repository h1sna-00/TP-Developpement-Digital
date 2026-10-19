
class CompteBancaire:
    def __init__(self, titulaire, solde):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant):
        self.solde += montant
        print("Dépôt effectué :", montant, "DH")

    def retirer(self, montant):
        if montant <= self.solde:
            self.solde = self.solde - montant
            print("Retiration de mantant :", montant, "DH")
        else:
            print("Solde insuffisant ")

    def afficher_solde(self):
        print(" titulaire:" ,self.titulaire,)
        print("Solde actuel :", self.solde, "DH")

    def __del__(self):
        print("Le compte bancaire est supprimé .")



c1 = CompteBancaire("Hasna", 1000)

c1.afficher_solde()
c1.deposer(500)
c1.retirer(200)
c1.afficher_solde()
