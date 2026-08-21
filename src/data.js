export const experience = [
  {
    title: 'Chatbot de IA',
    role: 'IA Chatbot Developer',
    company: 'Banco Macro',
    period: '2025 – Presente',
    status: 'Productivo',
    stack: 'Python · FastAPI · LangChain · OpenAI API · Chatwoot',
    bullets: [
      'Desarrollé un chatbot con inteligencia artificial para uso productivo interno del banco, utilizando Python, FastAPI y LangChain.',
      'Implementé flujos de Retrieval-Augmented Generation (RAG) con bases de datos vectoriales para respuestas contextuales sobre documentación interna.',
      'Integré la API de OpenAI como motor de lenguaje y Chatwoot como plataforma de mensajería multicanal.',
      'Desarrollé y corregí flujos críticos del chatbot en producción: desbloqueo de tarjeta, comprobantes de pago de jubilados, consultas de saldo, entre otros.',
      'Diseñé la arquitectura de los pipelines de procesamiento de lenguaje natural y gestión del historial de conversación.',
      'Aseguré la calidad y estabilidad de los flujos mediante testing y validaciones antes de cada release.',
    ],
  },
  {
    title: 'Backend para Aplicación Bancaria',
    role: 'Backend Developer',
    company: 'Banco Macro',
    period: '2024 – 2025',
    status: 'Productivo',
    stack: 'Java 17 · Spring Boot 3 · Spring Security · Hibernate · JWT · Maven · APIGEE',
    bullets: [
      'Desarrollé flujos end-to-end de microservicios para la aplicación bancaria de Banco Macro en producción.',
      'Integré servicios con APIs REST bajo arquitectura en capas usando APIGEE como API Gateway.',
      'Implementé autenticación y autorización con Spring Security, JWT y OAuth2.',
      'Diseñé y validé APIs RESTful con Swagger y Postman.',
      'Gestioné pipelines de CI/CD con GitLab y Jenkins; monitoreo con Kibana y OpenSearch.',
      'Colaboré con equipos internacionales en Brasil y Uruguay bajo metodologías ágiles (Scrum).',
      'Apliqué prácticas de ciberseguridad: encriptación de datos, gestión de secretos y OAuth2.',
    ],
  },
]

export const projects = [
  {
    id: 'backhand-booking',
    stack: '[Full-Stack]',
    demo: 'https://github.com/toxortcs02/canchas-app',
    code: 'https://github.com/toxortcs02/canchas-app'
  },
  {
    id: 'lolero',
    stack: '[Full-Stack]',
    demo: 'https://lolero.vercel.app/',
    code: 'https://github.com/toxortcs02/Lolero'
  }
]

export const skillCategories = [
  {
    id: 'backend',
    icon: '⚔️',
    color: 'is-warning',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Spring', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'SQL', level: 75 }
    ]
  },
  {
    id: 'frontend',
    icon: '🔮',
    color: 'is-primary',
    skills: [
      { name: 'React', level: 80 },
      { name: 'HTML/CSS/JS', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Vite', level: 70 }
    ]
  },
  {
    id: 'testing',
    icon: '🛡️',
    color: 'is-success',
    skills: [
      { name: 'JUnit', level: 70 },
      { name: 'Mockito', level: 65 },
      { name: 'pytest', level: 60 },
      { name: 'Postman', level: 75 }
    ]
  },
  {
    id: 'infra',
    icon: '⚓',
    color: 'is-success',
    skills: [
      { name: 'Docker/Kubernetes', level: 60 },
      { name: 'Git/GitHub', level: 90 }
    ]
  },
  {
    id: 'integrations',
    icon: '🧙',
    color: 'is-primary',
    skills: [
      { name: 'LangChain', level: 50 },
      { name: 'REST APIs', level: 80 }
    ]
  }
]
