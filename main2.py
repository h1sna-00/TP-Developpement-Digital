vente= float(input("Entrer votre vente(taper sur 0 si vous vouler terminer): "))
l=[]
l.append(vente)
while vente!=0:
    vente= float(input("Entrer votre vente(taper sur 0 si vous vouler terminer): "))
    if vente!=0:
     l.append(vente)
   
     
     
print(l)
print(min(l))
print(max(l))
len(l)