import PocketBase from 'pocketbase';
const POCKETBASE_URL = "http://127.0.0.1:8090";
const pb = new PocketBase('http://127.0.0.1:8090');
export { pb };

// Fonction retourne la liste des films triés par date de projection
export async function getAllFilms() {
    const records = await pb.collection('Films').getFullList({
        sort: 'date_heure_film'
    });
    records.img=pb.files.getURL(records, records.imgUrl);
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
        filter: `invite_associe.nom_invite = "${nomAnimateur}"`,
        expand: 'invite_associe'
    });
    return records;
}

// Ajouter ou modifier un film, une activité ou un invité
export async function update(collection, id, data) {
    await pb.collection(collection).update(id, data);
}

// Anthentification par mail 
export async function createUser(email, password) {
    try {
        await pb.collection("users").create({
            email: email,
            password: password,
            passwordConfirm: password
        });
        console.log("Utilisateur créé avec succès !");
    } catch (e) {
        console.error("Erreur lors de la création de l'utilisateur :", e);
    }
}

// Connexion de l'utilisateur
export async function loginUser(email, password) {
    try {
        await pb.collection("users").authWithPassword(email, password);
        console.log("Connexion réussie !");
        console.log("Utilisateur connecté :", pb.authStore.model);
    } catch (e) {
        console.error("Erreur de connexion :", e);
    }
}

// Vérifier si l'utilisateur est connecté
export function isLoggedIn() {
    return pb.authStore.isValid;
}

// Déconnexion d'un utilisateur
export async function logoutUser() {
    pb.authStore.clear();
    console.log("Déconnexion réussie !");
}

// recup un invite
export async function oneGuest(id) {
    try {
        return await pb.collection('Invites').getOne(id);
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'invité:', error);
        return null;
    }
}