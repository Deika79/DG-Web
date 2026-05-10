import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: "DG Web Studio <contacto@dg-webstudio.com>",
      to: "contacto@dg-webstudio.com",
      subject: `Nuevo mensaje de ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nuevo mensaje desde la web</h2>

          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Mensaje:</strong></p>

          <div style="margin-top:10px;padding:15px;background:#f1f5f9;border-radius:10px;">
            ${message}
          </div>
        </div>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
    });
  }
}