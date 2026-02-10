🌾 Fee Agro - Dashboard RWA & Agro Fintech
O Fee Agro é um dashboard financeiro de elite desenvolvido para produtores rurais, focado na gestão de ativos tokenizados (RWA - Real World Assets). A plataforma une a robustez do agronegócio com a transparência da tecnologia blockchain.

💎 Diferenciais do Projeto
Interface Esmeralda Premium: Design focado em alta legibilidade, utilizando uma paleta de cores que remete ao campo e à prosperidade (Verde Esmeralda e Dourado Safra).

Integração Web3 (Reown/AppKit): Suporte nativo para conexão de carteiras digitais via Reown, permitindo a custódia de ativos na rede Polygon.

UX de Alta Performance: Navegação instantânea via App Router do Next.js e feedback visual de interações (como cópia de chaves PIX e gráficos dinâmicos).

Gráficos de Performance: Visualização clara da evolução de safra e rentabilidade de ativos.

🚀 Tecnologias Utilizadas
Framework: Next.js 14 (App Router)

Estilização: Tailwind CSS

Ícones: Lucide React

Web3/Wallet: Reown AppKit & Wagmi/Viem

Gestão de Estado: React Hooks (Context API para Web3)

Tipografia: Inter (Sans-serif focada em legibilidade)

📂 Estrutura de Pastas Principal
Bash

src/
├── app/
│   ├── page.tsx            # Dashboard Principal (Gráficos e Ativos)
│   ├── perfil/             # Gestão de Perfil e Conexão Web3
│   ├── nova-operacao/      # Fluxo de Depósito (PIX/TED)
│   └── layout.tsx          # Layout Global e Web3Provider
├── context/
│   └── Web3Provider.tsx    # Configuração AppKit/Reown
└── data/
    └── mockData.ts         # Dados fictícios para simulação
🛠️ Como Executar o Projeto
Clone o repositório:

Bash

git clone https://github.com/seu-usuario/fee-agro.git
Instale as dependências:

Bash

npm install
# ou
yarn install
Configure as Variáveis de Ambiente: Crie um arquivo .env.local e adicione seu Project ID da Reown:

Snippet de código

NEXT_PUBLIC_REOWN_PROJECT_ID=67beb8542a12087aaf1d1c2c300951d2
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Acesse: http://localhost:3000
http://192.168.1.74:3000

📝 Notas do Desenvolvedor
Este projeto foi construído focando em escalabilidade e componentização.

Utilizei o padrão de "Hydration Safe" para componentes Client-side.

A navegação entre o Dashboard e o Perfil foi otimizada para evitar refresh de página, mantendo o estado da carteira Web3 ativo através do Web3Provider global.

O gráfico de performance foi desenvolvido do zero usando CSS puro para garantir leveza e customização total das cores esmeralda.

Deseja que eu adicione uma seção de "Próximos Passos" (Roadmap) para mostrar ao avaliador que você já planejou futuras melhorias como "Integração com Smart Contracts" ou "Relatórios em PDF"? Isso mostra visão de produto!
