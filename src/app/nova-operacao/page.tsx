"use client";

import { useState } from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  Copy,
  Info,
  QrCode,
  CreditCard,
  Sprout,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function NewOperationPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F5F2] p-4 md:p-8 font-sans">
      <div className="max-w-lg mx-auto space-y-6">

        {/* Header de Navegação */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/" className="p-3 bg-white rounded-2xl shadow-sm border border-emerald-50 hover:bg-emerald-50 transition-all group">
            <ArrowLeft size={20} className="text-emerald-600 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div>
            <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-1">Finanças</h2>
            <h1 className="text-xl font-black text-gray-800 tracking-tight">Depositar BRL</h1>
          </div>
        </div>

        {/* Card de Alerta (Atenção) */}
        <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-red-900/5 border-l-8 border-red-500 flex gap-4">
          <div className="text-red-500 shrink-0 bg-red-50 p-2 rounded-xl h-fit">
            <AlertTriangle size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-black text-red-600 uppercase tracking-widest text-xs">Atenção!</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              A conta bancária de origem do depósito deve ser do mesmo CPF e CNPJ cadastrados na <span className="font-bold text-gray-900">Plataforma FeeAgro</span>.
            </p>
          </div>
        </div>

        {/* Card de Limites */}
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-emerald-50 space-y-5">
          <h3 className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            Limites Disponíveis
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Mínimo</span>
              <span className="font-black text-gray-800">R$ 0,01</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Máximo mensal</span>
              <div className="text-right">
                <span className="font-black text-emerald-600">R$ 80.000,00</span>
                <span className="text-gray-400 block text-[9px] font-bold">DE R$ 80.000,00</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-gray-400 uppercase">Máximo anual</span>
              <div className="text-right">
                <span className="font-black text-emerald-600">R$ 103.133,47</span>
                <span className="text-gray-400 block text-[9px] font-bold">DE R$ 120.000,00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card PIX */}
        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border-2 border-emerald-100 flex items-center gap-4 group relative overflow-hidden">
          <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 shadow-inner">
            <QrCode size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Chave Pix E-mail:</p>
            <p className="text-lg font-black text-gray-800 tracking-tighter truncate">feAgro@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => copyToClipboard("feAgro@gmail.com")}
              className={`p-3 rounded-xl transition-all shadow-md active:scale-90 ${copied ? 'bg-emerald-600 text-white' : 'bg-gray-50 text-emerald-600 hover:bg-emerald-100'}`}
            >
              {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        {/* Card de Dados Bancários para TED (Alternativa) */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-50">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Dados para TED (Alternativa)</h3>
            <span className="flex items-center gap-1.5 text-emerald-600 font-black text-[9px] uppercase">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Conta Verificada
            </span>
          </div>

          <div className="space-y-4">
            {/* Layout Estilo Cartão Institucional */}
            <div className="bg-gradient-to-br from-[#064E3B] to-[#10B981] p-6 rounded-[2.5rem] text-white shadow-lg relative overflow-hidden group">
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[9px] font-black text-emerald-200 uppercase tracking-widest mb-1">Instituição</p>
                    <p className="text-sm font-bold tracking-tight">789 - Fee Agro Bank S.A.</p>
                  </div>
                  <div className="bg-white/10 p-2 rounded-xl">
                    <CreditCard size={20} className="text-emerald-100" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] font-black text-emerald-200 uppercase tracking-widest mb-1">Agência</p>
                    <p className="text-sm font-bold">0001</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-emerald-200 uppercase tracking-widest mb-1">Conta Corrente</p>
                    <p className="text-sm font-bold">1234567-8</p>
                  </div>
                </div>
              </div>
              <Sprout size={120} className="absolute -bottom-6 -right-6 opacity-10 text-white rotate-12" />
            </div>

            {/* Botão de Cópia Rápida para TED */}
            <button
              onClick={() => {
                navigator.clipboard.writeText("Banco: 789, Ag: 0001, Conta: 1234567-8");
                alert("Dados da conta copiados!");
              }}
              className="w-full py-4 border-2 border-dashed border-emerald-100 rounded-2xl text-emerald-600 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
            >
              <Copy size={16} /> Copiar todos os dados TED
            </button>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="flex items-start gap-2 px-8 opacity-60">
          <Info size={14} className="text-gray-400 shrink-0 mt-0.5" />
          <p className="text-center text-[10px] text-gray-400 font-black uppercase tracking-[0.1em] leading-relaxed">
            Transferências via TED ou DOC não são aceitas para depósitos imediatos e podem ser devolvidas automaticamente.
          </p>
        </div>

      </div>
    </div>
  );
}