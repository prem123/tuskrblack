import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing and using Tuskr Black's website (Tuskr Black.in) and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.

These terms constitute a legally binding agreement between you ("Client", "User") and Tuskr Black ("Company", "we", "us").`,
  },
  {
    id: 'services',
    title: '2. Description of Services',
    content: `Tuskr Black provides the following services:

**WhatsApp Business API Solutions:**
Setup, management, and automation of official WhatsApp Business API accounts including chatbots, broadcasts, and CRM integrations.

**Digital Marketing Services:**
Management of paid advertising campaigns on Meta (Facebook/Instagram) and Google platforms, including campaign strategy, creative, and optimisation.

**Google Business Profile Management:**
Setup, optimisation, and ongoing management of Google Business Profiles for improved local search visibility.

**Review Growth & Reputation Management:**
Automated review collection campaigns, reputation monitoring, and customer feedback management.

Service deliverables, timelines, and specific inclusions are defined in the individual Service Agreement signed between the Client and Tuskr Black.`,
  },
  {
    id: 'obligations',
    title: '3. Client Obligations',
    content: `You agree to:

- Provide accurate, complete, and current business information required for service delivery
- Hold valid authorisation to use any phone numbers, business accounts, or advertising accounts you provide to us
- Ensure all contact lists used for WhatsApp campaigns consist of individuals who have opted in to receive communications from your business
- Comply with Meta's WhatsApp Business Messaging Policy, Google's Advertising Policies, and all applicable Indian laws
- Not use our services for illegal, fraudulent, or spam activities
- Respond to reasonable information requests within 5 business days to avoid service delays
- Maintain timely payment of all invoices as per the agreed payment schedule`,
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    content: `**Our Property:**
All software, processes, methodologies, templates, and proprietary tools used to deliver our services remain the intellectual property of Tuskr Black.

**Your Property:**
All content, data, brand assets, and customer information you provide to us remain your property. We use these solely to deliver the agreed services.

**Campaign Deliverables:**
Ad creatives, copy, and campaign structures created specifically for your business as part of our service agreement are assigned to you upon full payment. Generic templates and frameworks remain our property.`,
  },
  {
    id: 'payment',
    title: '5. Payment Terms',
    content: `- Service fees are due as per the invoice date and payment schedule in your Service Agreement
- Monthly subscriptions are billed in advance; failure to pay within 7 days of the due date may result in service suspension
- All prices are in Indian Rupees (INR) unless otherwise stated
- Applicable GST (18%) is charged on all invoices
- WhatsApp Business API conversation charges from Meta are billed separately based on actual usage
- Refunds are subject to our Refund Policy; services rendered are non-refundable

**Late Payment:**
Invoices unpaid after 15 days of the due date will incur a 2% monthly late fee. We reserve the right to suspend services for accounts with overdue balances exceeding 30 days.`,
  },
  {
    id: 'termination',
    title: '6. Termination',
    content: `**By Client:**
You may terminate monthly services with 30 days written notice. Annual plan terminations are subject to a minimum 3-month commitment and are prorated thereafter.

**By Tuskr Black:**
We may terminate or suspend services immediately, without notice, if:
- You breach these Terms or our Service Agreement
- You engage in illegal activities using our platform
- Payment is overdue by more than 30 days
- Your actions put our systems or other clients at risk

**Upon Termination:**
- Access to your dashboard and data will remain available for 30 days for export
- WhatsApp Business API account can be transferred to another provider upon request
- Outstanding invoices remain due and payable`,
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law:

- Tuskr Black's total liability to you for any claims arising from or related to these terms or our services shall not exceed the total fees paid by you in the 3 months preceding the claim

- We are not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits or business opportunities

- We are not responsible for changes to Meta's or Google's advertising policies, platform algorithms, or API terms that affect campaign performance

- We do not guarantee specific results (such as a specific number of leads, Google rankings, or review counts) as these depend on market conditions, your business, and third-party platforms

- We are not liable for service interruptions caused by third-party platforms (Meta, Google, WhatsApp) or force majeure events`,
  },
  {
    id: 'confidentiality',
    title: '8. Confidentiality',
    content: `Both parties agree to keep confidential all non-public information shared during the course of the business relationship, including:
- Business strategies and marketing plans
- Customer data and contact lists
- Financial information and pricing
- Proprietary processes and methodologies

This obligation survives termination of the services for a period of 2 years.`,
  },
  {
    id: 'third-party',
    title: '9. Third-Party Platforms',
    content: `Our services involve third-party platforms (Meta, Google, WhatsApp by Meta). By engaging our services, you acknowledge:

- Third-party platform policies govern what advertising and messaging is permitted. We will advise you on compliance but cannot guarantee campaign approval
- Platform account suspensions due to your prior violations are not our responsibility
- Changes to third-party pricing (e.g., Meta's WhatsApp conversation pricing) are passed through at cost
- We are an independent service provider and are not affiliated with Meta or Google`,
  },
  {
    id: 'governing-law',
    title: '10. Governing Law & Dispute Resolution',
    content: `These Terms and Conditions are governed by the laws of India.

**Dispute Resolution:**
1. In case of any dispute, parties shall first attempt resolution through good-faith negotiation within 30 days
2. If unresolved, disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996 (India)
3. The seat of arbitration shall be India, conducted in English

**Jurisdiction:**
The courts of India shall have exclusive jurisdiction for any matters not resolved through arbitration.`,
  },
  {
    id: 'contact',
    title: '11. Contact Information',
    content: `For questions about these Terms and Conditions, contact us at:

**Tuskr Black**
Website: https://Tuskr Black.in
Email: contact@tuskrblack.in`,
  },
]

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                <FileText size={18} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-brand-blue-light">Legal Document</span>
            </div>
            <h1 className="text-4xl font-black text-white mb-3">Terms & Conditions</h1>
            <p className="text-white/50">
              Last Updated: <span className="text-white/70">29 May 2026</span>
            </p>
            <div className="mt-4 p-4 rounded-2xl glass-card border border-brand-blue/20">
              <p className="text-sm text-white/60 leading-relaxed">
                Please read these Terms and Conditions carefully before using Tuskr Black's services. By using our services you agree to be bound by these terms.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
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
                <div className="text-sm text-white/55 leading-relaxed space-y-2">
                  {section.content.split('\n').map((line, j) => {
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={j} className="font-semibold text-white/80 mt-3">{line.replace(/\*\*/g, '')}</p>
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
