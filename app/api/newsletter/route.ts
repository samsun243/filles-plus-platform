import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation basique
    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      );
    }

    // Validation format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Ici vous pouvez :
    // 1. Sauvegarder dans une base de données
    // 2. Envoyer un email de confirmation
    // 3. Intégrer avec un service de newsletter (Mailchimp, etc.)

    // Exemple d'envoi d'email de confirmation
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'newsletter@filles-plus.org',
      to: email,
      subject: 'Bienvenue à la newsletter FILLES+',
      html: `
        <h2>Bienvenue dans la communauté FILLES+ !</h2>
        <p>Merci de vous être abonné à notre newsletter.</p>
        <p>Vous recevrez bientôt nos dernières actualités et initiatives.</p>
        <br>
        <p>Cordialement,</p>
        <p>L'équipe ONG FILLES+</p>
      `,
    });

    // Et notifier l'admin
    await resend.emails.send({
      from: 'system@filles-plus.org',
      to: 'ongfillesplus@gmail.com',
      subject: 'Nouvel abonnement newsletter',
      html: `<p>Nouvel abonnement: ${email}</p>`,
    });
    */

    // Pour l'instant, on simule
    console.log('Nouvel abonnement newsletter:', email);

    return NextResponse.json(
      { message: 'Abonnement réussi' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'abonnement:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'abonnement' },
      { status: 500 }
    );
  }
}