$(document).ready(function() {
  // Capturer la soumission du formulaire
  $('#myForm').submit(function(event) {
      event.preventDefault(); // Empêcher la soumission par défaut du formulaire

      // Récupérer la valeur saisie par l'utilisateur
      var valeurNumerique = $('#valeur').val();

      // Faites quelque chose avec la valeur (dans cet exemple, affichez-la)
      console.log("La valeur numérique saisie est : " + valeurNumerique);

  });
});

$(document).ready(function() {
  // Génère un nombre aléatoire entre 0 et 100
  var randomValue = Math.floor(Math.random() * 101);

  console.log("Le nombre aléatoire est : " + randomValue);

  $('#myForm').submit(function(event) {
      event.preventDefault(); // Empêche la soumission par défaut du formulaire

      // Récupérer la valeur saisie par l'utilisateur
      var enteredValue = parseInt($('#value').val());

      // Vérifier si la valeur saisie est égale au nombre aléatoire
      if (enteredValue === randomValue) {
          alert("Félicitations ! Vous avez trouvé le nombre aléatoire : " + randomValue);
      } else {
          // Afficher un indice pour aider l'utilisateur à trouver le nombre
          if (enteredValue < randomValue) {
              alert("Le nombre est plus grand.");
          } else {
              alert("Le nombre est plus petit.");
          }
      }
  });
});






