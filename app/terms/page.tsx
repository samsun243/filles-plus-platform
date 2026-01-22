import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

export default function TermsOfUse() {
    return (
        <>
            <Header />
            <Breadcrumb
                items={[
                    { label: 'Accueil', href: '/' },
                    { label: 'Conditions', href: '/terms' }
                ]}
            />
            <main className="bg-slate-50 py-12 sm:py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-slate-100">
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 font-heading">Conditions d&apos;Utilisation</h1>

                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-rose-600">
                            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

                            <p>
                                Bienvenue sur le site web de l&apos;ONG FILLES+. En accédant à ce site, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect des lois locales applicables.
                            </p>

                            <h3>1. Licence d&apos;utilisation</h3>
                            <p>
                                Il est permis de télécharger temporairement une copie des documents (information ou logiciel) sur le site web de l&apos;ONG FILLES+ pour une visualisation transitoire personnelle et non commerciale uniquement. Il s&apos;agit de l&apos;octroi d&apos;une licence, non d&apos;un transfert de titre, et sous cette licence, vous ne pouvez pas :
                            </p>
                            <ul>
                                <li>Modifier ou copier le matériel ;</li>
                                <li>Utiliser le matériel à des fins commerciales ou pour toute exposition publique ;</li>
                                <li>Tenter de décompiler ou d&apos;ingénierie inverse tout logiciel contenu sur le site web de l&apos;ONG FILLES+ ;</li>
                                <li>Supprimer tout droit d&apos;auteur ou autre mention de propriété du matériel.</li>
                            </ul>

                            <h3>2. Exclusion de responsabilité</h3>
                            <p>
                                Les documents sur le site web de l&apos;ONG FILLES+ sont fournis "tels quels". L&apos;ONG FILLES+ ne donne aucune garantie, expresse ou implicite, et rejette par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande, d&apos;adéquation à un usage particulier ou de non-violation de la propriété intellectuelle.
                            </p>

                            <h3>3. Limitations</h3>
                            <p>
                                En aucun cas, l&apos;ONG FILLES+ ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d&apos;une interruption d&apos;activité) découlant de l&apos;utilisation ou de l&apos;incapacité d&apos;utiliser les documents sur le site Internet de l&apos;ONG FILLES+.
                            </p>

                            <h3>4. Liens</h3>
                            <p>
                                L&apos;ONG FILLES+ n&apos;a pas examiné tous les sites liés à son site Internet et n&apos;est pas responsable du contenu de ces sites liés. L&apos;inclusion de tout lien n&apos;implique pas l&apos;approbation par l&apos;ONG FILLES+ du site. L&apos;utilisation de tout site web lié est aux risques et périls de l&apos;utilisateur.
                            </p>

                            <h3>5. Modifications</h3>
                            <p>
                                L&apos;ONG FILLES+ peut réviser ces conditions d&apos;utilisation de son site web à tout moment sans préavis. En utilisant ce site web, vous acceptez d&apos;être lié par la version alors en vigueur de ces conditions d&apos;utilisation.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
