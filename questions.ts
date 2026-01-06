
import { ScentType, Question } from './types';

export const QUESTIONS: Question[] = [
  // SECTION 1: 生活场景与空间感知
  {
    id: 1, section: '生活场景与空间感知', text: '理想的周六早晨，你希望被哪种声音唤醒？',
    options: [
      { id: '1A', text: '窗外清脆的鸟鸣', type: ScentType.HERBAL },
      { id: '1B', text: '远处的海浪拍打声', type: ScentType.AQUATIC },
      { id: '1C', text: '厨房里切开新鲜水果的声音', type: ScentType.FRUITY },
      { id: '1D', text: '伴侣轻柔的耳语', type: ScentType.FLORAL }
    ]
  },
  {
    id: 2, section: '生活场景与空间感知', text: '走进一家书店，你最想停留的区域是？',
    options: [
      { id: '2A', text: '充满怀旧感的旧书木架区', type: ScentType.WOODY },
      { id: '2B', text: '摆满精致干花的生活美学区', type: ScentType.FLORAL },
      { id: '2C', text: '色彩鲜艳的创意插画区', type: ScentType.FRUITY },
      { id: '2D', text: '深奥晦涩的哲学与历史区', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 3, section: '生活场景与空间感知', text: '如果要为你的卧室选一款窗帘，你会选：',
    options: [
      { id: '3A', text: '洁净纯白的轻盈薄纱', type: ScentType.AQUATIC },
      { id: '3B', text: '质感厚重的深咖色丝绒', type: ScentType.ORIENTAL },
      { id: '3C', text: '带碎花图案的棉麻质地', type: ScentType.FLORAL },
      { id: '3D', text: '森林绿色的遮光布', type: ScentType.HERBAL }
    ]
  },
  {
    id: 4, section: '生活场景与空间感知', text: '你最向往的度假目的地是？',
    options: [
      { id: '4A', text: '充满异域风情的集市与古城', type: ScentType.ORIENTAL },
      { id: '4B', text: '阳光明媚的西西里柠檬园', type: ScentType.FRUITY },
      { id: '4C', text: '静谧无人、只有风声的海边', type: ScentType.AQUATIC },
      { id: '4D', text: '树木参天、长满苔藓的深山', type: ScentType.WOODY }
    ]
  },
  {
    id: 5, section: '生活场景与空间感知', text: '整理房间时，你最无法忍受哪种混乱？',
    options: [
      { id: '5A', text: '空气混浊不通风', type: ScentType.AQUATIC },
      { id: '5B', text: '色彩搭配过于杂乱', type: ScentType.FLORAL },
      { id: '5C', text: '逻辑分类不明确', type: ScentType.WOODY },
      { id: '5D', text: '缺乏生机与活力', type: ScentType.FRUITY }
    ]
  },
  {
    id: 6, section: '生活场景与空间感知', text: '朋友聚会，你通常偏好哪种场所？',
    options: [
      { id: '6A', text: '灯光昏暗、有壁炉的静谧清吧', type: ScentType.WOODY },
      { id: '6B', text: '视野开阔、风吹得清爽的天台', type: ScentType.HERBAL },
      { id: '6C', text: '甜品精致、适合拍照的花园餐厅', type: ScentType.FLORAL },
      { id: '6D', text: '气氛热烈、音乐轻快的果汁吧', type: ScentType.FRUITY }
    ]
  },
  {
    id: 7, section: '生活场景与空间感知', text: '当你疲惫不堪时，哪种沐浴体验最能治愈你？',
    options: [
      { id: '7A', text: '滴了檀香精油的热水澡', type: ScentType.WOODY },
      { id: '7B', text: '带有清新薄荷感的冷水淋浴', type: ScentType.HERBAL },
      { id: '7C', text: '满是玫瑰花瓣的泡泡浴', type: ScentType.FLORAL },
      { id: '7D', text: '只要有流动的清水感就好', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 8, section: '生活场景与空间感知', text: '你的办公桌上最可能出现什么？',
    options: [
      { id: '8A', text: '一盆生机勃勃的小型绿植', type: ScentType.HERBAL },
      { id: '8B', text: '一个造型复古、沉稳的笔筒', type: ScentType.WOODY },
      { id: '8C', text: '散发酸甜气息的香薰蜡烛', type: ScentType.FRUITY },
      { id: '8D', text: '极简风格的玻璃水杯', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 9, section: '生活场景与空间感知', text: '下雨天，你更享受哪一部分？',
    options: [
      { id: '9A', text: '雨后泥土里散发的青草味', type: ScentType.HERBAL },
      { id: '9B', text: '躲在屋内听雨滴落在玻璃上', type: ScentType.WOODY },
      { id: '9C', text: '空气中弥漫的水汽与湿润感', type: ScentType.AQUATIC },
      { id: '9D', text: '雨后彩虹出现的惊喜感', type: ScentType.FRUITY }
    ]
  },
  {
    id: 10, section: '生活场景与空间感知', text: '如果用一种材质形容你的性格，你会选：',
    options: [
      { id: '10A', text: '纹理清晰的胡桃木', type: ScentType.WOODY },
      { id: '10B', text: '细腻柔软的丝绸', type: ScentType.FLORAL },
      { id: '10C', text: '半透明的磨砂玻璃', type: ScentType.AQUATIC },
      { id: '10D', text: '带有温度的羊绒', type: ScentType.ORIENTAL }
    ]
  },
  // SECTION 2: 审美偏好与艺术直觉
  {
    id: 11, section: '审美偏好与艺术直觉', text: '你更偏爱哪种绘画风格？',
    options: [
      { id: '11A', text: '写实主义，捕捉大自然的细节', type: ScentType.HERBAL },
      { id: '11B', text: '印象派，色彩斑斓且浪漫', type: ScentType.FLORAL },
      { id: '11C', text: '极简主义，留白产生的高级感', type: ScentType.AQUATIC },
      { id: '11D', text: '古典油画，厚重且富有故事感', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 12, section: '审美偏好与艺术直觉', text: '选择配饰时，你的首选是？',
    options: [
      { id: '12A', text: '造型简约的银饰或白金', type: ScentType.AQUATIC },
      { id: '12B', text: '有设计感的木质或皮质饰品', type: ScentType.WOODY },
      { id: '12C', text: '珍珠或带有花朵元素的饰品', type: ScentType.FLORAL },
      { id: '12D', text: '充满神秘感的复古宝石', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 13, section: '审美偏好与艺术直觉', text: '哪种色彩组合最让你觉得舒适？',
    options: [
      { id: '13A', text: '大地色系（咖、灰、褐）', type: ScentType.WOODY },
      { id: '13B', text: '糖果色系（橙、黄、粉）', type: ScentType.FRUITY },
      { id: '13C', text: '莫兰迪色系（灰蓝、淡绿）', type: ScentType.HERBAL },
      { id: '13D', text: '强对比色（黑、红、金）', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 14, section: '审美偏好与艺术直觉', text: '挑选衣服时，你最看重？',
    options: [
      { id: '14A', text: '布料是否有天然的触感', type: ScentType.HERBAL },
      { id: '14B', text: '裁剪是否干练、有边界感', type: ScentType.WOODY },
      { id: '14C', text: '是否能衬托出温柔的气质', type: ScentType.FLORAL },
      { id: '14D', text: '是否具有某种独特的先锋感', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 15, section: '审美偏好与艺术直觉', text: '欣赏音乐时，你更容易被哪种声音吸引？',
    options: [
      { id: '15A', text: '大提琴的深沉悠长', type: ScentType.WOODY },
      { id: '15B', text: '钢琴的如水灵动', type: ScentType.AQUATIC },
      { id: '15C', text: '尤克里里的轻快活泼', type: ScentType.FRUITY },
      { id: '15D', text: '萨克斯的风情万种', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 16, section: '审美偏好与艺术直觉', text: '理想中的下午茶甜点是？',
    options: [
      { id: '16A', text: '香甜多汁的水果塔', type: ScentType.FRUITY },
      { id: '16B', text: '口感丰富的巧克力熔岩', type: ScentType.ORIENTAL },
      { id: '16C', text: '带有花香味的马卡龙', type: ScentType.FLORAL },
      { id: '16D', text: '一杯苦中带甘的抹茶', type: ScentType.HERBAL }
    ]
  },
  {
    id: 17, section: '审美偏好与艺术直觉', text: '你对“时尚”的理解更倾向于？',
    options: [
      { id: '17A', text: '永不过时的经典款', type: ScentType.WOODY },
      { id: '17B', text: '表达自我态度的独特性', type: ScentType.FRUITY },
      { id: '17C', text: '随性自然的“松弛感”', type: ScentType.HERBAL },
      { id: '17D', text: '这种事物本身并不重要', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 18, section: '审美偏好与艺术直觉', text: '你的朋友圈封面通常是？',
    options: [
      { id: '18A', text: '远方风景的大全景', type: ScentType.AQUATIC },
      { id: '18B', text: '特写的一朵花或一件好物', type: ScentType.FLORAL },
      { id: '18C', text: '与朋友大笑的合照', type: ScentType.FRUITY },
      { id: '18D', text: '一句耐人寻味的话或电影截图', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 19, section: '审美偏好与艺术直觉', text: '挑选餐具时，你会选择：',
    options: [
      { id: '19A', text: '粗粝感十足的陶器', type: ScentType.WOODY },
      { id: '19B', text: '晶莹剔透的玻璃器皿', type: ScentType.AQUATIC },
      { id: '19C', text: '带有精致描金边的瓷器', type: ScentType.FLORAL },
      { id: '19D', text: '浓墨重彩的彩绘盘', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 20, section: '审美偏好与艺术直觉', text: '如果你是一本杂志，封面标题会是？',
    options: [
      { id: '20A', text: '《探索深林的奥秘》', type: ScentType.HERBAL },
      { id: '20B', text: '《爱与温柔的瞬间》', type: ScentType.FLORAL },
      { id: '20C', text: '《打破沉闷的活法》', type: ScentType.FRUITY },
      { id: '20D', text: '《少即是多的智慧》', type: ScentType.AQUATIC }
    ]
  },
  // SECTION 3: 社交特质与性格底色
  {
    id: 21, section: '社交特质与性格底色', text: '刚进入一个陌生社交圈，你的常态是？',
    options: [
      { id: '21A', text: '礼貌微笑，观察多过表达', type: ScentType.WOODY },
      { id: '21B', text: '迅速寻找话题，带动气氛', type: ScentType.FRUITY },
      { id: '21C', text: '保持礼貌距离，安静待着', type: ScentType.AQUATIC },
      { id: '21D', text: '温柔地回应每一个人', type: ScentType.FLORAL }
    ]
  },
  {
    id: 22, section: '社交特质与性格底色', text: '朋友心情不好向你求助，你会？',
    options: [
      { id: '22A', text: '给予实际且理性的分析', type: ScentType.WOODY },
      { id: '22B', text: '陪他一起吐槽，逗他开心', type: ScentType.FRUITY },
      { id: '22C', text: '递上一张纸巾，安静倾听', type: ScentType.FLORAL },
      { id: '22D', text: '带他去自然界走走呼吸空气', type: ScentType.HERBAL }
    ]
  },
  {
    id: 23, section: '社交特质与性格底色', text: '你认为最浪漫的行为是？',
    options: [
      { id: '23A', text: '两人在灯下相对无言却契合', type: ScentType.WOODY },
      { id: '23B', text: '收到一大束精心挑选的花', type: ScentType.FLORAL },
      { id: '23C', text: '突然被带去进行一场未知旅行', type: ScentType.HERBAL },
      { id: '23D', text: '一次深刻且直抵灵魂的交谈', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 24, section: '社交特质与性格底色', text: '工作中遇到突发状况，你的第一反应是？',
    options: [
      { id: '24A', text: '迅速冷静，制定可行方案', type: ScentType.WOODY },
      { id: '24B', text: '情绪先波动，但很快自我调节', type: ScentType.FLORAL },
      { id: '24C', text: '只要不打扰我的节奏就行', type: ScentType.AQUATIC },
      { id: '24D', text: '觉得是个挑战，干劲十足', type: ScentType.FRUITY }
    ]
  },
  {
    id: 25, section: '社交特质与性格底色', text: '你的好朋友通常如何评价你？',
    options: [
      { id: '25A', text: '靠谱、值得信赖的支柱', type: ScentType.WOODY },
      { id: '25B', text: '有趣、充满能量的太阳', type: ScentType.FRUITY },
      { id: '25C', text: '温柔、善解人意的树洞', type: ScentType.FLORAL },
      { id: '25D', text: '佛系、难以捉摸的隐士', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 26, section: '社交特质与性格底色', text: '对于“独处”，你的看法是？',
    options: [
      { id: '26A', text: '必要的充电时刻，很享受', type: ScentType.WOODY },
      { id: '26B', text: '偶尔可以，但更喜欢群居', type: ScentType.FRUITY },
      { id: '26C', text: '寻找自我的深度思考时间', type: ScentType.ORIENTAL },
      { id: '26D', text: '像空气一样自然，并不刻意', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 27, section: '社交特质与性格底色', text: '你最讨厌的人格特质是？',
    options: [
      { id: '27A', text: '虚伪与浮夸', type: ScentType.WOODY },
      { id: '27B', text: '沉闷与死板', type: ScentType.FRUITY },
      { id: '27C', text: '粗鲁与冒犯', type: ScentType.FLORAL },
      { id: '27D', text: '优柔寡断', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 28, section: '社交特质与性格底色', text: '面对冲突时，你会？',
    options: [
      { id: '28A', text: '摆事实讲道理，解决问题', type: ScentType.WOODY },
      { id: '28B', text: '试图缓解气氛，大事化小', type: ScentType.FLORAL },
      { id: '28C', text: '直接离开现场，懒得争辩', type: ScentType.AQUATIC },
      { id: '28D', text: '直抒胸臆，表达不满', type: ScentType.HERBAL }
    ]
  },
  {
    id: 29, section: '社交特质与性格底色', text: '你理想中的社交状态是？',
    options: [
      { id: '29A', text: '莫逆之交，三五好友足矣', type: ScentType.WOODY },
      { id: '29B', text: '宾客盈门，到处是欢笑', type: ScentType.FRUITY },
      { id: '29C', text: '君子之交淡如水', type: ScentType.AQUATIC },
      { id: '29D', text: '充满艺术气息的高雅沙龙', type: ScentType.FLORAL }
    ]
  },
  {
    id: 30, section: '社交特质与性格底色', text: '当你达成一个目标时，你会怎么庆祝？',
    options: [
      { id: '30A', text: '买一件质感很好的东西犒劳自己', type: ScentType.WOODY },
      { id: '30B', text: '请所有朋友大吃一顿', type: ScentType.FRUITY },
      { id: '30C', text: '独自去看一场心仪已久的展览', type: ScentType.HERBAL },
      { id: '30D', text: '写一段感悟发在私密日记里', type: ScentType.ORIENTAL }
    ]
  },
  // SECTION 4: 情感表达与心理投射
  {
    id: 31, section: '情感表达与心理投射', text: '告白时，你更倾向于哪种方式？',
    options: [
      { id: '31A', text: '写一封诚挚的长信', type: ScentType.WOODY },
      { id: '31B', text: '当众大声宣布你的爱', type: ScentType.FRUITY },
      { id: '31C', text: '送一份含蓄但有深意的礼物', type: ScentType.ORIENTAL },
      { id: '31D', text: '在日常相处中自然确认关系', type: ScentType.HERBAL }
    ]
  },
  {
    id: 32, section: '情感表达与心理投射', text: '你最感性的时刻通常发生在？',
    options: [
      { id: '32A', text: '看到壮丽的自然奇观时', type: ScentType.HERBAL },
      { id: '32B', text: '读到一段感人的诗句时', type: ScentType.FLORAL },
      { id: '32C', text: '凌晨一个人发呆时', type: ScentType.AQUATIC },
      { id: '32D', text: '面对老物件勾起回忆时', type: ScentType.WOODY }
    ]
  },
  {
    id: 33, section: '情感表达与心理投射', text: '如果生命是一场旅行，你觉得自己更像？',
    options: [
      { id: '33A', text: '步伐稳健的攀登者', type: ScentType.WOODY },
      { id: '33B', text: '追逐蝴蝶的孩童', type: ScentType.FRUITY },
      { id: '33C', text: '随风漂泊的浮萍', type: ScentType.AQUATIC },
      { id: '33D', text: '守护花园的园丁', type: ScentType.FLORAL }
    ]
  },
  {
    id: 34, section: '情感表达与心理投射', text: '哪种气味会瞬间击中你的童年回忆？',
    options: [
      { id: '34A', text: '木头铅笔被削开的味道', type: ScentType.WOODY },
      { id: '34B', text: '某种不知名的野花香', type: ScentType.HERBAL },
      { id: '34C', text: '剥开橘子时喷出的汁水味', type: ScentType.FRUITY },
      { id: '34D', text: '刚洗过的床单被阳光晒过的味', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 35, section: '情感表达与心理投射', text: '你希望别人记住你的？',
    options: [
      { id: '35A', text: '成熟与睿智', type: ScentType.WOODY },
      { id: '35B', text: '善良与体贴', type: ScentType.FLORAL },
      { id: '35C', text: '乐观与幽默', type: ScentType.FRUITY },
      { id: '35D', text: '优雅与神秘', type: ScentType.ORIENTAL }
    ]
  },
  {
    id: 36, section: '情感表达与心理投射', text: '关于“爱情”，你更相信：',
    options: [
      { id: '36A', text: '日久见人心的陪伴', type: ScentType.WOODY },
      { id: '36B', text: '一见钟情的电光火石', type: ScentType.FRUITY },
      { id: '36C', text: '两个灵魂的深度契合', type: ScentType.ORIENTAL },
      { id: '36D', text: '一切随缘的自然发生', type: ScentType.HERBAL }
    ]
  },
  {
    id: 37, section: '情感表达与心理投射', text: '面对生活中的不确定性，你会：',
    options: [
      { id: '37A', text: '努力掌控能掌控的部分', type: ScentType.WOODY },
      { id: '37B', text: '随遇而安，相信船到桥头自然直', type: ScentType.AQUATIC },
      { id: '37C', text: '保持好奇心，去探索新可能', type: ScentType.HERBAL },
      { id: '37D', text: '寻求亲密关系的慰藉', type: ScentType.FLORAL }
    ]
  },
  {
    id: 38, section: '情感表达与心理投射', text: '如果你可以拥有一种超能力，你会选：',
    options: [
      { id: '38A', text: '瞬间移动到任何大自然角落', type: ScentType.HERBAL },
      { id: '38B', text: '洞察人心里的秘密', type: ScentType.ORIENTAL },
      { id: '38C', text: '永远拥有不会枯竭的快乐', type: ScentType.FRUITY },
      { id: '38D', text: '让冲突瞬间平息的亲和力', type: ScentType.FLORAL }
    ]
  },
  {
    id: 39, section: '情感表达与心理投射', text: '下列哪个词最能定义你现在的状态？',
    options: [
      { id: '39A', text: '沉淀', type: ScentType.WOODY },
      { id: '39B', text: '绽放', type: ScentType.FLORAL },
      { id: '39C', text: '觉醒', type: ScentType.HERBAL },
      { id: '39D', text: '极简', type: ScentType.AQUATIC }
    ]
  },
  {
    id: 40, section: '情感表达与心理投射', text: '最后，闭上眼，你脑海里浮现的第一种香气特质是？',
    options: [
      { id: '40A', text: '厚重、温暖、安心', type: ScentType.WOODY },
      { id: '40B', text: '甜美、芬芳、柔情', type: ScentType.FLORAL },
      { id: '40C', text: '酸甜、清爽、明亮', type: ScentType.FRUITY },
      { id: '40D', text: '清凉、洁净、空旷', type: ScentType.AQUATIC }
    ]
  }
];
