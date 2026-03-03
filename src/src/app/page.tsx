"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, Server, Zap, CheckCircle2, Scale, GraduationCap, Building2, Database, Workflow, LineChart, Lock, MessageCircle, Linkedin } from "lucide-react";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-violet-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            Innovate e Solve <span className="text-blue-500">IA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
          </div>
          <a href="https://wa.me/5598988646888" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> Falar com Especialista
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-8"
          >
            <Zap className="w-3 h-3" />
            <span>O Futuro da Automação Chegou</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Sua Empresa, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              Transformada em AI-First.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Não perca tempo com automações rasas. Nós construímos a Infraestrutura de IA completa e implementamos Squads Autônomos que escalam a produtividade da sua empresa de ponta a ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/5598988646888" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> Iniciar Projeto
            </a>
            <a href="#solucoes" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all flex items-center justify-center gap-2">
              Ver Soluções <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section (Cost of Inaction) */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua operação manual está <span className="text-red-500">vazando dinheiro.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Atendimento lento deixa dinheiro na mesa. Equipes sobrecarregadas apagam incêndios em vez de focar no estratégico. Pilotar a empresa no "achismo" custa caro.
            </p>
            <ul className="space-y-4">
              {[
                'Processos dependentes de pessoas para tarefas repetitivas.',
                'Leads esfriando por falta de qualificação instantânea.',
                'Silos de dados que impedem visão 360º do negócio.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1 text-red-500 font-bold">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8 rounded-3xl border border-red-500/10 bg-red-500/5">
            <h3 className="text-xl font-bold mb-4 text-white">Não vendemos Chatbots. Construímos Operações.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A diferença entre um bot tradicional e um ecossistema AI-First é estrutural. Nós mapeamos seus gargalos comerciais e operacionais, criando pipelines de dados que transformam sua empresa.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-white/80">
              <div className="flex-1 p-4 rounded-xl bg-black/50 border border-white/5 text-center">
                Caos Operacional
              </div>
              <ArrowRight className="text-blue-500" />
              <div className="flex-1 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-center">
                Escala AI-First
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="solucoes" className="py-24 px-6 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Jornada AI-First</h2>
            <p className="text-gray-400">
              O roadmap exato para deixar de operar no modelo tradicional e escalar com Inteligência Artificial no centro de todas as decisões.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Squads Autônomos (Multi-Agent)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Não é apenas um chatbot. Nós implantamos ecossistemas onde agentes especialistas (Analistas, Arquitetos, QA) trabalham juntos em fluxos complexos.
              </p>
              <ul className="space-y-2">
                {['Agentes Especialistas', 'Tomada de Decisão', 'Operação 24/7'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Aplicações Web & Landing Pages</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Sites de alta performance projetados para conversão e arquitetura premium. Interfaces que combinam estética "Wow!" com velocidade absurda.
              </p>
              <ul className="space-y-2">
                {['Alta Conversão', 'Design System Premium', 'SEO Otimizado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-violet-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infraestrutura IA (LLMOps)</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A espinha dorsal tecnológica. Engenharia de dados, conectores empresariais e sistemas baseados em LLM com conformidade total e segurança de ponta.
              </p>
              <ul className="space-y-2">
                {['Integração de Sistemas', 'Governança (LGPD)', 'Escalabilidade'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries / Niches Section */}
      <section id="nichos" className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dominamos Setores Complexos</h2>
            <p className="text-gray-400">
              Nossa infraestrutura LLMOps é desenhada para nichos onde segurança (LGPD), precisão documental e escalabilidade não são opcionais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Industry 1: Jurídico */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] relative group"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Escritórios & LegalTech</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cockpits Jurídicos com RAG avançado usando chunking semântico (Artigos/Incisos). Acelere a busca de jurisprudência e análise de petições com Sigilo Total (arquitetura Zero Trust e proteção contra vazamentos).
              </p>
            </motion.div>

            {/* Industry 2: Educação */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] relative group"
            >
              <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">EdTechs & Universidades</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mentores Autônomos 24/7 conectados às suas apostilas e bases de conhecimento. Retenção radical de alunos, com perfis anonimizados antes do treinamento para garantia total da LGPD.
              </p>
            </motion.div>

            {/* Industry 3: Negócios */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] relative group"
            >
              <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Imobiliárias & B2B</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Esqueça os "leads que esfriam". Squads comerciais que qualificam clientes no catálogo em tempo real, conectam-se direto ao seu CRM e escalam o faturamento eliminando gargalos de Backoffice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data to Revenue & Compliance Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformamos Dados em Receita <br className="hidden md:block" />(e Segurança em Vantagem Competitiva)</h2>
            <p className="text-gray-400">
              Na Innovate e Solve IA, nossa engenharia não foca só em eficiência algorítmica, mas em construir infraestruturas de lucro e compliance absoluto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-tr from-white/[0.02] to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Server className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Pipelines & Business Intelligence</h3>
              <p className="text-gray-400 mb-6 relative z-10">
                Construímos a fundação para sua empresa escalar com pipelines de dados que rastreiam, processam e transformam informações brutas em insights preditivos.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Decisões baseadas em dados (não achismos)</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Qualificação automática de oportunidades</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Dashboards operacionais em tempo real</li>
              </ul>
            </div>

            <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-tr from-white/[0.02] to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Scale className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Trust & Compliance (LGPD/CVM)</h3>
              <p className="text-gray-400 mb-6 relative z-10">
                Adequação completa para nichos regulados. Nossos LLMOps operam sob os mais rígidos padrões de segurança globais.
              </p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Anonimização rigorosa de dados sensíveis</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-violet-500" /> RAG isolado e seguro para documentos legais</li>
                <li className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Infraestrutura sem vazamento de prompt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI-First OS Architectures Section */}
      <section id="ecossistema" className="py-24 px-6 border-t border-white/5 relative bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O que é um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">AI-First OS</span>?</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Esqueça chatbots que apenas respondem perguntas. Nós construímos o "Sistema Operacional" da sua empresa: uma infraestrutura central que orquestra seus dados, operações e interações com o cliente.
            </p>
          </div>

          <div className="space-y-12">
            {/* Jurídico OS */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-[#050505] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-colors" />
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="md:col-span-1 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 self-start">
                    LegalTech
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Cockpit Jurídico OS</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Arquitetura Zero Trust para escritórios. O Agente não apenas pesquisa; ele cruza os fatos do cliente com a jurisprudência interna através de uma pipeline de dados 100% isolada e segura.
                  </p>
                </div>
                <div className="md:col-span-2 grid sm:grid-cols-3 gap-4 items-center">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                    <Database className="text-blue-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">1. RAG Privado</h4>
                    <p className="text-xs text-gray-400">Ingestão de 10.000+ peças processuais no seu banco vetorial privado. Seus dados nunca treinam LLMs públicos.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <Workflow className="text-blue-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">2. Esboço Autônomo</h4>
                    <p className="text-xs text-gray-400">O Squad analisa o caso inicial, seleciona a melhor estratégia do seu arquivo e rascunha a petição em segundos.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <Lock className="text-blue-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">3. Revisão (Human)</h4>
                    <p className="text-xs text-gray-400">O LLM não peticiona. Ele entrega o material pronto no seu ERP para que o Advogado apenas aprove e assine.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B OS */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-[#050505] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full group-hover:bg-green-500/10 transition-colors" />
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="md:col-span-1 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider mb-4 self-start">
                    B2B & Enterprise
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Revenue Pipeline OS</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Infraestrutura orientada a faturamento. Eliminamos a latência entre captura do lead, qualificação e agendamento comercial.
                  </p>
                </div>
                <div className="md:col-span-2 grid sm:grid-cols-3 gap-4 items-center">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                    <Database className="text-green-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">1. Captura</h4>
                    <p className="text-xs text-gray-400">Landing Pages otimizadas e canais de WhatsApp recolhendo dores e dados primários do lead.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <Workflow className="text-green-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">2. Qualificação IA</h4>
                    <p className="text-xs text-gray-400">Agente qualifica intenção com catálogo, integra ao CRM da empresa e faz agendamento (Zapier/n8n).</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <LineChart className="text-green-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">3. Analytics & BI</h4>
                    <p className="text-xs text-gray-400">Dashboards em tempo real para o gestor: previsão de receita, retenção no funil e ROI de marketing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Edu OS */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 bg-[#050505] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-[80px] rounded-full group-hover:bg-violet-500/10 transition-colors" />
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="md:col-span-1 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4 self-start">
                    Educação
                  </div>
                  <h3 className="text-2xl font-bold mb-3">EdTech Mentor OS</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sua plataforma de curso transformada em um ecossistema inteligente de ensino, focado na retenção radical do aluno.
                  </p>
                </div>
                <div className="md:col-span-2 grid sm:grid-cols-3 gap-4 items-center">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5">
                    <Database className="text-violet-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">1. Ingestão Dinâmica</h4>
                    <p className="text-xs text-gray-400">Vetorização automática de todas as apostilas e vídeos enviadas na plataforma, respeitando Direitos Autorais.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <Workflow className="text-violet-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">2. Perfil Individual</h4>
                    <p className="text-xs text-gray-400">Sistema rastreia desempenho individual. Anonimização via LGPD para análises comportamentais preditivas.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-white/5 border border-white/5 relative">
                    <ArrowRight className="absolute -left-5 top-1/2 -translate-y-1/2 text-gray-700 hidden sm:block w-4 h-4" />
                    <Bot className="text-violet-400 w-6 h-6 mb-3" />
                    <h4 className="font-bold text-sm mb-2">3. Tutor 24/7</h4>
                    <p className="text-xs text-gray-400">Respostas contextuais ao momento do módulo do aluno. Método socrático para ensinar em vez de só dar a resposta.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-xl tracking-tighter">
            Innovate e Solve <span className="text-blue-500">IA</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="https://www.linkedin.com/in/diegowilliam-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            <a href="https://wa.me/5598988646888" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4" /> (98) 98864-6888</a>
          </div>
          <div className="text-sm text-gray-600">
            © 2026 Diego William. All rights reserved.
          </div>
        </div>
      </footer>
      <ChatWidget />
    </main>
  );
}
