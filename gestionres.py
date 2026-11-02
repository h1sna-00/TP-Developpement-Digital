
class Client:
    def __init__(self, id, nom, telephone):
        self.id = id
        self.nom = nom
        self.telephone = telephone
        self.reservations = []

    
    def ajouter_reservation(self, numero, date, heure, personnes, table):
        reservation = {
            "numero": numero,
            "date": date,
            "heure": heure,
            "personnes": personnes,
            "table": table
        }

        self.reservations.append(reservation)

    
    def afficher_client(self):
        print("ID :", self.id)
        print("Nom :", self.nom)
        print("Telephone :", self.telephone)

        print("Reservations :")
        for r in self.reservations:
            print(r)


    def rechercher_reservation(self, numero):
        for r in self.reservations:
            if r["numero"] == numero:
                return r

        return None



clients = []



def ajouter_client(client):
    clients.append(client)



def rechercher_client(id):
    for c in clients:
        if c.id == id:
            return c

    return None



c1 = Client(1, "Sara", "0612345678")
c2 = Client(2, "Amine", "0623456789")


ajouter_client(c1)
ajouter_client(c2)


c1.ajouter_reservation(101, "02/11/2026", "19:00", 4, 5)
c1.ajouter_reservation(102, "03/11/2026", "20:00", 2, 3)


c1.afficher_client()


resultat = rechercher_client(1)

if resultat != None:
    print("Client trouve :", resultat.nom)
else:
    print("Client introuvable")
