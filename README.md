# Easy Split (Frontend)

## 📱 Sobre o Projeto

Este projeto é um aplicativo **front-end mobile** desenvolvido com **React Native utilizando Expo**, cujo objetivo principal é **organizar despesas compartilhadas** de forma simples, clara e eficiente.

A proposta do app é permitir que o usuário registre despesas que podem ou não conter **intermediários** (participantes). Esses intermediários compartilham o valor final da despesa, dividindo o custo automaticamente, independentemente da quantidade de pessoas envolvidas.

---

## 🎯 Objetivo

Facilitar o controle de despesas compartilhadas, oferecendo:
- Organização clara dos valores
- Divisão automática de contas
- Acompanhamento de pagamentos
- Comprovação de pagamentos realizados
- Criação automatizada de despesas
- Interação simples por meio de chatbot com IA

---

## 🧩 Funcionalidades do Aplicativo

### ➕ Criação de Despesas
- Inserção manual de despesas
- Possibilidade de criar despesas **com ou sem intermediários**
- Divisão automática do valor total entre os participantes

---

### 📄 Upload de Despesas via CSV
- Upload de arquivos CSV contendo os dados da conta
- Criação automática de despesas a partir do arquivo
- Ideal para contas maiores ou recorrentes

---

### 🔔 Alertas de Pagamento
- Alertas para acompanhar pagamentos pendentes dos intermediários
- Visualização clara de quem já pagou e quem ainda não pagou

---

### 📤 Upload de Comprovante de Pagamento
- Upload de comprovantes para validar pagamentos realizados
- Facilita a organização e a transparência entre os participantes

---

### 🤖 Chatbot com IA (Ollama) (em desenvolvimento)
- Chatbot integrado utilizando **IA Ollama**
- Responde perguntas simples sobre despesas, valores e status de pagamentos
- Acesso rápido a informações sem necessidade de navegar entre telas

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **React Hook Form** (gerenciamento de formulários)
- Consumo de APIs REST
- Integração com **IA Ollama**

---

## 📦 Estrutura do Projeto (Resumo)

```
.
├── app/                  # Rotas e telas (Expo Router)
├── assets/               # Imagens, ícones e fontes
├── components/           # Componentes reutilizáveis
├── constants/            # Constantes globais (cores, temas, configs)
├── hooks/                # Hooks customizados
├── services/             # Comunicação com APIs e serviços externos
├── store/                # Gerenciamento de estado global
├── types/                # Tipagens TypeScript
```

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Instale as dependências:
```bash
npm expo install
# ou
yarn install
```

3. Inicie o projeto:
```bash
npx expo start
```

4. Execute no emulador ou em um dispositivo físico utilizando o **Expo Go**

---

## 📌 Status do Projeto

🚧 **Em desenvolvimento**  
Novas funcionalidades e melhorias estão sendo adicionadas continuamente.

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Sinta-se à vontade para usar, modificar e contribuir.
