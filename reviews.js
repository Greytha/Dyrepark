export function initReviews() {
    console.log('Initialisation des avis...');
    
    const reviewForm = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmission);
    }
    
    if (reviewsList) {
        loadReviews();
    }
}

async function handleReviewSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/api/submit-review.php', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            e.target.reset();
            loadReviews(); // Recharger les avis après soumission
        } else {
            throw new Error('Erreur lors de la soumission de l\'avis');
        }
    } catch (error) {
        console.error('Erreur de soumission d\'avis:', error);
        alert('Une erreur est survenue lors de la soumission de votre avis. Veuillez réessayer.');
    }
}

async function loadReviews() {
    const reviewsList = document.getElementById('reviews-list');
    
    try {
        const response = await fetch('/api/get-reviews.php');
        if (response.ok) {
            const reviews = await response.json();
            displayReviews(reviews);
        } else {
            throw new Error('Erreur lors du chargement des avis');
        }
    } catch (error) {
        console.error('Erreur de chargement des avis:', error);
        reviewsList.innerHTML = '<p>Une erreur est survenue lors du chargement des avis.</p>';
    }
}

function displayReviews(reviews) {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = '';
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<p>Aucun avis pour le moment.</p>';
        return;
    }
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <h3>${review.username}</h3>
            <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p>${review.comment}</p>
            <small>Publié le ${new Date(review.created_at).toLocaleDateString()}</small>
        `;
        reviewsList.appendChild(reviewElement);
    });
}

