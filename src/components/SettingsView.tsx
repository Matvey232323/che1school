import React from 'react';
import { motion } from 'motion/react';
import { Moon, Sun, Bell, Lock, Eye, Languages } from 'lucide-react';

export const SettingsView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-bold px-2">Інтерфейс</h3>
        <div className="space-y-1">
          {[
            { icon: Moon, label: 'Темна тема', value: 'Увімкнено', active: true },
            { icon: Languages, label: 'Мова інтерфейсу', value: 'Українська', active: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5 text-white/40" />
                <span>{item.label}</span>
              </div>
              <span className="text-sm text-white/40">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold px-2">Безпека та приватність</h3>
        <div className="space-y-1">
          {[
            { icon: Lock, label: 'Змінити пароль', value: '', active: false },
            { icon: Eye, label: 'Показувати оцінки батькам', value: 'Так', active: true },
            { icon: Bell, label: 'Сповіщення про нові оцінки', value: 'Увімкнено', active: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5 text-white/40" />
                <span>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.value && <span className="text-sm text-white/40">{item.value}</span>}
                <div className={`w-10 h-5 rounded-full p-1 transition-all ${item.active ? 'bg-white' : 'bg-white/10'}`}>
                  <div className={`w-3 h-3 rounded-full ${item.active ? 'bg-black ml-auto' : 'bg-white/40'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
