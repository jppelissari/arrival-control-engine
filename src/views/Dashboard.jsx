import React, { useState } from 'react';
import { Clock, Lock, Unlock, ArrowRight, AlertTriangle, ShieldAlert } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { MOCK_CASES } from '../data/mockData';

const Dashboard = ({ onSelectCase, onLockWarning }) => {
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto w-full">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Today's Arrival Queue</h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">Showing cases sorted by urgency and time to failure.</p>
        </div>
      </div>
      <div>
        {MOCK_CASES.map(c => {
          const isLocked = c.isLocked;
          
          let colorClass = "text-slate-800";
          let dotColor = "bg-slate-400";
          let borderColor = "border-l-slate-400";

          if (c.workflowState === "Decision Required") {
            colorClass = "text-blue-800";
            dotColor = "bg-blue-500";
            borderColor = "border-l-blue-500";
          } else if (c.workflowState === "Action In Progress") {
            colorClass = "text-purple-800";
            dotColor = "bg-purple-500";
            borderColor = "border-l-purple-500";
          } else if (c.workflowState === "Stable Plan") {
            colorClass = "text-emerald-800";
            dotColor = "bg-emerald-500";
            borderColor = "border-l-emerald-500";
          } else if (c.workflowState === "Critical Intervention") {
             colorClass = "text-red-800";
             dotColor = "bg-red-500";
             borderColor = "border-l-red-500";
          }

          if (isLocked) {
             borderColor = "border-l-amber-400";
             colorClass = "text-amber-800";
             dotColor = "bg-amber-400";
          }

          const baseClasses = `p-4 mb-4 flex items-center justify-between bg-white shadow-sm border border-slate-200 border-l-4 rounded-xl cursor-pointer ${borderColor} ${isLocked ? 'opacity-80 bg-slate-50' : 'hover:bg-slate-50 hover:shadow-md transition-all duration-200'}`;

          return (
            <div 
              key={c.id} 
              className={baseClasses}
              onClick={() => isLocked ? onLockWarning(c.lockedBy) : onSelectCase(c)}
            >
              <div className="flex flex-col w-2/12">
                <span className="text-sm font-bold text-slate-900">{c.clientName}</span>
                <span className="text-[11px] text-slate-500 font-mono tracking-wide mt-0.5">{c.id}</span>
              </div>
              <div className="flex flex-col w-2/12">
                <span className="text-sm text-slate-700 font-semibold">{c.flightNumber}</span>
                <span className="text-xs text-slate-500 mt-0.5">{c.eta}</span>
              </div>
              <div className="flex flex-col w-3/12 items-start">
                <StatusBadge state={c.workflowState} colorClass={colorClass} dotColor={dotColor} />
                {c.timeToFailure !== "--" && (
                  <span className={`mt-1.5 text-xs font-bold flex items-center ${c.timeToFailure === '15m' ? 'text-red-600' : 'text-slate-500'}`}>
                    <Clock size={12} className={`mr-1 inline-block ${c.timeToFailure === '15m' ? 'text-red-600' : 'text-slate-400'}`} /> TTF: {c.timeToFailure}
                  </span>
                )}
              </div>
              <div className="flex flex-col w-2/12">
                <div className={`flex items-center text-sm font-medium ${isLocked ? 'text-amber-700' : 'text-slate-700'}`}>
                  {isLocked ? <Lock size={14} className="mr-1.5"/> : <Unlock size={14} className="text-slate-300 mr-1.5"/>}
                  {isLocked ? `Locked (${c.lockedBy})` : c.owner}
                </div>
              </div>
              <div className="w-2/12 flex justify-end">
                {isLocked ? (
                   <button className="px-4 py-2 text-xs font-bold text-amber-700 bg-white border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors">
                     Request Takeover
                   </button>
                ) : (
                   <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none transition-colors duration-200">
                     Open Case
                     <ArrowRight size={16} className="ml-2" />
                   </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
