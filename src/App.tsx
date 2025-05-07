
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ComoFunciona from "@/pages/ComoFunciona";
import TiposDeLentes from "@/pages/TiposDeLentes";
import ServicosExtras from "@/pages/ServicosExtras";
import Pedido from "@/pages/Pedido";
import Contato from "@/pages/Contato";
import PoliticaDePrivacidade from "@/pages/PoliticaDePrivacidade";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/tipos-de-lentes" element={<TiposDeLentes />} />
              <Route path="/servicos-extras" element={<ServicosExtras />} />
              <Route path="/pedido" element={<Pedido />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
