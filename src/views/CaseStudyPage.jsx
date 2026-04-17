import React from 'react';
import { ExternalLink, LayoutTemplate, Database, Cpu, ArrowRight, ArrowDown, Lock, Server, Activity, ShieldCheck, AlertOctagon } from 'lucide-react';

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

// Native Code Diagram: Data-to-UI
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

// Native Code Diagram: State Machine
const StateMachineDiagram = () => (
  <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 my-10 shadow-xl overflow-hidden relative">
     <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Activity size={180} />
     </div>
     <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">State Machine Topology</h3>
     
     <div className="flex flex-col items-center w-full space-y-6">
        {/* Row 1 */}
        <div className="flex justify-center w-full relative">
           <div className="bg-slate-800 border-2 border-emerald-500 text-white px-6 py-3 rounded-lg shadow-md w-48 text-center z-10">
              <span className="block text-emerald-400 font-mono text-xs mb-1">STATE 0</span>
              <span className="font-bold">Stable (No Noise)</span>
           </div>
        </div>
        
        {/* Row 2 */}
        <div className="flex flex-col items-center w-full relative">
           <div className="h-6 w-0.5 bg-slate-700 mb-2"></div>
           <ArrowDown size={16} className="text-slate-600 mb-2" />
           <div className="bg-slate-800 border-2 border-blue-500 text-white px-6 py-3 rounded-lg shadow-md w-48 text-center z-10">
              <span className="block text-blue-400 font-mono text-xs mb-1">STATE 2</span>
              <span className="font-bold">Decision Required</span>
           </div>
        </div>

        {/* Path Split */}
        <div className="w-64 h-8 border-t-2 border-x-2 border-slate-700 rounded-t-xl mb-[-4px]"></div>

        {/* Row 3 - Branching */}
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


const CaseStudyPage = ({ onLaunchPrototype }) => {
  // Pure mock data specific for S0 viewing
  const mockS0 = MOCK_CASES.map(c => ({...c, workflowState: "Stable Plan", isLocked: false, timeToFailure: "--"}));

  return (
    <div className="bg-[#f8fafc] w-full min-h-screen text-slate-800 font-sans selection:bg-blue-100 pb-24">
      {/* Decorative Header Background */}
      <div className="h-96 w-full bg-slate-900 absolute top-0 left-0 -z-10" />
      
      <main className="max-w-[900px] mx-auto px-6 pt-24 relative z-10">
        
        {/* Header Section */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
            The Arrival Control Engine
          </h1>
          <p className="text-lg text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Um estudo de caso sobre a aplicação do conceito de "Silent UI" para reduzir a carga cognitiva em operações táticas de hospitalidade ultra-premium.
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
                Em manobras logísticas de altíssimo padrão, a abundância de dados gera fadiga fatal. Operadores perdem controle sistêmico ao dissecar tabelas massivas procurando exceções. O projeto <em>Arrival Control Engine</em> adotou o <strong>Silent UI</strong>: se a automação detém controle das integrações (APIs), o sistema se emudece. Ele só utiliza contraste para demandar atenção cognitiva perante falhas.
              </p>
            </div>
            
            <DataMappingDiagram />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">2. A Jornada UX Baseada em Estados (State Machine)</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
              <p>Não desenhamos telas subjetivas. A UI é derivada de uma State Machine rigorosa enraizada no payload (S0 a S6). Apenas o rompimento de tolerâncias injeta cores quentes no Viewport.</p>
            </div>

            <StateMachineDiagram />

            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">S0: The Calm State (Zero Friction)</h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg">Quando os voos operam em horário, o painel assume fundo esmeralda pálido. A ausência de elementos clicantes prova visualmente que nenhuma intervenção manual é necessária.</p>
                <LivingAsset height="h-[300px]">
                   <Dashboard 
                      onSelectCase={() => {}} 
                      onLockWarning={() => {}} 
                   />
                </LivingAsset>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">S2: Decision Required (The Analytical Recommendation)</h3>
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg">Quando anomalias ocorrem, a Engine propõe um caminho de reescalonamento. Para inibir toques acidentais sob stress, um botão cinético "Hold to Confirm" adia a ação por frações de segundo intencionais.</p>
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
                <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-4 border border-slate-100 rounded-lg">O caso é fechado matematicamente com `End Risk: 0%`. Todas as rotinas voltam a verde e as barras de ação somem. O operador é forçado pelo UX a focar apenas em novos problemas.</p>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">3. Concorrência e Fallback (Lock State & S6)</h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed mb-8">
              <p>Operações simultâneas exigem governança visual impenetrável. Se 'Sarah J.' atua num check-in, o React altera atomicamente o card na sua máquina local para `opacity-80` com contorno Âmbar. Um banner de "Read Only" desossa a habilidade humana de causar colisões de requisição HTTP.</p>
            </div>
            
            <LivingAsset height="h-[250px]" scale="scale-100 mt-2">
                 {/* Exibindo especificamente a linha com Lock do Dashboard */}
                 <div className="w-full max-w-[1200px] mx-auto p-4 bg-amber-50 border-l-4 border-amber-500 border-y-amber-200 border-r-amber-200 p-4 rounded-xl shadow-sm flex items-center mb-6">
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
        </article>
      </main>
    </div>
  );
};

export default CaseStudyPage;
