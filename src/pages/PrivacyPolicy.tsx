import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const sections = [
  {
    id: 'information-collected',
    title: '1. Information We Collect',
    content: `We collect the following categories of information to provide and improve our services:

**Personal Identification Information:**
- Full name and contact details
- Email address
- Phone number (including WhatsApp number)
- Business name and registration details
- Designation / role within your organisation

**Business Information:**
- Business type and industry
- Website URL
- Google Business Profile details
- Social media account information
- Business location and operating hours

**Technical & Usage Data:**
- IP address and browser type
- Device information and operating system
- Pages visited and time spent on our website
- Referral sources and search keywords
- Click patterns and interaction data

**Marketing Analytics Data:**
- Campaign performance metrics
- Ad spend and ROI data
- Lead generation data
- Customer conversion data
- WhatsApp messaging analytics (delivery rates, open rates, response rates)`,
  },
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: `We process your personal data for the following lawful purposes:

**Service Delivery:**
- Setting up and managing your WhatsApp Business API account
- Running digital marketing campaigns on your behalf
- Managing your Google Business Profile
- Executing review collection and reputation management campaigns

**Customer Support:**
- Responding to your queries and support tickets
- Providing technical assistance and onboarding
- Resolving billing and account issues

**Marketing Communications:**
- Sending updates about our services (with your consent)
- Sharing industry insights, tips, and best practices
- Notifying you about new features or pricing changes

**Platform Improvements:**
- Analysing usage patterns to improve our platform
- A/B testing new features and workflows
- Enhancing chatbot accuracy and automation flows

**Legal & Compliance:**
- Complying with applicable Indian law, including the Digital Personal Data Protection (DPDP) Act, 2023
- Responding to legal requests from competent authorities
- Fraud prevention and security monitoring`,
  },
  {
    id: 'whatsapp-data',
    title: '3. WhatsApp Business API Data Handling',
    content: `As an official WhatsApp Business API service provider, we handle communication data in accordance with Meta's policies and applicable law.

**Message Processing:**
- WhatsApp messages sent and received through our platform are processed for delivery, automation, and analytics purposes
- We do not read private message content beyond what is necessary to deliver your chatbot flows and campaigns
- Message templates submitted to Meta for approval are stored securely

**Customer Communication Data:**
- Contacts you upload to our platform are stored securely and used only for your campaigns
- We do not share your customer contact lists with third parties for their own marketing purposes
- Contact data is encrypted at rest and in transit

**Data Security Measures:**
- All data transmitted via WhatsApp API uses end-to-end encryption at the Meta layer
- Our platform uses TLS 1.2+ for all API communications
- Access to campaign data is restricted to authorised personnel

**Third-Party Integrations:**
- When you connect a CRM (e.g., HubSpot, Zoho, Salesforce), data shared is governed by those platforms' privacy policies
- We only send data to connected apps that you explicitly authorise
- Integration access can be revoked at any time from your dashboard

**Data Retention:**
- WhatsApp conversation logs are retained for 90 days by default (configurable)
- Campaign analytics data is retained for 24 months
- You may request earlier deletion at any time`,
  },
  {
    id: 'gmb-data',
    title: '4. Google Business Profile Services',
    content: `When we manage your Google Business Profile, we access and process:

**Profile Management Data:**
- Business name, address, phone number (NAP data)
- Business hours, service areas, and attributes
- Business category and description content
- Photos and media uploaded to your profile

**Review Management Data:**
- Customer review content and ratings
- Business owner response drafts and published responses
- Review request campaign data (customer contact information used to solicit reviews)
- Review analytics and sentiment data

**Local SEO Data Processing:**
- Local search ranking positions and changes
- Search query impressions and click data
- Customer action data (calls, directions, website visits from GMB)
- Competitor analysis data (publicly available)

All Google data is accessed via Google's official APIs (Google My Business API, Google Business Profile API) and processed in compliance with Google's API Terms of Service and our data sharing agreement with you.`,
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking Technologies',
    content: `Our website uses cookies and similar tracking technologies to enhance your experience.

**Essential Cookies:**
- Session management and authentication
- Security tokens and CSRF protection
- Form submission data (temporary)

**Analytics Cookies:**
- Google Analytics 4 (GA4) — tracks page views, user journeys, and conversion events
- Google Tag Manager — manages analytics and marketing tags
- Hotjar (optional) — heatmaps and session recordings for UX improvement

**Advertising & Retargeting Cookies:**
- Meta Pixel — tracks website visitors for Facebook/Instagram ad retargeting
- Meta Ads Conversion Tracking — measures ad campaign performance
- LinkedIn Insight Tag (if applicable)

**How to Control Cookies:**
You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality. You may also opt out of Google Analytics using the browser add-on at tools.google.com/dlpage/gaoptout.`,
  },
  {
    id: 'data-security',
    title: '6. Data Security',
    content: `We implement industry-standard security measures to protect your data:

**Encryption Standards:**
- All data transmitted between your browser and our servers uses TLS 1.2 or higher
- Sensitive data (passwords, API keys) are encrypted using AES-256
- Database backups are encrypted and stored securely

**Secure Storage Practices:**
- Customer data is stored in ISO 27001-certified data centres
- Production databases are not accessible from the public internet
- Regular security audits and penetration testing

**Access Controls:**
- Role-based access control (RBAC) for all internal systems
- Multi-factor authentication (MFA) required for all staff accounts
- Audit logs maintained for all data access and modification events
- Principle of least privilege applied to all system access

**Incident Response:**
- We maintain a data breach response plan in compliance with the DPDP Act, 2023
- In the event of a breach affecting your data, we will notify you within 72 hours
- Incidents are reported to the Data Protection Board of India as required by law`,
  },
  {
    id: 'user-rights',
    title: '7. Your Rights Under Applicable Law',
    content: `**Under the Digital Personal Data Protection (DPDP) Act, 2023 (India):**

As a Data Principal (data subject), you have the following rights:

- **Right of Access:** Request a summary of your personal data we hold and how it is being processed
- **Right of Correction:** Request correction of inaccurate or incomplete personal data
- **Right of Erasure:** Request deletion of your personal data (subject to our legal retention obligations)
- **Right to Grievance Redressal:** Raise a complaint with our Data Protection Officer
- **Right to Nominate:** Nominate another individual to exercise rights on your behalf

**Under the GDPR (if you are in the EU/EEA):**

- Right of access, rectification, erasure, and portability
- Right to restrict or object to processing
- Right to withdraw consent at any time
- Right to lodge a complaint with your supervisory authority

**Marketing Opt-Out:**
You may unsubscribe from marketing communications at any time by:
- Clicking "Unsubscribe" in any email we send
- Sending "STOP" in response to any WhatsApp marketing message
- Contacting us at contact@tuskrblack.in

**To Exercise Your Rights:**
Submit a written request to: contact@tuskrblack.in with the subject line "Data Rights Request". We will respond within 30 days as required by law.`,
  },
  {
    id: 'third-party',
    title: '8. Third-Party Services',
    content: `We use the following third-party services to deliver our platform. Each has their own privacy policy:

- **Meta Platforms (Facebook, Instagram, WhatsApp):** meta.com/privacy
- **Google LLC (Google Business Profile, Google Analytics):** policies.google.com/privacy
- **WhatsApp Business API (via Meta):** whatsapp.com/legal/privacy-policy
- **Razorpay / Stripe (Payment Processing):** Subject to their respective privacy policies
- **Amazon Web Services (Cloud Hosting):** aws.amazon.com/privacy
- **HubSpot / Zoho (CRM Integration, optional):** Subject to their respective privacy policies

We do not sell your personal data to any third party. Data shared with third-party service providers is limited to what is necessary to deliver our services.`,
  },
  {
    id: 'data-transfers',
    title: '9. International Data Transfers',
    content: `Tuskr Black is based in India. Some of our third-party service providers (such as Meta, Google, and AWS) may store and process your data outside India. Where personal data is transferred internationally, we ensure appropriate safeguards are in place in accordance with the DPDP Act, 2023, and applicable international data protection laws.`,
  },
  {
    id: 'children',
    title: '10. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you believe a child has provided personal data to us, please contact us immediately and we will delete it.`,
  },
  {
    id: 'changes',
    title: '11. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. We will notify you of material changes by:
- Posting the updated policy on this page with a revised "Last Updated" date
- Sending an email notification to registered users for significant changes

Continued use of our services after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact-dpo',
    title: '12. Contact Information & Data Protection Officer',
    content: `**Tuskr Black**
Website: https://Tuskr Black.in
Email: contact@tuskrblack.in

For all privacy-related queries, data rights requests, and grievances (including those under the DPDP Act, 2023), please write to the above email with the subject line "Privacy Request". We aim to respond within 30 days of receipt.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-brand-blue-light">Legal Document</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-3">Privacy Policy</h1>
            <p className="text-white/50">
              Last Updated: <span className="text-white/70">29 May 2026</span>
              {' '}•{' '}
              Effective Date: <span className="text-white/70">1 January 2025</span>
            </p>
            <div className="mt-4 p-4 rounded-2xl glass-card border border-brand-blue/20">
              <p className="text-sm text-white/60 leading-relaxed">
                Tuskr Black ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal data when you use our website (Tuskr Black.in) and services. This policy is compliant with the{' '}
                <strong className="text-white/80">Digital Personal Data Protection (DPDP) Act, 2023</strong> (India) and the{' '}
                <strong className="text-white/80">General Data Protection Regulation (GDPR)</strong> where applicable.
              </p>
            </div>
          </motion.div>

          {/* TOC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-5 border border-white/5 mb-10"
          >
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Table of Contents</p>
            <div className="grid sm:grid-cols-2 gap-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-brand-blue hover:text-brand-blue-light transition-colors py-0.5"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="glass-card rounded-2xl p-6 border border-white/5"
              >
                <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                <div className="text-sm text-white/55 leading-relaxed space-y-3 whitespace-pre-line">
                  {section.content.split('\n').map((line, j) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={j} className="font-semibold text-white/80">{line.replace(/\*\*/g, '')}</p>
                    }
                    if (line.startsWith('- ')) {
                      return <p key={j} className="flex items-start gap-2"><span className="text-brand-blue flex-shrink-0 mt-1">•</span><span>{line.slice(2)}</span></p>
                    }
                    if (line.trim() === '') return <br key={j} />
                    return <p key={j}>{line}</p>
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
