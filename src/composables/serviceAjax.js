// Service d'appels Ajax via fetch    
// les fonctions sont exportables
// afin de permetre leur utilisation par un programme externe
// (réutilisable par import) 

// Promesse de recherche pour les villageois
export const getDatas = () => {    
    let rq = "https://opendata.agenceore.fr/api/records/1.0/search/?dataset=conso-elec-gaz-annuelle-par-secteur-dactivite-agregee-region&q=&rows=2050"
    // Requête concernée
    return fetch(rq)            // on renvoie la requête à qui la demande
        .then(response =>{
            return response.json()  // résultat de la requête en json
        })
        .catch(error => { throw error } // Cas d'erreur 
    )
}