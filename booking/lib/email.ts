import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

interface BookingData {
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  services: { nameFi: string; price: number }[];
  customRequest?: string;
  carBrand: string;
  carModel: string;
  carYear: string;
  licensePlate: string;
  additionalInfo?: string;
  contactMethod: string;
}

function formatServices(services: BookingData["services"], customRequest?: string): string {
  const lines = services.map(
    (s) => `• ${s.nameFi}${s.price > 0 ? ` — alkaen ${s.price}€` : " — hinta sovitaan"}`
  );
  if (customRequest) lines.push(`• Oma pyyntö: ${customRequest}`);
  return lines.join("\n");
}

function totalPrice(services: BookingData["services"]): string {
  const t = services.reduce((sum, s) => sum + s.price, 0);
  return t > 0 ? `alkaen ${t}€` : "Hinta sovitaan";
}

/* ── Email to customer ── */
export async function sendCustomerConfirmation(b: BookingData) {
  const html = `
<!DOCTYPE html>
<html lang="fi">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F5F5F2;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5F5F2;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#1A1A1A;padding:28px 32px;text-align:center;">
          <p style="margin:0;font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;">3A Service Oy</p>
          <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.55);letter-spacing:0.1em;text-transform:uppercase;">Autokorjaamo · Espoo</p>
        </td></tr>

        <!-- Orange bar -->
        <tr><td style="background:#E8890A;padding:14px 32px;">
          <p style="margin:0;font-size:15px;font-weight:700;color:#1A1A1A;">✅ Varauksesi on vahvistettu!</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <p style="margin:0 0 8px;font-size:16px;color:#1A1A1A;">Hei <strong>${b.customerName}</strong>,</p>
          <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.6;">Kiitos varauksestasi! Alla ovat varauksesi tiedot. Otamme sinuun yhteyttä vahvistuksen jälkeen.</p>

          <!-- Booking details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8F6;border-radius:12px;overflow:hidden;margin-bottom:24px;">
            <tr><td style="padding:16px 20px;border-bottom:1px solid #E8E8E4;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#999;letter-spacing:0.1em;text-transform:uppercase;">AIKA</p>
              <p style="margin:4px 0 0;font-size:16px;font-weight:700;color:#1A1A1A;">${b.date} klo ${b.time}</p>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid #E8E8E4;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#999;letter-spacing:0.1em;text-transform:uppercase;">AUTO</p>
              <p style="margin:4px 0 0;font-size:15px;color:#1A1A1A;font-weight:600;">${b.carBrand} ${b.carModel} ${b.carYear}</p>
              <p style="margin:2px 0 0;font-size:14px;color:#666;">${b.licensePlate}</p>
            </td></tr>
            <tr><td style="padding:16px 20px;border-bottom:1px solid #E8E8E4;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#999;letter-spacing:0.1em;text-transform:uppercase;">PALVELUT</p>
              <p style="margin:4px 0 0;font-size:14px;color:#1A1A1A;line-height:1.8;">${b.services.map(s => `${s.nameFi}${s.price > 0 ? ` — alkaen ${s.price}€` : ""}`).join("<br>")}${b.customRequest ? `<br><em style="color:#666;">Oma pyyntö: ${b.customRequest}</em>` : ""}</p>
            </td></tr>
            <tr><td style="padding:16px 20px;">
              <p style="margin:0;font-size:11px;font-weight:700;color:#999;letter-spacing:0.1em;text-transform:uppercase;">ARVIOITU HINTA</p>
              <p style="margin:4px 0 0;font-size:18px;font-weight:900;color:#E8890A;">${totalPrice(b.services)}</p>
            </td></tr>
          </table>

          <!-- Address -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#EFF6FF;border-radius:12px;padding:16px 20px;margin-bottom:28px;">
            <tr><td>
              <p style="margin:0;font-size:13px;font-weight:700;color:#0F4C81;">📍 Osoitteemme</p>
              <p style="margin:6px 0 0;font-size:14px;color:#1A1A1A;">Kivimiehentie 4, 02150 Espoo</p>
              <p style="margin:4px 0 0;font-size:13px;color:#555;">Ma–Pe 08:00–17:00</p>
            </td></tr>
          </table>

          <p style="margin:0 0 6px;font-size:14px;color:#555;">Kysymyksiä? Soita meille:</p>
          <p style="margin:0;font-size:16px;font-weight:700;color:#1A1A1A;">+358 44 977 3677</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F5F5F2;padding:20px 32px;text-align:center;border-top:1px solid #E8E8E4;">
          <p style="margin:0;font-size:12px;color:#999;">3A Service Oy · Kivimiehentie 4, 02150 Espoo</p>
          <p style="margin:4px 0 0;font-size:12px;color:#bbb;">Tämä on automaattinen viesti — älä vastaa tähän sähköpostiin.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await transporter.sendMail({
    from: `"3A Service Oy" <${process.env.GMAIL_USER}>`,
    to: b.email,
    subject: `✅ Varausvahvistus — ${b.date} klo ${b.time} | 3A Service`,
    html,
  });
}

/* ── Notification email to shop ── */
export async function sendShopNotification(b: BookingData) {
  const text = `
UUSI VARAUS — 3A Service

Asiakas: ${b.customerName}
Puhelin: ${b.phone}
Sähköposti: ${b.email}
Yhteydenottotapa: ${b.contactMethod}

Päivä: ${b.date} klo ${b.time}

Auto: ${b.carBrand} ${b.carModel} ${b.carYear}
Rekisterinumero: ${b.licensePlate}
${b.additionalInfo ? `Lisätiedot: ${b.additionalInfo}` : ""}

Palvelut:
${formatServices(b.services, b.customRequest)}

Arvioitu hinta: ${totalPrice(b.services)}
  `.trim();

  await transporter.sendMail({
    from: `"3A Booking System" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `🔔 Uusi varaus: ${b.customerName} — ${b.date} ${b.time}`,
    text,
  });
}
