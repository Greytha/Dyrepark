export function initTicketBooking() {
    console.log('Initialisation de la réservation de billets...');
    
    const ticketForm = document.getElementById('ticket-form');
    const totalPriceElement = document.getElementById('total-price');
    
    if (ticketForm && totalPriceElement) {
        const adultTicketsInput = document.getElementById('adult-tickets');
        const childTicketsInput = document.getElementById('child-tickets');
        
        // Mettre à jour le prix total lorsque les quantités changent
        [adultTicketsInput, childTicketsInput].forEach(input => {
            input.addEventListener('change', updateTotalPrice);
        });
        
        // Gérer la soumission du formulaire
        ticketForm.addEventListener('submit', handleTicketSubmission);
        
        // Initialiser le prix total
        updateTotalPrice();
    }
}

function updateTotalPrice() {
    const adultPrice = 20; // Prix d'un billet adulte
    const childPrice = 10; // Prix d'un billet enfant
    
    const adultTickets = parseInt(document.getElementById('adult-tickets').value) || 0;
    const childTickets = parseInt(document.getElementById('child-tickets').value) || 0;
    
    const totalPrice = (adultTickets * adultPrice) + (childTickets * childPrice);
    document.getElementById('total-price').textContent = `${totalPrice} €`;
}

async function handleTicketSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/api/book-tickets.php', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            e.target.reset();
            updateTotalPrice();
        } else {
            throw new Error('Erreur lors de la réservation');
        }
    } catch (error) {
        console.error('Erreur de réservation:', error);
        alert('Une erreur est survenue lors de la réservation. Veuillez réessayer.');
    }
}

