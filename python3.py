n = int(input("Combien de notes ? "))

somme = 0
for i in range(1, n + 1):
    note = float(input("Note " + str(i) + " : "))
    somme = somme + note

print("Moyenne :", somme / n)