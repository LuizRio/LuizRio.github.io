// aspetta che il documento sia pronto ad essere modificato e poi richiama updateReviews
document.addEventListener("DOMContentLoaded", updateReviews);

// ascolta l'evento submit del form e richiama updateReviews
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault(); // previene il comportamento di default del form di inviare i dati al server
  // salva la nuova recensione
  updateReviews();
});

async function updateReviews() {
  // legge le recensioni dal file di testo o dal database
  const reviews = await readReviews();

  // crea una stringa HTML per visualizzare le recensioni
  let reviewsHTML = "";
  for (const review of reviews) {
    reviewsHTML += `<p><strong>${review.name}</strong>: ${review.review}</p>`;
  }

  // aggiunge il testo delle recensioni all'interno dell'elemento div
  document.getElementById("reviews").innerHTML = reviewsHTML;
}

async function readReviews() {
  // leggi le recensioni dal file di testo o dal database e restituisci un array di oggetti con le recensioni
  return [{ name: "Alice", review: "Ottimo prodotto!" }];
}