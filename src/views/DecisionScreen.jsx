import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

const DecisionScreen = ({ caseData, onConfirm, onBack }) => {
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-8 w-full max-w-[1440px] mx-auto animate-in fade-in zoom-in-95 duration-300">
      <div className="col-span-12 mb-2">
        <button onClick={onBack} className="flex items-center text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </button>
      </div>

      <div className="col-span-8 flex flex-col space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 border border-y-slate-200 border-r-slate-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-start">
            <AlertTriangle size={24} className="text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">Arrival partially stabilized</h2>
              <p className="text-sm text-slate-700 mt-2 font-medium">The core disruption was mitigated, but two critical follow-up operations remain open for {caseData.clientName}. A decision is required.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Recommended Action</h3>
          <h4 className="text-2xl font-bold text-slate-900 mb-2">Execute Delay Contingency</h4>
          <p className="text-sm text-slate-600 mb-6 font-medium">This path secures the late night check-in with the hotel and sends an automated reassurance update to the client.</p>

          <div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
            <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">Expected Impact</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-emerald-500 mr-2 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Hotel Lock Preserved</span>
                  <span className="text-xs text-slate-500 font-medium">Ensures the room is not released.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Unresolved Items</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-slate-50">
              <div className="flex items-center">
                <StatusBadge state="Pending" colorClass="text-amber-700" dotColor="bg-amber-500" />
                <span className="ml-4 text-sm font-bold text-slate-900">Hotel Reception Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 space-y-6">
        <div className="bg-slate-900 border-t-4 border-blue-500 rounded-xl shadow-md p-6 text-white sticky top-6">
          <h3 className="text-lg font-bold mb-1">Confirm Execution</h3>
          <p className="text-xs text-slate-400 mb-6 font-medium">Executing will trigger the hotel and transfer workflows simultaneously.</p>
          <div className="space-y-3">
            <button 
              onPointerDown={() => setConfirming(true)}
              onPointerUp={() => { setConfirming(false); onConfirm(); }}
              onPointerLeave={() => setConfirming(false)}
              className={`relative w-full h-12 rounded-lg font-bold uppercase tracking-wider text-xs transition-all duration-300 overflow-hidden ${
                confirming ? "bg-blue-700 text-white shadow-inner scale-95" : "bg-blue-600 text-white shadow-md hover:bg-blue-500"
              }`}
            >
              <div className={`absolute left-0 top-0 bottom-0 bg-blue-800 transition-all duration-1000 ${confirming ? 'w-full' : 'w-0'}`}></div>
              <span className="relative z-10">{confirming ? "Confirming..." : "Hold to Confirm Action"}</span>
            </button>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="w-full bg-slate-800 text-slate-300 text-xs font-bold py-2.5 rounded-lg">Manual Override</button>
              <button className="w-full bg-red-900/30 text-red-400 text-xs font-bold py-2.5 rounded-lg border border-red-900/50">Escalate</button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Closure Context</h3>
          <div className="space-y-3 font-medium text-sm">
            <div className="flex justify-between items-center"><span className="text-slate-500">Current Risk</span><span className="text-slate-900 font-bold">{caseData.riskBand}</span></div>
            <div className="flex justify-between items-center"><span className="text-slate-500">ETA</span><span className="text-red-600 font-bold flex items-center"><Clock size={12} className="mr-1"/> {caseData.eta}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionScreen;
