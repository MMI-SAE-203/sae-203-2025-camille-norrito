const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Paris",
};

const formatter = new Intl.DateTimeFormat("fr-FR", options);

export function formatDate(dateString) {
    const date = new Date(dateString);

    if (isNaN(date)) {
        return "Date invalide"; // Empêche les erreurs si la date est mal formée
    }

    return formatter.format(date);
}
