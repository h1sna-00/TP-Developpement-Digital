import math
import random
from turtle import *

# Configuration de la fenêtre
speed(0)
bgcolor("black")
hideturtle()
colormode(255)

# Nombre de particules pour former le cœur
num_particles = 1000

# Tracé du nuage de particules en forme de cœur
for _ in range(num_particles):
    # Angle aléatoire pour répartir les particules
    t = random.uniform(0, 2 * math.pi)
    
    # Équations paramétriques du cœur
    hx = 16 * (math.sin(t) ** 3)
    hy = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
    
    # Ajout d'une dispersion aléatoire (effet "poussière d'étoiles" / particules)
    dispersion_x = random.uniform(-5, 5)
    dispersion_y = random.uniform(-5, 5)
    
    x = hx * 18 + dispersion_x
    y = hy * 18 + dispersion_y
    
    penup()
    goto(x, y)
    
    # Choix d'une nuance de bleu/cyan lumineuse aléatoire
    b = random.randint(200, 255)
    g = random.randint(100, 220)
    r = random.randint(0, 50)
    pencolor(r, g, b)
    
    # Dessine une petite particule (point de taille variable)
    dot(random.randint(2, 6))

done()