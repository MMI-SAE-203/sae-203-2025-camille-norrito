import {
    getAllFilms, getAllActivities, getAllInvites, getFilmById, getActivityById, 
    getInviteById, getActivitiesByAnimateurId, getActivitiesByAnimateurName, update, 
    createUser, loginUser, isLoggedIn, logoutUser
} from './backend.mjs';

// test de récupération de tous les films triés par date
try {
    const Films = await getAllFilms();
    console.table(Films);
} catch (e) {
    console.error(e);
}

// test de récupération de toutes les activités triées par date
try {
    const Activities = await getAllActivities();
    console.table(Activities);
} catch (e) {
    console.error(e);
}

// test de récupération de tous les invités triés par nom
try {
    const invites = await getAllInvites();
    console.table(invites);
} catch (e) {
    console.error(e);
}

// test de récupération des informations d’un film par ID
try {
    const film = await getFilmById('72q66cz9z9x1014');
    console.log(film);
} catch (e) {
    console.error(e);
}

// test de récupération des informations d’une activité par ID
try {
    const activity = await getActivityById('2963e1nx1zx05zk');
    console.log(activity);
} catch (e) {
    console.error(e);
}

// test de récupération des informations d’un invité par ID
try {
    const invite = await getInviteById('50165n3lm5td649');
    console.log(invite);
} catch (e) {
    console.error(e);
}

// test de récupération des activités d’un animateur par ID
try {
    const activitiesByAnimateur = await getActivitiesByAnimateurId('50165n3lm5td649');
    console.table(activitiesByAnimateur);
} catch (e) {
    console.error(e);
}

// test de récupération des activités d’un animateur par son nom
try {
    const activitiesByName = await getActivitiesByAnimateurName("Pasquier");
    console.log(activitiesByName);
} catch (e) {
    console.error(e);
}

// test de modif des activités ou du film
try {
    await update("Activites", 'jhcr75q024s9z6f', { titre_activite: "After Party : Concert live Musiques cultes du cinéma SF" });
} catch (e) {
    console.error(e);
}

// Test de création d'un utilisateur
try {
    await createUser("user1@test.fr", "123456789");
} catch (e) {
    console.error(e);
}

// Test de connexion utilisateur
try {
    await loginUser("user1@test.fr", "123456789");
    console.log("Utilisateur connecté ?", isLoggedIn());
} catch (e) {
    console.error(e);
}

// Test de déconnexion utilisateur
try {
    await logoutUser();
    console.log("Utilisateur connecté après déconnexion ?", isLoggedIn());
} catch (e) {
    console.error(e);
}
