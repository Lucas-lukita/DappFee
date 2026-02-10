// Vamos enviar dados fictícios na minha máquina para simular a conta do usuário, portfólio e transações. Esses dados serão usados para testar a interface e as funcionalidades do aplicativo.
export const userAccount = {
  ownerName: "João Silva",
  balance: 145000.00,
  currency: "BRL",
  kycStatus: "Verificado" // 
};

export const bankAccount = {
  bankName: "789 - Fee Agro Bank S.A.",
  agency: "0001",
  account: "1234567-8",
  type: "Conta Corrente",
  pixKey: "depósito@feeagro.com.br"
};

export const portfolio = [
  { asset: "Soja Future RWA", symbol: "SOJA26", quantity: 500, value: 135.50, total: 67750 },
  { asset: "Milho Safra Token", symbol: "CORN25", quantity: 1200, value: 58.20, total: 69840 }
]; // 

export const transactions = [
  { id: 1, type: "IN", description: "Venda Safra Soja", date: "2026-02-04", amount: 25000.00, status: "Completed" },
  { id: 2, type: "OUT", description: "Compra Insumos", date: "2026-02-05", amount: -12500.00, status: "Completed" },
]; 