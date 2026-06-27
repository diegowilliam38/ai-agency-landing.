"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Bot, Code, Server, Zap, CheckCircle2, 
  Scale, GraduationCap, Building2, Database, Workflow, 
  LineChart, Lock, MessageCircle, Linkedin, ChevronDown, ChevronUp, AlertTriangle, Sparkles, X, Check, Layers, ShieldCheck, FileCode2 
} from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";
import Capa3D from "@/components/Capa3D";
import Juridico3D from "@/components/Juridico3D";
import B2B3D from "@/components/B2B3D";
import Edu3D from "@/components/Edu3D";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [showNext, setShowNext] = useState(false);
  
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      setScrollProgress(progress);
      setShowNext(window.scrollY > 300);
      setAtBottom(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNextClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const y = window.scrollY + window.innerHeight * 0.3;
    let idx = -1;
    for (let i = 0; i < sectionsRef.current.length; i++) {
      if (sectionsRef.current[i] && sectionsRef.current[i]!.offsetTop <= y) {
        idx = i;
      }
    }
    const nextIdx = Math.max(0, Math.min(sectionsRef.current.length - 1, idx + 1));
    sectionsRef.current[nextIdx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) { 
        e.preventDefault(); 
        handleNextClick();
      } 
      else if (e.key.toLowerCase() === 'f') {
          if (!document.fullscreenElement) document.documentElement.requestFullscreen();
          else document.exitFullscreen();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <main className="bg-black text-white selection:bg-blue-500/30 font-sans">
      
      {/* Mira Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] z-[9999] transition-all duration-100 linear"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, var(--mira-primary), var(--mira-accent-2), var(--mira-primary))',
          backgroundSize: '200% 100%',
          animation: 'mira-shimmer 2s linear infinite'
        }}
      />

      {/* Mira Floating Next Button */}
      <button 
        onClick={handleNextClick}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-500 text-black flex items-center justify-center cursor-pointer border-none transition-all duration-300 z-[9998] hover:-translate-y-1 hover:scale-110 ${showNext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'}`}
        aria-label="Próximo slide"
      >
        {atBottom ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>

      {/* SLIDE 1: CAPA */}
      <section ref={el => {sectionsRef.current[0] = el}} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <Capa3D />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
            <p className="mira-attribute-pill inline-flex items-center px-5 py-2 text-sm tracking-widest uppercase mira-primary-color mb-8">
                <Zap className="w-4 h-4 mr-2" /> O Futuro da Automação Chegou
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Sua Empresa, <br />
                <span className="mira-gradient-text">Transformada em AI-First.</span>
            </h1>
            <p className="text-xl mira-text-soft max-w-2xl mx-auto mb-10">
                Não perca tempo com automações rasas. Nós construímos a Infraestrutura de IA completa e implementamos Squads Autônomos que escalam a produtividade da sua empresa.
            </p>
            <div className="flex items-center justify-center gap-3 mira-text-softer text-sm">
                <Lock className="w-4 h-4 mira-primary-color" /> Zero Trust Architecture
                <span className="opacity-40">|</span>
                <Database className="w-4 h-4 mira-primary-color" /> Data Pipelines
            </div>
        </motion.div>
      </section>

      {/* SLIDE 2: PROBLEMA VS SOLUÇÃO */}
      <section ref={el => {sectionsRef.current[1] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
            <h2 className="text-4xl md:text-5xl font-black">Caos Operacional <span className="mira-primary-color">vs</span> Escala AI-First</h2>
            <p className="mira-text-soft text-lg mt-3">Sua operação manual está vazando dinheiro.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mira-glass-card p-10 group hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)]"
            >
                <div className="mira-icon-hero mb-6 bg-red-900/20 border-red-500/30"><AlertTriangle className="text-red-500 w-6 h-6" /></div>
                <h3 className="text-3xl font-bold mb-4">O problema</h3>
                <ul className="space-y-4 mira-text-soft">
                    <li className="flex gap-3"><X className="text-red-500 w-5 h-5 shrink-0" /> Processos dependentes de pessoas para tarefas repetitivas.</li>
                    <li className="flex gap-3"><X className="text-red-500 w-5 h-5 shrink-0" /> Leads esfriando por falta de qualificação instantânea.</li>
                    <li className="flex gap-3"><X className="text-red-500 w-5 h-5 shrink-0" /> Silos de dados que impedem visão 360º do negócio.</li>
                </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mira-glass-card p-10 group hover:shadow-[0_20px_50px_var(--mira-glow-strong)]"
            >
                <div className="mira-icon-hero mb-6"><Sparkles className="mira-primary-color w-6 h-6" /></div>
                <h3 className="text-3xl font-bold mb-4">A solução</h3>
                <ul className="space-y-4 mira-text-soft">
                    <li className="flex gap-3"><Check className="mira-primary-color w-5 h-5 shrink-0" /> Squads autônomos resolvendo gargalos 24/7.</li>
                    <li className="flex gap-3"><Check className="mira-primary-color w-5 h-5 shrink-0" /> Qualificação em tempo real integrada ao CRM.</li>
                    <li className="flex gap-3"><Check className="mira-primary-color w-5 h-5 shrink-0" /> Data Pipelines e Analytics operacionais em tempo real.</li>
                </ul>
            </motion.div>
        </div>
      </section>

      {/* SLIDE 3: A JORNADA AI-FIRST */}
      <section ref={el => {sectionsRef.current[2] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
            <h2 className="text-4xl md:text-5xl font-black">A Jornada AI-First</h2>
            <p className="mira-text-soft text-lg mt-3">Escalando com Inteligência Artificial no centro de todas as decisões.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mira-glass-card p-8 relative overflow-hidden"
            >
                <div className="mira-icon-hero mb-6"><Bot className="mira-primary-color w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3">Squads Autônomos</h3>
                <p className="text-sm mira-text-soft mb-6">Não é apenas um chatbot. Implantamos ecossistemas onde agentes especialistas trabalham juntos.</p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 mira-primary-color" /> Decisão Multi-Agent</li>
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 mira-primary-color" /> Operação 24/7</li>
                </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mira-glass-card p-8 relative overflow-hidden"
            >
                <div className="mira-icon-hero mb-6 bg-violet-900/20 border-violet-500/30"><Code className="text-violet-400 w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3">Aplicações Web</h3>
                <p className="text-sm mira-text-soft mb-6">Sites de alta performance projetados para conversão com arquitetura Next.js Premium.</p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 text-violet-400" /> Alta Conversão</li>
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 text-violet-400" /> SSR e SEO Otimizado</li>
                </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mira-glass-card p-8 relative overflow-hidden"
            >
                <div className="mira-icon-hero mb-6 bg-green-900/20 border-green-500/30"><Server className="text-green-400 w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3">Infraestrutura LLMOps</h3>
                <p className="text-sm mira-text-soft mb-6">Engenharia de dados e LLMs com conformidade total e segurança de ponta.</p>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 text-green-400" /> Governança (LGPD)</li>
                    <li className="flex items-center gap-2 text-sm mira-text-softer"><CheckCircle2 className="w-4 h-4 text-green-400" /> Escalabilidade</li>
                </ul>
            </motion.div>
        </div>
      </section>

      {/* SLIDE 4: DATA TO REVENUE */}
      <section ref={el => {sectionsRef.current[3] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Transformamos Dados em Receita</h2>
            <p className="mira-text-soft text-lg mt-3">Segurança absoluta (Zero Trust) como vantagem competitiva.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mira-glass-card p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><LineChart className="w-32 h-32 text-blue-500" /></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Data Pipelines & Business Intelligence</h3>
              <p className="mira-text-soft mb-6 relative z-10">Fundação para sua empresa escalar com rastreio, processamento e transformação de informações em insights preditivos.</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Decisões baseadas em dados</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Dashboards em tempo real</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mira-glass-card p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Lock className="w-32 h-32 text-violet-500" /></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Zero Trust & Compliance</h3>
              <p className="mira-text-soft mb-6 relative z-10">Adequação completa para nichos regulados. Operação sob os mais rígidos padrões globais (LGPD/CVM).</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Anonimização de dados sensíveis</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-violet-500" /> RAG isolado e sem vazamentos</li>
              </ul>
            </motion.div>
        </div>
      </section>

      {/* SLIDE 5: JURÍDICO OS */}
      <section ref={el => {sectionsRef.current[4] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 w-full max-w-5xl text-left md:text-center"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              LegalTech
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Cockpit Jurídico OS</h2>
            <p className="mira-text-soft text-lg">Arquitetura Zero Trust para escritórios. RAG avançado com Sigilo Absoluto.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mira-glass-card w-full max-w-5xl p-8 relative overflow-hidden"
        >
            <div className="mira-anim-stage" style={{aspectRatio: '21/9'}}>
              <Juridico3D />
            </div>
        </motion.div>
      </section>

      {/* SLIDE 6: B2B OS */}
      <section ref={el => {sectionsRef.current[5] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 w-full max-w-5xl text-left md:text-center"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
              B2B & Enterprise
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Revenue Pipeline OS</h2>
            <p className="mira-text-soft text-lg">Infraestrutura orientada a faturamento. Eliminamos a latência comercial.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mira-glass-card w-full max-w-5xl p-8 relative overflow-hidden"
        >
            <div className="mira-anim-stage" style={{aspectRatio: '21/9'}}>
              <B2B3D />
            </div>
        </motion.div>
      </section>

      {/* SLIDE 7: EDU OS */}
      <section ref={el => {sectionsRef.current[6] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 w-full max-w-5xl text-left md:text-center"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
              Educação
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">EdTech Mentor OS</h2>
            <p className="mira-text-soft text-lg">Retenção radical de alunos através de Tutores 24/7 Contextuais.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mira-glass-card w-full max-w-5xl p-8 relative overflow-hidden"
        >
            <div className="mira-anim-stage" style={{aspectRatio: '21/9'}}>
              <Edu3D />
            </div>
        </motion.div>
      </section>

      {/* SLIDE 8: ENGINEERING STACK */}
      <section ref={el => {sectionsRef.current[7] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-4xl"
        >
            <h2 className="text-4xl md:text-5xl font-black mb-4">Engineering Stack & Topologia</h2>
            <p className="mira-text-soft text-lg">Padrões de desenvolvimento assistido por IA e as melhores ferramentas do mercado (LangChain, Pinecone, Next.js).</p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-4 w-full max-w-6xl">
            {/* Layer 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mira-glass-card p-6 border-blue-500/30"
            >
                <Database className="text-blue-500 w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">1. Data Ingestion</h4>
                <p className="text-xs mira-text-soft">ETL automatizado, conectores empresariais e ingestão de documentos estruturados (PDF, SQL, APIs).</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">Python</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">Airflow</span>
                </div>
            </motion.div>

            {/* Layer 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mira-glass-card p-6 border-violet-500/30"
            >
                <Layers className="text-violet-500 w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">2. Vector Store (RAG)</h4>
                <p className="text-xs mira-text-soft">Armazenamento semântico ultra-rápido garantindo que o agente só utilize o contexto exato e isolado da sua empresa.</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">Pinecone</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">Milvus</span>
                </div>
            </motion.div>

            {/* Layer 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mira-glass-card p-6 border-green-500/30"
            >
                <Workflow className="text-green-500 w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">3. Orchestration</h4>
                <p className="text-xs mira-text-soft">Criação de agentes autônomos com memória e ferramentas customizadas (Tool Calling e Chains).</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">LangChain</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">LangGraph</span>
                </div>
            </motion.div>

            {/* Layer 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mira-glass-card p-6 border-gray-500/30"
            >
                <FileCode2 className="text-gray-400 w-8 h-8 mb-4" />
                <h4 className="font-bold mb-2">4. Application</h4>
                <p className="text-xs mira-text-soft">Interfaces e Dashboards renderizados via servidor (SSR) para extrema velocidade e SEO (como esta página).</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">Next.js 15+</span>
                    <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full border border-white/10">React 19</span>
                </div>
            </motion.div>
        </div>
      </section>

      {/* SLIDE 9: GOVERNANÇA & OBSERVABILIDADE */}
      <section ref={el => {sectionsRef.current[8] = el}} className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                  LLMOps & Qualidade
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6">Não colocamos Agentes em produção às cegas.</h2>
                <p className="mira-text-soft text-lg mb-8">
                  Como pesquisadores e desenvolvedores focados em Frameworks de Governança corporativa, nosso rigor técnico é altíssimo. A IA precisa ser auditável.
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-3"><ShieldCheck className="mira-primary-color w-6 h-6 shrink-0" /> <div><strong>Proteção contra Prompt Injection:</strong> Barreiras de segurança nativas e sanitização de inputs do usuário.</div></li>
                    <li className="flex gap-3"><ShieldCheck className="mira-primary-color w-6 h-6 shrink-0" /> <div><strong>LLM Tracing & Observabilidade:</strong> Rastreamento completo (custo, latência e steps de raciocínio) via LangSmith.</div></li>
                    <li className="flex gap-3"><ShieldCheck className="mira-primary-color w-6 h-6 shrink-0" /> <div><strong>Testes Automatizados (CI/CD):</strong> Validação contínua do Pipeline de RAG para evitar alucinações antes de novos deploys.</div></li>
                </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mira-glass-card p-8 h-full min-h-[400px] flex items-center justify-center relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at center, var(--mira-primary) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}></div>
                <div className="text-center relative z-10">
                    <Lock className="w-20 h-20 text-blue-500 mx-auto mb-6 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Zero Trust Architecture</h3>
                    <p className="mira-text-soft text-sm">Garantimos conformidade absoluta com a LGPD e regras corporativas estritas.</p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* SLIDE 10: CTA */}
      <section ref={el => {sectionsRef.current[9] = el}} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse at 50% 60%, var(--mira-glow-strong), transparent 65%)',
            animation: 'var(--animate-mira-pulse)'
        }}></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl"
        >
            <div className="mira-icon-hero mx-auto mb-8" style={{ width:'72px', height:'72px', borderRadius:'20px' }}>
                <Zap className="mira-primary-color w-9 h-9" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Pronto para a Evolução?</h2>
            <p className="text-xl mira-text-soft mb-10">Agende uma demonstração e descubra como uma infraestrutura LLMOps estruturada pode escalar sua empresa.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://wa.me/5598988646888" target="_blank" rel="noopener noreferrer" className="mira-attribute-pill px-8 py-4 text-base font-bold bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all shadow-lg hover:shadow-blue-500/50 flex items-center">
                    <MessageCircle className="inline w-5 h-5 mr-2" /> Iniciar Projeto
                </a>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mt-16">
              <a href="https://www.linkedin.com/in/diegowilliam-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
            <p className="mira-text-softer mt-8 text-xs tracking-widest uppercase">Innovate e Solve IA © 2026</p>
        </motion.div>
      </section>

      <ChatWidget />
    </main>
  );
}
