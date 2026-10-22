
class Livre:
    def __init__(self, titre, auteur, nombre_de_pages):
        self.titre = titre
        self.auteur = auteur
        self.nombre_de_pages = nombre_de_pages
        self.emprunte = False

    def emprunter(self):
        if self.emprunte == False:
            self.emprunte = True
            print("Le livre a été emprunté.")
        else:
            print("Le livre est déjà emprunté.")

    def retourner(self):
          self.emprunte == True 
          self.emprunte = False
print("Le livre a été emprunte.")
        

def afficher_info(self):
        print("Titre :", self.titre)
        print("Auteur :", self.auteur)
        print("Nombre de pages :", self.nombre_de_pages)
        print("Emprunté :", self.emprunte)
def __del__(self):
     print("Le livre est suprimer")
 



l1 = Livre("Le Monde de Sophie", "Jostein Gaarder", 623)

l1.afficher_info()
l1.emprunter()
l1.retourner()

 