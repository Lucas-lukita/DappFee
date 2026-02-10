"use client";

import { useState } from 'react';
import Link from 'next/link';
import { transactions } from '../../data/mockData'; // Caminho relativo seguro
import { ArrowUpCircle, ArrowDownCircle, Filter, ArrowLeft } from 'lucide-react';

export default function TransactionsPage() {
  
  const [filterType, setFilterType] = useState<'ALL' | 'IN' | 'OUT'>('ALL');

 
  const filteredList = transactions.filter(t => {
    if (filterType === 'ALL') return true;
    return t.type === filterType;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
     
      <aside className="hidden md:block w-64 bg-agro-dark text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Fee Agro</h1>
        <nav className="space-y-4">
          <Link href="/" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors">Dashboard</Link>
          <Link href="/transacoes" className="block py-2 px-4 bg-agro-primary rounded font-medium">Transações</Link>
          <Link href="/nova-operacao" className="block py-2 px-4 hover:bg-white/10 rounded transition-colors">Nova Operação</Link>
        </nav>
      </aside>

    
      <main className="flex-1 p-4 md:p-10">
        
       
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="md:hidden p-2 bg-white rounded-full shadow text-agro-dark">
            <ArrowLeft size={20} />
          </Link>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Histórico de Transações</h2>
        </div>

        {/* Área de Filtros */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 text-gray-500 mr-2">
            <Filter size={18} />
            <span className="text-sm font-medium">Filtrar por:</span>
          </div>
          
          <button 
            onClick={() => setFilterType('ALL')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filterType === 'ALL' ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
           
          </button>
          
          <button 
            onClick={() => setFilterType('IN')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filterType === 'IN' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Entradas
          </button>
          
          <button 
            onClick={() => setFilterType('OUT')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filterType === 'OUT' ? 'bg-red-100 text-red-700 border border-red-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
          
          </button>
        </div>

        
        <div className="space-y-3">
          {filteredList.length > 0 ? (
            filteredList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  {/* Ícone Dinâmico */}
                  <div className={`p-3 rounded-full ${item.type === 'IN' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {item.type === 'IN' ? <ArrowUpCircle size={24} /> : <ArrowDownCircle size={24} />}
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-800">{item.description}</p>
                    <p className="text-sm text-gray-500">{item.date} • <span className="uppercase text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded">{item.status}</span></p>
                  </div>
                </div>

                <div className={`text-right font-bold text-lg ${item.type === 'IN' ? 'text-green-600' : 'text-gray-800'}`}>
                  {item.type === 'IN' ? '+ ' : '- '}
                  R$ {Math.abs(item.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))
          ) : (
            
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-gray-500">Nenhuma transação encontrada neste filtro.</p>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}