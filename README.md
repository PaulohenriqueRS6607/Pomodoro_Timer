
## 🕒 Pomodoro Timer em React

Um aplicativo simples de **Timer Pomodoro** desenvolvido com **React.js**, usando uma estrutura modular com `components`, `pages`, `assets`

Além do timer, o app apresenta um fundo animado com ondas, feito em CSS, para uma experiência visual agradável.

---

### ✅ Funcionalidades

* ⏳ Temporizador regressivo (25 minutos por padrão)
* ▶️ Iniciar, ⏸️ Pausar e 🔄 Resetar o timer
* 🌊 Fundo animado de ondas com CSS (componente `WaterWaveBack`)
* ⚛️ Hooks React (`useState`, `useEffect`)
* 🎨 Estilo limpo, responsivo e moderno

---

### 🗂 Estrutura do Projeto

```bash
src/
├── assets/                 # Imagens, sons, ícones (ex: wave.png)
├── components/             # Componentes reutilizáveis
│   ├── TimerControls.jsx
│   ├── TimerDisplay.jsx
│   └── WaterWaveBack.jsx   # Fundo animado de ondas
├── pages/
│   └── TimerPage.jsx       # Página principal com a lógica do timer e fundo animado
├── Styles/
│   ├── TimerPage.css       # Estilos do TimerPage
│   └── WaterWaveBack.css   # Estilos do fundo de ondas animado
├── App.jsx                 # Componente raiz
└── main.jsx                # Ponto de entrada React
```

---

### 🚀 Tecnologias Usadas

* [React](https://reactjs.org)
* CSS3 (com animações)
* Vite (compatível com ambos)

---

### 🧑‍💻 Como Rodar o Projeto

#### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pomodoro-timer.git
cd pomodoro-timer
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

> Acesse no navegador: `http://localhost:5173` (ou a porta indicada no terminal)

---

### 📸 Captura de Tela (opcional)

Você pode adicionar uma imagem aqui para mostrar o visual da aplicação:

```md
![Pomodoro Timer](./assets/screenshot.png)
```

---

### 📁 Estilo CSS

O projeto utiliza CSS modularizado com arquivos separados para cada componente ou página:

* `WaterWaveBack.css` - Estilos e animação das ondas no fundo
* `TimerPage.css` - Estilos do timer e botões

Além disso, o CSS usa técnicas como:

* Centralização vertical e horizontal com flexbox
* Animações contínuas com `@keyframes`
* Botões estilizados com efeitos hover e transição suave

---

