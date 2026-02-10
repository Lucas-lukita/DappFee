import { userAccount, portfolio } from '../data/mockData';

import { Sprout, TrendingUp, History, PlusCircle, User, Search, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9F7] font-sans text-gray-900 pb-10">
      {/* Header Minimalista e Elegante */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-1">BEM-VINDO AO PORTAL</span>
          <h3 className="text-4xl font-black text-[#064E3B] tracking-tight">Olá, Produtor!</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-emerald-50">
            <User size={24} className="text-emerald-600" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Menu de Navegação em Cards (Inspirado na sua imagem) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Negociar', icon: <TrendingUp size={20} />, path: '/negociar', active: false },
            { label: 'Históricos', icon: <History size={20} />, path: '/transacoes', active: true },
            { label: 'Transferências', icon: <PlusCircle size={20} />, path: '/nova-operacao', active: false },
            { label: 'Perfil', icon: <User size={20} />, path: '#', active: false },
          ].map((item, idx) => (
            <Link 
              key={idx} 
              href={item.path}
              className={`p-8 rounded-[2rem] shadow-lg flex flex-col items-center gap-4 transition-all hover:-translate-y-1 ${
                item.active 
                ? 'bg-gradient-to-br from-[#10B981] to-[#059669] text-white shadow-emerald-200' 
                : 'bg-white text-emerald-900 border border-emerald-50 hover:border-emerald-200'
              }`}
            >
              <div className={`p-3 rounded-xl ${item.active ? 'bg-white/20' : 'bg-emerald-50 text-emerald-600'}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            {/* Card de Patrimônio (Verde Intenso para quebrar o branco) */}
            <section className="bg-gradient-to-r from-[#059669] to-[#10B981] p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white">
              <div className="relative z-10">
                <p className="text-emerald-100/60 text-[10px] font-black uppercase tracking-[0.4em] mb-4">PATRIMÔNIO LÍQUIDO</p>
                <div className="flex items-center gap-4">
                  <h2 className="text-6xl font-black tracking-tighter">
                    R$ {userAccount.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </h2>
                  <div className="w-12 h-1.5 bg-emerald-300/40 rounded-full" />
                </div>
              </div>
              <Sprout size={180} className="absolute -bottom-10 -right-10 opacity-10 text-white rotate-12" />
            </section>

            {/* Gráfico de Evolução (Com grid discreto) */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-emerald-50">
              <h3 className="text-xl font-black text-[#064E3B] mb-12 tracking-tight">Evolução de Safra</h3>
              <div className="flex items-end justify-between h-56 gap-2 px-2 border-b border-gray-100">
                {['SET', 'OUT', 'NOV', 'DEZ', 'JAN', 'FEV'].map((mes, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">{mes}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Seção Lateral: Ativos (Inspirado na sua imagem) */}
          <div className="lg:col-span-4 h-full">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-50 h-full">
              <h3 className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-10">MEUS ATIVOS</h3>
              <div className="space-y-8">
                {portfolio.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-5">
                      <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <Sprout size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-[#064E3B] tracking-tight">{item.asset}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">{item.symbol}</p>
                      </div>
                    </div>
                    <p className="text-sm font-black text-gray-800">R$ {item.total.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Movimentações (Design de Tabela Limpa) */}
        <section className="mt-10 bg-white rounded-[2.5rem] shadow-xl border border-emerald-50 overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <h3 className="text-xl font-black text-[#064E3B] tracking-tight">Movimentações</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 px-4">
              <span>DATA</span>
              <span>OPERAÇÃO</span>
              <span className="text-right">VALOR</span>
              <span className="text-right">STATUS</span>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center p-4 rounded-2xl hover:bg-emerald-50/50 transition-colors px-4 border border-transparent hover:border-emerald-100">
                <span className="text-xs font-bold text-gray-500 italic">12 MAI 24</span>
                <span className="text-sm font-black text-gray-800">Compra de Milho Safra</span>
                <span className="text-sm font-black text-gray-900 text-right">R$ 5.000,00</span>
                <div className="flex justify-end">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full uppercase">Concluído</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}