"use client";

import { useState } from 'react';
import { 
  ArrowLeft, Info, Landmark, 
  QrCode, ChevronRight, AlertCircle,
  Banknote, Wallet, CheckCircle2, Share2 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SaquePage() {
  const router = useRouter();
  const [method, setMethod] = useState<'PIX' | 'TED'>('PIX');
  const [amount, setAmount] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConfirmSaque = () => {
    if (!amount) return alert("Por favor, insira um valor.");
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F0F5F2] p-4 md:p-8 font-sans">
      <div className="max-w-lg mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => router.push('/')}
            className="p-3 bg-white rounded-2xl shadow-sm border border-emerald-50 hover:bg-emerald-50 transition-all group"
          >
            <ArrowLeft size={20} className="text-emerald-600 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-1">Resgate</h2>
            <h1 className="text-2xl font-black text-[#064E3B] tracking-tight">Sacar Reais</h1>
          </div>
        </div>

        {/* Alerta de Horário */}
        <div className="bg-amber-50 p-5 rounded-[2rem] border border-amber-100 flex gap-4">
          <div className="text-amber-600 shrink-0 bg-white p-2 rounded-xl h-fit shadow-sm">
            <Info size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-black text-amber-700 uppercase tracking-widest text-[9px]">Aviso importante</h4>
            <p className="text-[11px] text-amber-800/80 leading-relaxed font-medium">
              Entre 22h e 06h, saques em BRL podem apresentar instabilidade por regras do Banco Central.
            </p>
          </div>
        </div>

      
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-50 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Valor do saque</h3>
            <span className="text-[10px] font-bold text-emerald-600">Taxa: R$ 0,00</span>
          </div>
          
          <div className="relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-gray-400">R$</span>
            <input 
              type="number"
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white p-6 pl-16 rounded-3xl text-3xl font-black text-[#064E3B] outline-none transition-all placeholder:text-gray-200"
            />
            <button 
              onClick={() => setAmount('1000')} // Exemplo de valor máximo
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-emerald-600 hover:text-white transition-all"
            >
              Máx
            </button>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-[2.5rem] shadow-lg border border-emerald-50">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 px-2 text-center">Sacar por</h3>
          
          <div className="flex p-1.5 bg-gray-100 rounded-[2rem] gap-2">
            <button 
              onClick={() => setMethod('TED')}
              className={`flex-1 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${method === 'TED' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
            >
              TED
            </button>
            <button 
              onClick={() => setMethod('PIX')}
              className={`flex-1 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${method === 'PIX' ? 'bg-[#064E3B] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
            >
              PIX
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {method === 'PIX' ? (
              <div className="group relative">
                <input 
                  type="text"
                  placeholder="Digite sua chave PIX"
                  className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl text-sm font-bold text-gray-800 outline-none focus:border-emerald-500 transition-all"
                />
                <QrCode size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-emerald-500" />
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-4">
                <Landmark size={24} className="text-emerald-600" />
                <p className="text-[11px] font-bold text-emerald-800 leading-tight">
                  O resgate via TED será enviado para a sua conta cadastrada final **1234-5.
                </p>
              </div>
            )}
          </div>
        </div>

       
        <div className="flex items-start gap-3 px-6 py-4 bg-white/50 rounded-2xl border border-dashed border-emerald-200">
          <AlertCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-emerald-800/60 font-bold uppercase leading-relaxed text-center">
            A conta de destino deve obrigatoriamente ser de sua titularidade (mesmo CPF ou CNPJ).
          </p>
        </div>

      
        <button 
          onClick={handleConfirmSaque}
          className="w-full bg-[#10B981] hover:bg-[#064E3B] text-white p-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-emerald-200 transition-all active:scale-95"
        >
          Confirmar Saque
        </button>

      </div>

  
      {isSuccess && (
        <div className="fixed inset-0 z-[100] bg-[#064E3B]/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={40} />
            </div>
            
            <div>
              <h3 className="text-2xl font-black text-[#064E3B] tracking-tight">Saque Solicitado!</h3>
              <p className="text-sm text-gray-500 font-medium">O valor estará na sua conta em instantes.</p>
            </div>

            <div className="bg-gray-50 rounded-[2rem] p-6 space-y-3 text-left">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Valor</span>
                <span className="text-gray-900">R$ {amount}</span>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Método</span>
                <span className="text-gray-900">{method}</span>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>ID Transação</span>
                <span className="text-gray-900">#TRX-992810</span>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => router.push('/')}
                className="w-full bg-[#064E3B] text-white p-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-all"
              >
              
              </button>
              <button className="w-full flex items-center justify-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest py-2">
                <Share2 size={16} /> Compartilhar Recibo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}