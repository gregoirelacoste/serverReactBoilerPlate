import { TransacMail } from "../MailProvider";

const formatMailForSendinBlue = ({
  subject,
  text,
  htmlContent,
  to,
  replyTo,
  from,
}: TransacMail) => ({
  to: [{ email: to }],
  sender: { email: from },
  replyTo: { email: replyTo },
  subject,
  text,
  htmlContent,
});
export default formatMailForSendinBlue;
