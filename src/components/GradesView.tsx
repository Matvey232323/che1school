import React from 'react';
import { motion } from 'motion/react';

interface GradeEntry {
  subject: string;
  grades: { value: number; date: string; type: string }[];
}

const MOCK_JOURNAL: GradeEntry[] = [
  {
    subject: 'Математика',
    grades: [
      { value: 11, date: '20.02', type: 'Поточна' },
      { value: 10, date: '15.02', type: 'Поточна' },
      { value: 12, date: '10.02', type: 'Тематична' },
    ]
  },
  {
    subject: 'Українська мова',
    grades: [
      { value: 12, date: '19.02', type: 'Тематична' },
      { value: 11, date: '14.02', type: 'Поточна' },
    ]
  },
  {
    subject: 'Фізика',
    grades: [
      { value: 9, date: '18.02', type: 'Поточна' },
      { value: 8, date: '11.02', type: 'Поточна' },
    ]
  },
  {
    subject: 'Історія',
    grades: [
      { value: 10, date: '17.02', type: 'Поточна' },
      { value: 12, date: '05.02', type: 'Поточна' },
    ]
  },
  {
    subject: 'Англійська мова',
    grades: [
      { value: 11, date: '16.02', type: 'Поточна' },
      { value: 12, date: '09.02', type: 'Поточна' },
    ]
  }
];

export const GradesView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      {MOCK_JOURNAL.map((item, idx) => {
        const avg = (item.grades.reduce((acc, g) => acc + g.value, 0) / item.grades.length).toFixed(1);
        return (
          <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{item.subject}</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest mt-1">Середній бал: {avg}</p>
              </div>
              <div className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                {avg}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {item.grades.map((grade, gIdx) => (
                <div 
                  key={gIdx} 
                  className="relative group/grade"
                >
                  <div className={`w-12 h-12 rounded-2xl flex flex-col items-center justify-center border transition-all ${
                    grade.value >= 10 
                      ? 'bg-white/10 border-white/20 text-white' 
                      : 'bg-white/5 border-white/10 text-white/60'
                  }`}>
                    <span className="text-lg font-black leading-none">{grade.value}</span>
                    <span className="text-[8px] mt-1 opacity-40">{grade.date}</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-white text-black text-[10px] font-bold rounded-lg opacity-0 group-hover/grade:opacity-100 transition-all scale-90 group-hover/grade:scale-100 whitespace-nowrap pointer-events-none z-20 shadow-xl">
                    {grade.type}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
