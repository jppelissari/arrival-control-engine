import React from 'react';
import { 
  ExternalLink, LayoutTemplate, Database, Cpu, ArrowRight, ArrowDown, 
  Lock, Server, Activity, ShieldCheck, AlertOctagon, Code, Clock, User, Eye 
} from 'lucide-react';

// Live Components
import Dashboard from './Dashboard';
import DecisionScreen from './DecisionScreen';
import ResolutionSummary from './ResolutionSummary';
import { MOCK_CASES } from '../data/mockData';

// Helper for UI Scaling
const LivingAsset = ({ children, height = "h-[500px]", scale = "scale-[0.75]" }) => (
  <div className={`w-full ${height} bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-inner flex justify-center relative mt-10 mb-8`}>
     {/* MacOS style fake window bar */}
     <div className="absolute top-0 left-0 w-full h-8 bg-slate-200 flex items-center px-4 border-b border-slate-300 z-50">
        <div className="flex space-x-2">
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        </div>
     </div>
     {/* The live wrapper */}
     <div className={`w-[133%] origin-top ${scale} pointer-events-none mt-8`}>
        {children}
     </div>
  </div>
);

// Native Code Diagram: Data-to-UI Architecture Mapping
const DataMappingDiagram = () => (
  <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-8 my-10 shadow-sm flex flex-col md:flex-row items-center justify-between text-sm font-medium">
     <div className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-lg shadow-sm w-48 text-center text-slate-700">
        <Database size={28} className="text-slate-400 mb-3" />
        <span className="font-bold mb-1">Supplier API</span>
        <span className="text-xs text-slate-500">JSON Payload</span>
     </div>
     <div className="flex-1 flex justify-center text-blue-500 max-md:my-4 md:-mx-4 z-10 hidden md:block text-center border-t-2 border-dashed border-blue-300 w-full relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
           State Contract
        </div>
     </div>
     <ArrowRight className="hidden md:block text-blue-400 mx-2" />
     <ArrowDown className="md:hidden text-blue-400 my-2" />
     <div className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-lg shadow-md w-48 text-center text-white">
        <Cpu size={28} className="text-blue-500 mb-3" />
        <span className="font-bold mb-1">Engine Core</span>
        <span className="text-xs text-slate-400">React + Vite State</span>
     </div>
     <div className="flex-1 flex justify-center text-emerald-500 max-md:my-4 md:-mx-4 z-10 hidden md:block text-center border-t-2 border-dashed border-emerald-300 w-full relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200">
           Props Inject
        </div>
     </div>
     <ArrowRight className="hidden md:block text-emerald-400 mx-2" />
     <ArrowDown className="md:hidden text-emerald-400 my-2" />
     <div className="flex flex-col items-center p-6 bg-white border border-emerald-200 rounded-lg shadow-sm w-48 text-center text-slate-700">
        <LayoutTemplate size={28} className="text-emerald-500 mb-3" />
        <span className="font-bold mb-1">Silent UI</span>
        <span className="text-xs text-slate-500">Rendered Components</span>
     </div>
  </div>
);

// Native Code Diagram: Strict Data-to-UI Execution
const StrictContractDiagram = () => (
  <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-8 my-8 shadow-xl flex flex-col md:flex-row items-center justify-between font-mono text-xs">
    <div className="bg-slate-950 p-6 rounded-lg text-emerald-400 w-full md:w-5/12 border border-slate-800">
      <span className="text-slate-500">// Payload Injetado</span><br/>
      <span className="text-blue-400">const</span> casePayload = {'{'}<br/>
      &nbsp;&nbsp;<span className="text-slate-300">risk_band:</span> <span className="text-amber-300">"critical"</span>,<br/>
      &nbsp;&nbsp;<span className="text-slate-300">time_to_failure:</span> <span className="text-amber-300">"12m"</span><br/>
      {'}'};
    </div>
    <div className="my-6 md:my-0 flex justify-center">
      <ArrowRight size={32} className="text-slate-600 md:rotate-0 rotate-90" />
    </div>
    <div className="bg-white p-6 rounded-lg shadow-inner border border-slate-200 w-full md:w-5/12 flex flex-col items-center justify-center space-y-4">
      <div className="text-center w-full">
         <span className="text-slate-400 uppercase tracking-widest text-[10px] font-bold font-sans block mb-2">Interface Renderizada</span>
         <div className="inline-flex items-center text-sm font-sans font-bold text-red-800 bg-red-50 px-3 py-1.5 rounded-md border border-red-200 shadow-sm w-full justify-center">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Critical Intervention
         </div>
      </div>
      <div className="flex items-center justify-center text-red-600 font-sans font-bold text-sm bg-red-50/50 w-full py-2 rounded border border-red-100">
         <Clock size={14} className="mr-1.5" /> TTF: 12m
      </div>
    </div>
  </div>
);

// Native Code Diagram: State Machine Topology
const StateMachineDiagram = () => (
  <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 my-10 shadow-xl overflow-hidden relative">
     <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Activity size={180} />
     </div>
     <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">State Machine Topology</h3>
     
     <div className="flex flex-col items-center w-full space-y-6">
        <div className="flex justify-center w-full relative">
           <div className="bg-slate-800 border-2 border-emerald-500 text-white px-6 py-3 rounded-lg shadow-md w-48 text-center z-10">
              <span className="block text-emerald-400 font-mono text-xs mb-1">STATE 0</span>
              <span className="font-bold">Stable (No Noise)</span>
           </div>
        </div>
        
        <div className="flex flex-col items-center w-full relative">
           <div className="h-6 w-0.5 bg-slate-700 mb-2"></div>
           <ArrowDown size={16} className="text-slate-600 mb-2" />
           <div className="bg-slate-800 border-2 border-blue-500 text-white px-6 py-3 rounded-lg shadow-md w-48 text-center z-10">
              <span className="block text-blue-400 font-mono text-xs mb-1">STATE 2</span>
              <span className="font-bold">Decision Required</span>
           </div>
        </div>

        <div className="w-64 h-8 border-t-2 border-x-2 border-slate-700 rounded-t-xl mb-[-4px]"></div>

        <div className="flex justify-between w-full max-w-sm px-4">
           {/* Left Branch */}
           <div className="flex flex-col items-center">
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-2 border-purple-500 text-white px-4 py-3 rounded-lg shadow-md w-40 text-center z-10">
                 <span className="block text-purple-400 font-mono text-xs mb-1">STATE 4</span>
                 <span className="font-bold text-sm">Automated Execution</span>
              </div>
              <div className="h-6 w-0.5 bg-slate-700 my-2"></div>
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-2 border-emerald-500 text-white px-4 py-3 rounded-lg shadow-md w-40 text-center z-10 flex flex-col items-center">
                 <ShieldCheck size={16} className="text-emerald-400 mb-1" />
                 <span className="block text-emerald-400 font-mono text-xs mb-1">STATE 5</span>
                 <span className="font-bold text-sm">Case Closed</span>
              </div>
           </div>

           {/* Right Branch */}
           <div className="flex flex-col items-center">
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-2 border-amber-600 text-white px-4 py-3 rounded-lg shadow-md w-40 text-center z-10 flex flex-col items-center">
                 <AlertOctagon size={16} className="text-amber-500 mb-1" />
                 <span className="block text-amber-500 font-mono text-xs mb-1">STATE 6</span>
                 <span className="font-bold text-sm">Contingency / Fallback</span>
              </div>
           </div>
        </div>
     </div>
  </div>
);

// Native Code Diagram: Swimlane (Concurrency Lock)
const SwimlaneDiagram = () => (
  <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-8 my-10 shadow-sm font-sans relative overflow-hidden">
     <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Concurrency State Flow</h3>
     
     <div className="flex flex-col space-y-6">
        {/* Row 1: Operaor A */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full">
           <div className="flex items-center w-48 mb-4 md:mb-0">
              <div className="bg-slate-200 p-2 rounded-full mr-3 text-slate-500">
                 <User size={18} />
              </div>
              <span className="text-sm font-bold text-slate-700">Operador A (Sarah)</span>
           </div>
           
           <div className="flex-1 w-full bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex items-center justify-between z-10 relative">
              <div className="text-xs font-bold text-slate-500 mr-4">Ativo</div>
              <div className="flex-1 flex items-center justify-center border-t-2 border-dashed border-blue-300 mx-2 text-blue-600 text-xs font-bold py-1">Acessa ARR-1050</div>
              <div className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold shadow-sm flex items-center">
                 <Lock size={12} className="mr-1" /> Active Edit Lock
              </div>
           </div>
        </div>

        <div className="w-0.5 h-6 bg-slate-300 absolute left-[calc(140px)] md:left-56 bottom-24 top-24 -z-10 hidden md:block"></div>

        {/* Row 2: Operator B */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full pt-4 md:pt-0">
           <div className="flex items-center w-48 mb-4 md:mb-0">
              <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600 border border-blue-200">
                 <Eye size={18} />
              </div>
              <span className="text-sm font-bold text-slate-900">Operador B (Você)</span>
           </div>
           
           <div className="flex-1 w-full bg-slate-100 border border-slate-200 p-4 rounded-lg flex items-center justify-between z-10 opacity-70">
              <div className="text-xs font-bold text-slate-500 mr-4">Concorrente</div>
              <div className="flex-1 flex items-center justify-center border-t-2 border-dashed border-amber-300 mx-2 text-amber-600 text-xs font-bold py-1">Gatilho de Renderização</div>
              <div className="bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1.5 rounded text-xs font-bold shadow-sm flex items-center">
                 <ShieldCheck size={12} className="mr-1" /> Rebaixa para Read-Only
              </div>
           </div>
        </div>
     </div>
  </div>
);


const CaseStudyPage = ({ onLaunchPrototype }) => {
  return (
    <div className="bg-[#f8fafc] w-full min-h-screen text-slate-800 font-sans selection:bg-blue-100 pb-24">
      {/* Decorative Header Background */}
      <div className="h-96 w-full bg-slate-900 absolute top-0 left-0 -z-10" />
      
      <main className="max-w-[900px] mx-auto px-6 pt-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <div className="bg-blue-600/20 text-blue-300 uppercase tracking-widest text-[10px] font-bold px-3 py-1 rounded inline-block mb-6 border border-blue-500/30">
            UX + Frontend Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
            The Arrival Control Engine
          </h1>
          <p className="text-lg text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Como aplicamos o conceito de "Silent UI" e o Design Orientado a Estados para transformar uma interface logística de alta tensão em uma operação isenta de erro humano.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onLaunchPrototype}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg flex items-center transition-all w-full sm:w-auto justify-center"
            >
              <LayoutTemplate size={20} className="mr-2" />
              Run Full Live App
            </button>
            <a 
              href="https://github.com" 
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg flex items-center border border-slate-700 transition-all w-full sm:w-auto justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              View Deploy Metrics
            </a>
          </div>
        </header>

        {/* Content Wrapper */}
        <article className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-14 space-y-16">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">1. O Desafio: Entropia de Dados e o "Silent UI"</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
              <p className="mb-4">
                Em manobras logísticas de altíssimo padrão, a abundância de dados gera fadiga fatal. Operadores perdem o controle sistêmico ao dissecar tabelas massivas para caçar anomalias operacionais. O projeto <em>Arrival Control Engine</em> abortou esse modelo nativo e abraçou estritamente o <strong>Silent UI (Gerenciamento por Exceções)</strong>.
              </p>
              <p>
                Se a automação detém o controle sadio das integrações (APIs de Transfer/Hotéis), o sistema se recusa a emitir ruído visual. Ele só faz uso da pirâmide de cores secundárias para alertar e comandar a cognição humana apenas no limite exato de uma ruptura previsível.
              </p>
            </div>
            
            <DataMappingDiagram />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">2. A Jornada UX Baseada em Estados (State Machine)</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mb-6">
              <p>
                Abandonamos a abordagem centrada em "Telas Visuais". O Layout é estritamente escravo do seu Payload. Este é o princípio de  <em>Contracts Dictating UI</em>. Se o tempo da falha de um transfer se encolhe para um limite perigoso, não é o operador que busca a solução na tela. É o React state que empura a gravidade para cima mudando de S0 para S3.
              </p>
            </div>

            {/* Injeção Nova: O Diagrama de Dados pra Componentes Reais */}
            <StrictContractDiagram />

            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mt-10">
              <p>Esta disciplina rigorosa nos permitiu orquestrar todo o ecossistema baseando as rotinas na matriz sequencial da State Machine local do motor tático de incidentes operacionais, variando organicamente da passividade tática até o bloqueio emergencial.</p>
            </div>

            <StateMachineDiagram />

            <div className="space-y-12 mt-12">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">S0: The Calm State (Zero Friction)</h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg">Quando os voos operam limpos e no horário, o painel central assume cores neutras com status de esmeralda sólida. A omissão sumária de call-to-actions prova de imediato que nenhuma intervenção manual deve ser feita.</p>
                <LivingAsset height="h-[300px]">
                   <Dashboard 
                      onSelectCase={() => {}} 
                      onLockWarning={() => {}} 
                   />
                </LivingAsset>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">S2: Decision Required (The Analytical Recommendation)</h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg mb-4">No caso de ruptura de limite seguro, o motor tático não apenas avisa a falha, mas oferece o plano calculado como resposta primária (Rebooking Path). O Design System emprega aqui o "Slow UX": a fricção proposital ao clicar e segurar ("Hold to Confirm") para inibir violações sob sobrecarga de adrenalina.</p>
                <LivingAsset height="h-[600px]">
                   <DecisionScreen 
                      caseData={MOCK_CASES[0]} 
                      onConfirm={() => {}} 
                      onBack={() => {}} 
                   />
                </LivingAsset>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">S5: Resolution Post-Mortem</h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg">Após o tempo imposto em `S4 - Action in Progress`, a anomalia é devorada matematicamente pela automação. As permissões de gravação fecham-se garantindo a irreversencialidade do ato de salvamento tático logístico. O operador se livra em instantes do nó original.</p>
                <LivingAsset height="h-[600px]">
                   <ResolutionSummary 
                      caseData={MOCK_CASES[0]} 
                      onBack={() => {}} 
                   />
                </LivingAsset>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">3. Concorrência e Fallback (Lock State)</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mb-8">
              <p>Operações simultâneas exigem mais do que telas bonitas; exigem topologia defensiva contra colisões. Construímos o modelo "Read-only Barrier": se um Operador assume o payload do painel, a camada vizinha converte o mesmo nó em um layout visual inoperante.</p>
            </div>
            
            <SwimlaneDiagram />

            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mt-6 mb-4">
               <p>Abaixo está o componente operando nativamente essa limitação visual em caso bloqueado (Ver a linha David Kim):</p>
            </div>

            <LivingAsset height="h-[250px]" scale="scale-100 mt-2">
                 {/* Exibindo especificamente a linha com Lock do Dashboard */}
                 <div className="w-full max-w-[1200px] mx-auto p-4 bg-amber-50 border-l-4 border-amber-500 border-y-amber-200 border-r-amber-200 rounded-xl shadow-sm flex items-center mb-6">
                    <Lock size={20} className="text-amber-600 mr-3" />
                    <div>
                      <h2 className="text-sm font-bold text-amber-900">Read-Only Mode Active</h2>
                      <p className="text-xs text-amber-700 font-medium">This case is actively locked by Sarah J. Request takeover if necessary.</p>
                    </div>
                  </div>
                 <div className="w-full max-w-[1200px] mx-auto p-4 flex items-center justify-between bg-slate-50 opacity-80 shadow-sm border border-slate-200 border-l-4 border-l-amber-400 rounded-xl pointer-events-none">
                    <div className="w-2/12"><span className="text-sm font-bold text-slate-900 block">David Kim</span><span className="text-[11px] text-slate-500 font-mono">ARR-1050</span></div>
                    <div className="w-3/12"><span className="text-xs font-bold text-blue-800">● Decision Required</span></div>
                    <div className="w-2/12 text-sm text-amber-700 font-bold flex"><Lock size={14} className="mr-1 mt-0.5"/> Locked (Sarah J.)</div>
                    <div className="w-2/12 text-right"><span className="px-4 py-2 text-xs font-bold text-amber-700 bg-white border border-amber-200 rounded-lg">Request</span></div>
                 </div>
            </LivingAsset>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">4. A Engenharia do Design (Tech Stack)</h2>
             <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 shadow-xl">
               <p className="text-slate-300 mb-6">
                  Design Systems verdadeiramente escaláveis repudiam a entrega passiva de Figmas paralisados. Este projeto é uma engrenagem inteiramente codificada e auto-hospedável:
               </p>
               <ul className="space-y-4 list-none p-0 m-0">
                  <li className="flex items-start">
                     <Code className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                     <div>
                        <strong className="text-blue-300 font-bold block mb-1">React + Vite (Componentização Isolada)</strong>
                        <span className="text-sm text-slate-400">Implementação bruta de governança de estados locais (`App.jsx`) garantindo trocas zero-latency usando a engine ultra veloz do Vite. Nenhum recarregamento de layout interrompe a experiência.</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <LayoutTemplate className="text-emerald-400 mr-3 mt-1 flex-shrink-0" size={20} />
                     <div>
                        <strong className="text-emerald-300 font-bold block mb-1">Tailwind CSS + Lucide Icons</strong>
                        <span className="text-sm text-slate-400">Rigor estético absoluto com utilitários. Não há variação randômica de paddings: uma grid semântica sólida embasa calmaria cognitiva em todas as renderizações de "Living Assets".</span>
                     </div>
                  </li>
                  <li className="flex items-start">
                     <Server className="text-indigo-400 mr-3 mt-1 flex-shrink-0" size={20} />
                     <div>
                        <strong className="text-indigo-300 font-bold block mb-1">Integração de DevOps (CI/CD Automático)</strong>
                        <span className="text-sm text-slate-400">Todo git commit em `main` abastece ativamente o pipe que acorda os servidores Vercel, montando pipelines robustos que servem atualizações automáticas via edge-network instantaneamente.</span>
                     </div>
                  </li>
               </ul>
             </div>
          </section>

          <section className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">5. Conclusão e Impacto (The So What)</h2>
            <div className="prose prose-slate max-w-none text-slate-700 font-medium leading-relaxed">
              <p>
                O sucesso do Arrival Control Engine reside em mudar o eixo focal da plataforma: transformamos brutalmente um "quadro estático de leitura logística" em um <strong>Motor de Resolução Guiado.</strong>
              </p>
              <p>
                Ao apagar a estática sistêmica no instante zero (garantindo os preceitos do S0) e orquestrar decisões vitais que blindam o operador mediante interações cinéticas contra cliques acidentais e arquitetura multi-player defensiva livre de colisões, redefinimos inteiramente o modelo de alta-tensão em operações ultra-premium. O impacto não é sobre aglomerar informações, é pura predição e mitigação tátil do esforço manual humano.
              </p>
            </div>
          </section>

        </article>

        <footer className="py-12 text-center text-sm font-semibold text-slate-400">
          Case Study desenvolvido e documentado de ponta-a-ponta via Engrenagem Autônoma de Design de Produto.
        </footer>
      </main>
    </div>
  );
};

export default CaseStudyPage;
