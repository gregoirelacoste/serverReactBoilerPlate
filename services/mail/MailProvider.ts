import MailError from "./error";

export interface TransacMail {
  subject: string;
  text: string;
  htmlContent?: string;
  to?: string;
  replyTo?: string;
  from?: string;
}

export interface DefaultAdress {
  ADMIN_MAIL: string;
  FROM_ADDRESS: string;
  REPLY: string;
}

class MailProvider {
  private mailInstance: (any: any) => any;
  private formatMail: (any: any) => object;
  address: DefaultAdress;
  constructor(
    mailInstance: (any: any) => any,
    formatMail: (any: any) => object,
    defaultAddress: DefaultAdress
  ) {
    this.mailInstance = mailInstance;
    this.formatMail = formatMail;
    this.address = defaultAddress;
  }

  async sendTransac({
    subject,
    text,
    htmlContent = text,
    to = this.address.ADMIN_MAIL,
    replyTo = this.address.REPLY,
    from = this.address.FROM_ADDRESS,
  }: TransacMail) {
    try {
      const sentId = await this.mailInstance(
        this.formatMail({
          subject,
          text,
          htmlContent,
          to,
          replyTo,
          from,
        })
      );
      console.log(
        "mail envoyé : ",
        to,
        " Sujet : ",
        subject,
        " sentId : ",
        sentId
      );

      return { to, subject, sentId };
    } catch (e) {
      const err = new MailError(
        e,
        { subject, to },
        "Erreur envoie mail " + subject
      );
      console.warn(err);
      throw err;
    }
  }
}

export default MailProvider;
