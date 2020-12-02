import MailProvider from "./MailProvider";
import sendinBlueInstance from "./sendinBlue/sendinBlueInstance";
import formatMailForSendinBlue from "./sendinBlue/formatMail";

const address = {
  FROM_ADDRESS: "contact@@lv1.fr",
  ADMIN_MAIL: "gregoire@level-one.fr",
  REPLY: "contact@lv1.fr",
};

test("test mail", async () => {
  const mail = new MailProvider(
    sendinBlueInstance,
    formatMailForSendinBlue,
    address
  );
  const res = await mail.sendTransac({ subject: "test", text: "test mail" });
  console.log(res);
  expect(1).toEqual(1);
});
