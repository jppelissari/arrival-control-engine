import React from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

const ActionProgress = ({ caseData }) => {
  return (
    <div className="grid grid-cols-12 gap-8 w-full max-w-[1440px] mx-auto animate-in slide-in-from-right-8 duration-500">
      <div className="col-span-8 flex flex-col space-y-6">
        <div className="bg-purple-50 border-l-4 border-purple-600 border border-y-slate-200 border-r-slate-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-start">
            <Loader2 size={24} className="text-purple-600 mr-4 flex-shrink-0 animate-spin mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Execution in Progress</h2>
              <p className="text-sm text-slate-700 mt-2 font-medium">The system is orchestrating the selected recovery strategy for {caseData?.clientName}. Do not navigate away.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Real-Time Execution Steps</h3>
          <div className="space-y-6 ml-2">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white"><CheckCircle size={14}/></div>
                <div className="w-0.5 h-6 bg-emerald-500 mt-2"></div>
              </div>
              <div className="mt-0.5">
                <h4 className="text-sm font-bold text-slate-900">Isolating Dependency Scope</h4>
                <p className="text-xs text-slate-500">Lock confirmed. Fallbacks isolated. [Success]</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                <div className="w-6 h-6 bg-purple-100 border-2 border-purple-500 rounded-full flex items-center justify-center text-purple-600 animate-pulse-slow">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <div className="w-0.5 h-6 bg-slate-200 mt-2"></div>
              </div>
              <div className="mt-0.5">
                <h4 className="text-sm font-bold text-purple-800">Notifying Hotel...</h4>
                <p className="text-xs text-purple-600 font-medium tracking-wide">Waiting for property management system handshake. [In Progress]</p>
              </div>
            </div>

            <div className="flex items-start opacity-50">
              <div className="flex flex-col items-center mr-4">
                <div className="w-6 h-6 bg-slate-100 border-2 border-slate-300 rounded-full"></div>
              </div>
              <div className="mt-0.5">
                <h4 className="text-sm font-bold text-slate-900">Client Communication Update</h4>
                <p className="text-xs text-slate-500">Awaiting prior step completion. [Pending]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-4 space-y-6">
        <div className="bg-white border-t-4 border-slate-300 rounded-xl shadow-sm p-6 text-slate-900 border-x border-b">
          <h3 className="text-sm font-bold mb-1 opacity-50">Control Blocked</h3>
          <p className="text-xs text-slate-500 mb-4 font-medium opacity-50">Manual actions are disabled while automated execution is actively running to prevent write collisions.</p>
        </div>
      </div>
    </div>
  );
};

export default ActionProgress;
