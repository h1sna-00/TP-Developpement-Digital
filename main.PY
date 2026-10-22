vente= float(input("Entrer votre vente(taper sur 0 si vous vouler terminer): "))
min=vente
max=vente
somme=vente
i=1 
moyenne=0
while vente!=0:

     vente= float(input("Entrer votre vente(taper sur 0 si vous vouler terminer): "))
     if vente!=0 and   min >vente :
          min=vente
     elif vente!=0 and max<vente:
        max=vente


     somme+=vente
     i=i+1

moyenne=somme/i
print("la valeur de min:", min)
print("la valeur de max:", max)
print("le totale est:", somme)
print("la moyenne est:", moyenne)
