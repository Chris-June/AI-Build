# Intellisync AI Build with React + Vite

This project is part of the Intellisync Open Build initiative, aimed at developing a comprehensive AI for personal use. The AI leverages the OpenAI API and includes a variety of features such as Speech-to-Text (STT), Text-to-Speech (TTS), Vision processing, Code interpretation, DALL-E 3 integration, and Web browsing capabilities.

## Project Overview

The Intellisync AI Build project is structured to maximize reusability, modularity, and scalability. This project uses Vite as the build tool for its fast performance and modern development environment, along with React for building the UI components.

## Technology Stack

- **Framework:** Vite
- **Frontend Library:** React
- **Styling:** CSS (with modular component styles)
- **API:** OpenAI API

## Getting Started

To start developing with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Chris-June/AI-Build.git
cd AI-Build

npm install

npm run dev - #to see live development changes.

npm run build #officially "build" project for deployment.

# Project files structure: @@@ Please update this file structure if you are adding new files or folders. @@@ DO NOT DELETE ANY FOLDERS OR FILES@@@
Intellisync-open-build/
└── Ai-Build/
    ├── src/
    │   ├── components/
    │   │   ├── Authentication/
    │   │   ├── UserProfile/
    │   │   ├── Dashboard/
    │   │   ├── shared/
    │   │   ├── elements/
    │   │   ├── AI/
    │   │   ├── widgets/
    │   │   ├── templates/
    │   │   ├── pages/
    │   ├── services/
    │   ├── config/
    │   ├── hooks/
    │   ├── styles/
    │   │   ├── theme/
    │   ├── App.jsx
    │   ├── index.jsx
    │   ├── main.jsx
    ├── public/
    ├── .env
    ├── .env.development
    ├── .env.production
    ├── vite.config.js
    ├── package.json
    └── storybook/

Features

	•	Modular Components: Organized in a way that promotes reusability and ease of maintenance.
	•	Custom Hooks: Managing state and side effects throughout the application.
	•	Theming: Centralized theming in the styles/theme folder for consistent design.
	•	Utilities: Shared utility functions in the services/utils directory for handling common tasks.
	•	Storybook Integration: For UI component development and documentation.

Plugins

Currently, this project uses the following official plugins:

	•	@vitejs/plugin-react - Uses Babel for Fast Refresh.
	•	@vitejs/plugin-react-swc - Uses SWC for Fast Refresh.

    ### **Summary of Changes:**
- **Project Context:** Tailored the README to reflect the specific goals and structure of the Intellisync AI Build project.
- **Getting Started:** Provided clear instructions on how to clone the repository, install dependencies, start the development server, and build for production.
- **Project Structure:** Updated the project structure section to align with the current organization.
- **Features:** Highlighted key features such as modular components, theming, and utilities.
- **Plugins:** Retained the plugin information for Vite's React integration.

