import React, { useState } from 'react';
import { X, Play, RefreshCw, Zap, ShieldAlert, CheckCircle2, ChevronRight, Activity, Sparkles, Sliders } from 'lucide-react';

interface InteractiveDemosModalProps {
  demoType: 'biolytix' | 'quantum' | 'hostel' | null;
  onClose: () => void;
}

export const InteractiveDemosModal: React.FC<InteractiveDemosModalProps> = ({ demoType, onClose }) => {
  if (!demoType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-neutral-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950/50">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {demoType === 'biolytix' && <Activity className="w-5 h-5" />}
              {demoType === 'quantum' && <Sparkles className="w-5 h-5" />}
              {demoType === 'hostel' && <Sliders className="w-5 h-5" />}
            </span>
            <div>
              <h3 className="text-lg font-bold text-neutral-100">
                {demoType === 'biolytix' && 'BIOLYTIX — Drug–Disease Deterministic Rule Engine'}
                {demoType === 'quantum' && 'Quantum Superposition & Measurement Interactive Simulation'}
                {demoType === 'hostel' && 'Hostel Resident Compatibility Matching Algorithm'}
              </h3>
              <p className="text-xs text-neutral-400">
                {demoType === 'biolytix' && 'Explore the 6-stage biological explanation framework and molecular risk assessment.'}
                {demoType === 'quantum' && 'Adjust probability amplitudes α and β, view wave functions, and observe stochastic collapse.'}
                {demoType === 'hostel' && 'Calibrated 10-point weighted scoring model for roommate lifestyle harmony.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {demoType === 'biolytix' && <BiolytixDemo />}
          {demoType === 'quantum' && <QuantumDemo />}
          {demoType === 'hostel' && <HostelDemo />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800 bg-neutral-950/60 text-xs text-neutral-400">
          <span>Engineered by Asmita Das · Production Interactive Demo</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 1. BIOLYTIX DEMO --- */
const BIOLYTIX_DATA = [
  {
    drug: "Metformin",
    drugClass: "Biguanide Antidiabetic",
    target: "Mitochondrial Complex I / AMPK",
    disease: "Chronic Kidney Disease (CKD Stage 4)",
    severity: "High Contraindication",
    severityLevel: "high",
    dockingEnergy: "-7.8 kcal/mol",
    riskScore: "88%",
    stages: [
      { step: "01. Disease Pathophysiology", desc: "Impaired glomerular filtration rate (eGFR < 30 mL/min/1.73m²) leads to severe accumulation of renally excreted biguanides." },
      { step: "02. Drug Pharmacodynamics", desc: "Metformin inhibits mitochondrial electron transport chain complex I, shifting cellular metabolism toward anaerobic glycolysis." },
      { step: "03. Molecular Target Impact", desc: "Excessive cellular accumulation in hepatocytes and renal tubules suppresses gluconeogenesis from lactate." },
      { step: "04. Pathological Convergence", desc: "Elevated unbuffered circulating lactate causes severe lactic acidosis with life-threatening blood pH drop." },
      { step: "05. Organ-System Severity", desc: "Renal & Cardiovascular axis: Critically compromised organ perfusion and electrolyte imbalance." },
      { step: "06. Clinical Protocol", desc: "Discontinue Metformin immediately. Shift to SGLT2 inhibitors or DPP-4 inhibitors adjusted for renal clearance." }
    ]
  },
  {
    drug: "Warfarin",
    drugClass: "Vitamin K Antagonist Anticoagulant",
    target: "VKORC1 (Vitamin K Epoxide Reductase)",
    disease: "Hepatic Impairment (Cirrhosis)",
    severity: "Severe Coagulation Risk",
    severityLevel: "high",
    dockingEnergy: "-9.2 kcal/mol",
    riskScore: "94%",
    stages: [
      { step: "01. Disease Pathophysiology", desc: "Severe reduction in functional hepatocytes diminishes endogenous synthesis of clotting factors II, VII, IX, and X." },
      { step: "02. Drug Pharmacodynamics", desc: "Warfarin irreversibly blocks VKORC1, halting post-translational gamma-carboxylation of vitamin K-dependent factors." },
      { step: "03. Molecular Target Impact", desc: "Profound depletion of prothrombin and decreased clearance of both S-warfarin (CYP2C9) and R-warfarin (CYP1A2)." },
      { step: "04. Pathological Convergence", desc: "Synergistic impairment of hemostasis resulting in uncontrollable mucosal, gastrointestinal, or intracranial hemorrhage." },
      { step: "05. Organ-System Severity", desc: "Hematologic & Hepatic systems: Acute coagulopathy with INR spike exceeding therapeutic indices (>5.0)." },
      { step: "06. Clinical Protocol", desc: "Contraindicated. If anticoagulation is imperative, consider low-molecular-weight heparin with strict anti-Xa monitoring." }
    ]
  },
  {
    drug: "Ciprofloxacin",
    drugClass: "Fluoroquinolone Antibacterial",
    target: "Bacterial DNA Gyrase / Topoisomerase IV",
    disease: "Long QT Syndrome (Cardiac Arrhythmia)",
    severity: "High Arrhythmogenic Risk",
    severityLevel: "high",
    dockingEnergy: "-8.4 kcal/mol",
    riskScore: "82%",
    stages: [
      { step: "01. Disease Pathophysiology", desc: "Congenital or acquired delayed cardiac ventricular repolarization (baseline QTc > 480ms) predisposes to malignant re-entry." },
      { step: "02. Drug Pharmacodynamics", desc: "Off-target inhibition of the human hERG cardiac potassium channel (IKr current) in ventricular myocytes." },
      { step: "03. Molecular Target Impact", desc: "Blocks potassium efflux during phase 3 of cardiac action potential, compounding preexisting repolarization delay." },
      { step: "04. Pathological Convergence", desc: "Substantial elongation of the QT interval triggering early afterdepolarizations (EADs) and polymorphic Torsades de Pointes." },
      { step: "05. Organ-System Severity", desc: "Cardiovascular system: Fatal ventricular fibrillation and hemodynamic collapse." },
      { step: "06. Clinical Protocol", desc: "Avoid fluoroquinolones. Switch to beta-lactams or macrolides with low hERG affinity under continuous ECG monitoring." }
    ]
  },
  {
    drug: "Lisinopril",
    drugClass: "ACE Inhibitor",
    target: "Angiotensin-Converting Enzyme",
    disease: "Bilateral Renal Artery Stenosis",
    severity: "Acute Kidney Injury Risk",
    severityLevel: "high",
    dockingEnergy: "-8.1 kcal/mol",
    riskScore: "85%",
    stages: [
      { step: "01. Disease Pathophysiology", desc: "Severely restricted pre-glomerular blood flow requires Angiotensin II-mediated efferent arteriolar vasoconstriction to maintain GFR." },
      { step: "02. Drug Pharmacodynamics", desc: "Lisinopril suppresses conversion of Angiotensin I to Angiotensin II, abolishing efferent vasoconstrictive tone." },
      { step: "03. Molecular Target Impact", desc: "Efferent arteriole dilates rapidly, collapsing intraglomerular hydrostatic pressure gradients." },
      { step: "04. Pathological Convergence", desc: "Instantaneous plummet in filtration pressure leading to precipitous functional oliguria and acute renal failure." },
      { step: "05. Organ-System Severity", desc: "Renal system: Serum creatinine surges >50% within 48 hours of administration." },
      { step: "06. Clinical Protocol", desc: "Absolute contraindication. Utilize non-renin-angiotensin antihypertensives such as calcium channel blockers." }
    ]
  }
];

const BiolytixDemo: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = BIOLYTIX_DATA[selectedIndex];

  return (
    <div className="space-y-6">
      {/* Selector pills */}
      <div>
        <label className="text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-2">
          Select Clinical Drug–Disease Pair
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {BIOLYTIX_DATA.map((item, idx) => (
            <button
              key={item.drug}
              onClick={() => setSelectedIndex(idx)}
              className={`p-3 text-left rounded-xl border text-xs transition-all ${
                selectedIndex === idx
                  ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-sm'
                  : 'bg-neutral-800/60 border-neutral-700/60 text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <div className="font-semibold text-sm text-emerald-400 mb-0.5">{item.drug}</div>
              <div className="text-neutral-400 line-clamp-1">{item.disease}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <span className="text-xs text-neutral-400 block mb-1">Target Receptor</span>
          <span className="font-semibold text-neutral-200 text-sm">{current.target}</span>
          <span className="text-xs text-neutral-500 block mt-1">{current.drugClass}</span>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <span className="text-xs text-neutral-400 block mb-1">Docking Affinity (ΔG)</span>
          <span className="font-mono text-emerald-400 font-semibold text-sm">{current.dockingEnergy}</span>
          <span className="text-xs text-neutral-500 block mt-1">Calculated binding energy</span>
        </div>
        <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <span className="text-xs text-neutral-400 block mb-1">Contraindication Severity</span>
          <span className="font-semibold text-rose-400 text-sm flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            {current.severity}
          </span>
          <span className="text-xs text-neutral-500 block mt-1">Algorithmic risk score: {current.riskScore}</span>
        </div>
      </div>

      {/* 6-Stage Biological Explanation Framework */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-neutral-200 flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          Deterministic 6-Stage Biological Explanation Framework
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {current.stages.map((stage) => (
            <div key={stage.step} className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">{stage.step}</span>
              <p className="text-xs text-neutral-300 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- 2. QUANTUM SUPERPOSITION DEMO --- */
const QuantumDemo: React.FC = () => {
  const [alphaSquared, setAlphaSquared] = useState<number>(0.6); // |0> probability
  const [measurementState, setMeasurementState] = useState<'superposition' | '0' | '1'>('superposition');
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurementHistory, setMeasurementHistory] = useState<('0' | '1')[]>([]);

  const alpha = Math.sqrt(alphaSquared);
  const betaSquared = 1 - alphaSquared;
  const beta = Math.sqrt(betaSquared);

  const handleMeasure = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      const outcome = Math.random() < alphaSquared ? '0' : '1';
      setMeasurementState(outcome);
      setMeasurementHistory(prev => [outcome, ...prev.slice(0, 9)]);
      setIsMeasuring(false);
    }, 600);
  };

  const handleReset = () => {
    setMeasurementState('superposition');
  };

  return (
    <div className="space-y-6">
      {/* State Display Card */}
      <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-center relative overflow-hidden">
        <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
          State Vector Representation
        </div>
        <div className="font-mono text-xl sm:text-2xl text-emerald-400 font-bold py-2 tracking-wide">
          {measurementState === 'superposition' ? (
            <span>
              |ψ⟩ = {alpha.toFixed(3)} |0⟩ + {beta.toFixed(3)} |1⟩
            </span>
          ) : (
            <span className="text-amber-400">
              |ψ⟩ collapsed to state |{measurementState}⟩
            </span>
          )}
        </div>
        <div className="flex justify-center items-center gap-6 text-xs text-neutral-400 mt-2">
          <span>P(|0⟩) = |α|² = {(alphaSquared * 100).toFixed(1)}%</span>
          <span>·</span>
          <span>P(|1⟩) = |β|² = {(betaSquared * 100).toFixed(1)}%</span>
        </div>
      </div>

      {/* Amplitude Slider */}
      <div className="space-y-2 p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
        <div className="flex justify-between text-xs text-neutral-300 font-medium">
          <span>Superposition Weight: |0⟩ Bias</span>
          <span className="font-mono text-emerald-400">{(alphaSquared * 100).toFixed(0)}% / {((1 - alphaSquared) * 100).toFixed(0)}%</span>
        </div>
        <input
          type="range"
          min="0.01"
          max="0.99"
          step="0.01"
          value={alphaSquared}
          disabled={measurementState !== 'superposition'}
          onChange={(e) => setAlphaSquared(parseFloat(e.target.value))}
          className="w-full accent-emerald-500 cursor-pointer disabled:opacity-40"
        />
        <div className="flex justify-between text-[11px] text-neutral-500">
          <span>Pure |1⟩ state</span>
          <span>Equal Superposition (|0⟩ + |1⟩)/√2</span>
          <span>Pure |0⟩ state</span>
        </div>
      </div>

      {/* Visual Waveform Simulation (SVG) */}
      <div className="h-32 w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center p-3 relative overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Grid lines */}
          <line x1="0" y1="60" x2="600" y2="60" stroke="#333" strokeDasharray="4 4" strokeWidth="1" />
          
          {measurementState === 'superposition' ? (
            /* Render wave envelope */
            <path
              d={`M 0 60 Q 75 ${60 - alpha * 50} 150 60 T 300 60 T 450 60 T 600 60`}
              fill="none"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              className={isMeasuring ? 'animate-pulse' : ''}
            />
          ) : measurementState === '0' ? (
            /* Collapsed to state 0 */
            <path
              d="M 0 60 L 150 60 L 150 15 L 150 105 L 150 60 L 600 60"
              fill="none"
              stroke="#10B981"
              strokeWidth="4"
            />
          ) : (
            /* Collapsed to state 1 */
            <path
              d="M 0 60 L 450 60 L 450 15 L 450 105 L 450 60 L 600 60"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="4"
            />
          )}
        </svg>
        <span className="absolute bottom-2 right-3 text-[10px] font-mono text-neutral-500">
          {measurementState === 'superposition' ? 'Wave Function Active: Probability Density Wave' : `Eigenstate Collapsed to |${measurementState}⟩`}
        </span>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleMeasure}
          disabled={isMeasuring}
          className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {isMeasuring ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              Sampling Eigenstates...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              Perform Quantum Measurement
            </>
          )}
        </button>

        {measurementState !== 'superposition' && (
          <button
            onClick={handleReset}
            className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Restore Superposition
          </button>
        )}
      </div>

      {/* Historical Measurements */}
      {measurementHistory.length > 0 && (
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <span>Recent Outcomes:</span>
          <div className="flex items-center gap-1.5 font-mono">
            {measurementHistory.map((res, i) => (
              <span
                key={i}
                className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  res === '0' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}
              >
                |{res}⟩
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* --- 3. HOSTEL COMPATIBILITY DEMO --- */
const HostelDemo: React.FC = () => {
  const [answers, setAnswers] = useState({
    sleepSchedule: 'early', // early, moderate, night
    cleanliness: 'strict', // strict, moderate, relaxed
    studyStyle: 'silent', // silent, music, group
    socialPreference: 'quiet' // quiet, balanced, outgoing
  });

  // Calculate scores against 3 archetypes
  const calculateAffinity = () => {
    let scoreA = 70; // Priya (Disciplined Scholar)
    let scoreB = 75; // Ananya (Balanced Creator)
    let scoreC = 60; // Rhea (Social Night-Owl)

    if (answers.sleepSchedule === 'early') { scoreA += 18; scoreC -= 20; }
    if (answers.sleepSchedule === 'night') { scoreC += 25; scoreA -= 20; }
    if (answers.cleanliness === 'strict') { scoreA += 12; scoreC -= 10; }
    if (answers.studyStyle === 'silent') { scoreA += 10; scoreB += 5; scoreC -= 15; }
    if (answers.socialPreference === 'outgoing') { scoreC += 20; scoreA -= 10; scoreB += 10; }

    return [
      { name: "Priya S. (Computer Science)", compatibility: Math.min(Math.max(scoreA, 30), 98), style: "Disciplined, Early Riser, Deep Work" },
      { name: "Ananya M. (Information Science)", compatibility: Math.min(Math.max(scoreB, 40), 95), style: "Balanced Routine, Collaborative, Organized" },
      { name: "Rhea K. (Electronics & Comm)", compatibility: Math.min(Math.max(scoreC, 25), 92), style: "Night Owl, Energetic, Group Study" },
    ].sort((a, b) => b.compatibility - a.compatibility);
  };

  const results = calculateAffinity();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Question 1 */}
        <div className="p-3.5 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <label className="text-xs font-semibold text-neutral-300 block mb-2">1. Diurnal Sleep Routine</label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {[
              { id: 'early', label: '10 PM – 6 AM' },
              { id: 'moderate', label: '12 AM – 8 AM' },
              { id: 'night', label: '2 AM – 10 AM' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setAnswers(prev => ({ ...prev, sleepSchedule: opt.id }))}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  answers.sleepSchedule === opt.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2 */}
        <div className="p-3.5 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <label className="text-xs font-semibold text-neutral-300 block mb-2">2. Room Cleanliness Standard</label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {[
              { id: 'strict', label: 'Spotless / Daily' },
              { id: 'moderate', label: 'Organized / Tidy' },
              { id: 'relaxed', label: 'Casual / Weekly' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setAnswers(prev => ({ ...prev, cleanliness: opt.id }))}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  answers.cleanliness === opt.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3 */}
        <div className="p-3.5 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <label className="text-xs font-semibold text-neutral-300 block mb-2">3. Study Space Environment</label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {[
              { id: 'silent', label: 'Pin-drop Silence' },
              { id: 'music', label: 'Low Ambient' },
              { id: 'group', label: 'Discussion Friendly' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setAnswers(prev => ({ ...prev, studyStyle: opt.id }))}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  answers.studyStyle === opt.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 4 */}
        <div className="p-3.5 rounded-xl bg-neutral-800/40 border border-neutral-700/50">
          <label className="text-xs font-semibold text-neutral-300 block mb-2">4. Social Battery & Guest Policy</label>
          <div className="grid grid-cols-3 gap-1.5 text-xs">
            {[
              { id: 'quiet', label: 'Private Sanctuary' },
              { id: 'balanced', label: 'Balanced Social' },
              { id: 'outgoing', label: 'Open Door / Lively' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => setAnswers(prev => ({ ...prev, socialPreference: opt.id }))}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  answers.socialPreference === opt.id
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold'
                    : 'bg-neutral-800 border-neutral-700 text-neutral-400 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Algorithmic Match Report */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-neutral-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Algorithmic Pairwise Roommate Recommendations
        </h4>
        <div className="space-y-2">
          {results.map((res, i) => (
            <div
              key={res.name}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                i === 0
                  ? 'bg-emerald-500/10 border-emerald-500/40'
                  : 'bg-neutral-900/60 border-neutral-800'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-neutral-100">{res.name}</span>
                  {i === 0 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                      Optimal Match
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">{res.style}</div>
              </div>
              <div className="text-right">
                <span className="font-mono text-base font-bold text-emerald-400">{res.compatibility}%</span>
                <span className="text-[11px] text-neutral-500 block">Affinity Index</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
