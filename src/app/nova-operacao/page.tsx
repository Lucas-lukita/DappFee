"use client";

"use client";

import { useState } from 'react';
import { 
  ArrowLeft, AlertTriangle, Copy, Info, 
  ChevronRight, Landmark, QrCode, Wallet 
} from 'lucide-react';
import Link from 'next/link';

export default function NewOperationPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("8cfbeb5c-3266-4bcf-b843-e54a1078ff55");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9] p-4 md:p-8 font-sans">
      <div className="max-w-lg mx-auto space-y-4">
        
        {/* Header de Navegação */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">Depositar BRL(reais)</h1>
        </div>

        {/* Card de Alerta (Atenção) */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-red-500 flex gap-4">
          <div className="text-red-500 shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-red-600 text-lg">Atenção!</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              A conta bancária de origem do depósito deve ser do mesmo CPF cadastrado no <span className="font-bold">FeeAgro</span>.
            </p>
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
          <h3 className="text-gray-500 font-bold text-sm uppercase tracking-wider">
            Limites <span className="text-agro-primary">disponíveis</span> para depósito Reais
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Mínimo</span>
              <span className="font-bold text-gray-800">R$ 0,01</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Máximo mensal</span>
              <div className="text-right">
                <span className="font-bold text-agro-primary">R$ 80.000,00</span>
                <span className="text-gray-400 block text-[10px]">de R$ 80.000,00</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Máximo anual</span>
              <div className="text-right">
                <span className="font-bold text-agro-primary">R$ 103.133,47</span>
                <span className="text-gray-400 block text-[10px]">de R$ 120.000,00</span>
              </div>
            </div>
          </div>
        </div>

       
        <div className="bg-white p-5 rounded-2xl shadow-sm flex items-center gap-4 group">
          <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
            <QrCode size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Deposite fazendo um Pix para:</p>
            <p className="text-xs font-mono text-gray-800 truncate font-bold" style={{ fontSize: '18px' }}>feAgro@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={copyToClipboard}
              className={`p-2 rounded-lg transition-colors ${copied ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
            >
              <Copy size={20} />
            </button>
            <button className="p-2 bg-gray-50 text-gray-400 rounded-lg hover:bg-gray-100">
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Opções Rápidas (Ações) */}
        <div className="space-y-2">
          <button className="w-full bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between group hover:bg-gray-50 transition-all border border-transparent hover:border-agro-primary/20">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
                <Wallet size={24} />
              </div>
              <span className="font-bold text-gray-700">Faça um #BIX</span>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-agro-primary transition-colors" />
          </button>

          <button className="w-full bg-white p-5 rounded-2xl shadow-sm flex items-center justify-between group hover:bg-gray-50 transition-all border border-transparent hover:border-agro-primary/20">
            <div className="flex items-center gap-4">
              <div className="bg-gray-50 p-3 rounded-xl text-gray-500">
                <Landmark size={24} />
              </div>
              <span className="font-bold text-gray-700">Dados bancários</span>
            </div>
            <ChevronRight size={20} className="text-gray-300 group-hover:text-agro-primary transition-colors" />
          </button>
        </div>

        {/* Rodapé Informativo */}
        <p className="text-center text-[10px] text-gray-400 font-medium px-10">
          Transferências via TED ou DOC não são aceitas e serão devolvidas automaticamente.
        </p>

      </div>
    </div>
  );
}