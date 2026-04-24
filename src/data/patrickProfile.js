export const PATRICK_PROFILE = {
  personal: {
    name: "Patrick Bastos",
    isMarried: true,
    children: [
      {
        name: "Oliver",
        relation: "son",
      },
    ],
    birthDate: "December 1986",
    ageIn2025: 39,
    hobbies: ["running", "swimming", "cooking", "special coffees"],
    teenageBand: {
      role: "voice and guitar",
      note: "He played in a band during adolescence.",
    },
  },
  professional: {
    totalYearsInAdministrativeArea: 13,
    background: [
      "accounting offices",
      "HR",
      "fiscal",
      "accounting",
      "payroll",
      "auditing",
      "administrative areas",
    ],
    careerShiftYear: 2022,
    techFocus: [
      "C#",
      ".NET",
      "JavaScript",
      "React",
      "APIs",
      "cloud solutions",
    ],
  },
  projects: {
    highlights: [
      "spending solution for VIP lounges",
      "marketing campaigns",
      "benefit center",
    ],
    outcomes: [
      "saved R$ 24MM",
      "reduced incidents by 60%",
      "developed 14 Black Friday campaigns",
    ],
  },
};

function includesAny(source, terms = []) {
  const normalizedSource = (source || "").toLowerCase();
  return terms.some((term) => normalizedSource.includes(term.toLowerCase()));
}

function getPersonalSummary() {
  return `Patrick Bastos is married, father of Oliver, born in December 1986, and 39 years old in 2025. He enjoys running, swimming, cooking, and special coffees, and he played voice and guitar in a teenage band.`;
}

function getCareerSummary() {
  return `Patrick worked for 13 years in administrative areas, passing through accounting offices and working in HR, fiscal, accounting, payroll, and auditing. In 2022, he migrated to tech, where he works with C#, .NET, JavaScript, React, APIs, and cloud solutions.`;
}

function getProjectsSummary() {
  return `Patrick worked on a spending solution for VIP lounges, marketing campaigns, and a benefit center. His work includes saving R$ 24MM, reducing incidents by 60%, and developing 14 Black Friday campaigns.`;
}

export function queryPatrickProfile(message = "", topic = "general") {
  const normalizedMessage = (message || "").toLowerCase();

  const wantsPersonal =
    includesAny(normalizedMessage, [
      "personal",
      "vida",
      "fam",
      "filho",
      "married",
      "married?",
      "wife",
      "husband",
      "oliver",
      "hobby",
      "hobbies",
      "interests",
      "cooking",
      "run",
      "running",
      "swim",
      "swimming",
      "coffee",
      "special coffee",
      "band",
      "musica",
      "música",
      "fale sobre o patrick",
      "fale sobre patrick",
      "quem é o patrick",
      "quem e o patrick",
      "sobre o patrick",
      "about patrick",
    ]) || topic === "personal";

  const wantsCareer =
    includesAny(normalizedMessage, [
      "career",
      "carreira",
      "work",
      "worked",
      "job",
      "jobs",
      "company",
      "emprego",
      "trabalhou",
      "trabalha",
      "administrative",
      "administrativo",
      "accounting",
      "fiscal",
      "payroll",
      "auditing",
      "hr",
      "recursos humanos",
      "tech",
      "tecnologia",
      "migration",
      "migrated",
      "migracao",
      "migrou",
      "c#",
      ".net",
      "react",
      "javascript",
      "api",
      "cloud",
    ]) || topic === "career";

  const wantsProjects =
    includesAny(normalizedMessage, [
      "project",
      "projects",
      "projeto",
      "projetos",
      "solution",
      "spending",
      "vip lounge",
      "marketing",
      "black friday",
      "benefit",
      "beneficio",
      "benefit center",
    ]) || topic === "projects";

  if (wantsCareer) {
    if (includesAny(normalizedMessage, ["how many", "quantos", "13", "years", "anos"])) {
      return "Patrick worked 13 years in administrative areas before moving to tech in 2022.";
    }

    return getCareerSummary();
  }

  if (wantsProjects) {
    if (includesAny(normalizedMessage, ["saving", "save", "saved", "r$ 24", "24mm"])) {
      return "One of Patrick's standout projects saved R$ 24MM and reduced incidents by 60%.";
    }

    return getProjectsSummary();
  }

  if (wantsPersonal) {
    if (includesAny(normalizedMessage, ["age", "old", "39", "nascimento", "birth"])) {
      return "Patrick was born in December 1986 and was 39 years old in 2025.";
    }

    if (includesAny(normalizedMessage, ["family", "family?", "filho", "son", "oliver"])) {
      return "Patrick is married and is the father of Oliver.";
    }

    if (includesAny(normalizedMessage, ["hobby", "hobbies", "running", "swimming", "coffee", "cooking"])) {
      return "Patrick enjoys running, swimming, cooking, and special coffees.";
    }

    return getPersonalSummary();
  }

  if (includesAny(normalizedMessage, ["summary", "overview", "resumo", "geral", "general"])) {
    return `Patrick Bastos is a back-end software developer with a strong background in administration and a career transition to tech in 2022. He is also married, father of Oliver, and enjoys running, swimming, cooking, and special coffees.`;
  }

  return "";
}

export function getPatrickTopicFromMessage(message = "") {
  const normalizedMessage = (message || "").toLowerCase();

  if (
    includesAny(normalizedMessage, [
      "personal",
      "vida",
      "fam",
      "filho",
      "married",
      "wife",
      "husband",
      "oliver",
      "hobby",
      "hobbies",
      "interests",
      "cooking",
      "running",
      "swimming",
      "coffee",
      "band",
      "fale sobre patrick",
      "fale sobre o patrick",
      "sobre patrick",
      "about patrick",
    ])
  ) {
    return "personal";
  }

  if (
    includesAny(normalizedMessage, [
      "career",
      "carreira",
      "worked",
      "work",
      "job",
      "tech",
      "tecnologia",
      "administrative",
      "administrativo",
      "accounting",
      "fiscal",
      "payroll",
      "auditing",
      "hr",
      "c#",
      ".net",
      "react",
      "javascript",
      "api",
      "cloud",
      "trabalhou",
      "migrou",
      "migrated",
    ])
  ) {
    return "career";
  }

  if (
    includesAny(normalizedMessage, [
      "project",
      "projects",
      "projeto",
      "projetos",
      "solution",
      "spending",
      "vip lounge",
      "marketing",
      "black friday",
      "benefit",
      "benefit center",
    ])
  ) {
    return "projects";
  }

  return "general";
}
