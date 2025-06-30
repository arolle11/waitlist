# 📥 DEV Girls Bootcamp Waitlist – Rasengan.js

Bienvenue dans ce projet basé sur **Rasengan.js**, un framework React moderne, rapide et chakra-infusé ⚡️. Cette application gère les inscriptions à une **liste d’attente pour un Bootcamp**, permettant aux utilisateurs de s’inscrire en quelques clics et aux organisateurs de suivre les demandes en temps réel.

---

## 🚀 Fonctionnalités principales

- 📄 Formulaire d’inscription avec validation en temps réel
- 🔔 Notifications de confirmation et messages personnalisés
- 🧠 Stockage des données (via [SMAD](https://smadmail.com))
- 🧰 Interface responsive et accessible

---

## 🛠️ Technologies utilisées

- **Rasengan.js** – Framework principal basé sur React + Vite (https://rasengan.dev)
- **Zod** – Validation des schémas de données (https://zod.dev)
- **Tailwind CSS** – Personnalisation rapide du style (https://tailwindcss.com)
- **Axios** – Client HTTP pour le navigateur et node.js (https://axios-http.com)
- **React-toastify** (https://www.npmjs.com/package/react-toastify)
- **Lucide Icons** - Icônes modernes (https://lucide.dev)

---

## 📦 Installation

1. **Cloner le dépôt** :

```bash
git clone https://github.com/arolle11/waitlist.git
cd waitlist
```

2. **Installer les dépendances** :

```bash
npm install
```

3. **Démarrer le serveur local** :

```bash
npm run dev
```

---

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet et ajoutez les variables nécessaires :

```env
RASENGAN_DEVGIRL_API_BASE_URLL=https://api.smadmail.com/api/v1
RASENGAN_DEVGIRL_SMAD_PROJECT_ID=XXXXXX
RASENGAN_DEVGIRL_SMAD_PRIVATE_KEY=XXXXXX
```

---

## 📁 Structure du projet

```
.
├── src/
│   ├── app/                # Pages principales (Accueil, Confirmation)
│   ├── assets/             # Assets (images, etc.)
│   ├── components/         # Composants UI (formulaire, alertes, etc.)
│   ├── lib/                # Fonctions utilitaires
│   ├── styles/             # Styles globaux
│   ├── index.ts            # Point d'entrée de l'application
│   ├── main.tsx            # Point d'entrée de l'application
│   └── template.tsx        # Template de l'application
├── public/                 # Assets publics
├── .env                    # Variables d'environnement
├── README.md               # Documentation du projet
├── tsconfig.json           # Configuration TypeScript
├── rasengan.config.ts      # Configuration Rasengan
└── pnpm-lock.yaml          # Gestion des dépendances
```

---

## 🧙‍♀️ À propos de Rasengan.js

> _"Créer avec puissance. Déployer avec fluidité."_
> Rasengan.js est un framework moderne inspiré de l’univers de Naruto. Il mise sur la rapidité, la simplicité et la flexibilité pour les développeurs React.

Visitez le site officiel de Rasengan.js : [https://rasengan.dev](https://rasengan.dev)

## 👩🏽‍💻 Author

Made with ❤️ by Arolle Fona  
🔗 [arollefona.me](https://arollefona.me) | [LinkedIn](https://www.linkedin.com/in/arolle-fona-300705188)
