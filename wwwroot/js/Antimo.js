//ingresso in pg
window.onload = function () {
    console.log("JS caricato con successo!");
    alert("Benvenuto sulla pagina di Antimo. Pulisci le scarpe e premi ok.");
};
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1; // Mostra la card
        }, index * 300); // Ogni card appare 300ms dopo la precedente
    });
})
//contatti
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleContatti");
    const contatti = document.getElementById("contattiSection");

    // Nascondi inizialmente
    contatti.style.display = "none";

    toggleBtn.addEventListener("click", () => {
        const isVisible = contatti.style.display === "block";

        contatti.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "Mostra Contatti" : "Nascondi Contatti";
    });
});
//formazione
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleFormazione");
    const formazione = document.getElementById("formazioneSection");

    formazione.style.display = "none"; // Inizia nascosto

    toggleBtn.addEventListener("click", () => {
        const isVisible = formazione.style.display === "block";
        formazione.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "Mostra Formazione" : "Nascondi Formazione";
    });
});
//progetti
document.addEventListener("DOMContentLoaded", function () {
    const toggleProgetti = document.getElementById("toggleProgetti");
    const progettiSection = document.getElementById("progettiSection");

    progettiSection.style.display = "none"; // Nascondi all'avvio

    toggleProgetti.addEventListener("click", () => {
        const isVisible = progettiSection.style.display === "block";
        progettiSection.style.display = isVisible ? "none" : "block";
        toggleProgetti.textContent = isVisible ? "Mostra Progetti" : "Nascondi Progetti";
    });
});
//competenze
function toggleCompetenze() {
    const comp = document.getElementById("competenzeSection");
    comp.style.display = comp.style.display === "none" ? "block" : "none";
}