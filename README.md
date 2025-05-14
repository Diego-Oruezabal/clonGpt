# RolGpt

**RolGpt** es una aplicación web de inteligencia artificial construida con [Vite](https://vitejs.dev/) que permite interactuar con modelos de lenguaje alojados en [OpenRouter.ai](https://openrouter.ai), seleccionando diferentes **roles o personalidades** que la IA puede interpretar al responder.

## ✨ Características

- ✅ Integración con OpenRouter.ai para acceso a modelos de lenguaje avanzados.
- 🧠 Posibilidad de seleccionar entre múltiples "roles" personalizados (e.g. chef italiano, maestro Zen, gato parlante, etc.).
- 🎭 Cambia el comportamiento del asistente simplemente eligiendo una personalidad del menú desplegable.
- ⚡ UI sencilla, responsiva y atractiva con estilos en Tailwind CSS.
- 📦 Proyecto rápido y modular usando Vite como bundler.

## 📸 Vista previa

https://rolgpt.netlify.app/

## 🚀 Instalación y uso

```bash

## Clona el repositorio:

git clone https://github.com/Diego-Oruezabal/rolGpt
cd rolgpt

## Instala las dependencias:

npm install

## Crea un archivo .env en la raíz con tu clave de OpenRouter:

VITE_OPENROUTER_KEY=tu_clave_aqui

## Inicia el servidor de desarrollo:

npm run dev

## Abre el navegador para probar la app.

http://localhost:5173

```

## 🧪 Estructura del proyecto

├── src/
│   ├── main.js        # Lógica principal del cliente
│   └── style.css      # Estilos base
├── index.html         # HTML principal con la interfaz de usuario
├── .env               # Clave de API (no subir al repositorio)
└── README.md

## 🧠 Personalidades disponibles
Algunas de las personalidades que puedes elegir en la app:

👨‍💻 Programador senior

👨‍🍳 Chef italiano

👶 Niño de 5 años

🧘 Maestro Zen

🤖 Robot futurista

🐱 Gato parlante

🌿 Planta sabia

🕵️ Detective noir

👴 Abuelo entrañable

🤡 Cómico (Chiquito de la Calzada)

Cada personalidad cambia el estilo y tono de las respuestas, permitiendo una experiencia más divertida, educativa o creativa.

## 🛠 Tecnologías utilizadas
Vite

OpenRouter.ai

AI SDK Provider

HTML, CSS (Tailwind opcional), JavaScript

## 💬 Créditos
Creado por Diego Oruezabal.
Inspirado en las infinitas posibilidades de los modelos de lenguaje y el juego de roles.