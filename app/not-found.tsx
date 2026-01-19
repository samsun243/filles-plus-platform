import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Non Trouvée</h2>
        <p className="text-xl mb-8 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-pink-600 transition inline-block"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
