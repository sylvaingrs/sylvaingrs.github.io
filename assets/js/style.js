// const navbar = document.getElementById('navbar');

// // Ajout d'un écouteur d'événements pour le défilement de la page
// window.addEventListener('scroll', function() {
//     // Si le défilement dépasse un certain seuil (par exemple, 100 pixels)
//     if (window.scrollY > 10) {
//         navbar.classList.remove('nav-hidden'); // Supprimer la classe pour afficher la navigation
//         navbar.classList.add('nav-displayed');
//     } else {
//         navbar.classList.add('nav-displayed'); // Ajouter la classe pour cacher la navigation
//         navbar.classList.remove('nav-displayed');
//     }
// });

// Sélection de l'élément de navigation
const navbar = document.getElementById('navbar');

// Sélection de l'élément où vous souhaitez que la navigation apparaisse
const triggerElement = document.getElementById('point')

// Récupération de la position verticale de l'élément déclencheur
const triggerPosition = triggerElement.getBoundingClientRect().top;

// Ajout d'un écouteur d'événements pour le défilement de la page
window.addEventListener('scroll', function() {
    if (window.scrollY > triggerPosition) {
        navbar.classList.add('visible'); // Ajouter la classe pour afficher progressivement la navigation
    } else {
        navbar.classList.remove('visible'); // Supprimer la classe pour cacher progressivement la navigation
    }
    // navbar.classList.add('fade-in');
});