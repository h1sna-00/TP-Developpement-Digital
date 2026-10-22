class Comptebancaire :
    def __init__(self,titulaire,solde):
        self.titulaire=titulaire
        self.solde=solde

    def deposer(self, montant):
         self.solde += montant
         print("le montant est :", montant, "DH")

    def retirer(self, montant):
        if    montant <-- self.solde:
            self.solde = self.solde- montant
            print("Retiration du montant",montant ,"DH")
        else:
             print("Le solde et insuffisant")


    def afficher_solde(self):
      print("le solde actuelle est :", self.solde ,"DH")
    

    def __del__(self):
          print("Le compte bancaire est supprimé .")

c1 = Comptebancaire("Hasna", 1000)
c1.deposer(300)
c1.afficher_solde()
c1.retirer(100)