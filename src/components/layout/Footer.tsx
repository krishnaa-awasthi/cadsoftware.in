"use client";
import { useState } from "react";
import { ArrowRight, MapPin, MailIcon, PhoneCall, X } from "lucide-react";

// Native Reusable component for the legal dialogs
const LegalModal = ({ title, triggerText, children }: { title: string, triggerText: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <p 
        className="hover:text-white transition-colors cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {triggerText}
      </p>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)} // Close when clicking the background
        >
          <div 
            className="relative bg-emerald-950 border border-emerald-800 text-white w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-emerald-800/50 sticky top-0 bg-emerald-950 z-10 pt-2">
              <h3 className="text-2xl font-bold">{title}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-emerald-800 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-emerald-100" />
              </button>
            </div>
            <div className="space-y-4 text-sm text-emerald-100/80 pr-2">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pb-12 px-4 md:px-8 selection:bg-white selection:text-emerald-950">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 2: THE MASSIVE FOOTER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-emerald-800/50 pb-20 mb-20 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter mb-6 leading-[0.85]">
              LET'S <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>BUILD.</span>
            </h2>
            <p className="text-2xl text-emerald-100/70 font-medium max-w-xl">
              Tell us about your engineering goals, and we'll engineer the perfect CAD solution.
            </p>
          </div>
          <button className="group bg-white text-emerald-950 px-10 py-6 rounded-full font-bold text-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 flex-shrink-0">
            Start a Conversation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Details & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-zinc-500 text-sm font-medium">
          <div className="space-y-4">
            <p className="text-white text-lg font-bold tracking-tight mb-6">Contact</p>
            <p className="flex items-center gap-2">
              <MailIcon className="w-5 h-5"/>sayed@zartekitsolutions.com
            </p>
            <p className="flex items-center gap-2">
              <PhoneCall className="w-5 h-5" />
              +91 97738 21029
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              C 196 Sector 63, Noida, UP 201301, India
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-white text-lg font-bold tracking-tight mb-6">Legal</p>
            
            {/* Privacy Policy Dialog */}
            <LegalModal title="Privacy Policy" triggerText="Privacy Policy">
              <p>Last Updated: 20/07/2026</p>
              <p>This Privacy Policy explains how Zartek IT Solutions, operating the website www.cadsoftware.in (“Website”), collects, uses, stores, shares, and protects your personal data when you visit the Website, submit an inquiry, request a quote, or purchase CAD software or related services from us.</p>
              <p>This Policy is designed to align with the Indian Digital Personal Data Protection Act, 2023 (DPDP Act) and other applicable Indian data protection laws.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">1. Information We Collect</h3>
              <p>We may collect the following categories of personal data when you interact with us:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Information you provide directly:</strong> Name, Company/organization name, Work email address, Phone number / WhatsApp number, Project or software requirements shared via contact forms, email, phone, or WhatsApp, Billing and payment details (processed for invoicing under Zartek IT Solutions).</li>
                <li><strong>Information collected automatically:</strong> IP address, browser type, device type, Pages visited, time spent, referral source (via standard analytics/cookies), Interaction with ads (e.g., Meta/Google ad clicks, form submissions).</li>
              </ul>
              <p>We do not knowingly collect sensitive personal data such as financial account numbers, government ID numbers, or health data through this Website.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">2. How We Use Your Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Respond to your inquiries and provide quotations for CAD software and services.</li>
                <li>Process orders, generate invoices, and facilitate billing under Zartek IT Solutions.</li>
                <li>Coordinate license delivery/activation with the relevant CAD software manufacturer.</li>
                <li>Provide technical support, training, and account-related communication.</li>
                <li>Send you relevant updates, offers, or follow-ups via email, phone, or WhatsApp (you may opt out at any time).</li>
                <li>Improve our Website, marketing effectiveness, and customer experience.</li>
                <li>Comply with legal, tax, and regulatory obligations.</li>
              </ul>
              
              <h3 className="font-bold text-white mt-4 text-base">3. Legal Basis for Processing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your consent, given when you submit a form, click a “Click-to-WhatsApp” ad, or otherwise voluntarily provide your details to us.</li>
                <li>Legitimate business purposes, such as fulfilling a purchase, providing support, or complying with invoicing/tax requirements.</li>
              </ul>
              <p>You have the right to withdraw consent at any time (see Section 7 below), though this may affect our ability to provide certain Services.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">4. How We Share Your Information</h3>
              <p>We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>CAD software manufacturers/vendors, solely to the extent necessary to issue, register, or activate a software license in your name.</li>
                <li>Payment processors/banks, to process transactions securely.</li>
                <li>Service providers who support our operations (e.g., email/CRM tools, WhatsApp Business API providers, hosting providers), under confidentiality obligations.</li>
                <li>Legal or regulatory authorities, where required by law, court order, or to protect our legal rights.</li>
              </ul>
              
              <h3 className="font-bold text-white mt-4 text-base">5. WhatsApp & Marketing Communications</h3>
              <p>If you contact us via WhatsApp or click a “Message Us on WhatsApp” ad/button, you consent to receiving messages from us related to your inquiry, quotation, order status, and support. We only send marketing/promotional messages via WhatsApp or email to individuals who have opted in by contacting us first or explicitly subscribing.</p>
              <p>You can opt out of marketing messages at any time by Replying “STOP” or “Unsubscribe” on WhatsApp/email, or Emailing us at sayed@zartekitsolutions.com.</p>

              <h3 className="font-bold text-white mt-4 text-base">6. Data Retention</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fulfill the purpose it was collected for (e.g., duration of an active license/support relationship).</li>
                <li>Meet legal, tax, and accounting requirements (typically as mandated under Indian law).</li>
              </ul>
              <p>Once no longer required, we securely delete or anonymize your data.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">7. Your Rights</h3>
              <p>Under the DPDP Act, you have the right to: Access the personal data we hold about you, Correct or update inaccurate or incomplete data, Withdraw consent for processing, Request erasure of your data, Nominate another individual to exercise your rights, and Grievance redressal. To exercise any of these rights, contact us at sayed@zartekitsolutions.com.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">8. Data Security & Cookies</h3>
              <p>We implement reasonable technical and organizational measures to protect your personal data. However, no method of transmission or storage is 100% secure. Our Website may use cookies and similar tracking technologies to understand visitor behavior and improve our marketing effectiveness.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">Contact & Grievance Officer</h3>
              <p>Email: sayed@zartekitsolutions.com | Phone: +91 9773821029 | Address: C 196, Sector 63, Noida 201301 UP</p>
            </LegalModal>

            {/* Terms of Service Dialog */}
            <LegalModal title="Terms of Service" triggerText="Terms of Service">
              <p>Last Updated: 20/07/2026</p>
              <p>These Terms of Service ("Terms") govern your access to and use of the website www.cadsoftware.in (the "Website") and the CAD software reselling, licensing, advisory, implementation, and support services offered through it. The Website and Services are owned and operated by Zartek IT Solutions.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">1. About Us & 2. Nature of Services</h3>
              <p>CADsoftware.in is a division/brand of Zartek IT Solutions. All sales, invoicing, licensing coordination, billing, and official transactions are conducted under the legal name Zartek IT Solutions.</p>
              <p>We act as a reseller and implementation partner. The underlying CAD software products are owned by their respective original manufacturers/developers, and your use of any licensed software is additionally governed by that manufacturer's own End User License Agreement ("EULA").</p>
              
              <h3 className="font-bold text-white mt-4 text-base">4. Quotes, Orders & Pricing</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prices displayed or communicated are indicative and subject to change until formally confirmed.</li>
                <li>All quotations issued by us are valid for the period stated, or if unstated, for 15 days from the date of issue.</li>
                <li>An order is considered confirmed only upon our written acknowledgment and receipt of payment or advance.</li>
              </ul>
              
              <h3 className="font-bold text-white mt-4 text-base">5. Payment & Billing</h3>
              <p>All payments, invoicing, and billing for CADsoftware.in Services are processed under the name Zartek IT Solutions. Software licenses, activation keys, or access credentials will typically be released only upon receipt of full payment, unless otherwise agreed in writing.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">7. Refunds & Cancellations</h3>
              <p>Because software licenses are typically activated against a unique key/registration, refunds are generally not available once a license key has been issued or activated. Cancellation requests made before a license key is generated may be eligible for a full or partial refund. Custom services that have already commenced are non-refundable for the portion of work completed.</p>

              <h3 className="font-bold text-white mt-4 text-base">9. Limitation of Liability</h3>
              <p>Zartek IT Solutions' total liability shall not exceed the amount actually paid by you for the specific product/service giving rise to the claim. We shall not be liable for any indirect, incidental, consequential, special, or punitive damages.</p>

              <h3 className="font-bold text-white mt-4 text-base">11. Customer Obligations & Prohibited Use</h3>
              <p>You agree not to use the Website or Services for any unlawful purpose, attempt to reverse-engineer, pirate, redistribute, or illegally share any licensed software, or misrepresent your identity or eligibility for any licensing category.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">15. Governing Law & Jurisdiction</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts at NOIDA UP, INDIA.</p>
            </LegalModal>

            {/* Licensing Agreements Dialog */}
            <LegalModal title="Licensing Agreements" triggerText="Licensing Agreements">
              <p>Last Updated: 20/07/2026</p>
              <p>CADsoftware.in, operated by Zartek IT Solutions, is an authorized reseller and channel partner for multiple CAD software products.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">1. We Sell Licenses, Not Ownership</h3>
              <p>When you purchase CAD software through CADsoftware.in, you are purchasing a license to use that software under the terms set by its original manufacturer/developer — not ownership of the software itself.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">2. Manufacturer License Terms Apply</h3>
              <p>Each CAD software product we sell is governed by its own End User License Agreement (EULA), set independently by that product's manufacturer. This governs matters such as permitted number of installations, transferability, update entitlements, data compatibility, warranty, and termination conditions.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">3. Types of Licenses We Offer</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Perpetual License:</strong> One-time purchase, use indefinitely on the licensed machine(s); may require a separate annual maintenance/subscription.</li>
                <li><strong>Subscription License:</strong> Time-bound (monthly/annual) access; includes updates and support for the subscription period.</li>
                <li><strong>Single-User License:</strong> Tied to one named user or one device, depending on the manufacturer's policy.</li>
                <li><strong>Network/Multi-Seat License:</strong> Shared across multiple users within an organization, typically managed via a license server.</li>
                <li><strong>Educational/Academic License:</strong> Discounted licensing for eligible educational institutions and students (non-commercial use only).</li>
              </ul>
              
              <h3 className="font-bold text-white mt-4 text-base">4. License Activation & Delivery</h3>
              <p>License keys, activation codes, or download credentials will be issued only after payment is confirmed. Activation processes vary by manufacturer.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">5. Renewals & Upgrades</h3>
              <p>Subscription and maintenance-based licenses require timely renewal to retain access to updates, support, and continued software use. Upgrade eligibility depends on the specific manufacturer's upgrade policy.</p>
              
              <h3 className="font-bold text-white mt-4 text-base">6. Misuse & License Compliance</h3>
              <p>You agree to use licensed software strictly within the terms of the applicable EULA. Misuse may result in license suspension or termination by the manufacturer, independent of any action by Zartek IT Solutions.</p>

              <h3 className="font-bold text-white mt-4 text-base">7. Support Scope</h3>
              <p>Zartek IT Solutions provides implementation support (installation, configuration, basic training, and first-line troubleshooting). For issues that require the manufacturer's direct engineering/product support, we will coordinate with the manufacturer on your behalf where our support agreement with them allows.</p>
            </LegalModal>
          </div>

          <div className="lg:col-span-2 lg:text-right space-y-4">
            <p className="text-white text-xl font-bold tracking-tight">CADsoftware.in</p>
            <p className="max-w-md lg:ml-auto">
              A division of Zartek IT Solutions. All invoicing, billing, and official transactions are processed securely under Zartek IT Solutions.
            </p>
            <p className="pt-4 text-emerald-500/50">© {new Date().getFullYear()} Zartek IT Solutions. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}