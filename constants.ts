
import { ScentType, ResultProfile } from './types';

export const SCENT_PROFILES: Record<ScentType, ResultProfile> = {
  [ScentType.AQUATIC]: {
    name: '疏离旅人',
    type: ScentType.AQUATIC,
    traits: ['极简主义', '精神自由', '拥有深刻的内在世界'],
    description: '你就像是一片平静深邃的海域，表面看起来极简、冷静、有边界感，甚至带有一种淡淡的疏离感，不轻易随波逐流。但深入接触后，别人会发现你内心有着极强的逻辑性与秩序感，以及对生命本质、灵魂契合度的深度思考。',
    soulMate: [
      {
        brand: '三宅一生 (Issey Miyake)',
        name: '一生之水 (L\'Eau d\'Issey)',
        reason: '极简的水生花香，像清晨的泉水，纯净且不带侵略性。',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600'
      },
      {
        brand: '拜里朵 (Byredo)',
        name: '无人区玫瑰 (Rose Of No Man\'s Land)',
        reason: '虽有玫瑰名，却冷冽、干净，有一种在荒野中独立生长的坚韧感。',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [
      {
        brand: '爱马仕 (Hermès)',
        name: '大地 (Terre d\'Hermès)',
        reason: '木质与矿物的结合，沉稳且有边界感。',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600'
      },
      {
        brand: '汤姆·福特 (Tom Ford)',
        name: '乌木沉香 (Oud Wood)',
        reason: '对应你选项中的深度特质，神秘、高级且耐人寻味。',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600'
      }
    ],
    surpriseMix: [
      {
        brand: '伊索 (Aesop)',
        name: '悟 (Tacit)',
        reason: '柚子与罗勒的草本组合，像是在森林里深呼吸，自在且清醒。',
        image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&q=80&w=600'
      }
    ],
    scenarios: [
      {
        title: '职场汇报/商务谈判',
        tag: '展现：专业、冷静、边界感',
        strategy: '强化干木头或冷矿物的味道。',
        brand: '莱俪 (Lalique)',
        perfume: '墨恋 (Encre Noire)',
        image: 'https://images.unsplash.com/photo-1583445013765-48c220017121?auto=format&fit=crop&q=80&w=600',
        fit: '这是一款非常纯正的香根草。它闻起来像是一支刚削好的铅笔，或者一个堆满旧书的静谧书房。',
        effect: '它能赋予你一种“冷静、理智、甚至有些不近人情”的专业感。'
      },
      {
        title: '暧昧约会/深度对谈',
        tag: '展现：温柔、底蕴、灵魂共鸣',
        strategy: '带有体温感的木质花香或轻微的药感。',
        brand: '阿蒂仙 (L\'Artisan Parfumeur)',
        perfume: '冥府之路 (Passage d\'Enfer)',
        image: 'https://images.unsplash.com/photo-1608528577221-9055933454b0?auto=format&fit=crop&q=80&w=600',
        fit: '虽然名字听起来很冷，但它核心是焚香与百合。闻起来像是在古老寺庙后的竹林里，有一丝丝清冷的烟熏感。',
        effect: '这款香水非常符合你“东方调”的深度。它会让人忍不住想靠近你，去探寻你内心世界的秘密。'
      },
      {
        title: '独自旅行/自我独处',
        tag: '展现：自由、松弛、纯净',
        strategy: '草本、柑橘或带有雨后空气感的香调。',
        brand: '爱马仕 (Hermès)',
        perfume: '李先生的花园 (Le Jardin de Monsieur Li)',
        image: 'https://images.unsplash.com/photo-1590156221122-c74644d6b56b?auto=format&fit=crop&q=80&w=600',
        fit: '它是非常有禅意的金橘与茉莉，加上潮湿的石头的味道。',
        effect: '这种气息能让你迅速进入一种“身心合一”的松弛状态，非常适合你放空或创作。'
      }
    ]
  },
  [ScentType.WOODY]: {
    name: '沉稳守护者',
    type: ScentType.WOODY,
    traits: ['理性', '可靠', '具有逻辑性'],
    description: '你像是一棵在大地深处扎根百年的古树，外表平静而有力，内心有着坚定的信念感。',
    soulMate: [
      {
        brand: '爱马仕 (Hermès)',
        name: '大地 (Terre d\'Hermès)',
        reason: '木质与矿物的完美平衡，给人以无比的信赖感。',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [], surpriseMix: [], scenarios: []
  },
  [ScentType.FLORAL]: {
    name: '浪漫织梦者',
    type: ScentType.FLORAL,
    traits: ['温柔', '细腻', '感性'],
    description: '你是一个天生的浪漫主义者，善于从生活的琐碎中捕捉诗意。',
    soulMate: [
      {
        brand: '迪奥 (Dior)',
        name: '真我 (J\'adore)',
        reason: '华丽而不失优雅的花香调，如同你的灵魂。',
        image: 'https://images.unsplash.com/photo-1583445013765-48c220017121?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [], surpriseMix: [], scenarios: []
  },
  [ScentType.FRUITY]: {
    name: '元气精灵',
    type: ScentType.FRUITY,
    traits: ['乐观', '活力', '阳光'],
    description: '你像是夏日午后的一道阳光，明媚、直接且富有感染力。',
    soulMate: [
      {
        brand: '欧珑 (Atelier Cologne)',
        name: '赤霞橘光 (Orange Sanguine)',
        reason: '新鲜剥开的橙子质感，瞬间注入活力。',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [], surpriseMix: [], scenarios: []
  },
  [ScentType.HERBAL]: {
    name: '森系自由魂',
    type: ScentType.HERBAL,
    traits: ['自然', '随性', '不羁'],
    description: '你渴望自然的呼吸，不愿被任何规则所束缚，灵魂属于旷野。',
    soulMate: [
      {
        brand: '伊索 (Aesop)',
        name: '悟 (Tacit)',
        reason: '草本与柑橘的碰撞，通透且充满自然的力量。',
        image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [], surpriseMix: [], scenarios: []
  },
  [ScentType.ORIENTAL]: {
    name: '神秘绅士/名伶',
    type: ScentType.ORIENTAL,
    traits: ['深邃', '诱惑', '故事感'],
    description: '你自带一种高级的神秘感，让人忍不住想要探究你的故事。',
    soulMate: [
      {
        brand: '汤姆·福特 (Tom Ford)',
        name: '黑漆木 (Ebène Fumé)',
        reason: '焚香与木质的缠绕，深邃且富有张力。',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600'
      }
    ],
    advancedTry: [], surpriseMix: [], scenarios: []
  }
};
