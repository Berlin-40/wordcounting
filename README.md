# 📝 Word Counter

## Description
**Word Counter** est une application web interactive qui permet de :

- Saisir du texte dans un `<textarea>`.
- Compter le nombre total de mots en temps réel.
- Compter la fréquence d’apparition de chaque mot.
- Trier les mots par nombre d’occurrences (croissant ou décroissant).
- Vider le texte avec un bouton **Clear**.

L’application utilise **React avec TypeScript** et **DaisyUI/TailwindCSS** pour un style moderne et réactif.

---

## Fonctionnalités

### Saisie dynamique
- Les mots sont automatiquement découpés avec des séparateurs tels que `, ; : ! . ^ ' ) ( | >`.
- Les mots vides sont ignorés.

### Compteur de mots
- Affiche en temps réel le nombre total de mots saisis.

### Compteur de fréquence des mots
- Chaque mot est compté et affiché avec son nombre d’occurrences.
- Les mots sont affichés sous forme de badges réactifs.

### Tri
- L’utilisateur peut choisir de trier les mots par fréquence croissante ou décroissante.

### Effacement
- Le bouton **Clear** permet de vider instantanément le texte et les compteurs.

---

## Technologies utilisées
- React (Functional Components + Hooks)  
- TypeScript  
- TailwindCSS  
- DaisyUI  
- HTML / JSX / CSS / JavaScript (ES6+)

---

## Objectif
Fournir un outil interactif pour analyser rapidement un texte et visualiser la fréquence des mots, tout en offrant une interface moderne et réactive.

---

## Installation / Utilisation

1. Cloner le projet :
```bash
git clone https://github.com/Berlin-40/wordcounting
