export const workSectionContent = {
  eyebrow: "Processo",
  title: "Como funciona",
};

export const workSteps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Conversamos sobre suas necessidades, stack técnica e cultura da empresa",
    side: "left",
  },
  {
    number: "02",
    title: "Seleção",
    description: "Identificamos os melhores perfis do nosso pool de talentos pré-aprovados",
    side: "right",
  },
  {
    number: "03",
    title: "Entrevista",
    description: "Você entrevista os candidatos selecionados e escolhe quem se encaixa melhor",
    side: "left",
  },
  {
    number: "04",
    title: "Início",
    description: "Developer integrado ao time em até 48h, pronto para gerar impacto",
    side: "right",
  },
] as const;

export type WorkStep = (typeof workSteps)[number];
