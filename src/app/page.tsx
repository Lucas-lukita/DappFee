// src/app/page.tsx
import { userAccount, portfolio } from '../data/mockData';

import { Wallet, Sprout, ShieldCheck } from 'lucide-react'; // Ícones

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
     
      <aside className="w-full md:w-64 bg-agro-dark text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Fee Agro</h1> {/* [cite: 8] */}
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 bg-agro-primary rounded">Dashboard</a>
          <a href="/transacoes" className="block py-2 px-4 hover:bg-agro-primary/50 rounded">Transações</a>
          <a href="/nova-operacao" className="block py-2 px-4 hover:bg-agro-primary/50 rounded">Nova Operação</a>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Visão Geral</h2>
          <div className="flex items-center gap-2 text-agro-dark font-medium">
             <ShieldCheck size={20} /> 
             <span>KYC: {userAccount.kycStatus}</span> {/*  */}
          </div>
        </header>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-agro-light rounded-full text-agro-dark">
                <Wallet size={24} />
              </div>
              <span className="text-sm text-gray-500">Saldo Disponível</span>
            </div>
            <h3 className="text-2xl font-bold">R$ {userAccount.balance.toLocaleString('pt-BR')}</h3>
          </div>

         
          {portfolio.map((item) => (
            <div key={item.symbol} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-yellow-50 rounded-full text-yellow-700">
                  <Sprout size={24} />
                </div>
                <span className="text-sm text-gray-500">{item.symbol}</span>
              </div>
              <h3 className="text-xl font-bold">{item.asset}</h3>
              <p className="text-gray-600">Qtd: {item.quantity} | Total: R$ {item.total.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}