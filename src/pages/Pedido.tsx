import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Define proper types for the form data structure
type ServicosExtras = {
  filtroAzul: boolean;
  antirreflexo: boolean;
  protecaoUV: boolean;
  lenteFina: boolean;
};

type GradoOcular = {
  esfera: string;
  cilindro: string;
  eixo: string;
  adicao: string;
};

type FormData = {
  tipoDeLente: string;
  servicosExtras: ServicosExtras;
  gradoDireito: GradoOcular;
  gradoEsquerdo: GradoOcular;
  observacoes: string;
  nome: string;
  telefone: string;
};

const Pedido = () => {
  const [formData, setFormData] = useState<FormData>({
    tipoDeLente: '',
    servicosExtras: {
      filtroAzul: false,
      antirreflexo: false,
      protecaoUV: false,
      lenteFina: false,
    },
    gradoDireito: {
      esfera: '',
      cilindro: '',
      eixo: '',
      adicao: '',
    },
    gradoEsquerdo: {
      esfera: '',
      cilindro: '',
      eixo: '',
      adicao: '',
    },
    observacoes: '',
    nome: '',
    telefone: '',
  });

  const tiposLentes = [
    { id: 'monofocal', label: 'Monofocal' },
    { id: 'multifocal', label: 'Multifocal' },
    { id: 'bifocal', label: 'Bifocal' },
    { id: 'fotossensivel', label: 'Fotossensível' },
  ];

  const servicosExtras = [
    { id: 'filtroAzul', label: 'Filtro de Luz Azul' },
    { id: 'antirreflexo', label: 'Antirreflexo' },
    { id: 'protecaoUV', label: 'Proteção UV' },
    { id: 'lenteFina', label: 'Lente Fina (Alto Índice)' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as Record<string, any>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      servicosExtras: {
        ...prev.servicosExtras,
        [name]: checked
      }
    }));
  };

  const formatWhatsAppMessage = () => {
    const selectedServicos = Object.entries(formData.servicosExtras)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => {
        const servico = servicosExtras.find(s => s.id === key);
        return servico ? servico.label : key;
      })
      .join(', ');

    return `*Pedido de Lentes - Victor Clear Vision*
    
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Tipo de Lente:* ${formData.tipoDeLente}
*Serviços Extras:* ${selectedServicos || 'Nenhum'}

*Grau Olho Direito (OD):*
- Esfera: ${formData.gradoDireito.esfera || 'N/A'}
- Cilindro: ${formData.gradoDireito.cilindro || 'N/A'}
- Eixo: ${formData.gradoDireito.eixo || 'N/A'}
- Adição: ${formData.gradoDireito.adicao || 'N/A'}

*Grau Olho Esquerdo (OE):*
- Esfera: ${formData.gradoEsquerdo.esfera || 'N/A'}
- Cilindro: ${formData.gradoEsquerdo.cilindro || 'N/A'}
- Eixo: ${formData.gradoEsquerdo.eixo || 'N/A'}
- Adição: ${formData.gradoEsquerdo.adicao || 'N/A'}

*Observações:*
${formData.observacoes || 'Nenhuma observação adicional.'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.tipoDeLente) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, selecione um tipo de lente.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.nome || !formData.telefone) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha seu nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    // Formata a mensagem para o WhatsApp
    const message = encodeURIComponent(formatWhatsAppMessage());
    
    // Número de WhatsApp (substitua pelo número real)
    const whatsappNumber = "5561992893006";
    
    // Redireciona para o WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Faça seu Pedido</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Preencha o formulário abaixo com os detalhes do seu pedido e envie diretamente para nosso WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="card p-8">
            <form onSubmit={handleSubmit}>
              {/* Dados Pessoais */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-800">Seus Dados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Tipo de Lente */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-800">Tipo de Lente</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {tiposLentes.map((tipo) => (
                    <div key={tipo.id} className="relative">
                      <input
                        type="radio"
                        id={tipo.id}
                        name="tipoDeLente"
                        value={tipo.label}
                        checked={formData.tipoDeLente === tipo.label}
                        onChange={handleInputChange}
                        className="peer absolute opacity-0"
                      />
                      <label
                        htmlFor={tipo.id}
                        className="block p-4 bg-gray-50 border-2 border-gray-200 rounded-md text-center cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/10"
                      >
                        <span className="block font-medium text-gray-800">{tipo.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Serviços Extras */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-800">Serviços Extras</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicosExtras.map((servico) => (
                    <div key={servico.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={servico.id}
                        name={servico.id}
                        checked={formData.servicosExtras[servico.id as keyof typeof formData.servicosExtras]}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor={servico.id} className="ml-2 text-gray-700">
                        {servico.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grau Ocular */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-800">Grau</h2>
                
                {/* Olho Direito */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Olho Direito (OD)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="gradoDireito.esfera" className="block text-sm font-medium text-gray-700 mb-1">Esfera</label>
                      <input
                        type="text"
                        id="gradoDireito.esfera"
                        name="gradoDireito.esfera"
                        value={formData.gradoDireito.esfera}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: +2.00 / -1.50"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoDireito.cilindro" className="block text-sm font-medium text-gray-700 mb-1">Cilindro</label>
                      <input
                        type="text"
                        id="gradoDireito.cilindro"
                        name="gradoDireito.cilindro"
                        value={formData.gradoDireito.cilindro}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: -0.75"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoDireito.eixo" className="block text-sm font-medium text-gray-700 mb-1">Eixo</label>
                      <input
                        type="text"
                        id="gradoDireito.eixo"
                        name="gradoDireito.eixo"
                        value={formData.gradoDireito.eixo}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: 180°"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoDireito.adicao" className="block text-sm font-medium text-gray-700 mb-1">Adição</label>
                      <input
                        type="text"
                        id="gradoDireito.adicao"
                        name="gradoDireito.adicao"
                        value={formData.gradoDireito.adicao}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: +2.50"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Olho Esquerdo */}
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-800">Olho Esquerdo (OE)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label htmlFor="gradoEsquerdo.esfera" className="block text-sm font-medium text-gray-700 mb-1">Esfera</label>
                      <input
                        type="text"
                        id="gradoEsquerdo.esfera"
                        name="gradoEsquerdo.esfera"
                        value={formData.gradoEsquerdo.esfera}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: +2.00 / -1.50"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoEsquerdo.cilindro" className="block text-sm font-medium text-gray-700 mb-1">Cilindro</label>
                      <input
                        type="text"
                        id="gradoEsquerdo.cilindro"
                        name="gradoEsquerdo.cilindro"
                        value={formData.gradoEsquerdo.cilindro}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: -0.75"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoEsquerdo.eixo" className="block text-sm font-medium text-gray-700 mb-1">Eixo</label>
                      <input
                        type="text"
                        id="gradoEsquerdo.eixo"
                        name="gradoEsquerdo.eixo"
                        value={formData.gradoEsquerdo.eixo}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: 180°"
                      />
                    </div>
                    <div>
                      <label htmlFor="gradoEsquerdo.adicao" className="block text-sm font-medium text-gray-700 mb-1">Adição</label>
                      <input
                        type="text"
                        id="gradoEsquerdo.adicao"
                        name="gradoEsquerdo.adicao"
                        value={formData.gradoEsquerdo.adicao}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Ex: +2.50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 text-gray-800">Observações</h2>
                <div>
                  <textarea
                    id="observacoes"
                    name="observacoes"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Adicione qualquer informação adicional relevante para seu pedido..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary py-4 px-8 text-lg flex items-center justify-center mx-auto"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Enviar via WhatsApp
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Ao clicar em enviar, você será redirecionado para o WhatsApp com sua mensagem pronta para envio.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pedido;
