import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Search, Send, ArrowDown, Smartphone, ShoppingBag } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import StepCard from '@/components/StepCard';
import LensCard from '@/components/LensCard';
import ServiceCard from '@/components/ServiceCard';

const Home = () => {
  return <main className="pt-16">
      {/* Hero Section */}
      <section className="py-0 relative">
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative">
          <img 
            alt="Lentes para óculos" 
            className="w-full h-full object-cover object-center" 
            src="/lovable-uploads/bf66d898-ab73-408c-818a-7f400d9bff34.png" 
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container-custom">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white">
                  Lentes de fábrica para o seu óculos com qualidade e agilidade
                </h1>
                <p className="text-lg text-white/90 mb-8">
                  Seus óculos com o tipo de lente perfeito para suas necessidades. Fácil, rápido e com entrega no prazo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton text="Fazer Pedido" to="/pedido" />
                  <CTAButton text="Como Funciona" to="/como-funciona" isSecondary={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Como Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compre suas lentes em quatro passos simples, sem complicação.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <StepCard icon={Search} title="Escolha sua Lente" description="Navegue pelo site e escolha o tipo de lente ideal para você." stepNumber={1} />
            </div>
            <div className="relative">
              <StepCard icon={Smartphone} title="Envie via WhatsApp" description="Preencha os dados e envie seu pedido direto pelo WhatsApp." stepNumber={2} />
            </div>
            <div className="relative">
              <StepCard icon={ShoppingBag} title="Entregue sua Armação" description="Combine o local para entrega da sua armação com o vendedor." stepNumber={3} />
            </div>
            <div className="relative">
              <StepCard icon={Eye} title="Receba seu Óculos" description="Combine o local para retirada do seu óculos pronto com as lentes instaladas." stepNumber={4} />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <CTAButton text="Entenda o Processo Completo" to="/como-funciona" isSecondary={true} />
          </div>
        </div>
      </section>

      {/* Tipos de Lentes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Tipos de Lentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os diferentes tipos de lentes disponíveis para suas necessidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <LensCard title="Monofocal" description="Lentes com o mesmo grau em toda a sua extensão, ideais para corrigir miopia, hipermetropia ou astigmatismo." imageSrc="/lovable-uploads/oculos_com_lente_monofocal.png" to="/tipos-de-lentes#monofocal" />
            <LensCard title="Multifocal" description="Lentes com diferentes graus em diferentes áreas, perfeitas para quem precisa de correção para longe e perto." imageSrc="/lovable-uploads/oculos_com_lente_multifocal.png" to="/tipos-de-lentes#multifocal" />
            <LensCard title="Fotossensível" description="Lentes que escurecem quando expostas à luz solar, oferecendo proteção e conforto visual." imageSrc="/lovable-uploads/oculos_com_lente_fotossensiveis.png" to="/tipos-de-lentes#fotossensivel" />
            <LensCard title="Bifocal" description="Lentes com dois focos distintos, uma parte para visão de longe e outra para visão de perto." imageSrc="/lovable-uploads/oculos_com_lente_bifocal.png" to="/tipos-de-lentes#bifocal" />
          </div>
          
          <div className="text-center mt-10">
            <CTAButton text="Ver Todos os Tipos" to="/tipos-de-lentes" isSecondary={true} />
          </div>
        </div>
      </section>

      {/* Serviços Extras Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Serviços Extras</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Adicione recursos especiais às suas lentes para melhorar ainda mais a sua experiência visual.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard imageSrc="/lovable-uploads/filtro_azul.jpg" title="Filtro Azul" description="Proteção contra a luz azul emitida por telas digitais, reduzindo a fadiga visual." />
            <ServiceCard imageSrc="/lovable-uploads/lente_antirreflexa.png" title="Antirreflexo" description="Reduz os reflexos nas lentes, melhorando o conforto visual e a aparência estética." />
            <ServiceCard imageSrc="/lovable-uploads/lente_protecao_UV.png" title="Proteção UV" description="Bloqueia os raios ultravioleta nocivos, protegendo seus olhos contra danos solares." />
          </div>
          
          <div className="text-center mt-10">
            <CTAButton text="Conheça Todos os Serviços" to="/servicos-extras" isSecondary={true} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua visão?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Faça seu pedido agora mesmo e tenha lentes de qualidade em sua armação.
          </p>
          <Link to="/pedido" className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center font-medium">
            Fazer Pedido <ArrowDown className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>;
};
export default Home;
