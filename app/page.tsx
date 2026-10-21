import Link from 'next/link'
import { ArrowRight, Calculator, Globe, Hash, Building2, Ship, Car, Home, PiggyBank, Smartphone, BookOpen, ShieldCheck, Search, Zap, ArrowLeftRight } from 'lucide-react'
import { livePosts } from '@/lib/all-blog-posts'
import PaybillSearch from '@/components/PaybillSearch'

const tools = [
 { title:'M-Pesa Calculator', description:'Check reference sending and withdrawal charges.', href:'/mpesa-calculator', icon:Calculator },
 { title:'Send Money to Kenya', description:'Explore international transfer services and costs.', href:'/send-money-to-kenya', icon:Globe },
 { title:'Paybill Directory', description:'Find payment numbers for utilities and businesses.', href:'/paybill-directory', icon:Hash },
 { title:'Bank Transfer Guide', description:'Understand PesaLink, RTGS and EFT.', href:'/bank-transfer', icon:Building2 },
 { title:'Import Duty', description:'Explore indicative vehicle import costs.', href:'/import-duty', icon:Ship },
 { title:'Vehicle Transfer', description:'Follow the NTSA ownership transfer process.', href:'/vehicle-transfer', icon:Car },
 { title:'Property Transfer', description:'Understand land transfer costs and documents.', href:'/property-transfer', icon:Home },
 { title:'Pension Transfer', description:'Understand pension transfer options.', href:'/pension-transfer', icon:PiggyBank },
]
const highlights = [
 { title:'Clear comparisons', description:'Understand your options without inflated claims.', icon:ArrowLeftRight },
 { title:'Practical guides', description:'Follow straightforward steps for real situations.', icon:BookOpen },
 { title:'Fees explained', description:'See which amounts are references, not live quotes.', icon:Calculator },
 { title:'Confirm before sending', description:'Check final fees with the provider.', icon:ShieldCheck },
]
export default function HomePage() {
 const posts = livePosts.slice(0,3)
 return <div className="editorial-home">
  <section className="editorial-hero">
   <div className="editorial-container editorial-hero-grid">
    <div className="editorial-hero-copy">
     <p className="editorial-eyebrow">CLEARER OPTIONS. BETTER DECISIONS.</p>
     <h1>Move money <span className="editorial-underline">smarter</span> in Kenya.</h1>
     <p className="editorial-lede">Explore M-Pesa fees, bank transfers, Paybill numbers, remittances and everyday financial decisions. Clear guides and useful tools in one place.</p>
     <div className="editorial-search"><PaybillSearch compact={true}/></div>
     <div className="editorial-popular"><span>Popular tools:</span><Link href="/mpesa-calculator">M-Pesa fees</Link><Link href="/send-money-to-kenya">Send money</Link><Link href="/paybill-directory">Paybills</Link></div>
    </div>
    <div className="editorial-hero-feature">
     <div className="editorial-photo-art"><span>Money made<br/>clearer.</span></div>
     <div className="editorial-hero-widget">
      <div className="editorial-widget-title"><span className="editorial-icon"><Calculator size={25}/></span><div><h2>M-Pesa Fee Calculator</h2><p>Understand transaction costs before you send.</p></div></div>
      <div className="editorial-widget-tabs"><span>Send money</span><span>Withdraw</span><span>Paybill / bank</span></div>
      <p className="editorial-widget-label">Explore fees for</p>
      <div className="editorial-widget-amount">KES 1,000 <ArrowRight size={20}/></div>
      <div className="editorial-widget-grid"><div><small>Send to M-Pesa</small><strong>Reference fees</strong></div><div><small>Cash withdrawal</small><strong>Check fee band</strong></div></div>
      <Link className="editorial-cta editorial-widget-cta" href="/mpesa-calculator">Open fee calculator <ArrowRight size={17}/></Link>
      <p className="editorial-smallprint">Fees depend on transaction type and current tariffs. Confirm with Safaricom.</p>
     </div>
    </div>
   </div>
  </section>
  <section className="editorial-section editorial-container">
   <div className="editorial-section-heading"><h2>Top tools for everyday money decisions</h2><Link href="/guides">Explore guides <ArrowRight size={17}/></Link></div>
   <div className="editorial-tools">{tools.map((t,i)=><Link className={'editorial-tool '+(i===0?'editorial-tool-feature':'')} href={t.href} key={t.href}><span className="editorial-icon"><t.icon size={24}/></span><h3>{t.title}</h3><p>{t.description}</p><span className="editorial-round-arrow"><ArrowRight size={18}/></span></Link>)}</div>
  </section>
  <section className="editorial-section editorial-benefits"><div className="editorial-container editorial-benefits-grid"><div><p className="editorial-eyebrow">WHY TRANSFER.CO.KE</p><h2>Clear information.<br/><span className="editorial-underline">Smarter choices.</span></h2></div><div className="editorial-benefit-list">{highlights.map(h=><div key={h.title}><span className="editorial-icon"><h.icon size={20}/></span><div><h3>{h.title}</h3><p>{h.description}</p></div></div>)}</div><div className="editorial-feature-panel"><Globe size={42}/><h3>A more informed Kenya moves forward.</h3><p>Everyday financial questions deserve useful, understandable answers.</p></div></div></section>
  <section className="editorial-section editorial-container"><div className="editorial-section-heading"><h2>Find the right way to move money</h2><Link href="/remittance">View comparison <ArrowRight size={17}/></Link></div><div className="editorial-compare"><div><span className="editorial-icon"><Globe size={24}/></span><h3>Sending money from abroad?</h3><p>Explore providers and learn how exchange-rate margins, transfer charges and payout methods affect the result.</p><Link className="editorial-cta" href="/send-money-to-kenya">Explore corridors <ArrowRight size={17}/></Link></div><div><span className="editorial-icon"><Building2 size={24}/></span><h3>Moving money between banks?</h3><p>Compare PesaLink, RTGS and EFT. Actual fees vary by your bank and account.</p><Link className="editorial-cta editorial-cta-secondary" href="/bank-transfer">Compare methods <ArrowRight size={17}/></Link></div><div><span className="editorial-icon"><Smartphone size={24}/></span><h3>Need a Paybill number?</h3><p>Search the directory and verify the receiving organisation and payment reference before paying.</p><Link className="editorial-cta editorial-cta-secondary" href="/paybill-directory">Find a Paybill <ArrowRight size={17}/></Link></div></div></section>
  <section className="editorial-section editorial-container editorial-articles"><div className="editorial-section-heading"><h2>Latest guides & insights</h2><Link href="/blog">All articles <ArrowRight size={17}/></Link></div><div className="editorial-article-grid">{posts.map(p=><Link key={p.slug} href={'/blog/'+p.slug}><p className="editorial-eyebrow">{p.category}</p><h3>{p.title}</h3><p>{p.metaDescription}</p><span>Read guide <ArrowRight size={16}/></span></Link>)}</div></section>
 </div>
}