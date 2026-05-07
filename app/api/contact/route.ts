import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      return Response.json(
        { error: 'Missing email configuration' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, subject, message } = await request.json();

    // Validate
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const response = await resend.emails.send({
      from: fromEmail,
      to: 'iamabdullahsaleem1@gmail.com',
      subject: `Portfolio Contact: ${subject} from ${name}`,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (response.error) {
      return Response.json(
        { error: response.error.message },
        { status: 400 }
      );
    }

    return Response.json({ success: true, id: response.data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}