import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar as CalendarIcon } from 'lucide-react';

const MOCK_NEWS = [
  {
    id: '1',
    title: 'Весняний бал 2026',
    excerpt: 'Запрошуємо всіх учнів на щорічний весняний бал, який відбудеться 20 березня...',
    date: '23.02.2026',
    image: 'https://picsum.photos/seed/ball/800/400'
  },
  {
    id: '2',
    title: 'Перемога в олімпіаді',
    excerpt: 'Наші учні посіли перше місце на міській олімпіаді з інформатики!',
    date: '21.02.2026',
    image: 'https://picsum.photos/seed/win/800/400'
  },
  {
    id: '3',
    title: 'Оновлення меню в їдальні',
    excerpt: 'З наступного тижня в меню з\'являться нові корисні страви та напої.',
    date: '19.02.2026',
    image: 'https://picsum.photos/seed/food/800/400'
  }
];

export const NewsView: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {MOCK_NEWS.map((news) => (
        <div key={news.id} className="group cursor-pointer rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all overflow-hidden">
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={news.image} 
              alt={news.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
              <CalendarIcon className="w-3 h-3" />
              {news.date}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{news.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{news.excerpt}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
