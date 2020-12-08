import { TransacMail } from "../MailProvider";
// @ts-ignore
import SibApiV3Sdk from "sib-api-v3-sdk";

const formatMailForSendinBlue = ({
  subject,
  text,
  htmlContent,
  to,
  replyTo,
  from,
}: TransacMail) => {
  return new SibApiV3Sdk.SendSmtpEmail({
    to: [{ email: to }],
    sender: { email: from },
    replyTo: { email: replyTo },
    subject,
    text,
    htmlContent,
  });
};
export default formatMailForSendinBlue;
