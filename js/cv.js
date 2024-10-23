
    // Fonction de soumission du formulaire CV
    document.getElementById('cvForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Votre CV a été soumis !\nNom: ' + document.getElementById('name').value);
});

    // Fonction de dépôt de fichier CV
    function uploadCV() {
    var fileInput = document.getElementById('cvFile');
    if (fileInput.files.length > 0) {
    var fileName = fileInput.files[0].name;
    alert('Fichier ' + fileName + ' téléchargé avec succès !');
} else {
    alert('Veuillez sélectionner un fichier.');
}
}

    // Fonction de modification du CV
    function modifierCV() {
    alert('Fonction de modification activée (cette action pourrait rediriger vers un formulaire de modification)');
}