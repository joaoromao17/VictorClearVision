
import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';

const TiposDeLentes = () => {
  const lentes = [
    {
      id: 'monofocal',
      title: 'Lentes Monofocais',
      description: 'São lentes com o mesmo grau em toda a sua extensão, corrigindo apenas um problema visual (miopia, hipermetropia ou astigmatismo).',
      imageUrl: '/lovable-uploads/oculos_com_lente_monofocal.png',
      indicacoes: [
        'Pessoas com miopia (dificuldade para enxergar de longe)',
        'Pessoas com hipermetropia (dificuldade para enxergar de perto)',
        'Pessoas com astigmatismo (visão distorcida)',
        'Ideal para quem não precisa de correção para leitura'
      ],
      beneficios: [
        'Opção mais acessível',
        'Adaptação rápida e fácil',
        'Disponível em diversos materiais',
        'Ótima nitidez visual para a distância corrigida'
      ]
    },
    {
      id: 'multifocal',
      title: 'Lentes Multifocais',
      description: 'São lentes com diferentes graus distribuídos progressivamente, permitindo visão nítida a qualquer distância (longe, meia distância e perto).',
      imageUrl: '/lovable-uploads/oculos_com_lente_multifocal.png',
      indicacoes: [
        'Pessoas acima de 40 anos com presbiopia (vista cansada)',
        'Quem precisa de correção para diferentes distâncias',
        'Quem não quer trocar de óculos para diferentes atividades',
        'Profissionais que alternam frequentemente entre tarefas próximas e distantes'
      ],
      beneficios: [
        'Transição suave entre diferentes distâncias',
        'Estética superior (não tem linha visível)',
        'Praticidade de usar um único par de óculos',
        'Tecnologia avançada para maior conforto visual'
      ]
    },
    {
      id: 'fotossensivel',
      title: 'Lentes Fotossensíveis',
      description: 'São lentes que escurecem quando expostas à luz solar (raios UV) e clareiam em ambientes internos ou com baixa luminosidade.',
      imageUrl: '/lovable-uploads/oculos_com_lente_fotossensiveis.png',
      indicacoes: [
        'Pessoas sensíveis à luz',
        'Quem não quer ter dois óculos (um de grau e um de sol)',
        'Pessoas que transitam frequentemente entre ambientes internos e externos',
        'Pacientes com indicação médica para proteção ocular contra raios UV'
      ],
      beneficios: [
        'Proteção UV contínua',
        'Conforto visual em diferentes condições de luz',
        'Economia por dispensar a necessidade de óculos de sol separados',
        'Disponível em combinação com outras tecnologias (monofocal, multifocal, etc.)'
      ]
    },
    {
      id: 'bifocal',
      title: 'Lentes Bifocais',
      description: 'São lentes com dois focos distintos separados por uma linha visível: a parte superior para visão de longe e a inferior para visão de perto.',
      imageUrl: '/lovable-uploads/oculos_com_lente_bifocal.png',
      indicacoes: [
        'Pessoas com presbiopia que preferem uma demarcação clara entre os campos visuais',
        'Quem tem dificuldade de adaptação às lentes multifocais',
        'Pessoas que realizam atividades específicas que exigem visão precisa a distâncias definidas',
        'Opção mais econômica para quem precisa de correção para longe e perto'
      ],
      beneficios: [
        'Campos visuais amplos e bem definidos',
        'Adaptação mais fácil para alguns usuários',
        'Custo mais acessível que as multifocais',
        'Boa nitidez nas duas distâncias principais'
      ]
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Tipos de Lentes</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Conheça os diferentes tipos de lentes disponíveis e escolha a opção ideal para suas necessidades visuais.
            </p>
          </div>
        </div>
      </section>

      {/* Lentes Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {lentes.map((lente, index) => (
            <div 
              key={lente.id} 
              id={lente.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index !== lentes.length - 1 ? 'mb-20 pb-20 border-b border-gray-200' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : ''}`}>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{lente.title}</h2>
                <p className="text-gray-600 mb-6">{lente.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Indicado para:</h3>
                  <ul className="space-y-2">
                    {lente.indicacoes.map((indicacao, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-600">{indicacao}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Benefícios:</h3>
                  <ul className="space-y-2">
                    {lente.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span className="text-gray-600">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link 
                    to={`/pedido?lente=${lente.id}`} 
                    className="btn-primary"
                  >
                    Quero essa lente
                  </Link>
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://wa.me/5561992893006?text=Olá! Gostaria de mais informações sobre as lentes ${lente.title}`, '_blank');
                    }}
                    className="btn-secondary"
                  >
                    Tirar dúvidas
                  </a>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'order-2 md:order-1' : ''}`}>
                <img 
                  src={lente.imageUrl}
                  alt={lente.title}
                  className="rounded-lg shadow-lg w-full h-auto max-h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Encontrou a lente ideal para você?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Faça seu pedido agora e tenha a melhor experiência visual com nossas lentes de qualidade.
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

export default TiposDeLentes;
