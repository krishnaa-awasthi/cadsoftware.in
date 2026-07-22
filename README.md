# CADsoftware.in — Official Platform

A modern, responsive web application for **CADsoftware.in** (a division of Zartek IT Solutions). This platform helps engineering teams, architects, and businesses discover, evaluate, and procure the right CAD software solutions with seamless inquiry and OTP-verified lead collection.

---

## ⚡ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router, TypeScript)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Email & Authentication:** [Resend](https://resend.com/) + [@react-email/components](https://react.email/)

---

## ✨ Features

* 🚀 **Server Component Optimization:** Blazing fast load times with clean separation of Server and Client components.
* 🎨 **Modern Design:** Dark-emerald architectural theme with interactive modal dialogs for legal documents.
* 📧 **Transactional Emails:** Instant lead notifications sent directly via Resend.
* 🔐 **OTP Email Verification:** Passwordless email verification with React Email templates.
* 📱 **Fully Responsive:** Optimized across mobile, tablet, and desktop viewports.

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── send-otp/      # Generates OTP & sends email via Resend
│   │   │   └── verify-otp/    # Validates input OTP code
│   │   └── contact/           # Contact form submission handler
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # Main landing page
├── components/
│   ├── ContactForm.tsx        # Interactive client-side contact form
│   ├── Footer.tsx             # Footer with legal modal dialogs
│   └── OtpEmail.tsx           # React Email template for OTP codes
├── .env.local                 # Local environment variables (git-ignored)
├── next.config.mjs
├── package.json
└── tsconfig.json

🚀 Getting Started1. PrerequisitesEnsure you have Node.js 18.x or higher installed on your machine.2. InstallationClone the repository and install the dependencies:Bash# Clone the repository
git clone [https://github.com/your-username/cad-software-website.git](https://github.com/your-username/cad-software-website.git)

# Navigate into the project directory
cd cad-software-website

# Install dependencies
npm install
3. Environment VariablesCreate a .env.local file in the root of your project directory:Code snippet# Resend API Key for sending emails & OTPs
RESEND_API_KEY=re_123456789_your_api_key_here
Note: During development, Resend allows you to send test emails from onboarding@resend.dev to the email registered on your Resend account. For production, add and verify your custom domain in the Resend dashboard.4. Run Development ServerStart the development server:Bashnpm run dev
Open http://localhost:3000 in your browser to view the application.🔌 API Endpoints SummaryMethodEndpointDescriptionPayload BodyPOST/api/contactHandles contact form submission{ name, email, message }POST/api/auth/send-otpSends 6-digit OTP to user email{ email }POST/api/auth/verify-otpVerifies submitted OTP code{ email, otp }🛠️ Building for ProductionTo create an optimized production build:Bashnpm run build
npm run start
📜 License & OwnershipDeveloped for Zartek IT Solutions / CADsoftware.in. All rights reserved.
