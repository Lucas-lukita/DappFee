"use client";

import { useState } from 'react';
import { 
  ArrowLeft, Search, TrendingUp, TrendingDown, 
  ShoppingCart, Tag, BarChart3, Info 
} from 'lucide-react';
import Link from 'next/link';

// Lista completa dos produtos solicitados
const AGRO_PRODUCTS = [
  { id: 1, name: "Soja", symbol: "SOJA3", price: 135.50, change: 1.2, stock: "5.000 sacas", region: "Mato Grosso" },
  { id: 2, name: "Milho", symbol: "CORN4", price: 62.80, change: -0.5, stock: "12.000 sacas", region: "Goiás" },
  { id: 3, name: "Arroz", symbol: "RICE3", price: 88.20, change: 0.8, stock: "2.500 sacas", region: "Rio Grande do Sul" },
  { id: 4, name: "Feijão", symbol: "BEAN2", price: 210.00, change: -1.4, stock: "1.200 sacas", region: "Paraná" },
  { id: 5, name: "Trigo", symbol: "WHEAT", price: 145.00, change: 2.1, stock: "3.800 sacas", region: "Santa Catarina" },
  { id: 6, name: "Café", symbol: "COFF3", price: 980.00, change: -0.2, stock: "800 sacas", region: "Minas Gerais" },
  { id: 7, name: "Cana-de-açúcar", symbol: "SUGA4", price: 45.30, change: 0.4, stock: "50.000 ton", region: "São Paulo" },
  { id: 8, name: "Algodão", symbol: "CTTN1", price: 158.90, change: 1.1, stock: "4.200 fardos", region: "Bahia" },
  { id: 9, name: "Cacau", symbol: "COCOA", price: 320.00, change: 3.5, stock: "600 sacas", region: "Espírito Santo" },
];

export default function TradePage() {
  const [selectedProduct, setSelectedProduct] = useState(AGRO_PRODUCTS[0]);
  const [orderType, setOrderType] = useState<'BUY' | 'SELL'>('BUY');

  return (
    <div className="min-h-screen bg-[#F4F7F9] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
       
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-4 mb-2">
            <Link href="/" className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">Terminal de Negociação</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-50 bg-gray-50/50">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Buscar produto..." 
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-agro-primary"
                />
              </div>
            </div>
            
            <div className="max-h-[600px] overflow-y-auto">
              {AGRO_PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full p-4 flex items-center justify-between border-b border-gray-50 transition-colors hover:bg-gray-50 ${
                    selectedProduct.id === product.id ? 'bg-agro-light/20 border-r-4 border-r-agro-primary' : ''
                  }`}
                >
                  <div className="text-left">
                    <p className="font-bold text-gray-800">{product.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{product.symbol}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-gray-900">R$ {product.price.toFixed(2)}</p>
                    <p className={`text-[10px] font-bold ${product.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {product.change >= 0 ? '+' : ''}{product.change}%
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-8 space-y-6">
          
          {/* Card de Detalhes do Produto */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-agro-light text-agro-dark text-[10px] font-black rounded uppercase tracking-tighter">Ativo RWA</span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{selectedProduct.region}</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-1">{selectedProduct.name}</h2>
              <p className="text-gray-400 text-sm font-medium mb-6">Contratos Futuros de {selectedProduct.name} - Safra 2026</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Preço Un.</p>
                  <p className="text-lg font-black text-gray-900">R$ {selectedProduct.price.toFixed(2)}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Disponível</p>
                  <p className="text-lg font-black text-agro-primary">{selectedProduct.stock}</p>
                </div>
              </div>
            </div>
            <div className="md:w-32 flex items-center justify-center opacity-10">
               <BarChart3 size={100} />
            </div>
          </div>

         
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              <button 
                onClick={() => setOrderType('BUY')}
                className={`flex-1 py-4 font-black text-sm uppercase tracking-widest transition-all ${
                  orderType === 'BUY' ? 'bg-green-500 text-white' : 'bg-gray-50 text-gray-400'
                }`}
              >
                Comprar
              </button>
              <button 
                onClick={() => setOrderType('SELL')}
                className={`flex-1 py-4 font-black text-sm uppercase tracking-widest transition-all ${
                  orderType === 'SELL' ? 'bg-red-500 text-white' : 'bg-gray-50 text-gray-400'
                }`}
              >
                Vender
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Quantidade</label>
                  <div className="relative">
                    <input type="number" placeholder="0.00" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-agro-primary font-black" />
                    <span className="absolute right-4 top-4 text-xs font-bold text-gray-400">UN</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preço Sugerido</label>
                  <div className="relative">
                    <input type="text" readOnly value={`R$ ${selectedProduct.price.toFixed(2)}`} className="w-full px-4 py-4 bg-gray-100 border border-transparent rounded-xl text-gray-500 font-black cursor-not-allowed" />
                    <Tag className="absolute right-4 top-4 text-gray-300" size={18} />
                  </div>
                </div>
              </div>

              <div className="bg-agro-dark/5 p-4 rounded-xl border border-agro-dark/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500 font-bold italic flex items-center gap-1">
                    <Info size={12} /> Taxa de plataforma (0.5%)
                  </span>
                  <span className="text-xs font-black text-gray-700">R$ 0,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-800 font-black">Total Estimado</span>
                  <span className="text-xl font-black text-agro-dark">R$ 0,00</span>
                </div>
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-white text-lg shadow-lg shadow-agro-primary/20 transition-transform active:scale-95 flex items-center justify-center gap-3 ${
                orderType === 'BUY' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
              }`}>
                {orderType === 'BUY' ? <ShoppingCart size={22} /> : <TrendingUp size={22} />}
                {orderType === 'BUY' ? 'Confirmar Compra' : 'Confirmar Venda'}
              </button>
            </div>
          </div>

          <p className="text-center text-[10px] text-gray-400 font-medium px-20">
            A negociação de ativos agrícolas envolve riscos. Certifique-se de que os contratos de custódia física (RWA) estão verificados antes de confirmar a operação.
          </p>
        </div>
      </div>
    </div>
  );
}