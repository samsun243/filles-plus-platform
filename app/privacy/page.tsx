import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Confidentialité', href: '/privacy' }
                ]}
            />
            <main className="bg-slate-50 py-12 sm:py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 font-heading">Politique de Confidentialité</h1>

                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-rose-600">
                            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

                            <p>
                                L&apos;ONG FILLES+ s&apos;engage à protéger la vie privée des visiteurs de notre site web. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
                            </p>

                            <h3>1. Collecte des informations</h3>
                            <p>
                                Nous collectons des informations lorsque vous :
                            </p>
                            <ul>
                                <li>Vous inscrivez à notre newsletter.</li>
                                <li>Remplissez un formulaire de contact ou de don.</li>
                                <li>Naviguez sur notre site (via des cookies anonymes).</li>
                            </ul>
                            <p>
                                Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone et, dans le cas de dons, vos informations de paiement (traitées de manière sécurisée par nos partenaires).
                            </p>

                            <h3>2. Utilisation des informations</h3>
                            <p>
                                Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
                            </p>
                            <ul>
                                <li>Vous envoyer des informations sur nos projets et campagnes.</li>
                                <li>Traiter vos dons et émettre des reçus fiscaux.</li>
                                <li>Améliorer notre site web et nos services.</li>
                                <li>Vous contacter par e-mail ou téléphone.</li>
                            </ul>

                            <h3>3. Protection des informations</h3>
                            <p>
                                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
                            </p>

                            <h3>4. Divulgation à des tiers</h3>
                            <p>
                                Nous ne vendons, n&apos;échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web (hébergeurs, processeurs de paiement), tant que ces parties conviennent de garder ces informations confidentielles.
                            </p>

                            <h3>5. Vos droits</h3>
                            <p>
                                Conformément à la législation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant via notre page de contact.
                            </p>

                            <h3>6. Consentement</h3>
                            <p>
                                En utilisant notre site, vous consentez à notre politique de confidentialité.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
