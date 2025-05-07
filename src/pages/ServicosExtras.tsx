
import React from 'react';
import { Shield, Sun, Eye, Zap } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import ServiceCard from '@/components/ServiceCard';

const ServicosExtras = () => {
  const servicosDetalhados = [
    {
      id: 'filtro-azul',
      icon: Shield,
      imageSrc: "/lovable-uploads/filtro_azul.jpg",
      imageCredit: {
        text: "Imagem fornecida por Freepik",
        link: "https://br.freepik.com/fotos-gratis/hacker-de-oculos-e-capuz-trabalha-em-um-computador-no-escuro-um-reflexo-em-oculos_9314167.htm#fromView=search&page=2&position=3&uuid=29aed331-b8d1-4042-9bdd-1ef167b53ed8&query=lente+filtro+azul",
      },
      title: 'Filtro de Luz Azul',
      description: 'Proteção contra a luz azul emitida por telas digitais, reduzindo a fadiga visual.',
      beneficios: [
        'Reduz a fadiga ocular durante o uso prolongado de dispositivos digitais',
        'Melhora o conforto visual ao trabalhar com telas',
        'Pode ajudar a melhorar a qualidade do sono',
        'Ideal para quem passa muitas horas em frente a computadores, tablets ou smartphones'
      ]
    },
    {
      id: 'antirreflexo',
      icon: Eye,
      imageSrc: "/lovable-uploads/lente_antirreflexa.png",
      imageCredit: {
        text: "Imagem criada por IA",
      },
      title: 'Tratamento Antirreflexo',
      description: 'Reduz os reflexos nas lentes, melhorando o conforto visual e a aparência estética.',
      beneficios: [
        'Elimina reflexos indesejados nas lentes',
        'Aumenta a transmissão de luz, melhorando a nitidez',
        'Reduz o desconforto ao dirigir à noite',
        'Proporciona melhor aparência estética (sem reflexos para quem olha para você)'
      ]
    },
    {
      id: 'protecao-uv',
      icon: Sun,
      imageSrc: "/lovable-uploads/lente_protecao_UV.png",
      imageCredit: {
        text: "Imagem criada por IA",
      },
      title: 'Proteção UV',
      description: 'Bloqueia os raios ultravioleta nocivos, protegendo seus olhos contra danos solares.',
      beneficios: [
        'Proteção contra raios UV potencialmente nocivos',
        'Reduz o risco de problemas oculares relacionados à exposição solar',
        'Proteção constante, mesmo em lentes transparentes',
        'Recomendado por oftalmologistas para uso diário'
      ]
    },
    {
      id: 'lente-fina',
      icon: Zap,
      imageSrc: "/lovable-uploads/lente_fina.png",
      imageCredit: {
        text: "Imagem fornecida por",
        link: "https://br.freepik.com/fotos-gratis/oculos-de-sol-retro-de-close-up-com-espaco-de-copia_5682677.htm#fromView=search&page=1&position=18&uuid=76127fba-b7ec-4a91-a562-e585ab7762da&query=oculos+com+lente+fina",
      },
      title: 'Lente Fina (Alto Índice)',
      description: 'Lentes mais finas e leves, ideais para graus mais altos, proporcionando maior conforto e estética.',
      beneficios: [
        'Lentes até 40% mais finas que as convencionais',
        'Maior leveza e conforto ao usar',
        'Melhor estética, especialmente para graus altos',
        'Menor distorção da aparência dos olhos através das lentes'
      ]
    }
  ];

  const outrosServicos = [
    {
      imageSrc: "/lovable-uploads/lente_coloracao.jpg",
      imageCredit: {
        text: "Imagem fornecida por Freepik",
        link: "https://br.freepik.com/fotos-gratis/mulher-com-cabelo-escuro-relaxado-durante-um-belo-dia-de-primavera-usa-oculos-de-sol-listrado-poses-de-macacao-borrado_19045932.htm#fromView=search&page=1&position=13&uuid=43fd5667-ff8d-4783-a133-e307360ed819&query=Oculos+escuro",
      },
      title: 'Coloração',
      description: 'Adição de cor nas lentes para finalidade estética ou para maior conforto visual em ambientes com luzes intensas.'
    },
    {
      imageSrc: "/lovable-uploads/lente_resistente_a_riscos.jpg",
      imageCredit: {
        text: "Imagem fornecida por Freepik",
        link: "https://br.freepik.com/fotos-gratis/doutor-segurando-em-uma-mao-um-par-de-oculos-emoldurados-pretos_5739177.htm#fromView=search&page=1&position=1&uuid=6d6fca81-9b13-4358-b603-f4676682a363&query=Oculos+com+Lente+Resist%C3%AAncia+a+Riscos",
      },
      title: 'Resistência a Riscos',
      description: 'Tratamento especial que aumenta a durabilidade da lente, protegendo contra arranhões e marcas.'
    },
    {
      imageSrc: "/lovable-uploads/lente_hidrofobico.png",
      imageCredit: {
        text: "Imagem criada por IA",
      },
      title: 'Tratamento Hidrofóbico',
      description: 'Repele água e gordura, facilitando a limpeza e mantendo as lentes mais tempo limpas.'
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Serviços Extras</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Conheça os recursos adicionais que podem melhorar ainda mais a qualidade e o conforto das suas lentes.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {servicosDetalhados.map((servico, index) => (
            <div 
              key={servico.id} 
              id={servico.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index !== servicosDetalhados.length - 1 ? 'mb-16 pb-16 border-b border-gray-200' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <servico.icon className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">{servico.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-6">{servico.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Benefícios:</h3>
                  <ul className="space-y-2">
                    {servico.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-600">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : ''} flex flex-col justify-center`}>
                <div className="rounded-lg overflow-hidden w-full max-w-md">
                  <img 
                    src={servico.imageSrc} 
                    alt={servico.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {servico.imageCredit && (
                  <div className="mt-2 text-xs text-gray-500 italic text-center mx-auto max-w-md">
                    {servico.imageCredit.link ? (
                      <a 
                        href={servico.imageCredit.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary hover:underline"
                      >
                        {servico.imageCredit.text}
                      </a>
                    ) : (
                      <span>{servico.imageCredit.text}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outros Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Outros Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça outros recursos disponíveis para personalizar suas lentes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {outrosServicos.map((servico, index) => (
              <ServiceCard 
                key={index}
                imageSrc={servico.imageSrc}
                title={servico.title}
                description={servico.description}
                imageCredit={servico.imageCredit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Escolha os melhores recursos para suas lentes</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Personalize suas lentes com os serviços extras que atendem às suas necessidades específicas.
          </p>
          <CTAButton 
            text="Fazer Pedido" 
            to="/pedido" 
            className="bg-white text-primary hover:bg-gray-100"
          />
        </div>
      </section>
    </main>
  );
};

export default ServicosExtras;
