
import React from 'react';
import { MessageSquare, Instagram as InstagramIcon, MapPin as MapPinIcon } from 'lucide-react';

const Contato = () => {
  // Substitua com as informações reais
  const whatsappNumber = "5561992893006";
  const instagramUsername = "victorclear_vision";
  
  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Excelente atendimento e qualidade nas lentes. O prazo de entrega foi cumprido e o resultado superou minhas expectativas.",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      text: "Comprei lentes multifocais e a adaptação foi muito tranquila. O atendimento por WhatsApp foi rápido e eficiente.",
      rating: 5
    },
    {
      name: "Pedro Santos",
      text: "Ótimo custo-benefício. As lentes com filtro azul fizeram toda a diferença para meu trabalho no computador.",
      rating: 4
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Contato</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Entre em contato conosco para agendar a entrega e retirada de sua armação. Estamos prontos para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">WhatsApp</h2>
              <p className="text-gray-600 mb-6">Envie mensagens, tire dúvidas ou faça seu pedido pelo WhatsApp.</p>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary mt-auto"
              >
                Fale Conosco
              </a>
            </div>
            
            {/* Instagram */}
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <InstagramIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Instagram</h2>
              <p className="text-gray-600 mb-6">Siga-nos no Instagram para acompanhar novidades, promoções e dicas.</p>
              <a 
                href={`https://instagram.com/${instagramUsername}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary mt-auto"
              >
                Seguir
              </a>
            </div>
            
            {/* Localização */}
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <MapPinIcon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Localização</h2>
              <p className="text-gray-600 mb-6">Local para entrega e retirada de sua armação a combinar com o vendedor.</p>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary mt-auto"
              >
                Combinar Local
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Substituída por uma seção de instruções */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Informações de Entrega e Retirada</h2>
              
              <div className="flex items-start mb-4">
                <MapPinIcon className="h-5 w-5 text-primary mt-1 mr-3" />
                <p className="text-gray-600"><span className="font-semibold">Localização:</span> A combinar com o vendedor</p>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Instruções para entrega e retirada</h3>
                <p className="text-gray-600 mb-3">
                  Entre em contato via WhatsApp para combinar o melhor local e horário para entrega e retirada da sua armação.
                </p>
                <p className="text-gray-600">
                  Para a retirada, tenha em mãos o número do seu pedido (enviado por WhatsApp) para agilizar o processo.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Como funciona?</h3>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 w-8 h-8 text-primary font-semibold">1</span>
                  <p className="text-gray-600">Escolha suas lentes e faça seu pedido pelo WhatsApp</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 w-8 h-8 text-primary font-semibold">2</span>
                  <p className="text-gray-600">Combine o local e horário para entrega da sua armação</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 w-8 h-8 text-primary font-semibold">3</span>
                  <p className="text-gray-600">Receba uma confirmação com o prazo de entrega</p>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-primary/10 w-8 h-8 text-primary font-semibold">4</span>
                  <p className="text-gray-600">Quando pronto, combine o local para retirada do seu óculos</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">O que nossos clientes dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira alguns feedbacks reais que recebemos dos nossos clientes pelo WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['/lovable-uploads/feedback1.jpg', '/lovable-uploads/feedback2.jpg', '/lovable-uploads/feedback3.jpg'].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                <img 
                  src={src} 
                  alt={`Feedback ${index + 1}`} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
