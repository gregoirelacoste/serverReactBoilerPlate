interface Details {
  to?: string;
  subject?: string;
}

class MailError extends Error {
  error: object;
  details?: Details;
  message: string;
  date: Date;
  constructor(error: object, details: Details, ...params: any) {
    super(...params);
    // Maintenir dans la pile une trace adéquate de l'endroit où l'erreur a été déclenchée (disponible seulement en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MailError);
    }
    this.name = "MailError";
    // Informations de déboguage personnalisées
    this.details = details;
    this.error = error;
    this.message =
      ("Erreur envoi mail " + this.details && this.details.subject) ||
      "Indéfini";
    this.date = new Date();
  }
}

export default MailError;
