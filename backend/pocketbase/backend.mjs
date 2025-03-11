import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

// Fonction retourne la liste des films triés par date de projection
export async function getAllFilms() {
    const records = await pb.collection('Films').getFullList({
        sort: 'date_heure_film'
    });
    return records;
}

// F retourne la liste des activités triées par date de projection
export async function getAllActivities() {
    const records = await pb.collection('Activites').getFullList({
        sort: 'date_heure_activite'
    });
    return records;
}

// F retourne la liste  invités (acteurs/réalisateurs) triés  ordre alphabet
export async function getAllInvites() {
    const records = await pb.collection('Invites').getFullList({
        sort: 'nom_invite'
    });
    return records;
}

// F retourne infos d'un film donné ID
export async function getFilmById(id) {
    const film = await pb.collection('Films').getOne(id);
    return film;
}

// F retourne infos d'une activité donnée ID
export async function getActivityById(id) {
    const activity = await pb.collection('Activites').getOne(id);
    return activity;
}

// F retourne infos d'un invité (acteur/réalisateur) donné ID
export async function getInviteById(id) {
    const invite = await pb.collection('Invites').getOne(id);
    return invite;
}

// F retourne toutes les activités d’un animateur donné par ID
export async function getActivitiesByAnimateurId(animateurId) {
    const records = await pb.collection('Activites').getFullList({
        filter: `invite_associe = '${animateurId}'`
    });
    return records;
}

// F retourne toutes les activités d’un animateur donné par son nom
export async function getActivitiesByAnimateurName(nomAnimateur) {
    const records = await pb.collection('Activites').getFullList({
        filter: `invite_associe.nom_invite = '${nomAnimateur}'`,
        expand: 'invite_associe'
    });
    return records;
}




