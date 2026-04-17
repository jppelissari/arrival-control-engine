import React from 'react';
import { ExternalLink, LayoutTemplate, Database, Cpu, ArrowRight, ArrowDown, Lock, Server, Activity, ShieldCheck, AlertOctagon, Code, Clock, User, Eye, AlertTriangle } from 'lucide-react';

import Dashboard from './Dashboard';
import DecisionScreen from './DecisionScreen';
import ResolutionSummary from './ResolutionSummary';
import { MOCK_CASES } from '../data/mockData';

// Helper for UI Scaling (Sprint 2)
const LivingAssetSprint2 = ({ children, height = "h-[450px]", scale = "scale-[0.70]" }) => (
  <div className={`w-full ${height} bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-2xl flex justify-center relative mt-4`}>
     <div className="absolute top-0 left-0 w-full h-6 bg-slate-200 flex items-center px-4 border-b border-slate-300 z-50">
        <div className="flex space-x-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
        </div>
     </div>
     <div className={`w-[142%] origin-top ${scale} pointer-events-none mt-6 relative`}>
        {children}
     </div>
  </div>
);

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

                  <div className="absolute top-12 right-12 text-sm text-slate-500 font-medium max-w-[200px] bg-slate-50 border border-slate-200 p-5 rounded-xl shadow-sm hidden lg:block">
                      The interface is not the system.<br/><span className="text-slate-900 font-bold">The state logic is the system.</span>
                  </div>
              </div>

              <p className="text-center text-slate-500 text-sm font-medium">State logic was used to turn vague operational handling into explicit, enforceable behavior.</p>
          </div>
      </section>

      {/* PAGE 05 — SCENARIO (55/45 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-32 flex flex-col md:flex-row gap-16 lg:gap-24 min-h-screen items-center">
          <div className="w-full md:w-[55%] flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Example scenario</h2>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-10">
                  <p>A guest arrival is delayed.<br/>The transfer is not confirmed.<br/>Two teams assume the other is handling it.</p>
                  <p>Without structure, the issue drifts.</p>
                  <p>With this system, the case is forced into a decision state, ownership becomes explicit, and a contingency path must be selected before the arrival deteriorates further.</p>
              </div>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  The system is designed to catch operational drift before it becomes guest-facing.
              </p>
          </div>
          <div className="w-full md:w-[45%] flex flex-col space-y-4">
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <span className="text-sm font-bold text-slate-900 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-xs font-mono text-slate-500">1</span> 
                      Delay detected
                  </span>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <span className="text-sm font-bold text-slate-900 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-xs font-mono text-slate-500">2</span> 
                      Decision required
                  </span>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <span className="text-sm font-bold text-slate-900 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-xs font-mono text-slate-500">3</span> 
                      Owner assigned
                  </span>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm border-l-4 border-l-purple-500">
                  <span className="text-sm font-bold text-slate-900 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-xs font-mono text-slate-500">4</span> 
                      Contingency activated
                  </span>
              </div>
              <p className="text-sm text-slate-500 font-medium italic mt-6 text-left px-2">This is where the product shifts from visibility tool to decision system.</p>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 06 — CORE STATES INTRO (Full-width) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-32 flex flex-col justify-center min-h-[70vh]">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <div className="max-w-2xl">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">Core States</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      The system is built around a small set of operational states. Each one exists to make a specific kind of uncertainty visible and actionable.
                  </p>
              </div>
              <div className="max-w-[280px] bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      As risk increases, the system reduces ambiguity rather than adding more communication overhead.
                  </p>
              </div>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full flex-wrap sm:flex-nowrap gap-4">
              <div className="flex-1 bg-slate-900 text-white p-8 rounded-xl shadow-sm border-t-4 border-emerald-500">
                 <span className="text-[10px] uppercase font-mono text-emerald-400 mb-2 block">S0</span>
                 <p className="font-bold text-sm tracking-wide">Stable but Not Verified</p>
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl border border-slate-200 shadow-sm border-t-4 border-blue-500">
                 <span className="text-[10px] uppercase font-mono text-blue-500 mb-2 block">S1</span>
                 <p className="font-bold text-sm tracking-wide text-slate-800">Decision Required</p>
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl border border-slate-200 shadow-sm border-t-4 border-purple-500">
                 <span className="text-[10px] uppercase font-mono text-purple-500 mb-2 block">S2</span>
                 <p className="font-bold text-sm tracking-wide text-slate-800">Action Under Constraint</p>
              </div>
              <div className="flex-1 bg-white p-8 rounded-xl border border-slate-200 shadow-sm border-t-4 border-amber-500">
                 <span className="text-[10px] uppercase font-mono text-amber-500 mb-2 block">S3</span>
                 <p className="font-bold text-sm tracking-wide text-slate-800">Delay Contingency</p>
              </div>
              <div className="flex-1 bg-slate-100 p-8 rounded-xl border border-slate-200 shadow-sm border-t-4 border-slate-400">
                 <span className="text-[10px] uppercase font-mono text-slate-500 mb-2 block">S4</span>
                 <p className="font-bold text-sm tracking-wide text-slate-600">Resolution Recorded</p>
              </div>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 07 — STATE S0 & S1 (50/50 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-32 flex flex-col xl:flex-row gap-16 min-h-screen items-center">
          <div className="w-full xl:w-1/2 flex flex-col space-y-16">
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-4 block">S0 — Stable but Not Verified</span>
                  <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed mb-6">
                      <p>The case appears healthy, but the system has not yet confirmed that every critical dependency is secure. This prevents false certainty early in the flow.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">Stable</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">Awaiting confirmation</span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">No active risk detected</span>
                  </div>
                  <p className="text-sm font-semibold italic text-slate-500">Stable does not mean safe.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 block">S1 — Decision Required</span>
                  <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed mb-6">
                      <p>The flow can no longer continue safely without intervention. A dependency is unresolved, a path is unclear, or a condition has changed enough that the system requires a defined next move.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">Decision required</span>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">Progress blocked</span>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">Owner needed</span>
                  </div>
                  <p className="text-sm font-semibold italic text-slate-500">This is the moment most teams usually handle informally. The system does not.</p>
              </div>

          </div>
          
          <div className="w-full xl:w-1/2 flex items-center justify-center">
              <LivingAssetSprint2 height="h-[600px]">
                 <Dashboard onSelectCase={() => {}} onLockWarning={() => {}} />
              </LivingAssetSprint2>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 08 — STATE S2 & S3 (50/50 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-32 flex flex-col xl:flex-row gap-16 min-h-screen items-center">
          <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-16">
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4 block">S2 — Action Under Constraint</span>
                  <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed mb-6">
                      <p>A decision has been made and execution is now in motion, but the case remains sensitive to timing, ownership, and follow-through. The system keeps the selected path visible while preserving clarity around what is happening and who is responsible.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">Path selected</span>
                      <span className="text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">Action in progress</span>
                  </div>
                  <p className="text-sm font-semibold italic text-slate-500">Execution should not reintroduce ambiguity.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold tracking-widest text-amber-600 uppercase mb-4 block">S3 — Delay Contingency</span>
                  <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed mb-6">
                      <p>The original path can no longer be trusted. A fallback route must be activated explicitly. This makes contingency part of the product logic instead of leaving it as informal coordination between teams.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">Delay contingency active</span>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">Backup path selected</span>
                  </div>
                  <p className="text-sm font-semibold italic text-slate-500">Fallback is only useful if the system can recognize and govern it.</p>
              </div>

          </div>
          
          <div className="w-full xl:w-1/2 flex items-center justify-center">
              <LivingAssetSprint2 height="h-[600px]">
                 <DecisionScreen caseData={MOCK_CASES[0]} onConfirm={() => {}} onBack={() => {}} />
              </LivingAssetSprint2>
          </div>
      </section>

      <div className="w-full h-px bg-slate-200"></div>

      {/* PAGE 09 — S4 + RESOLUTION LOGIC (60/40 Split) */}
      <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-32 flex flex-col xl:flex-row gap-16 min-h-screen items-center">
          <div className="w-full xl:w-[60%] flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6 block">S4 — Resolution Recorded</span>
              <div className="prose prose-slate max-w-none text-slate-600 text-lg leading-relaxed mb-10">
                  <p>The issue has been resolved and the system captures how that happened. The selected path, the cause, and the outcome are preserved as structured operational memory.</p>
                  <p className="font-bold text-slate-900 border-l-4 border-slate-900 pl-6 py-2 my-10 text-2xl leading-snug">
                      Resolution is not just closure.<br/>It is structured memory.
                  </p>
                  <p>Operational systems improve when they do more than close cases. They improve when they preserve cause, response, and outcome in a form that can be reviewed, measured, and used to prevent repeat failure.</p>
              </div>
              <p className="text-sm text-slate-500 font-medium italic mt-2 px-2">Closure is useful. Learnable resolution is more useful.</p>
          </div>
          
          <div className="w-full xl:w-[40%] flex items-center justify-center">
              <LivingAssetSprint2 height="h-[650px]" scale="scale-[0.80]">
                 <ResolutionSummary caseData={MOCK_CASES[0]} onBack={() => {}} />
              </LivingAssetSprint2>
          </div>
      </section>

    </div>
  );
};

export default CaseStudyPage;
