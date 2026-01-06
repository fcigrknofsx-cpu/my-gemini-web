
import React, { useState, useMemo } from 'react';
import { AppView, ScentType, Option, ScenarioRecommendation, SubConsultation } from './types';
import { QUESTIONS } from './questions';
import { SCENT_PROFILES } from './constants';
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Heart,
  ChevronLeft,
  ChevronRight,
  Info,
  BarChart3,
  MapPin,
  Compass,
  MessageCircle,
  Zap,
  ShieldAlert,
  X,
  Droplets,
  BookOpen,
  Wind,
  Layers
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('HOME');
  const [subConsult, setSubConsult] = useState<SubConsultation>('NONE');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<ScentType[]>([]);
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  const handleStart = () => {
    setAnswers([]);
    setCurrentIdx(0);
    setSubConsult('NONE');
    setView('QUIZ');
  };

  const handleSelect = (type: ScentType) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = type;
    setAnswers(newAnswers);
    
    if (currentIdx < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentIdx(currentIdx + 1), 300);
    } else {
      setView('RESULT');
    }
  };

  const stats = useMemo(() => {
    const result: Record<ScentType, { count: number; ids: number[] }> = {
      [ScentType.WOODY]: { count: 0, ids: [] },
      [ScentType.FLORAL]: { count: 0, ids: [] },
      [ScentType.FRUITY]: { count: 0, ids: [] },
      [ScentType.AQUATIC]: { count: 0, ids: [] },
      [ScentType.HERBAL]: { count: 0, ids: [] },
      [ScentType.ORIENTAL]: { count: 0, ids: [] },
    };
    
    answers.forEach((type, idx) => {
      if (result[type]) {
        result[type].count++;
        result[type].ids.push(idx + 1);
      }
    });
    return result;
  }, [answers]);

  const dominantType = useMemo(() => {
    const entries = Object.entries(stats) as [ScentType, { count: number }][];
    return entries.reduce((a, b) => b[1].count > a[1].count ? b : a)[0];
  }, [stats]);

  const secondaryTypes = useMemo(() => {
    const entries = Object.entries(stats) as [ScentType, { count: number }][];
    return entries
      .filter(([type]) => type !== dominantType)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 2)
      .map(([type]) => type);
  }, [stats, dominantType]);

  const renderHome = () => (
    <div className="min-h-screen pb-12 fade-in">
      <div className="relative h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-30"
            alt="background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fdfbf7]"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl">
          <div className="mb-4 text-amber-600 font-medium tracking-[0.3em] text-xs uppercase">The Art of Olfaction</div>
          <h1 className="serif-font text-5xl md:text-8xl font-bold mb-8 text-slate-900 tracking-tight leading-none">
            🔮 香气人格测试
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            探寻隐藏在感官深处的灵魂共鸣，寻觅属于你的本命气息。
          </p>
          <button 
            onClick={handleStart}
            className="group flex items-center space-x-4 bg-slate-900 text-white px-12 py-6 rounded-full text-lg font-medium hover:bg-slate-800 transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            <span className="tracking-widest">立即开启测评</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-10 relative z-20">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:shadow-2xl transition-all duration-500 group">
          <Sparkles className="w-12 h-12 text-amber-500 mb-8 group-hover:rotate-12 transition-transform" />
          <h3 className="serif-font text-2xl font-bold mb-6 text-slate-900">适用人群</h3>
          <ul className="space-y-4 text-slate-500 text-sm leading-relaxed">
            <li><strong>• 香水新手：</strong> 找准属于自己的木质、花香或果香大方向。</li>
            <li><strong>• 自我探索：</strong> 从感官角度解锁未曾察觉的人格维度。</li>
            <li><strong>• 送礼需求：</strong> 精准匹配对方喜好，避免“送错香”的尴尬。</li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 md:col-span-2 hover:shadow-2xl transition-all duration-500 group">
          <Info className="w-12 h-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="serif-font text-2xl font-bold mb-6 text-slate-900">注意事项</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-500">
            <p className="leading-relaxed">1. <strong>凭直觉：</strong> 遵循第一反应选择，真实的偏好才能反映最贴切的灵魂底色。</p>
            <p className="leading-relaxed">2. <strong>单选为准：</strong> 若两个都想选，优先选择让你更有共鸣的那一项。</p>
            <p className="leading-relaxed">3. <strong>动态变化：</strong> 人格随成长阶段变化，测试结果也会动态调整。</p>
            <p className="leading-relaxed">4. <strong>审美多元：</strong> 结果为参考，喜爱是唯一标准，建议先试用小样。</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = QUESTIONS[currentIdx];
    const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

    return (
      <div className="min-h-screen bg-[#fdfbf7] py-12 px-6 flex flex-col items-center fade-in">
        <div className="w-full max-w-2xl mb-16">
          <div className="flex justify-between items-end mb-6">
            <span className="text-xs font-bold text-amber-600 tracking-[0.2em] uppercase">{q.section}</span>
            <div className="text-sm font-bold text-slate-900 font-mono">{currentIdx + 1} / {QUESTIONS.length}</div>
          </div>
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-slate-900 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] p-10 md:p-20 mb-12 min-h-[500px] flex flex-col justify-center border border-slate-50 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
             <Layers className="w-32 h-32" />
           </div>
          <h2 className="serif-font text-3xl md:text-4xl font-bold mb-16 text-slate-900 leading-snug relative z-10">
            {q.text}
          </h2>
          <div className="space-y-5 relative z-10">
            {q.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.type)}
                className="w-full text-left p-8 rounded-[1.5rem] border-2 border-slate-50 bg-slate-50 hover:border-slate-900 hover:bg-white transition-all duration-300 group flex items-center justify-between shadow-sm hover:shadow-md"
              >
                <span className="text-xl font-medium text-slate-600 group-hover:text-slate-900">{opt.text}</span>
                <div className="w-7 h-7 rounded-full border-2 border-slate-200 group-hover:border-slate-900 flex items-center justify-center transition-colors">
                  <div className="w-3 h-3 bg-slate-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(currentIdx - 1)}
          className="flex items-center space-x-2 text-slate-400 hover:text-slate-900 transition-colors disabled:opacity-0 font-medium"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>回顾上一题</span>
        </button>
      </div>
    );
  };

  const renderSubConsultation = () => {
    if (subConsult === 'NONE') return null;

    const content = subConsult === 'DISLIKE_STRONG' ? {
      title: '避雷深度分析：不喜欢“太冲”的味道',
      intro: '既然你不喜欢“太冲”的气味（指攻击性强的浓烈香辛料、刺鼻酒精感或压迫感强的浓郁花香），这非常符合你“清冷知性”的底色。',
      advice: '你适合极其柔和、贴肤、且毫无攻击性的香水，它们就像你皮肤上自然散发的第二层气息。',
      items: [
        {
          tag: '寻找“洁净感”',
          title: '杜嘉班纳 (D&G) —— 浅蓝 (Light Blue)',
          reason: '温润的西西里柠檬搭配清爽青苹果，随后转入干净的雪松底色。像阳光下晒干的白衬衫。',
          image: 'https://images.unsplash.com/photo-1512568400610-64da28afce8a?auto=format&fit=crop&q=80&w=600',
          icon: <Droplets className="w-5 h-5" />
        },
        {
          tag: '寻找“书卷气”',
          title: '香露特 (Diptyque) —— 纸上 (L\'Eau Papier)',
          reason: '模拟墨水接触纸张的一瞬间。淡淡米香结合白麝香，轻盈且知性，完全没有浓重香水味。',
          image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600',
          icon: <BookOpen className="w-5 h-5" />
        },
        {
          tag: '寻找“禅意”',
          title: '阿玛尼 (Armani) —— 玉龙茶香 (Thé Yulong)',
          reason: '柑橘、红茶与绿茶的平衡。茶香向内“沉”，能让你周围空气瞬间安静，衬托疏离感。',
          image: 'https://images.unsplash.com/photo-1590156221122-c74644d6b56b?auto=format&fit=crop&q=80&w=600',
          icon: <Wind className="w-5 h-5" />
        }
      ],
      avoid: [
        '皮革调 (Leather)：往往带有烟熏火燎的沉重感，对你来说太压抑。',
        '浓郁东方调：含大量辛香料（胡椒、肉桂），容易感到“辣”或“晕”。',
        '白花系 (Heavy White Floral)：浓郁的栀子、晚香玉，容易让人头晕不适。'
      ]
    } : {
      title: '避雷深度分析：如何避雷“粉感”',
      intro: '排斥粉感意味着你追求极高的透明度与水分感。那种“老式化妆品粉盒”或“干燥绒毛感”的气息会打破你的清冷美学。',
      advice: '建议避开那些带有颗粒感的成分，寻找那些清透、绿意或具有现代水生质感的作品。',
      items: [
        {
          tag: '寻找“水感透明”',
          title: '拜里朵 (Byredo) —— 纯真年代 (Blanche)',
          reason: '极致纯净的皂感，像被冷水彻底洗涤过的质感，剔除了所有粘稠的粉质。',
          image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600',
          icon: <Droplets className="w-5 h-5" />
        },
        {
          tag: '寻找“绿意森系”',
          title: '爱马仕 (Hermès) —— 尼罗河花园',
          reason: '极具生命力的葡萄柚与青芒果，随后是莲花般的水润感，清爽干练。',
          image: 'https://images.unsplash.com/photo-1590156221122-c74644d6b56b?auto=format&fit=crop&q=80&w=600',
          icon: <Wind className="w-5 h-5" />
        },
        {
          tag: '寻找“新鲜果香”',
          title: '欧珑 (Atelier Cologne) —— 赤霞橘光',
          reason: '高度还原的橘子汁水，纯粹、多汁、酸甜，这种液态感与干燥粉感完全对立。',
          image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600',
          icon: <Sparkles className="w-5 h-5" />
        }
      ],
      avoid: [
        '鸢尾花 (Iris)：典型的粉末感来源，带有一种干爽的泥土化妆粉味。',
        '紫罗兰 (Violet)：甜度较高且带有绒毛感的粉味。',
        '天芥菜 (Heliotrope)：带有杏仁感的厚重奶粉感。'
      ]
    };

    return (
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md fade-in">
        <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl border border-slate-100 p-8 md:p-14 relative no-scrollbar">
          <button 
            onClick={() => setSubConsult('NONE')}
            className="absolute top-8 right-8 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center hover:bg-slate-100 transition-all"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>

          <div className="flex items-center space-x-4 mb-10">
            <ShieldAlert className="w-10 h-10 text-amber-500" />
            <h2 className="serif-font text-3xl font-bold text-slate-900">{content.title}</h2>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed mb-12">
            <p className="text-xl font-medium text-slate-800 border-l-4 border-amber-500 pl-6 italic">{content.intro}</p>
            <p className="text-lg">{content.advice}</p>

            <div className="grid grid-cols-1 gap-6">
              {content.items.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-amber-600 font-bold text-[10px] tracking-widest uppercase mb-2">
                        {item.icon}
                        <span>{item.tag}</span>
                      </div>
                      <h4 className="serif-font text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-slate-500">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-rose-50 rounded-[2.5rem] p-10 border border-rose-100">
              <h3 className="serif-font text-xl font-bold text-rose-900 mb-6">🚫 你的避雷清单（建议避开）</h3>
              <ul className="space-y-4">
                {content.avoid.map((a, i) => (
                  <li key={i} className="flex items-start space-x-3 text-rose-800 text-sm">
                    <span className="font-bold text-rose-400 mt-1">•</span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button 
            onClick={() => setSubConsult('NONE')}
            className="w-full bg-slate-900 text-white py-6 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all text-lg tracking-widest"
          >
            我已知晓
          </button>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const profile = SCENT_PROFILES[dominantType] || SCENT_PROFILES[ScentType.AQUATIC];
    
    return (
      <div className="min-h-screen bg-[#fdfbf7] pb-24 fade-in">
        {renderSubConsultation()}

        {/* Hero Section */}
        <div className="bg-slate-900 text-white pt-32 pb-48 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-blue-400 rounded-full blur-[150px]"></div>
            <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-amber-400 rounded-full blur-[150px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center space-x-3 px-6 py-2 bg-white/5 rounded-full text-xs font-bold tracking-[0.3em] mb-12 border border-white/10 uppercase">
              <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Personality Analysis</span>
            </div>
            <h1 className="text-2xl font-light opacity-60 mb-6 tracking-[0.5em] uppercase">你的本命香气人格</h1>
            <div className="serif-font text-6xl md:text-9xl font-bold mb-12 tracking-tight">
              【{profile.name}】
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {profile.traits.map(t => (
                <span key={t} className="px-8 py-3 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto -mt-32 px-6 relative z-20 space-y-12">
          {/* Stats */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-50">
            <div className="flex items-center space-x-4 mb-12 border-b border-slate-50 pb-8">
              <BarChart3 className="w-8 h-8 text-slate-300" />
              <h2 className="serif-font text-3xl font-bold text-slate-900">📊 选项频次统计</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {(Object.entries(stats) as [ScentType, { count: number; ids: number[] }][]).map(([type, data]) => (
                <div key={type} className="flex flex-col group">
                  <div className="flex justify-between items-end mb-4">
                    <span className={`font-bold tracking-widest ${type === dominantType ? 'text-slate-900' : 'text-slate-400'}`}>{type}</span>
                    <span className="text-sm font-mono text-slate-400">{data.count} / 40</span>
                  </div>
                  <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-[2s] ease-out ${type === dominantType ? 'bg-slate-900' : 'bg-slate-200'}`} 
                      style={{ width: `${(data.count / 40) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-2 font-mono tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    Question IDs: {data.ids.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Persona */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-50">
            <div className="flex items-center space-x-4 mb-10">
              <Heart className="w-10 h-10 text-rose-400" />
              <h2 className="serif-font text-3xl font-bold text-slate-900">🧪 人格画像分析</h2>
            </div>
            <div className="prose prose-slate max-w-none text-slate-600 leading-loose text-xl">
              <p className="mb-10 font-light">
                你的测试结果分布呈现出极富层次的平衡。核心特质上，
                <strong className="text-slate-900 font-bold tracking-wider">“{dominantType}”</strong> 拥有绝对统治力，这定义了你最纯粹的灵魂色调。
                而在潜意识中，你还融合了 
                {secondaryTypes.map(t => <span key={t} className="font-bold text-slate-800 mx-1 underline decoration-slate-200 decoration-4 underline-offset-8">“{t}”</span>).reduce((prev, curr) => [prev, ' 与 ', curr])} 的深度。
              </p>
              <div className="bg-slate-50 p-12 rounded-[2.5rem] border-l-[6px] border-slate-900 italic text-slate-700 leading-relaxed font-serif shadow-inner">
                {profile.description}
              </div>
            </div>
          </div>

          {/* Tiered Recommendations */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-50">
            <div className="flex items-center space-x-4 mb-16">
              <Palette className="w-10 h-10 text-blue-400" />
              <h2 className="serif-font text-3xl font-bold text-slate-900">🕯️ 选香建议与本命推荐</h2>
            </div>
            
            <p className="text-slate-500 mb-20 text-center text-xl max-w-2xl mx-auto font-light leading-relaxed">
              你适合的香水不应是甜腻或浓烈的，而应该是<span className="text-slate-900 font-medium px-2">通透、有空气感、带有一定基调支撑</span>的气味。
            </p>

            <div className="space-y-24">
              {/* Soul Mate */}
              <section>
                <div className="flex items-center space-x-6 mb-12">
                  <div className="h-px flex-1 bg-slate-100"></div>
                  <h3 className="serif-font text-2xl font-bold text-slate-300 tracking-widest uppercase text-center">1. 灵魂本命：清冷水生/皂感调</h3>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {profile.soulMate.map((rec, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                      <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-md">
                        <img src={rec.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" alt={rec.name} />
                      </div>
                      <div className="text-xs font-bold text-amber-600 mb-2 tracking-[0.3em] uppercase">{rec.brand}</div>
                      <h4 className="serif-font text-2xl font-bold mb-4 text-slate-900">{rec.name}</h4>
                      <div className="text-slate-500 text-sm leading-relaxed"><span className="font-bold text-slate-900 block mb-1">推荐理由：</span>{rec.reason}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Advanced Try */}
              <section>
                <div className="flex items-center space-x-6 mb-12">
                  <div className="h-px flex-1 bg-slate-100"></div>
                  <h3 className="serif-font text-2xl font-bold text-slate-300 tracking-widest uppercase text-center">2. 进阶尝试：知性木质/东方调</h3>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {profile.advancedTry.map((rec, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                      <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-md">
                        <img src={rec.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" alt={rec.name} />
                      </div>
                      <div className="text-xs font-bold text-amber-600 mb-2 tracking-[0.3em] uppercase">{rec.brand}</div>
                      <h4 className="serif-font text-2xl font-bold mb-4 text-slate-900">{rec.name}</h4>
                      <div className="text-slate-500 text-sm leading-relaxed"><span className="font-bold text-slate-900 block mb-1">推荐理由：</span>{rec.reason}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Surprise Mix */}
              <section>
                <div className="flex items-center space-x-6 mb-12">
                  <div className="h-px flex-1 bg-slate-100"></div>
                  <h3 className="serif-font text-2xl font-bold text-slate-300 tracking-widest uppercase text-center">3. 惊喜混搭：休闲草本/果香</h3>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {profile.surpriseMix.map((rec, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                      <div className="aspect-square rounded-3xl overflow-hidden mb-8 shadow-md">
                        <img src={rec.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]" alt={rec.name} />
                      </div>
                      <div className="text-xs font-bold text-amber-600 mb-2 tracking-[0.3em] uppercase">{rec.brand}</div>
                      <h4 className="serif-font text-2xl font-bold mb-4 text-slate-900">{rec.name}</h4>
                      <div className="text-slate-500 text-sm leading-relaxed"><span className="font-bold text-slate-900 block mb-1">推荐理由：</span>{rec.reason}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Scenarios */}
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-50">
            <div className="flex items-center space-x-4 mb-12">
              <Compass className="w-10 h-10 text-emerald-500" />
              <h2 className="serif-font text-3xl font-bold text-slate-900">🗺️ 场景化细化推荐</h2>
            </div>
            <p className="text-slate-500 mb-12 text-xl font-light leading-relaxed">
              既然你的性格底色是<strong className="text-slate-900 px-2 tracking-widest">“{profile.name}”</strong>，在不同场景下，香水应当发挥其“放大”特质的作用。
            </p>
            
            <div className="flex overflow-x-auto space-x-6 mb-16 pb-6 no-scrollbar">
              {profile.scenarios.map((s, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveScenario(i)}
                  className={`px-10 py-5 rounded-full whitespace-nowrap font-bold tracking-widest transition-all duration-500 border-2 
                    ${activeScenario === i ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105' : 'bg-slate-50 text-slate-400 border-transparent hover:bg-slate-100'}`}
                >
                  {s.title.split('/')[0]}
                </button>
              ))}
            </div>

            {activeScenario !== null ? (
              <div className="bg-slate-50 p-12 rounded-[3rem] fade-in border border-slate-100 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <Compass className="w-48 h-48" />
                </div>
                <div className="text-sm font-bold text-emerald-600 mb-4 tracking-[0.2em] uppercase">{profile.scenarios[activeScenario].tag}</div>
                <h4 className="serif-font text-3xl font-bold mb-10 text-slate-900">{profile.scenarios[activeScenario].title}</h4>
                
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="w-full lg:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shrink-0 group">
                    <img 
                      src={profile.scenarios[activeScenario].image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                      alt={profile.scenarios[activeScenario].perfume} 
                    />
                  </div>
                  <div className="flex-1 grid grid-cols-1 gap-10 text-slate-600">
                    <div className="space-y-8">
                      <div className="flex items-start space-x-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">🎯</div>
                        <div><span className="font-bold text-slate-900 block mb-1 tracking-wider uppercase text-xs opacity-50">选香策略</span><span className="text-lg leading-relaxed">{profile.scenarios[activeScenario].strategy}</span></div>
                      </div>
                      <div className="flex items-start space-x-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">✨</div>
                        <div><span className="font-bold text-slate-900 block mb-1 tracking-wider uppercase text-xs opacity-50">本命推荐</span><span className="text-xl font-bold text-emerald-700">{profile.scenarios[activeScenario].brand} —— {profile.scenarios[activeScenario].perfume}</span></div>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">🧪</div>
                        <div><span className="font-bold text-slate-900 block mb-1 tracking-wider uppercase text-xs opacity-50">气质适配</span><span className="text-lg leading-relaxed">{profile.scenarios[activeScenario].fit}</span></div>
                      </div>
                      <div className="flex items-start space-x-5">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">🚀</div>
                        <div><span className="font-bold text-slate-900 block mb-1 tracking-wider uppercase text-xs opacity-50">预期效果</span><span className="text-lg leading-relaxed">{profile.scenarios[activeScenario].effect}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-72 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-[3rem] text-slate-300 group">
                <MapPin className="w-16 h-16 mb-6 opacity-10 group-hover:scale-110 transition-transform" />
                <p className="tracking-widest font-light text-lg">点击上方标签，解锁不同生活维度的感官灵感</p>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="bg-amber-50 rounded-[3rem] p-12 md:p-16 border border-amber-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 text-amber-100/30 group-hover:scale-125 transition-transform duration-1000">
               <Sparkles className="w-48 h-48" />
            </div>
            <h3 className="serif-font text-3xl font-bold mb-8 flex items-center space-x-4">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <span>专家选香小贴士</span>
            </h3>
            <div className="space-y-8 text-slate-700 leading-loose text-xl max-w-3xl relative z-10 font-light">
              <p>考虑到你性格中的<strong className="font-bold">“极简”</strong>与<strong className="font-bold">“疏离”</strong>，建议采用<strong className="text-amber-800 underline decoration-amber-200 decoration-[6px] underline-offset-8">“香水雨”喷法</strong>：</p>
              <ul className="space-y-6 opacity-80 pl-2">
                <li className="flex items-start space-x-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <span>将香水向空中喷洒后，在香雾落下前走入其中，使香气均匀附着。</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="mt-2 w-2 h-2 rounded-full bg-amber-400"></div>
                  <span>这种“伪体香”的质感最能完美展现你那种“不费力的高级感”。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Footer */}
          <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            
            <div className="flex items-center space-x-6 mb-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-2xl tracking-wider">深度个性化咨询</h4>
                <p className="text-white/40 text-sm tracking-[0.4em] uppercase">Private Scent Concierge</p>
              </div>
            </div>
            
            <p className="text-2xl text-white/80 mb-16 leading-relaxed max-w-3xl font-light">
              你想让我为你针对某个特定的生活场景再细化推荐一款香水吗？
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => setSubConsult('DISLIKE_STRONG')}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 rounded-full text-sm font-bold tracking-widest transition-all border border-white/10 hover:border-white/30"
              >
                告诉我不喜欢的味道 (如：太冲)
              </button>
              <button 
                onClick={() => setSubConsult('AVOID_POWDERY')}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 rounded-full text-sm font-bold tracking-widest transition-all border border-white/10 hover:border-white/30"
              >
                如何避雷“粉感”香？
              </button>
              <button 
                onClick={() => setView('HOME')}
                className="px-12 py-5 bg-white text-slate-900 rounded-full text-sm font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all tracking-widest"
              >
                重置测评
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      {view === 'HOME' && renderHome()}
      {view === 'QUIZ' && renderQuiz()}
      {view === 'RESULT' && renderResult()}
    </div>
  );
};

export default App;
