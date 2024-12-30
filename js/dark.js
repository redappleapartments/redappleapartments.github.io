document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
    document.querySelectorAll('.card-dark-mode').forEach(function(card) {
      card.classList.toggle('bg-dark');
      card.classList.toggle('text-light');
    });
});
