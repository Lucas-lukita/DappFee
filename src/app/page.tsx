// src/app/page.tsx
import { userAccount, portfolio } from '../data/mockData';
import { 
  Wallet, Sprout, ShieldCheck, TrendingUp, 
  ArrowUpRight, LayoutDashboard, History, PlusCircle 
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans">
      {/* Sidebar Lateral Moderna */}
      <aside className="w-full md:w-64 bg-agro-dark text-white p-6 flex flex-col shadow-xl">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-agro-primary p-2 rounded-lg">
            <Sprout size={24} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">FEE AGRO</h1>
        </div>
        
        <nav className="space-y-2 flex-1">
          <Link href="/" className="flex items-center gap-3 py-3 px-4 bg-agro-primary/20 border-l-4 border-agro-primary rounded-r-md transition-all">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link href="/transacoes" className="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all rounded-md">
            <History size={20} />
            <span>Transações</span>
          </Link>
          <Link href="/nova-operacao" className="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 transition-all rounded-md">
            <PlusCircle size={20} />
            <span>Nova Operação</span>
          </Link>
        </nav>

        <div className="mt-auto p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 text-xs text-agro-primary mb-1">
            <ShieldCheck size={14} />
            <span className="font-bold uppercase tracking-wider">KYC Verificado</span>
          </div>
          <p className="text-sm font-medium text-gray-300">{userAccount.ownerName}</p>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Header Superior */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Visão Geral</h2>
            <h3 className="text-3xl font-extrabold text-gray-900">Olá, Produtor!</h3>
          </div>
          <div className="flex gap-3">
            <Link href="/nova-operacao" className="bg-agro-primary hover:bg-agro-dark text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-agro-primary/20 flex items-center gap-2">
              <PlusCircle size={20} /> Investir Agora
            </Link>
          </div>
        </header>

        {/* Card de Valor Total em Destaque */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-500 font-medium mb-2">Valor Total do Portfólio</p>
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl font-black text-gray-900">
                R$ {userAccount.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </h2>
              <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <TrendingUp size={16} /> +4.2%
              </span>
            </div>
          </div>
          {/* Decoração sutil ao fundo */}
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sprout size={120} />
          </div>
        </section>

        {/* Grid de Ativos RWA */}
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <ArrowUpRight size={20} className="text-agro-primary" /> Meus Ativos Tokenizados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portfolio.map((item) => (
            <div key={item.symbol} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-agro-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-agro-light/30 text-agro-dark rounded-xl group-hover:bg-agro-primary group-hover:text-white transition-colors">
                  <Sprout size={24} />
                </div>
                <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-md uppercase tracking-tighter">
                  {item.symbol}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{item.asset}</h4>
              <p className="text-xs text-gray-400 mb-4">Goiás - Contratos Futuros</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">Investido</p>
                  <p className="text-xl font-black text-agro-dark">R$ {item.total.toLocaleString()}</p>
                </div>
                <button className="text-agro-primary font-bold text-sm hover:underline">Detalhes</button>
              </div>
            </div>
          ))}

          {/* Card de Saldo em Dinheiro */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-dashed border-gray-300 flex flex-col justify-center items-center text-center group hover:bg-agro-light/10 transition-all cursor-pointer">
            <div className="p-3 bg-gray-50 text-gray-400 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <Wallet size={24} />
            </div>
            <p className="text-sm font-bold text-gray-500">Saldo Disponível</p>
            <p className="text-lg font-black text-gray-900 tracking-tight">R$ 18.000,00</p>
          </div>
        </div>

        {/* Tabela de Transações Recentes (UX de Dashboard Sênior) */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Transações Recentes</h3>
            <Link href="/transacoes" className="text-sm text-agro-primary font-bold hover:underline">Ver tudo</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-400 font-black">
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Ativo</th>
                  <th className="px-6 py-4">Valor</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">12/05/2024</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">Milho Safra Token</td>
                  <td className="px-6 py-4 text-sm font-black text-gray-900">R$ 5.000,00</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-full uppercase">Concluído</span>
                  </td>
                </tr>
                {/* Repetir para outros mocks se quiser... */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}