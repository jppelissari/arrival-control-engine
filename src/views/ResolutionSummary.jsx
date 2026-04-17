import React from 'react';
import { CheckCircle, Archive, CornerDownLeft } from 'lucide-react';

const ResolutionSummary = ({ caseData, onBack }) => {
  return (
    <div className="grid grid-cols-12 gap-8 w-full max-w-[1440px] mx-auto animate-in slide-in-from-bottom-8 duration-500">
      <div className="col-span-8 flex flex-col space-y-6">
        <div className="bg-emerald-50 border-l-4 border-emerald-600 border border-y-slate-200 border-r-slate-200 p-6 rounded-xl shadow-sm">
          <div className="flex items-start">
            <CheckCircle size={28} className="text-emerald-600 mr-4 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Case Successfully Resolved</h2>
              <p className="text-sm text-slate-700 mt-2 font-medium">All critical disruptions have been cleared for {caseData?.clientName}. The arrival is now fully protected and operational.</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Final Outcome Classification</h3>
            <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">Audit Target: Compliant</span>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <h4 className="text-lg font-bold text-emerald-700 mb-1">Mitigated Delay - Operations Success</h4>
            <p className="text-sm text-slate-600 font-medium">Calculated risk mitigated entirely without financial loss. Automatically resolved via AI pathways.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Final Summary of Actions</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <CheckCircle size={20} className="text-emerald-500 mr-4 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Hotel Rebooked & Confirmed</h4>
                <p className="text-xs text-slate-500 mt-1">Reception acknowledged late arrival and lock removed from room.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white border border-slate-100 rounded-lg shadow-sm">
              <CheckCircle size={20} className="text-emerald-500 mr-4 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-900">Client Successfully Notified</h4>
                <p className="text-xs text-slate-500 mt-1">Message delivered confirming seamless continuous service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-span-4 space-y-6">
        <div className="bg-white border-t-4 border-slate-300 rounded-xl shadow-sm p-6 text-slate-900 border-x border-b sticky top-6">
          <h3 className="text-base font-bold mb-1">Case Deactivated</h3>
          <p className="text-xs text-slate-500 mb-6 font-medium">No further actions can be taken. The record is permanently logged.</p>
          <div className="space-y-3">
            <button onClick={onBack} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-lg shadow-sm transition-all flex items-center justify-center text-sm">
              <Archive size={16} className="mr-2" /> Archive Record
            </button>
            <button onClick={onBack} className="w-full bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-semibold py-3 rounded-lg flex items-center justify-center border border-slate-200">
              <CornerDownLeft size={16} className="mr-2" /> Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResolutionSummary;
