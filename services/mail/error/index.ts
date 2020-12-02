class MailError extends Error {
  mailType: string;
  details: object;
  message: string;
  date: Date;
  constructor(mailType = "Non défini", details: object, ...params: any) {
    super(...params);
    // Maintenir dans la pile une trace adéquate de l'endroit où l'erreur a été déclenchée (disponible seulement en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MailError);
    }
    this.name = "MailError";
    // Informations de déboguage personnalisées
    this.mailType = "type : " + mailType;
    this.details = details;
    this.message = "Erreur envoi mail " + mailType;
    this.date = new Date();
  }
}

export default MailError;
