class Personne : 
      def __init__(self,nom,age):
            self.nom=nom
            self.age=age
      def se_presenter(self):
            print(f"je m'appelle {nom},j'ai {age}ans.")
nom=input("Entrer votre nom:")
age=input("entrer votre age:")
hasna=Personne(nom,age)
Personne.se_presenter(hasna)
class  Etudiant: 
      def __init__(self,nom,age, niveau, matieres  ):
            self.nom=nom
            self.age=age
            self.niveau=niveau
            self.matieres=matieres
      def se_presenter(self):
          print(f"Je m'appelle {nom}, j'ai {age} ans, je suis en {niveau}. Je suis inscrit dans les matières {matieres}.")


nom=input("Entrer votre nom:")
age=input("entrer votre age:")
niveau=input("Entrer votre niveau:")
matieres=input("Entrer vos matieres:")

hasna=Etudiant(nom,age,niveau,matieres)
Etudiant.se_presenter(hasna)

class Professeur:
      def __init__(self,nom,age,  specialite , salaire):
             self.nom=nom
             self.age=age
             self.specialite=specialite
             self.salaire=salaire
      def se_presenter(self):
                  print(f"Je m'appelle {nom}, j'ai {age} ans,  Je suis professeur en {specialite} avec un salaire de {salaire} DH.")     

nom=input("Entrer votre nom:")
age=input("entrer votre age:")
specialite=input("Entrer votre specialite:")
salaire=input("Entrer votre salaire:")
hasna=Professeur(nom,age,specialite,salaire)
Professeur.se_presenter(hasna)
           
