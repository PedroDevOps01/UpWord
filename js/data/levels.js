var APP_DATA = window.APP_DATA || {};

APP_DATA.levels = [
  {
    id: 'a1',
    code: 'A1',
    name: 'Iniciante',
    tagline: 'O primeiro degrau',
    description: 'Alfabeto, pronúncia básica, saudações, números, cores, o verbo "to be" e vocabulário do dia a dia.',
    color: '#128077',
    order: 0
  },
  {
    id: 'a2',
    code: 'A2',
    name: 'Básico',
    tagline: 'Ganhando ritmo',
    description: 'Presente simples e contínuo, passado simples, rotina, viagens, compras e descrições simples.',
    color: '#146E93',
    order: 1
  },
  {
    id: 'b1',
    code: 'B1',
    name: 'Intermediário',
    tagline: 'Construindo fluência',
    description: 'Futuro (will/going to), present perfect, condicionais, phrasal verbs comuns e conversação.',
    color: '#1F5C9E',
    order: 2
  },
  {
    id: 'b2',
    code: 'B2',
    name: 'Intermediário-Avançado',
    tagline: 'Ganhando altitude',
    description: 'Voz passiva, discurso indireto, condicionais avançados e vocabulário de trabalho, saúde e tecnologia.',
    color: '#3A4EA0',
    order: 3
  },
  {
    id: 'c1',
    code: 'C1',
    name: 'Avançado',
    tagline: 'Quase no topo',
    description: 'Nuances gramaticais, expressões idiomáticas, redação formal/acadêmica e compreensão de áudio nativo.',
    color: '#4B3E93',
    order: 4
  },
  {
    id: 'c2',
    code: 'C2',
    name: 'Fluente',
    tagline: 'No topo da escalada',
    description: 'Registro formal e informal, humor, ironia, gírias e interpretação de literatura e discursos.',
    color: '#34285F',
    order: 5
  }
];

APP_DATA.electives = APP_DATA.electives || [];

APP_DATA.getLevel = function (id) {
  return APP_DATA.levels.concat(APP_DATA.electives).find(function (l) { return l.id === id; });
};

APP_DATA.getLevelIndex = function (id) {
  return APP_DATA.levels.findIndex(function (l) { return l.id === id; });
};

APP_DATA.getModules = function (levelId) {
  var levelData = APP_DATA[levelId];
  return (levelData && levelData.modules) || [];
};

APP_DATA.getModule = function (levelId, moduleId) {
  return APP_DATA.getModules(levelId).find(function (m) { return m.id === moduleId; });
};

APP_DATA.getFinalTest = function (levelId) {
  var levelData = APP_DATA[levelId];
  return levelData && levelData.finalTest;
};

window.APP_DATA = APP_DATA;
