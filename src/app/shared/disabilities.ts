export interface disability {
  category: disability_category;
  name?: string;
  description: string;
  severity?: string;
}

export interface disability_category {
  name: string;
  description: string;
}

export const DISABILITY_CATEGORIES: disability_category[] = [
  {name: 'visual', description: 'Perda total ou parcial da capacidade de enxergar. A deficiência visual engloba tanto a cegueira como a baixa visão'},
  {name: 'auditiva', description: 'Perda total ou parcial da capacidade auditiva'},
  {name: 'mental', description: 'funcionamento intelectual abaixo da média, com limitações associadas a duas ou mais áreas de conduta ou da capacidade do indivíduo em responder adequadamente às demandas da sociedade'},
  {name: 'física', description: 'Pessoa Portadora de Deficiência Física é aquela que apresenta alteração completa ou parcial de um ou mais segmentos do corpo humano, acarretando o comprometimento da função fisica,apresentando-se sob a forma de paraplegia, parapesia, monoplegia, monoparesia, teraplegia,tetraparesia, hemiplegia, hemiparesia, amputação ou ausência de membro, paralisia cerebral,membros com deformidade congênita ou adquirida, exceto as deformidades estéticas e as que nãoproduzam dificuldades para o desempenho de funções.'},
  {name: 'motora', description: 'Refere-se ao comprometimento do aparelho locomotor, que compreende o sistema osteoarticular, osistema muscular e o sistema nervoso. As doenças ou lesões que afetam quaisquer sistemas,isoladamente ou em conjunto, podem produzir quadros de limitações físicas de grau e gravidadevariáveis, segundo os segmentos corporais afetados e o tipo de lesão ocorrida.'},
  {name: 'multipla', description: 'deficiência múltipla consiste em mais de uma deficiêncianas áreas, sensorial, física ou mental'}
] 