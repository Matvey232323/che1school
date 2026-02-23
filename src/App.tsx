import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Sidebar } from './components/Sidebar';
import { GradesView } from './components/GradesView';
import { NewsView } from './components/NewsView';
import { ProfileView } from './components/ProfileView';
import { SettingsView } from './components/SettingsView';
import { LoginView } from './components/LoginView';
import { 
  Search, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight,
  Star,
  BookOpen,
  LayoutGrid,
  Calendar as CalendarIcon,
  Bell
} from 'lucide-react';

// Mock Data
const MOCK_GRADES = [
  { id: '1', subject: 'Математика', value: 11, date: '20.02', type: 'Поточна' },
  { id: '2', subject: 'Українська мова', value: 12, date: '19.02', type: 'Тематична' },
  { id: '3', subject: 'Фізика', value: 9, date: '18.02', type: 'Поточна' },
  { id: '4', subject: 'Історія', value: 10, date: '17.02', type: 'Поточна' },
];

const MOCK_SCHEDULE = [
  { id: '1', subject: 'Алгебра', time: '08:30 - 09:15', room: '302' },
  { id: '2', subject: 'Геометрія', time: '09:25 - 10:10', room: '302' },
  { id: '3', subject: 'Англійська мова', time: '10:30 - 11:15', room: '105' },
  { id: '4', subject: 'Фізика', time: '11:25 - 12:10', room: '401' },
  { id: '5', subject: 'Біологія', time: '12:30 - 13:15', room: '208' },
];

const StarsBackground = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 4 + 2}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
          } as any}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const filteredSchedule = MOCK_SCHEDULE.filter(item => 
    item.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGrades = MOCK_GRADES.filter(item => 
    item.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen text-white selection:bg-white/20 relative">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && !isLoggedIn && (
          <LoginView key="login" onLogin={() => setIsLoggedIn(true)} />
        )}
      </AnimatePresence>

      <StarsBackground />

      <div className="max-w-7xl mx-auto flex relative z-10">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 min-h-screen border-r border-white/10">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-black/60 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">
              {activeTab === 'dashboard' && 'Головна'}
              {activeTab === 'schedule' && 'Розклад'}
              {activeTab === 'grades' && 'Журнал'}
              {activeTab === 'news' && 'Новини'}
              {activeTab === 'profile' && 'Профіль'}
              {activeTab === 'settings' && 'Налаштування'}
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Пошук..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-white/30 transition-all w-64"
                />
              </div>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border flex items-center justify-center overflow-hidden transition-all ${activeTab === 'profile' ? 'border-white scale-110' : 'border-white/10'}`}
              >
                <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" referrerPolicy="no-referrer" />
              </button>
            </div>
          </header>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div 
                  key="dashboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Welcome Card */}
                  <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden">
                    <h1 className="text-3xl font-black mb-1">Вітаємо, Олександре!</h1>
                    <p className="text-white/40">Сьогодні у вас 5 уроків. Наступний — Алгебра.</p>
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Today's Schedule */}
                    <section>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white/60">
                        <Clock className="w-4 h-4" />
                        Розклад
                      </h3>
                      <div className="space-y-2">
                        {filteredSchedule.slice(0, 3).map((item, idx) => (
                          <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all">
                            <div className="flex items-center gap-4">
                              <span className="text-white/20 font-mono">{idx + 1}</span>
                              <div>
                                <p className="font-bold text-sm">{item.subject}</p>
                                <p className="text-xs text-white/40">{item.time}</p>
                              </div>
                            </div>
                            <span className="text-xs text-white/20">Каб. {item.room}</span>
                          </div>
                        ))}
                        {filteredSchedule.length === 0 && <p className="text-white/20 text-sm p-4">Нічого не знайдено</p>}
                      </div>
                    </section>

                    {/* Quick Grades */}
                    <section>
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white/60">
                        <TrendingUp className="w-4 h-4" />
                        Останні оцінки
                      </h3>
                      <div className="space-y-2">
                        {filteredGrades.slice(0, 3).map((grade) => (
                          <div key={grade.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all">
                            <div>
                              <p className="font-bold text-sm">{grade.subject}</p>
                              <p className="text-xs text-white/40">{grade.date}</p>
                            </div>
                            <span className="text-lg font-black text-white/60">
                              {grade.value}
                            </span>
                          </div>
                        ))}
                        {filteredGrades.length === 0 && <p className="text-white/20 text-sm p-4">Нічого не знайдено</p>}
                      </div>
                    </section>
                  </div>
                </motion.div>
              )}

              {activeTab === 'grades' && <GradesView key="grades" />}
              {activeTab === 'news' && <NewsView key="news" />}
              {activeTab === 'profile' && <ProfileView key="profile" />}
              {activeTab === 'settings' && <SettingsView key="settings" />}
              
              {activeTab === 'schedule' && (
                <motion.div 
                  key="schedule"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  {MOCK_SCHEDULE.map((item, idx) => (
                    <div key={item.id} className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-black text-white/10">{idx + 1}</span>
                        <div>
                          <h4 className="text-lg font-bold">{item.subject}</h4>
                          <p className="text-sm text-white/40">{item.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/40 uppercase tracking-widest">Кабінет</p>
                        <p className="text-xl font-black">{item.room}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Minimal Right Panel */}
        <aside className="hidden xl:block w-80 p-6 space-y-6">
          <div className="p-6 rounded-[32px] bg-white/5 border border-white/10">
            <h3 className="text-lg font-bold mb-4">Статистика</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">Середній бал</span>
                <span className="font-black">10.8</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-white" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/40">Прогрес</span>
                <span className="font-black text-emerald-400">+12%</span>
              </div>
            </div>
          </div>

          <footer className="px-4 text-[11px] text-white/40 flex flex-wrap gap-x-3 gap-y-1">
            <span>© 2026 SAVIARDE</span>
            <span>Конфіденційність</span>
          </footer>
        </aside>
      </div>
    </div>
  );
}
