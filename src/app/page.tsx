import { userAccount, portfolio } from '../data/mockData';

import { Sprout, TrendingUp, History, PlusCircle, User, Search, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';


// Dados fictícios para o gráfico de evolução
const PERFORMANCE_DATA = [
  { month: 'Set', value: 45, label: '45%' },
  { month: 'Out', value: 70, label: '70%' },
  { month: 'Nov', value: 55, label: '55%' },
  { month: 'Dez', value: 95, label: '95%' },
  { month: 'Jan', value: 80, label: '80%' },
  { month: 'Fev', value: 100, label: '100%' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F9F7] font-sans text-gray-900 pb-10">
      
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-1">BEM-VINDO AO PORTAL</span>
          <h3 className="text-4xl font-black text-[#064E3B] tracking-tight">Olá, Produtor!</h3>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/perfil" className="bg-white p-3 rounded-2xl shadow-sm border border-emerald-50 hover:bg-emerald-50 transition-colors">
            <User size={24} className="text-emerald-600" />
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* Menu de Cards Superiores */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Negociar', icon: <TrendingUp size={20} />, path: '/negociar', active: false },
            { label: 'Históricos', icon: <History size={20} />, path: '/transacoes', active: true },
            { label: 'Transferências', icon: <PlusCircle size={20} />, path: '/nova-operacao', active: false },
            { label: 'Perfil', icon: <User size={20} />, path: '/perfil', active: false },
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
            {/* Card de Patrimônio */}
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

            {/* Gráfico de Evolução Corrigido */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-emerald-50">
              <h3 className="text-xl font-black text-[#064E3B] mb-12 tracking-tight">Evolução de Safra</h3>
              
              {/* Container das Barras */}
              <div className="flex items-end justify-between h-64 gap-3 px-2 border-b-2 border-emerald-50 pb-2">
                {PERFORMANCE_DATA.map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group h-full justify-end">
                    
                    {/* A Barra Colorida */}
                    <div 
                      className="w-full bg-emerald-50 group-hover:bg-[#10B981] rounded-t-xl transition-all duration-500 relative shadow-inner"
                      style={{ height: `${data.value}%` }} 
                    >
                      {/* Tooltip com Valor */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#064E3B] text-[#FDE68A] text-[10px] font-black py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all shadow-xl whitespace-nowrap">
                        {data.label}
                      </div>
                    </div>

                    {/* Meses */}
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Lateral de Ativos */}
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

        {/* Tabela de Movimentações */}
        <section className="mt-10 bg-white rounded-[2.5rem] shadow-xl border border-emerald-50 overflow-hidden">
          <div className="p-10 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <h3 className="text-xl font-black text-[#064E3B] tracking-tight">Movimentações</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 px-4 text-center">
              <span>DATA</span>
              <span className="text-left">OPERAÇÃO</span>
              <span className="text-right">VALOR</span>
              <span className="text-right">STATUS</span>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-4 items-center p-4 rounded-2xl hover:bg-emerald-50/50 transition-colors px-4 border border-transparent hover:border-emerald-100 text-center">
                <span className="text-xs font-bold text-gray-500 italic">12 MAI 24</span>
                <span className="text-sm font-black text-gray-800 text-left">Compra de Milho Safra</span>
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