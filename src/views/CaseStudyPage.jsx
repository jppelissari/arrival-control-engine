import React from 'react';
import { ExternalLink, LayoutTemplate, Database, Cpu, ArrowRight, ArrowDown, Lock, Server, Activity, ShieldCheck, AlertOctagon, Code, Clock, User, Eye, AlertTriangle } from 'lucide-react';

// Imports mantidos para serem reutilizados como Living Assets nos próximos sprints
import Dashboard from './Dashboard';
import DecisionScreen from './DecisionScreen';
import ResolutionSummary from './ResolutionSummary';
import { MOCK_CASES } from '../data/mockData';

// Diagrama Nativo: State Machine (S0 -> S6)
const StateMachineDiagram = () => (
  <div className="w-full max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6 shadow-xl overflow-hidden relative">
     <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Activity size={240} />
     </div>
     
     <div className="flex flex-col items-center w-full space-y-6 pt-4">
        {/* Row 1 */}
        <div className="flex justify-center w-full relative">
           <div className="bg-slate-800 border-l-4 border-emerald-500 text-white px-6 py-4 rounded-lg shadow-md w-64 z-10 text-left">
              <span className="block text-emerald-400 font-mono text-xs mb-1">STATE 0 // STABLE</span>
              <span className="font-bold">Stable but Not Verified</span>
           </div>
        </div>
        
        {/* Row 2 */}
        <div className="flex flex-col items-center w-full relative">
           <div className="h-6 w-0.5 bg-slate-700 mb-2"></div>
           <ArrowDown size={16} className="text-slate-600 mb-2" />
           <div className="bg-slate-800 border-l-4 border-blue-500 text-white px-6 py-4 rounded-lg shadow-md w-64 z-10 text-left">
              <span className="block text-blue-400 font-mono text-xs mb-1">STATE 1 // INTERVENTION</span>
              <span className="font-bold">Decision Required</span>
           </div>
        </div>

        {/* Path Split */}
        <div className="w-80 h-8 border-t-2 border-x-2 border-slate-700 rounded-t-xl mb-[-4px]"></div>

        {/* Row 3 - Branching */}
        <div className="flex justify-between w-full max-w-md px-4">
           {/* Left Branch */}
           <div className="flex flex-col items-center">
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-l-4 border-purple-500 text-white px-5 py-4 rounded-lg shadow-md w-48 z-10 text-left">
                 <span className="block text-purple-400 font-mono text-xs mb-1">STATE 2 & 3</span>
                 <span className="font-bold text-sm">Action Constraints & Contingency</span>
              </div>
              <div className="h-6 w-0.5 bg-slate-700 my-2"></div>
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-l-4 border-emerald-500 text-white px-5 py-4 rounded-lg shadow-md w-48 z-10 flex flex-col items-start bg-emerald-900/10">
                 <span className="block text-emerald-400 font-mono text-xs mb-1 flex items-center"><ShieldCheck size={12} className="mr-1"/> STATE 4</span>
                 <span className="font-bold text-sm">Resolution Recorded</span>
              </div>
           </div>

           {/* Right Branch */}
           <div className="flex flex-col items-center">
              <ArrowDown size={16} className="text-slate-600 mb-2" />
              <div className="bg-slate-800 border-l-4 border-amber-500 text-white px-5 py-4 rounded-lg shadow-md w-48 z-10 flex flex-col items-start bg-amber-900/10">
                 <span className="block text-amber-500 font-mono text-xs mb-1 flex items-center"><AlertOctagon size={12} className="mr-1"/> STATE 6</span>
                 <span className="font-bold text-sm">Manual Recovery</span>
              </div>
           </div>
        </div>
     </div>
  </div>
);


const CaseStudyPage = ({ onLaunchPrototype }) => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-100 min-h-screen">
      
      {/* PAGE 01 — HERO (Full-width) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-24 md:py-32 relative">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-8 block md:text-left">Operational Product System</span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-6">
              The Arrival Control Engine
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-500 font-medium mb-8 max-w-3xl leading-snug">
              A system designed to prevent arrival failures before they happen.
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-12">
              Arrival operations rarely fail because no one is working.<br/>
              They fail because risk becomes visible too late, ownership stays ambiguous, and decisions happen under pressure instead of before it.<br/><br/>
              This concept translates that operational problem into a structured product system built around state logic, enforced decision points, and visible contingency paths.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-20 md:mb-10">
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center transition-all">
                  Read Full Case
              </button>
              <button 
                onClick={onLaunchPrototype} 
                className="bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 px-8 rounded-lg flex items-center border border-slate-200 shadow-sm transition-all text-left">
                  View System Logic
              </button>
          </div>
          
          <div className="md:absolute bottom-12 right-12 text-sm text-slate-500 max-w-[240px] font-medium border-l-2 border-slate-300 pl-4">
              Case study developed as a product systems concept at the intersection of operations, service design, and workflow logic.
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 02 — OVERVIEW (60/40 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="w-full md:w-[60%]">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Overview</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
                  <p>The Arrival Control Engine is a product concept built to handle high-risk arrival flows where coordination depends on timing, ownership, and rapid response across multiple teams.</p>
                  <p>Instead of treating operational issues as isolated incidents, the system models them as structured states. It identifies when a case is still stable, when intervention is required, when fallback logic must be activated, and when resolution should be logged as operational memory.</p>
                  <p className="font-bold text-slate-900 bg-slate-100 p-6 rounded-xl border border-slate-200 shadow-sm">
                      The objective is not to track activity more elegantly.<br/>
                      It is to force the right decision before failure becomes visible.
                  </p>
              </div>
          </div>

          <div className="w-full md:w-[40%] space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 block">What this solves</span>
                  <p className="text-slate-800 font-medium">Fragmented coordination, delayed decisions, unclear ownership, and reactive escalation during arrival operations.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 block">Core idea</span>
                  <p className="text-slate-800 font-medium">A state-based operational system that makes risk legible early and prevents silent breakdowns.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 block">Designed for</span>
                  <p className="text-slate-800 font-medium">Complex service environments where timing, handoffs, and contingency planning directly affect the experience.</p>
              </div>
              <p className="text-sm text-slate-500 font-medium italic mt-6 px-2">This case focuses on system behavior before visible service failure occurs.</p>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 03 — PROBLEM (62/38 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-24 flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="w-full md:w-[62%]">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Defining the Problem</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-12">
                  <p>Arrival failures often begin long before anything visibly breaks.</p>
                  <p>A transfer has not been confirmed. An arrival time is unclear. One team assumes another team is handling it. A contingency exists, but no one has formally selected it.</p>
                  <p className="text-slate-900 font-bold bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
                      The issue is not lack of effort.<br/>The issue is lack of structure.
                  </p>
                  <p>Without a control layer, risk stays distributed across people, channels, and assumptions until the operation is already in reactive mode.</p>
              </div>
              
              <blockquote className="border-l-4 border-slate-900 pl-8 my-10">
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                      "Operational failure usually begins before anyone can point to a single visible mistake."
                  </p>
              </blockquote>
          </div>

          <div className="w-full md:w-[38%]">
              <div className="bg-slate-900 p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-bl-full -z-0 opacity-50"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">Where arrival failures begin</h3>
                  <p className="text-slate-300 font-medium mb-10 leading-relaxed relative z-10">
                      Not with a single major error, but with small signals that remain disconnected for too long.
                  </p>
                  <ul className="space-y-6 relative z-10">
                      <li className="flex items-center text-slate-200 font-medium">
                          <AlertTriangle size={20} className="text-amber-400 mr-4 flex-shrink-0"/> Missing confirmation
                      </li>
                      <li className="flex items-center text-slate-200 font-medium">
                          <AlertTriangle size={20} className="text-amber-400 mr-4 flex-shrink-0"/> Ambiguous ownership
                      </li>
                      <li className="flex items-center text-slate-200 font-medium">
                          <AlertTriangle size={20} className="text-amber-400 mr-4 flex-shrink-0"/> Delayed decision
                      </li>
                      <li className="flex items-center text-slate-200 font-medium">
                          <AlertTriangle size={20} className="text-amber-400 mr-4 flex-shrink-0"/> No active fallback
                      </li>
                  </ul>
              </div>
              <p className="text-sm text-slate-500 font-medium mt-6 italic px-2">In high-pressure service systems, late clarity behaves like failure.</p>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 04 — SYSTEM LOGIC (Full width) */}
      <section className="w-full bg-slate-50 py-24 border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mb-16">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">A State-Based System</h2>
                  <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed">
                      <p>To make the operation reliable, the flow was modeled as a state machine.</p>
                      <p>That decision shifts the system from passive tracking to active control. Instead of simply displaying progress, it defines what the case currently is, what must happen next, and when progression should stop until a decision is made.</p>
                      <p className="font-bold text-slate-900 border-b-2 border-slate-300 pb-2 inline-block">
                          The value of the system is not in showing motion. It is in structuring response.
                      </p>
                  </div>
              </div>

              <div className="w-full bg-white border border-slate-200 rounded-3xl p-12 mb-8 relative shadow-sm">
                  <h3 className="text-slate-500 font-bold uppercase tracking-widest text-center mb-4 text-xs">Operational State Model</h3>
                  <p className="text-center text-slate-600 font-medium mb-12 max-w-xl mx-auto">
                      Each state defines what the system knows, what action is required, and whether the flow can safely continue.
                  </p>

                  <StateMachineDiagram />

                  {/* Clarification Tooltip anchored visually to Diagram area */}
                  <div className="absolute top-12 right-12 text-sm text-slate-500 font-medium max-w-[200px] bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm hidden lg:block">
                      The interface is not the system.<br/><span className="text-slate-900 font-bold">The state logic is the system.</span>
                  </div>
              </div>

              <p className="text-center text-slate-500 text-sm font-medium">State logic was used to turn vague operational handling into explicit, enforceable behavior.</p>
          </div>
      </section>

    </div>
  );
};

export default CaseStudyPage;
