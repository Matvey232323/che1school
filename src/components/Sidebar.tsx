import React from 'react';
import { 
  Home, 
  Calendar, 
  GraduationCap, 
  BookOpen, 
  User, 
  Bell, 
  Settings,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Головна' },
  { id: 'grades', icon: GraduationCap, label: 'Журнал' },
  { id: 'schedule', icon: Calendar, label: 'Розклад' },
  { id: 'news', icon: Bell, label: 'Новини' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-20 lg:w-64 h-screen sticky top-0 border-r border-white/10 flex flex-col py-6 px-4">
      <div className="mb-10 px-2">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          S.
        </motion.div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-full transition-all duration-200 group ${
              activeTab === item.id 
                ? 'bg-white/10 text-white font-bold' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
            <span className="hidden lg:block text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10 space-y-2">
        <button 
          onClick={() => setActiveTab('settings')}
          className={`w-full flex items-center gap-4 p-3 rounded-full transition-all ${
            activeTab === 'settings' 
              ? 'bg-white/10 text-white font-bold' 
              : 'text-white/60 hover:bg-white/5 hover:text-white'
          }`}
        >
          <Settings className="w-6 h-6" />
          <span className="hidden lg:block text-lg">Налаштування</span>
        </button>
      </div>
    </div>
  );
};
