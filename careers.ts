export interface University {
  name: string;
  acronym: string;
  logoUrl: string; // Placeholder for now
  websiteUrl: string;
  isSponsored: boolean;
}

export interface Career {
  id: number;
  title: string;
  university: University;
  degree: string;
  location: string;
  modality: string;
  tags: string[]; // For search keywords
}

export interface AnalysisResult {
  candidateName: string;
  profileTitle: string;
  top5Careers: {
    careerName: string;
    matchPercentage: number;
  }[];
}

export const mockCareers = [
   {
      id: 1,
      title: "Ingeniería en Inteligencia Artificial",
      category: "Tecnología",
      match: 98,
      description: "Lidera la revolución tecnológica desarrollando sistemas autónomos y modelos predictivos.",
      demand: "Muy Alta",
      salary: "$2.5k+"
   },
   {
      id: 2,
      title: "Marketing Digital & Growth",
      category: "Negocios",
      match: 94,
      description: "Domina las estrategias de crecimiento acelerado en entornos digitales competitivos.",
      demand: "Alta",
      salary: "$1.5k - $3k"
   },
   {
      id: 3,
      title: "Biotecnología Avanzada",
      category: "Ciencias",
      match: 91,
      description: "Innovación en salud, agricultura y medio ambiente mediante tecnología biológica.",
      demand: "Media-Alta",
      salary: "$2k - $4k"
   },
   {
      id: 4,
      title: "Diseño de Experiencia (UX/UI)",
      category: "Diseño",
      match: 88,
      description: "Crea productos digitales que enamoren a los usuarios resolviendo problemas reales.",
      demand: "Alta",
      salary: "$1.2k - $3k"
   }
];

const unis: Record<string, University> = {
  PUCE: {
    name: "Pontificia Universidad Católica del Ecuador",
    acronym: "PUCE",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/PUCE.jpg", // Placeholder
    websiteUrl: "https://www.puce.edu.ec/",
    isSponsored: false,
  },
  UBE: {
    name: "Universidad Bolivariana del Ecuador",
    acronym: "UBE",
    logoUrl: "https://ube.edu.ec/templates/ube/images/logo.png", // Placeholder
    websiteUrl: "https://ube.edu.ec/",
    isSponsored: false,
  },
  UCG: {
    name: "Universidad Casa Grande",
    acronym: "UCG",
    logoUrl: "https://www.casagrande.edu.ec/wp-content/uploads/2019/07/logo-ucg.png", // Placeholder
    websiteUrl: "https://www.casagrande.edu.ec/",
    isSponsored: false,
  },
  UCACUE: {
    name: "Universidad Católica de Cuenca",
    acronym: "UCACUE",
    logoUrl: "https://www.ucacue.edu.ec/wp-content/uploads/2019/05/logo-ucacue.png", // Placeholder
    websiteUrl: "https://www.ucacue.edu.ec/",
    isSponsored: false,
  },
  UCSG: {
    name: "Universidad Católica de Santiago de Guayaquil",
    acronym: "UCSG",
    logoUrl: "https://www.ucsg.edu.ec/wp-content/uploads/2018/01/logo-ucsg.png", // Placeholder
    websiteUrl: "https://www.ucsg.edu.ec/",
    isSponsored: false,
  },
  UEES: {
    name: "Universidad de Especialidades Espíritu Santo",
    acronym: "UEES",
    logoUrl: "https://uees.edu.ec/wp-content/uploads/2019/07/logo-uees.png", // Placeholder
    websiteUrl: "https://uees.edu.ec/",
    isSponsored: true, // Marked as sponsored for demonstration
  }
};

// Data parsed from the user's provided list
export const careers: Career[] = [
  // PUCE
  { id: 101, title: "TERAPIA FÍSICA", university: unis.PUCE, degree: "LICENCIADO/A EN TERAPIA FÍSICA", location: "Quito", modality: "Presencial", tags: ["salud", "medicina", "rehabilitacion"] },
  { id: 102, title: "INGENIERÍA CIVIL", university: unis.PUCE, degree: "INGENIERO CIVIL", location: "Quito", modality: "Presencial", tags: ["construccion", "ingenieria", "calculo"] },
  { id: 103, title: "PSICOLOGÍA CLÍNICA", university: unis.PUCE, degree: "PSICÓLOGO CLÍNICO", location: "Ambato", modality: "Presencial", tags: ["salud mental", "psicologia"] },
  { id: 104, title: "ECONOMÍA", university: unis.PUCE, degree: "ECONOMISTA", location: "Quito", modality: "Presencial", tags: ["negocios", "finanzas", "numeros"] },
  { id: 105, title: "MEDICINA", university: unis.PUCE, degree: "MÉDICO/A", location: "Quito", modality: "Presencial", tags: ["salud", "doctor", "hospital"] },
  { id: 106, title: "ENFERMERÍA", university: unis.PUCE, degree: "LICENCIADO/A EN ENFERMERÍA", location: "Quito", modality: "Presencial", tags: ["salud", "cuidados"] },
  { id: 107, title: "NEGOCIOS INTERNACIONALES", university: unis.PUCE, degree: "LICENCIADO/A EN NEGOCIOS INTERNACIONALES", location: "Ibarra", modality: "Presencial", tags: ["comercio", "global", "negocios"] },
  { id: 108, title: "ADMINISTRACIÓN DE EMPRESAS", university: unis.PUCE, degree: "LICENCIADO/A EN ADMINISTRACIÓN DE EMPRESAS", location: "Quito", modality: "Presencial", tags: ["gerencia", "liderazgo", "negocios"] },
  { id: 109, title: "SOFTWARE", university: unis.PUCE, degree: "INGENIERO/A DE SOFTWARE", location: "Manabí", modality: "Presencial", tags: ["tecnologia", "codigo", "programacion"] },
  { id: 110, title: "ARQUITECTURA", university: unis.PUCE, degree: "ARQUITECTO/A", location: "Ibarra", modality: "Presencial", tags: ["diseño", "construccion", "arte"] },
  
  // UBE
  { id: 201, title: "DERECHO", university: unis.UBE, degree: "ABOGADO/A", location: "Durán", modality: "En Línea", tags: ["leyes", "legal", "justicia"] },
  { id: 202, title: "ADMINISTRACIÓN DE EMPRESAS", university: unis.UBE, degree: "LICENCIADO/A EN ADMINISTRACIÓN DE EMPRESAS", location: "Durán", modality: "En Línea", tags: ["negocios", "online"] },
  { id: 203, title: "AUDITORÍA Y CONTROL DE GESTIÓN", university: unis.UBE, degree: "LICENCIADO/A EN AUDITORÍA", location: "Durán", modality: "En Línea", tags: ["contabilidad", "finanzas"] },
  { id: 204, title: "PSICOLOGÍA", university: unis.UBE, degree: "LICENCIADO/A EN PSICOLOGÍA", location: "Durán", modality: "Híbrida", tags: ["mente", "social"] },
  { id: 205, title: "SISTEMAS INTELIGENTES", university: unis.UBE, degree: "INGENIERO/A EN SISTEMAS INTELIGENTES", location: "Durán", modality: "En Línea", tags: ["ia", "tecnologia", "datos"] },

  // UCG
  { id: 301, title: "COMUNICACIÓN", university: unis.UCG, degree: "LICENCIADO/A EN COMUNICACIÓN", location: "Guayaquil", modality: "Presencial", tags: ["medios", "periodismo", "digital"] },
  { id: 302, title: "DISEÑO GRÁFICO", university: unis.UCG, degree: "LICENCIADO/A EN DISEÑO GRÁFICO", location: "Guayaquil", modality: "Presencial", tags: ["arte", "creatividad", "visual"] },
  { id: 303, title: "MARKETING DIGITAL", university: unis.UCG, degree: "LICENCIADO/A EN MARKETING", location: "Guayaquil", modality: "Híbrida", tags: ["ventas", "digital", "rrss"] },
  { id: 304, title: "CIENCIAS POLÍTICAS", university: unis.UCG, degree: "LICENCIADO/A EN CIENCIAS POLÍTICAS", location: "Guayaquil", modality: "Presencial", tags: ["gobierno", "politica", "social"] },
  { id: 305, title: "EDUCACIÓN INICIAL", university: unis.UCG, degree: "LICENCIADO/A EN EDUCACIÓN", location: "Guayaquil", modality: "En Línea", tags: ["docencia", "niños", "pedagogia"] },

  // UCACUE
  { id: 401, title: "ODONTOLOGÍA", university: unis.UCACUE, degree: "ODONTÓLOGO/A", location: "Azogues", modality: "Presencial", tags: ["salud", "dientes"] },
  { id: 402, title: "MEDICINA VETERINARIA", university: unis.UCACUE, degree: "MÉDICO/A VETERINARIO/A", location: "Cuenca", modality: "Presencial", tags: ["animales", "salud"] },
  { id: 403, title: "ARQUITECTURA", university: unis.UCACUE, degree: "ARQUITECTO/A", location: "Cuenca", modality: "Presencial", tags: ["diseño", "casas"] },
  { id: 404, title: "ELECTRICIDAD", university: unis.UCACUE, degree: "INGENIERO/A ELÉCTRICO/A", location: "Azogues", modality: "Presencial", tags: ["energia", "ingenieria"] },
  { id: 405, title: "BIG DATA", university: unis.UCACUE, degree: "INGENIERO/A EN BIG DATA", location: "Cuenca", modality: "Presencial", tags: ["datos", "tecnologia"] },

  // UCSG
  { id: 501, title: "NUTRICIÓN Y DIETÉTICA", university: unis.UCSG, degree: "LICENCIADO/A EN NUTRICIÓN", location: "Guayaquil", modality: "Presencial", tags: ["salud", "alimentos"] },
  { id: 502, title: "TURISMO", university: unis.UCSG, degree: "LICENCIADO/A EN TURISMO", location: "Guayaquil", modality: "Presencial", tags: ["viajes", "hospitalidad"] },
  { id: 503, title: "CINE", university: unis.UCSG, degree: "LICENCIADO/A EN CINE", location: "Guayaquil", modality: "Presencial", tags: ["arte", "pelicula", "audiovisual"] },

  // UEES (Sponsored examples)
  { id: 601, title: "DERECHO", university: unis.UEES, degree: "ABOGADO/A", location: "Samborondón", modality: "Presencial", tags: ["leyes", "justicia"] },
  { id: 602, title: "MEDICINA", university: unis.UEES, degree: "MÉDICO/A", location: "Samborondón", modality: "Presencial", tags: ["salud", "doctor"] },
  { id: 603, title: "NEGOCIOS INTERNACIONALES", university: unis.UEES, degree: "LICENCIADO/A EN NEGOCIOS", location: "Samborondón", modality: "En Línea", tags: ["comercio", "negocios"] },
  { id: 604, title: "MARKETING", university: unis.UEES, degree: "LICENCIADO/A EN MARKETING", location: "Samborondón", modality: "Presencial", tags: ["ventas", "publicidad"] },
  { id: 605, title: "CIENCIAS DE LA COMPUTACIÓN", university: unis.UEES, degree: "INGENIERO/A EN CIENCIAS DE LA COMPUTACIÓN", location: "Samborondón", modality: "En Línea", tags: ["tecnologia", "software"] },
  { id: 606, title: "GASTRONOMÍA", university: unis.UEES, degree: "LICENCIADO/A EN GASTRONOMÍA", location: "Samborondón", modality: "Presencial", tags: ["cocina", "chef"] },
];