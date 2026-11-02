
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def se_presenter(self):
        return f"Je m'appelle {self.nom}, j'ai {self.age} ans."



class Etudiant(Personne):
    def __init__(self, nom, age, niveau, matieres):
        super().__init__(nom, age)  
        self.niveau = niveau
        self.matieres = matieres

    def se_presenter(self):
        return f"Je m'appelle {self.nom}, j'ai {self.age} ans, je suis en {self.niveau}. Je suis inscrit dans les matières : {self.matieres}."



class Professeur(Personne):
    def __init__(self, nom, age, specialite, salaire):
        super().__init__(nom, age)  
        self.specialite = specialite
        self.salaire = salaire

    def se_presenter(self):
        return f"Je m'appelle {self.nom}, j'ai {self.age} ans. Je suis professeur en {self.specialite} avec un salaire de {self.salaire} DH."





nom = input("Entrer votre nom : ")
age = int(input("Entrer votre age : "))
p = Personne(nom, age)
print(p.se_presenter())


nom = input("Entrer votre nom : ")
age = int(input("Entrer votre age : "))
niveau = input("Entrer votre niveau : ")
matieres = input("Entrer vos matieres : ")
e = Etudiant(nom, age, niveau, matieres)
print(e.se_presenter())


nom = input("Entrer votre nom : ")
age = int(input("Entrer votre age : "))
specialite = input("Entrer votre specialite : ")
salaire = input("Entrer votre salaire : ")
prof = Professeur(nom, age, specialite, salaire)
print(prof.se_presenter())
           
