
import React from 'react';
import CTAButton from '@/components/CTAButton';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para fazer seu pedido?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Escolha suas lentes agora mesmo e dê o primeiro passo para uma visão mais clara.
        </p>
        <CTAButton 
          text="Fazer Pedido" 
          to="/pedido" 
          className="bg-white text-primary hover:bg-gray-100"
        />
      </div>
    </section>
  );
};

export default CTASection;
