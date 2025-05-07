
import React from 'react';
import HeroSection from '@/components/como-funciona/HeroSection';
import ProcessStep from '@/components/como-funciona/ProcessStep';
import FAQSection from '@/components/como-funciona/FAQSection';
import CTASection from '@/components/como-funciona/CTASection';

const ComoFunciona = () => {
  const faqItems = [
    {
      question: "Vocês vendem armações?",
      answer: "Não, trabalhamos exclusivamente com lentes. Você deve comprar sua armação separadamente e trazê-la até nós para a instalação das lentes."
    },
    {
      question: "Qual o prazo para ficar pronto?",
      answer: "O prazo varia conforme o tipo de lente escolhida, mas geralmente entre 3 a 7 dias úteis. Informaremos o prazo específico para o seu pedido."
    },
    {
      question: "Posso fazer sem receita?",
      answer: "Recomendamos sempre o uso de uma receita atualizada de um oftalmologista. Para alguns casos simples podemos fazer sem receita, mas é necessário consultar."
    },
    {
      question: "Como é feito o pagamento?",
      answer: "O pagamento pode ser feito no momento da entrega da armação, via PIX, cartão de crédito/débito ou dinheiro."
    },
    {
      question: "Vocês dão garantia nas lentes?",
      answer: "Sim, oferecemos garantia de fabricação em todas as nossas lentes. O prazo e condições variam conforme o tipo escolhido."
    },
  ];

  const processSteps = [
    {
      stepNumber: 1,
      title: "Escolha sua Lente",
      description: "Navegue pelo nosso site e escolha o tipo de lente ideal para você. Temos opções monofocais, multifocais, fotossensíveis e bifocais. Você também pode adicionar serviços extras como filtro azul, antirreflexo e proteção UV.",
      bulletPoints: [
        "Compare os diferentes tipos de lentes disponíveis",
        "Verifique qual a mais adequada para sua necessidade",
        "Consulte os serviços extras disponíveis",
      ],
      imageSrc: "/lovable-uploads/homem-a-procura-de-novos-oculos-no-optometrista.jpg",
      imageAlt: "Escolha de lentes",
      imageCredit: {
        text: "Imagem fornecida por",
        link: "https://br.freepik.com/fotos-gratis/homem-a-procura-de-novos-oculos-no-optometrista_4722753.htm#fromView=search&page=1&position=35&uuid=32259171-f2e2-4aab-9a74-8a42a2041ff5&query=pessoa+escolhendo+oculos",
      },
      ctaButton: {
        text: "Ver Tipos de Lentes",
        to: "/tipos-de-lentes",
        isSecondary: true,
      },
      imagePosition: "right" as const,
    },
    {
      stepNumber: 2,
      title: "Envie seu Pedido via WhatsApp",
      description: "Utilize o formulário de pedido em nosso site para preencher todas as informações necessárias. Ao finalizar, você será redirecionado para o WhatsApp com a mensagem pronta para envio.",
      bulletPoints: [
        "Preencha os dados da sua prescrição médica",
        "Selecione o tipo de lente e serviços extras desejados",
        "Envie o pedido com um único clique",
      ],
      imageSrc: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Envio via WhatsApp",
      ctaButton: {
        text: "Fazer Pedido",
        to: "/pedido",
      },
      imagePosition: "left" as const,
    },
    {
      stepNumber: 3,
      title: "Entregue sua Armação",
      description: "Após o envio do pedido, você receberá uma confirmação e deverá levar sua armação até nosso ponto de recebimento. Lá, faremos a conferência final do pedido e confirmaremos o prazo de entrega.",
      bulletPoints: [
        "Leve sua armação ao endereço indicado",
        "Realizamos a conferência das medidas e do pedido",
        "Confirmamos o prazo de entrega",
      ],
      imageSrc: "/lovable-uploads/homem_entregando_armacao.jpg",
      imageAlt: "Entregue sua armação",
      imageCredit: {
        text: "Imagem fornecida por",
        link: "https://br.freepik.com/fotos-gratis/homem-a-procura-de-novos-oculos-no-optometrista_4721966.htm#fromView=search&page=1&position=0&uuid=bbd53571-94be-4d35-a758-91382c17d31b&query=pessoa+entregando+oculos+para+outra+pessoa",
      },
      ctaButton: {
        text: "Ver Localização",
        to: "/contato",
        isSecondary: true,
      },
      imagePosition: "right" as const,
    },
    {
      stepNumber: 4,
      title: "Receba seu Óculos Pronto",
      description: "Quando seu óculos estiver pronto, você receberá uma notificação via WhatsApp. Basta retornar ao ponto de entrega para retirar suas lentes já instaladas na armação.",
      bulletPoints: [
        "Receba notificação quando estiver pronto",
        "Retire no mesmo local onde entregou",
        "Verifique a qualidade das lentes instaladas",
      ],
      imageSrc: "/lovable-uploads/close-up-mulher-recebendo-pacote.jpg",
      imageAlt: "Receba seu Óculos Pronto",
      imageCredit: {
        text: "Imagem fornecida por",
        link: "https://br.freepik.com/fotos-gratis/close-up-mulher-recebendo-pacote_18492581.htm#fromView=search&page=1&position=36&uuid=76a5fd8f-6573-40f7-8370-3888d7209fe2&query=entregando+entrega+para+pessoa",
      },
      imagePosition: "left" as const,
    },
  ];

  return (
    <main className="pt-24">
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </section>

      <FAQSection faqItems={faqItems} />
      <CTASection />
    </main>
  );
};

export default ComoFunciona;
