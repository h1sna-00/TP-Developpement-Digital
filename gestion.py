
class Employe:
    def __init__(self, emp_id, emp_name, emp_salary, emp_department):
        self.emp_id = emp_id
        self.emp_name = emp_name
        self.emp_salary = emp_salary
        self.emp_department = emp_department


    def emp_affecter_department(self, nouveau_department):
        self.emp_department = nouveau_department

    
    def afficher_employee(self):
        print("ID :", self.emp_id)
        print("Nom :", self.emp_name)
        print("Salaire :", self.emp_salary, "DH")
        print("Departement :", self.emp_department)

    
    def calculer_emp_salary(self, salaire, heures_travaillees):
        if heures_travaillees > 50:
            heures_supp = heures_travaillees - 50
            montant = heures_supp * (salaire / 50)
            salaire = salaire + montant

        return salaire



emp_id = input("Entrer l'ID de l'employé : ")
emp_name = input("Entrer le nom de l'employé : ")
emp_salary = float(input("Entrer le salaire de base (en DH) : "))
emp_department = input("Entrer le département : ")


emp1 = Employe(emp_id, emp_name, emp_salary, emp_department)

emp1.afficher_employee()

nouveau_dept = input(" le nouveau département à affecter : ")
emp1.emp_affecter_department(nouveau_dept)
print("\n Apres modification:")

emp1.afficher_employee()
