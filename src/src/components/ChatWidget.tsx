"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, ArrowRight, Send } from "lucide-react";

type Message = {
    id: string;
    sender: "bot" | "user";
    text: string;
    isOptions?: boolean;
    options?: string[];
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            sender: "bot",
            text: "Olá! Sou o Orion, Assistente Especialista da Innovate e Solve IA. Posso fazer uma triagem rápida para direcionar você ao engenheiro certo?",
            isOptions: true,
            options: ["Sim, vamos lá!", "Só estou dando uma olhada."],
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleOptionClick = (option: string) => {
        // Add user message
        const newMessage: Message = { id: Date.now().toString(), sender: "user", text: option };
        setMessages((prev) => [...prev.map(m => m.isOptions ? { ...m, isOptions: false } : m), newMessage]);

        setIsTyping(true);

        // Simulate Bot response based on option
        setTimeout(() => {
            setIsTyping(false);

            if (option === "Sim, vamos lá!") {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now().toString(),
                        sender: "bot",
                        text: "Perfeito. Qual o principal desafio operacional da sua empresa hoje?",
                        isOptions: true,
                        options: ["Perda de Leads / Latência", "Gargalo no Backoffice (Jurídico/Docs)", "Escalabilidade / Retenção"],
                    },
                ]);
            } else if (option === "Só estou dando uma olhada.") {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now().toString(),
                        sender: "bot",
                        text: "Sem problemas! Navegue pela nossa arquitetura AI-First. Se quiser escalar sua operação com IA, é só me chamar.",
                    },
                ]);
            } else if (["Perda de Leads / Latência", "Gargalo no Backoffice (Jurídico/Docs)", "Escalabilidade / Retenção"].includes(option)) {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now().toString(),
                        sender: "bot",
                        text: `Excelente. Entendi que o foco é em "${option}". O Diego William, nosso Tech Lead, tem o roadmap exato para resolver isso construindo um Squad Autônomo.`,
                    },
                    {
                        id: (Date.now() + 1).toString(),
                        sender: "bot",
                        text: "Vou te transferir. Clique no botão abaixo para ir direto para o WhatsApp dele com esse contexto já repassado.",
                        isOptions: true,
                        options: ["Falar com Especialista agora"],
                    }
                ]);
            } else if (option === "Falar com Especialista agora") {
                window.open("https://wa.me/5598988646888?text=Olá Diego, falei com seu Agente Orion e gostaria de falar sobre Infraestrutura de IA para meu negócio.", "_blank");
            }

        }, 1500);
    };

    return (
        <>
            {/* Floating Action Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 z-50 transition-colors"
                    >
                        <MessageSquare className="w-6 h-6" />
                        {/* Online Indicator */}
                        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center relative">
                                    <Bot className="w-5 h-5 text-blue-400" />
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a0a0a] rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-white">Orion (IA)</h3>
                                    <p className="text-xs text-blue-400">SDR Specialist</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                                ? "bg-blue-600 text-white rounded-tr-sm"
                                                : "bg-white/5 text-gray-200 border border-white/5 rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Options (Only show for the last bot message if it has options) */}
                                    {msg.isOptions && msg.options && (
                                        <div className="flex flex-col gap-2 mt-3 w-full max-w-[85%] items-start">
                                            {msg.options.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleOptionClick(option)}
                                                    className="w-full text-left px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-between group"
                                                >
                                                    {option}
                                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-start">
                                    <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-4 flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Placeholder Area (Non-functional, just for UI demo realism) */}
                        <div className="p-4 border-t border-white/5 bg-white/[0.01]">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Selecione uma opção acima..."
                                    disabled
                                    className="w-full bg-black border border-white/10 rounded-full px-4 py-3 text-sm text-gray-400 cursor-not-allowed focus:outline-none"
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 rounded-full flex items-center justify-center">
                                    <Send className="w-4 h-4 text-gray-500" />
                                </div>
                            </div>
                            <p className="text-[10px] text-center text-gray-600 mt-2">
                                Powered by Innovate e Solve IA (Demo)
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
