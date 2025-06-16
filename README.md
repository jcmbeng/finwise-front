# FinWise Frontend – Web Banking Portal for Microfinance

![Angular](https://img.shields.io/badge/Angular-17-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-green)
![Responsive](https://img.shields.io/badge/Responsive%20UI-Tailwind%20CSS-blue)

> **FinWise Front** is the official web interface of the **FinWise Core Banking System**, tailored for microfinance institutions.  
> Built with **Angular 17**, this frontend offers a responsive, secure, and role-based user experience for admins, agents, and clients to interact with the backend services.

---

## 🧱 Tech Stack

- **Angular 17** (with Standalone Components)
- **TypeScript 4+**
- **TailwindCSS** + **ShadCN for UI Components**
- **RxJS** for reactive programming
- **OAuth2 / Keycloak** for Authentication
- **REST APIs** for communication with FinWise API
- **WebSockets / Kafka (optional)** for real-time notifications

---

## 🎨 Key Features

| Feature                    | Description                                                   |
|---------------------------|---------------------------------------------------------------|
| 🔐 Auth                   | OAuth2 login via Keycloak, with role-based access             |
| 👤 Client Management       | Register, edit, KYC document upload                           |
| 💼 Accounts Overview       | View balances, transactions, and account details              |
| 💳 Loan Management         | Loan application, tracking, repayment                        |
| 💰 Savings Module          | Subscribe to products, make deposits/withdrawals              |
| 📲 Wallet & Mobile Money   | Link to MTN MoMo, Orange Money, send mobile transfers         |
| 📊 Dashboards              | KPI and performance dashboards for admins and agents          |
| 🔔 Notifications           | Push & in-app notifications, linked to Kafka events           |
| ⚙️ Config Settings         | Access control, UI preferences, language, themes              |

---

## 🌐 Architecture Overview

+---------------------+ +--------------------+
| Angular Frontend | <-----> | Backend Services |
| (finwise-front) | REST | (finwise-api) |
+---------------------+ +--------------------+
| |
| OAuth2 (Keycloak) |
v v
[Authentication Server] [Kafka / PostgreSQL]


---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Angular CLI (`npm install -g @angular/cli`)
- Backend services (`finwise-api`) running
- Keycloak configured for OAuth2

### Install & Run

```bash
git clone https://github.com/your-org/finwise-front.git
cd finwise-front
npm install
ng serve --open
