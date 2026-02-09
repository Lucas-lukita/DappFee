"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, CheckCircle, AlertCircle, DollarSign, Send } from 'lucide-react';
import Link from 'next/link';

// 1. Schema mais simples possível (evita erros de propriedades desconhecidas)
const operationSchema = z.object({
  amount: z.coerce.number()
    .min(0.01, "Valor inválido")
    .max(50000, "Limite excedido"),
  description: z.string().min(3, "Muito curta"),
  type: z.enum(["PIX", "TED", "DOC"] as const)
});

// 2. Tipagem manual para garantir que o formulário aceite os campos
type FormFields = {
  amount: number;
  description: string;
  type: "PIX" | "TED" | "DOC" | ""; // Adicionamos a string vazia para o estado inicial
};

export default function NewOperationPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  // 3. Configuração com tipagem explícita
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormFields>({
    resolver: zodResolver(operationSchema) as any, // O 'as any' aqui quebra o loop de erro do TS sem estragar a validação
    defaultValues: {
      amount: 0,
      description: "",
      type: ""
    }
  });

  const onSubmit = async (data: FormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Enviado:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-agro-dark p-6 text-white flex items-center gap-4">
          <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-bold font-sans">Nova Operação</h1>
        </div>

        <div className="p-8">
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-200">
              <CheckCircle size={20} />
              <span className="font-medium">Sucesso!</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-sans">Valor</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <DollarSign size={18} />
                </div>
                <input
                  type="number"
                  step="0.01"
                  {...register('amount')}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-agro-primary transition-all font-sans"
                />
              </div>
              {errors.amount && <p className="text-red-500 text-xs mt-1 font-sans">{errors.amount.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-sans">Descrição</label>
              <input
                {...register('description')}
                className="block w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-agro-primary transition-all font-sans"
              />
              {errors.description && <p className="text-red-500 text-xs mt-1 font-sans">{errors.description.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-sans">Método</label>
              <select
                {...register('type')}
                className="block w-full px-4 py-3 border border-gray-200 rounded-xl outline-none bg-white focus:ring-2 focus:ring-agro-primary transition-all font-sans"
              >
                <option value="">Selecione...</option>
                <option value="PIX">PIX</option>
                <option value="TED">TED</option>
                <option value="DOC">DOC</option>
              </select>
              {errors.type && <p className="text-red-500 text-xs mt-1 font-sans">{errors.type.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-agro-primary hover:bg-agro-dark text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 font-sans"
            >
              {isSubmitting ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Confirmar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}