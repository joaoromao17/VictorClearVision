
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-6">
            <span className="text-primary text-6xl font-bold">404</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Página não encontrada</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" />
          Voltar para Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
