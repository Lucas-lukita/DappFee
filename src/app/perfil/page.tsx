"use client";
import { userAccount } from '../../data/mockData';
//import { transactions } from '../../data/mockData';
import { 
  User, ShieldCheck, Mail, MapPin, 
  Phone, Calendar, Camera, ArrowLeft,
  Settings, LogOut, Award, Wallet
} from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useAppKit } from '@reown/appkit/react';

export default function ProfilePage() {
  const router = useRouter();
  
 
  const { open } = useAppKit();

  return (
    <div className="min-h-screen bg-[#F0F5F2] font-sans text-gray-900 pb-10">
      
      
      <header className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-all group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-[0.2em]">
            Voltar ao Painel
          </span>
        </button>

        <button className="bg-white p-2.5 rounded-xl shadow-sm border border-emerald-50 text-gray-400 hover:text-red-500 transition-colors">
          <LogOut size={20} />
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-8">
        
        
        <section className="bg-white rounded-[3rem] shadow-xl shadow-emerald-900/5 border border-emerald-50 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 opacity-50 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-[2.5rem] flex items-center justify-center border-4 border-white shadow-xl">
                <User size={60} className="text-emerald-600" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-2xl shadow-lg border border-emerald-50">
                <Camera size={20} className="text-emerald-500" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h2 className="text-3xl font-black text-[#064E3B] tracking-tight">{userAccount.ownerName}</h2>
                  <ShieldCheck size={24} className="text-emerald-500" />
                </div>
                <p className="text-sm text-emerald-600 font-bold uppercase tracking-[0.2em]">Produtor Rural Master</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-2">
                  <Award size={14} /> Membro Safra Ouro
                </span>
                <span className="px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  ID: #92830-26
                </span>
              </div>
            </div>

            <button className="bg-[#059669] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200 hover:bg-[#064E3B] transition-all active:scale-95">
            
            </button>
          </div>
        </section> 

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-emerald-50">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Dados Cadastrais</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-emerald-100 transition-colors">
                  <div className="bg-white p-3 rounded-xl text-emerald-600 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">E-mail Corporativo</p>
                    <p className="text-sm font-bold text-gray-800">contato@fazendagranja.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-emerald-100 transition-colors">
                  <div className="bg-white p-3 rounded-xl text-emerald-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Localização</p>
                    <p className="text-sm font-bold text-gray-800">Rio Verde, Goiás - BR</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-emerald-100 transition-colors">
                  <div className="bg-white p-3 rounded-xl text-emerald-600 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Telefone</p>
                    <p className="text-sm font-bold text-gray-800">+55 (64) 99283-0000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
           
            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-emerald-50 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full opacity-50 blur-2xl transition-colors group-hover:bg-emerald-100" />
              
              <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Conexão Web3 & Custódia
              </h3>

              <div className="space-y-4 relative z-10 text-center">
                <div className="p-6 rounded-[2rem] bg-gray-50 border border-dashed border-emerald-200">
                  <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-3 text-emerald-600">
                    <Wallet size={24} />
                  </div>
                  <p className="text-xs font-black text-[#064E3B] mb-1">Ativos Tokenizados</p>
                  <p className="text-[9px] text-gray-400 font-medium mb-4">Acesse sua carteira via Reown AppKit.</p>
                  
                  {/* Botão que dispara o AppKit */}
                  <button 
                    onClick={() => open()}
                    className="w-full bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white font-black py-3 rounded-xl text-[9px] uppercase tracking-widest transition-all shadow-sm active:scale-95"
                  >
                    Conectar com Reown
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-emerald-50">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Segurança</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#064E3B] text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-emerald-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">KYC Validado</span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-emerald-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded-lg text-gray-400 group-hover:text-emerald-600 shadow-sm">
                      <Settings size={18} />
                    </div>
                    <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Configurações</span>
                  </div>
                  <div className="text-gray-300 group-hover:text-emerald-500">→</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}