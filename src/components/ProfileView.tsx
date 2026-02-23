import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Shield, Smartphone, Globe, Bell } from 'lucide-react';

export const ProfileView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
        <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/5 mb-4 overflow-hidden">
          <img src="https://picsum.photos/seed/user/200/200" alt="Profile" referrerPolicy="no-referrer" />
        </div>
        <h2 className="text-2xl font-black">Олександр Савіарде</h2>
        <p className="text-white/40">Учень 11-А класу</p>
        <div className="mt-6 flex gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase text-white/40">Середній бал</p>
            <p className="text-xl font-black">10.8</p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase text-white/40">Відвідуваність</p>
            <p className="text-xl font-black">98%</p>
          </div>
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="mt-8 px-8 py-3 rounded-2xl bg-white text-black font-black hover:bg-white/90 transition-all flex items-center gap-2"
        >
          Вийти з аккаунту
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold px-2">Особиста інформація</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Mail, label: 'Email', value: 'sav@school.edu.ua' },
            { icon: Smartphone, label: 'Телефон', value: '+380 99 123 45 67' },
            { icon: Shield, label: 'ID Учня', value: 'ID-2026-0042' },
            { icon: Globe, label: 'Мова', value: 'Українська' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white/40" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40">{item.label}</p>
                <p className="font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
