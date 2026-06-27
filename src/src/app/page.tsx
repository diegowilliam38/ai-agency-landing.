"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";
import { 
  ArrowRight, Bot, Code, Server, Zap, CheckCircle2, 
  Scale, GraduationCap, Building2, Database, Workflow, 
  LineChart, Lock, MessageCircle, Linkedin, ChevronDown, ChevronUp, AlertTriangle, Sparkles, X, Check 
} from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";

// --- D3 Animations Hooks ---

function useCapaParticles() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    const stage = stageRef.current;
    stage.innerHTML = "";
    
    const W = stage.clientWidth;
    const H = stage.clientHeight;
    
    const svg = d3.select(stage).append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('width', '100%')
      .attr('height', '100%');
      
    const cx = W / 2, cy = H / 2;
    const numParticles = 40;
    const particles = d3.range(numParticles).map(() => ({
        r: 250 + Math.random() * Math.min(W, H) * 0.4,
        angle: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.003,
        size: 1 + Math.random() * 3
    }));
    
    const PRIMARY = getComputedStyle(document.documentElement).getPropertyValue('--mira-primary').trim() || "#3b82f6";
    
    const dots = svg.selectAll('circle').data(particles).join('circle')
        .attr('r', d => d.size).attr('fill', PRIMARY).attr('opacity', 0.5);
    
    const timer = d3.timer(() => {
        dots.attr('cx', d => { d.angle += d.speed; return cx + Math.cos(d.angle) * d.r; })
            .attr('cy', d => cy + Math.sin(d.angle) * d.r * 0.5);
    });

    return () => timer.stop();
  }, []);

  return stageRef;
}

function useFluxoAnimation(colorPrimary: string, colorSecondary: string) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;
    const stage = stageRef.current;
    stage.innerHTML = "";

    const W = 1000, H = 300;
    const svg = d3.select(stage).append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('width', '100%')
      .attr('height', '100%');
    
    const hubs = [
        {x: 200, y: H/2, label: "Ingestão & RAG", color: colorPrimary},
        {x: 500, y: H/2, label: "Processamento LLM", color: colorSecondary},
        {x: 800, y: H/2 - 60, label: "Aplicação Final 1", color: colorPrimary},
        {x: 800, y: H/2 + 60, label: "Analytics / BI", color: colorSecondary} 
    ];

    svg.append('path').attr('d', `M 200 ${H/2} L 500 ${H/2}`).attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', 2).attr('fill', 'none');
    svg.append('path').attr('d', `M 500 ${H/2} L 800 ${H/2 - 60}`).attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', 2).attr('fill', 'none');
    svg.append('path').attr('d', `M 500 ${H/2} L 800 ${H/2 + 60}`).attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', 2).attr('fill', 'none');

    const nodes = svg.selectAll('g.hub').data(hubs).join('g').attr('transform', d => `translate(${d.x},${d.y})`);
    nodes.append('circle').attr('r', 40).attr('fill', d => d.color).attr('opacity', 0.1).attr('stroke', d => d.color).attr('stroke-width', 2);
    nodes.append('circle').attr('r', 40).attr('fill', 'none').attr('stroke', d => d.color).attr('stroke-width', 1).style('filter', 'blur(4px)');
    
    let particleTimeouts: NodeJS.Timeout[] = [];

    function sendParticle(pathDef: string, color: string) {
        if (!stageRef.current) return;
        const pathNode = svg.append('path').attr('d', pathDef).style('display', 'none').node();
        if (!pathNode) return;
        const particle = svg.append('circle').attr('r', 5).attr('fill', color).style('filter', `drop-shadow(0 0 6px ${color})`);
        
        particle.transition().duration(2000).ease(d3.easeCubicInOut)
            .attrTween('transform', function() {
                const l = pathNode.getTotalLength();
                return function(t) {
                    const p = pathNode.getPointAtLength(t * l);
                    return `translate(${p.x},${p.y})`;
                };
            })
            .on('end', () => {
                particle.remove();
                d3.select(pathNode).remove();
                if (stageRef.current) {
                  const t = setTimeout(() => sendParticle(pathDef, color), Math.random() * 1000 + 500);
                  particleTimeouts.push(t);
                }
            });
    }

    sendParticle(`M 200 ${H/2} L 500 ${H/2}`, colorPrimary);
    const t1 = setTimeout(() => sendParticle(`M 200 ${H/2} L 500 ${H/2}`, colorPrimary), 1000);
    sendParticle(`M 500 ${H/2} L 800 ${H/2 - 60}`, colorPrimary);
    sendParticle(`M 500 ${H/2} L 800 ${H/2 + 60}`, colorSecondary);
    particleTimeouts.push(t1);

    const pulseInterval = setInterval(() => {
        nodes.select('circle').transition().duration(800).attr('r', 45).attr('opacity', 0.2)
            .transition().duration(800).attr('r', 40).attr('opacity', 0.1);
    }, 1600);

    return () => {
      clearInterval(pulseInterval);
      particleTimeouts.forEach(clearTimeout);
    };
  }, [colorPrimary, colorSecondary]);

  return stageRef;
}

export default function Home() {
  const capaStageRef = useCapaParticles();
  const fluxoLegalRef = useFluxoAnimation("#3b82f6", "#3b82f6"); // Blue
  const fluxoB2BRef = useFluxoAnimation("#10b981", "#10b981"); // Green
  const fluxoEduRef = useFluxoAnimation("#8b5cf6", "#8b5cf6"); // Violet

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
        <div ref={capaStageRef} className="absolute inset-0 pointer-events-none z-0" />
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
          className="mira-glass-card w-full max-w-5xl p-8 relative"
        >
            <div ref={fluxoLegalRef} className="mira-anim-stage" style={{aspectRatio: '21/9'}}></div>
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
          className="mira-glass-card w-full max-w-5xl p-8 relative"
        >
            <div ref={fluxoB2BRef} className="mira-anim-stage" style={{aspectRatio: '21/9'}}></div>
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
          className="mira-glass-card w-full max-w-5xl p-8 relative"
        >
            <div ref={fluxoEduRef} className="mira-anim-stage" style={{aspectRatio: '21/9'}}></div>
        </motion.div>
      </section>

      {/* SLIDE 8: CTA */}
      <section ref={el => {sectionsRef.current[7] = el}} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
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
