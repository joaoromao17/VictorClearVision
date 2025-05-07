
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FAQSection = ({ faqItems }: FAQSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nosso processo e serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
