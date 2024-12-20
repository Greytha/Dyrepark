export function initSearch() {
    console.log('Initialisation de la recherche...');
    
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchForm && searchInput && searchResults) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            performSearch(searchInput.value);
        });
        
        // Recherche en temps réel (optionnel)
        searchInput.addEventListener('input', debounce(() => {
            if (searchInput.value.length >= 3) {
                performSearch(searchInput.value);
            } else {
                searchResults.innerHTML = '';
            }
        }, 300));
    }
}

async function performSearch(query) {
    try {
        const response = await fetch(`/api/search.php?q=${encodeURIComponent(query)}`);
        if (response.ok) {
            const results = await response.json();
            displaySearchResults(results);
        } else {
            throw new Error('Erreur lors de la recherche');
        }
    } catch (error) {
        console.error('Erreur de recherche:', error);
        searchResults.innerHTML = '<p>Une erreur est survenue lors de la recherche.</p>';
    }
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Aucun résultat trouvé.</p>';
        return;
    }
    
    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${result.name}</h3>
            <p>${result.description}</p>
            <a href="${result.url}">En savoir plus</a>
        `;
        ul.appendChild(li);
    });
    searchResults.appendChild(ul);
}

// Fonction utilitaire pour débouncer les événements
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

