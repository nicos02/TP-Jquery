$(document).ready(function () {
  // Cette fonction s'exécute lorsque le document HTML est entièrement chargé et prêt à être manipulé.

  // Capturer la soumission du formulaire
  $("#myForm").submit(function (event) {
    // Cette fonction se déclenche lorsque le formulaire est soumis.

    // Empêcher la soumission par défaut du formulaire, ce qui évite que la page soit actualisée.
    event.preventDefault();

    // Récupérer la valeur saisie par l'utilisateur depuis l'élément avec l'ID "valeur"
    var valeurNumerique = $("#valeur").val();

    // Faites quelque chose avec la valeur (dans cet exemple, affichez-la dans la console)
    console.log("La valeur numérique saisie est : " + valeurNumerique);
  });
});

$(document).ready(function () {
  // Cette fonction s'exécute lorsque le document HTML est entièrement chargé et prêt à être manipulé.

  // Génère un nombre aléatoire entre 0 et 100
  var randomValue = Math.floor(Math.random() * 101);

  // Affiche le nombre aléatoire généré dans la console
  console.log("Le nombre aléatoire est : " + randomValue);

  // Sélectionne le formulaire avec l'ID "myForm" et définit un gestionnaire pour l'événement de soumission (submit)
  $("#myForm").submit(function (event) {
    // Cette fonction se déclenche lorsque le formulaire est soumis.

    // Empêche la soumission par défaut du formulaire, ce qui évite que la page soit actualisée.
    event.preventDefault();

    // Récupérer la valeur saisie par l'utilisateur depuis l'élément avec l'ID "valeur"
    var enteredValue = parseInt($("#valeur").val());

    // Vérifier si la valeur saisie par l'utilisateur est égale au nombre aléatoire généré précédemment.
    if (enteredValue === randomValue) {
      // Si les valeurs sont égales, cela signifie que l'utilisateur a trouvé le nombre aléatoire.

      // Affiche une alerte félicitant l'utilisateur pour avoir trouvé le nombre aléatoire et affiche le nombre lui-même.
      alert(
        "Félicitations ! Vous avez trouvé le nombre aléatoire : " + randomValue
      );
    } else {
      // Si les valeurs ne sont pas égales, cela signifie que l'utilisateur n'a pas encore trouvé le nombre.

      // Affiche un indice pour aider l'utilisateur à se rapprocher du nombre aléatoire.
      if (enteredValue < randomValue) {
        // Si la valeur saisie est inférieure au nombre aléatoire, indique que le nombre à trouver est plus grand.
        alert("Le nombre est plus grand.");
      } else {
        // Si la valeur saisie est supérieure au nombre aléatoire, indique que le nombre à trouver est plus petit.
        alert("Le nombre est plus petit.");
      }
    }
  });
});
