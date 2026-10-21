import Link from 'next/link'
import { ArrowUpRight, ArrowRight, ArrowDownLeft, Wallet, Landmark, Globe2, ReceiptText, CarFront, House, Ship, PiggyBank, ShieldCheck, BookOpen } from 'lucide-react'
import { livePosts } from '@/lib/all-blog-posts'

const tools = [
 {n:'01',title:'M-Pesa fees',desc:'Sending, withdrawing and transaction limits.',href:'/mpesa-calculator',icon:Wallet,featured:true},
 {n:'02',title:'Send to Kenya',desc:'Understand international remittances.',href:'/send-money-to-kenya',icon:Globe2},
 {n:'03',title:'Paybill directory',desc:'Find a biller and verify its payment details.',href:'/paybill-directory',icon:ReceiptText},
 {n:'04',title:'Bank transfers',desc:'PesaLink, RTGS and EFT explained.',href:'/bank-transfer',icon:Landmark},
 {n:'05',title:'Import duties',desc:'Understand vehicle import tax scenarios.',href:'/import-duty',icon:Ship},
 {n:'06',title:'Vehicle ownership',desc:'A practical NTSA transfer checklist.',href:'/vehicle-transfer',icon:CarFront},
 {n:'07',title:'Property transfer',desc:'Stamp duty and land transfer process.',href:'/property-transfer',icon:House},
 {n:'08',title:'Pension transfers',desc:'Moving retirement benefits, clearly.',href:'/pension-transfer',icon:PiggyBank},
]
export default function HomePage() {
 const posts=livePosts.slice(0,3)
 return <div className="lux-site">
   <section className="lux-hero">
     <div className="lux-wrap lux-hero-inside">
       <div className="lux-intro">
         <div className="lux-kicker"><span className="lux-dot"/> THE MONEY MOVEMENT EDITION <span> / KENYA</span></div>
         <h1>Your money.<br/><em>More moves.</em><br/>Less guesswork<span className="lux-period">.</span></h1>
         <div className="lux-intro-bottom"><p>One place to understand what it really takes to move money in Kenya. Better tools. Clearer costs. More confident decisions.</p><Link href="/mpesa-calculator" className="lux-dark-button">Explore the tools <ArrowUpRight size={20}/></Link></div>
       </div>
       <div className="lux-graphic" aria-label="Stylised money movement illustration">
         <div className="lux-graphic-top"><span>TRANSACTION STUDY / 001</span><span>KE — 2026</span></div>
         <div className="lux-graphic-lines"><div className="lux-graphic-arc arc-one"/><div className="lux-graphic-arc arc-two"/><div className="lux-graphic-arc arc-three"/></div>
         <div className="lux-graphic-coin"><span>KSh</span><strong>↗</strong></div>
         <div className="lux-graphic-bottom"><span>MOVE WITH CLARITY</span><span>254°</span></div>
       </div>
     </div>
     <div className="lux-ticker"><div className="lux-wrap"><span>KNOW THE COST</span><span>—</span><span>COMPARE THE OPTIONS</span><span>—</span><span>MAKE YOUR MOVE</span><ArrowRight size={18}/></div></div>
   </section>
   <section className="lux-workspace lux-wrap">
     <div className="lux-heading-row"><div><p className="lux-overline">THE ESSENTIALS / 01—08</p><h2>What are you<br/><em>moving today?</em></h2></div><p>Select a tool. Find the details. Make a better-informed decision.</p></div>
     <div className="lux-tools">{tools.map(t=><Link href={t.href} key={t.n} className={'lux-tool '+(t.featured?'lux-featured':'')}><div className="lux-tool-top"><span>{t.n} / TOOL</span><ArrowUpRight size={22}/></div><div className="lux-tool-center"><t.icon size={33} strokeWidth={1.5}/></div><div><h3>{t.title}</h3><p>{t.desc}</p></div></Link>)}</div>
   </section>
   <section className="lux-spotlight">
    <div className="lux-wrap lux-spotlight-grid"><div className="lux-spotlight-title"><p className="lux-overline">FEATURED UTILITY / 001</p><h2>Every shilling<br/><em>counts.</em></h2><p>Know the transaction type, see available reference fees and understand what to confirm before you move your money.</p><Link href="/mpesa-calculator" className="lux-light-button">Open M-Pesa calculator <ArrowUpRight size={19}/></Link></div>
     <div className="lux-calculator-display"><div className="lux-calc-head"><div><span className="lux-calc-bullet"/> TRANSFER FEE INTELLIGENCE</div><span>MPESA / KENYA</span></div><div className="lux-calc-body"><p>Choose your transaction</p><div className="lux-calc-row"><div><ArrowUpRight size={20}/><span>Send money</span></div><ArrowRight size={19}/></div><div className="lux-calc-row"><div><ArrowDownLeft size={20}/><span>Cash withdrawal</span></div><ArrowRight size={19}/></div><div className="lux-calc-row"><div><Landmark size={20}/><span>Paybill & bank</span></div><ArrowRight size={19}/></div><div className="lux-calc-foot"><ShieldCheck size={17}/> Reference tariffs, not a final provider quotation</div></div></div>
    </div>
   </section>
   <section className="lux-wrap lux-split">
     <div className="lux-statement"><p className="lux-overline">OUR POINT OF VIEW</p><h2>Financial clarity<br/>shouldn't be<br/><em>a luxury.</em></h2></div>
     <div className="lux-statement-copy"><p>Complex charges, obscure rules and endless tabs get in the way. Transfer.co.ke turns everyday money questions into straightforward comparisons and guides.</p><div className="lux-principles"><div><span>01</span><strong>Understand the cost.</strong></div><div><span>02</span><strong>Know what's verified.</strong></div><div><span>03</span><strong>Confirm before you commit.</strong></div></div></div>
   </section>
   <section className="lux-insights"><div className="lux-wrap"><div className="lux-heading-row"><div><p className="lux-overline">READ / LEARN / DECIDE</p><h2>The money <em>briefing.</em></h2></div><Link href="/blog" className="lux-text-link">All articles <ArrowUpRight size={18}/></Link></div><div className="lux-articles">{posts.map((p,i)=><Link href={'/blog/'+p.slug} key={p.slug} className="lux-article"><div className="lux-article-top"><span>0{i+1} / {p.category.toUpperCase()}</span><BookOpen size={24} strokeWidth={1.5}/></div><h3>{p.title}</h3><p>{p.metaDescription}</p><div className="lux-article-arrow"><ArrowUpRight size={22}/></div></Link>)}</div></div></section>
 </div>
}