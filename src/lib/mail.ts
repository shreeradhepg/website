import nodemailer from "nodemailer";
export async function sendMail({
  subject,
  body,
}: {
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
