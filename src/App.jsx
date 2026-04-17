import React, { useState } from 'react';
import Dashboard from './views/Dashboard';
import DecisionScreen from './views/DecisionScreen';
import ActionProgress from './views/ActionProgress';
import ResolutionSummary from './views/ResolutionSummary';
import { Lock } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [selectedCase, setSelectedCase] = useState(null);
  const [readOnlyWarning, setReadOnlyWarning] = useState(null);

  const handleSelectCase = (caseObj) => {
    setSelectedCase(caseObj);
    setCurrentScreen('decision');
    setReadOnlyWarning(null);
  };

  const handleLockWarning = (lockedBy) => {
    setReadOnlyWarning(lockedBy);
  };

  const handleConfirmAction = () => {
    setCurrentScreen('progress');
    // Simulate real-time API progression then shift to resolution
    setTimeout(() => {
      setCurrentScreen('resolution');
    }, 4000);
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedCase(null);
    setReadOnlyWarning(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-16 flex flex-col">
      <header className="bg-slate-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
          <h1 className="text-lg font-semibold tracking-wide cursor-pointer" onClick={handleBackToDashboard}>Arrival Control Engine</h1>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium text-slate-300">
          <span>System Status: <span className="text-emerald-400">Stable</span></span>
        </div>
      </header>

      {readOnlyWarning && currentScreen === 'dashboard' && (
        <div className="max-w-[1240px] w-full mx-auto px-8 mt-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 border border-y-amber-200 border-r-amber-200 p-4 rounded-xl shadow-sm flex items-center transition-all animate-in slide-in-from-top-4">
            <Lock size={20} className="text-amber-600 mr-3" />
            <div>
              <h2 className="text-sm font-bold text-amber-900">Read-Only Mode Active</h2>
              <p className="text-xs text-amber-700 font-medium">This case is actively locked by {readOnlyWarning}. You cannot make operational changes. Request takeover if intervention is necessary.</p>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-8 mt-8">
        {currentScreen === 'dashboard' && (
          <Dashboard onSelectCase={handleSelectCase} onLockWarning={handleLockWarning} />
        )}
        {currentScreen === 'decision' && (
          <DecisionScreen caseData={selectedCase} onConfirm={handleConfirmAction} onBack={handleBackToDashboard} />
        )}
        {currentScreen === 'progress' && (
          <ActionProgress caseData={selectedCase} />
        )}
        {currentScreen === 'resolution' && (
          <ResolutionSummary caseData={selectedCase} onBack={handleBackToDashboard} />
        )}
      </main>
    </div>
  );
}

export default App;
