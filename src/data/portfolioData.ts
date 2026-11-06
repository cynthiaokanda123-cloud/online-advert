/**
 * Portfolio Data Configuration for Cynthia Okanda
 * Edit this file to update all personal content, projects, experience, skills, and links.
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Distributed Systems' | 'Full-Stack' | 'UI/UX Design' | 'Cloud & DevOps';
  description: string;
  metrics: string[];
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  architectureDetails: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    iconName: string;
    focus: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education';
  highlights: string[];
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Cynthia Okanda",
    initials: "CO",
    role: "Software Engineer, Web Developer & Designer",
    focus: "Building scalable systems and exploring new technologies",
    tagline: "Engineering scalable systems for a connected future.",
    location: "Nairobi, Kenya (Available Worldwide / Remote)",
    availability: "Open to freelance, full-time & high-impact collaborations",
    isAvailableForHire: true,
    email: "cynthiaokanda123@gmail.com",
    github: "https://github.com/cynthiaokanda",
    linkedin: "https://linkedin.com/in/cynthiaokanda",
    twitter: "https://x.com/cynthiaokanda",
    avatarImage: "/src/assets/images/cynthia_okanda_portrait_1793956239546.jpg",
    bio: [
      "I am a passionate Software Engineer and Web Architect dedicated to crafting resilient, high-concurrency systems and pixel-perfect interactive web applications.",
      "With a blend of deep backend systems engineering and modern UI/UX design craft, I bridge the gap between robust distributed architectures and intuitive user experiences.",
      "Whether optimizing distributed microservices for sub-50ms latency or designing elegant design systems in React and TypeScript, I build software that scales reliably."
    ],
    stats: [
      { label: "Years Experience", value: 6, suffix: "+" },
      { label: "Projects Delivered", value: 34, suffix: "+" },
      { label: "Technologies Mastered", value: 20, suffix: "+" },
      { label: "Happy Clients & Teams", value: 18, suffix: "+" }
    ],
    typewriterRoles: [
      "Software Engineer",
      "Scalable Systems Architect",
      "Web Developer",
      "Web Designer",
      "Cloud Systems Builder"
    ]
  },

  promotionalBanner: {
    headline: "Need a scalable, modern web platform?",
    subline: "From high-throughput distributed backends to conversion-focused web applications — let's build something exceptional.",
    ctaText: "Start a Project",
    ctaLink: "#contact"
  },

  skills: [
    {
      category: "Backend & System Design",
      description: "High-throughput APIs, distributed microservices, messaging queues, and database optimization.",
      skills: [
        { name: "Distributed Systems & Microservices", level: 94, iconName: "Cpu", focus: "Partitioning, Event-driven, CAP theorem" },
        { name: "Node.js & Express / NestJS", level: 92, iconName: "Server", focus: "Asynchronous I/O, Streams, Clustering" },
        { name: "Python & FastAPI", level: 88, iconName: "Terminal", focus: "Data pipelines, Async APIs, Micro-daemons" },
        { name: "PostgreSQL & Database Design", level: 90, iconName: "Database", focus: "Indexing, Sharding, Query optimization" },
        { name: "Redis Caching & Pub/Sub", level: 95, iconName: "Zap", focus: "Cache-aside, Rate-limiting, TTL policies" },
        { name: "RESTful & GraphQL APIs", level: 93, iconName: "Layers", focus: "Schema federation, Idempotency, JWT" }
      ]
    },
    {
      category: "Frontend & Web Design",
      description: "Performant, accessible, and responsive user interfaces with rich micro-interactions and motion.",
      skills: [
        { name: "React 19 & Next.js", level: 96, iconName: "Code2", focus: "Hooks, Server components, State management" },
        { name: "TypeScript & JavaScript (ESNext)", level: 95, iconName: "FileCode", focus: "Strict typing, Generics, ASTs" },
        { name: "Tailwind CSS & CSS Systems", level: 98, iconName: "Palette", focus: "Token systems, Responsive layouts, Dark mode" },
        { name: "UI/UX & Design Systems (Figma)", level: 89, iconName: "Figma", focus: "Wireframing, Spatial math, Accessibility" },
        { name: "Motion & Keyframe Animations", level: 90, iconName: "Sparkles", focus: "Framer Motion, 60fps compositor transitions" }
      ]
    },
    {
      category: "Cloud & DevOps",
      description: "Automated CI/CD pipelines, container orchestration, and cloud infrastructure management.",
      skills: [
        { name: "Docker & Containerization", level: 92, iconName: "Container", focus: "Multi-stage builds, Distroless images" },
        { name: "Kubernetes & Orchestration", level: 85, iconName: "Boxes", focus: "Deployments, Ingress, Pod autoscaling" },
        { name: "AWS & Google Cloud Platform", level: 88, iconName: "Cloud", focus: "Cloud Run, ECS, S3, IAM, CloudFront" },
        { name: "CI/CD & Git Workflow", level: 93, iconName: "GitBranch", focus: "GitHub Actions, Semantic versioning, Automated tests" },
        { name: "System Observability & Monitoring", level: 87, iconName: "Activity", focus: "Prometheus, Grafana, OpenTelemetry, Log tracing" }
      ]
    },
    {
      category: "Emerging Tech & Architecture",
      description: "Cutting-edge tools, real-time communication, and AI-assisted workflows.",
      skills: [
        { name: "WebSockets & Real-Time Sync", level: 91, iconName: "Radio", focus: "Bidirectional streams, Socket state, Presence" },
        { name: "Message Queues (Kafka / RabbitMQ)", level: 86, iconName: "GitPullRequest", focus: "Decoupled workers, Consumer groups, Dead-letter queues" },
        { name: "AI Integration & LLM APIs", level: 89, iconName: "Cpu", focus: "Function calling, Embeddings, Context engineering" },
        { name: "Performance & Core Web Vitals", level: 94, iconName: "Gauge", focus: "Bundle splitting, Sub-second LCP, Zero layout shifts" }
      ]
    }
  ] as SkillCategory[],

  techStack: [
    { name: "JavaScript", role: "Frontend & Backend", icon: "Code", color: "#F7DF1E" },
    { name: "TypeScript", role: "Type-safe Engineering", icon: "FileCode", color: "#3178C6" },
    { name: "React", role: "Component UI", icon: "Atom", color: "#61DAFB" },
    { name: "Node.js", role: "High-Throughput Runtime", icon: "Server", color: "#339933" },
    { name: "Python", role: "Data & Systems Scripting", icon: "Terminal", color: "#3776AB" },
    { name: "Docker", role: "Containers & Environments", icon: "Box", color: "#2496ED" },
    { name: "Kubernetes", role: "Cluster Orchestration", icon: "Boxes", color: "#326CE5" },
    { name: "AWS / GCP", role: "Cloud Infrastructure", icon: "Cloud", color: "#FF9900" },
    { name: "PostgreSQL", role: "Relational Persistence", icon: "Database", color: "#4169E1" },
    { name: "MongoDB", role: "Document Storage", icon: "HardDrive", color: "#47A248" },
    { name: "Redis", role: "In-Memory Cache & Pub/Sub", icon: "Zap", color: "#DC382D" },
    { name: "GraphQL", role: "Federated API Querying", icon: "Share2", color: "#E10098" },
    { name: "RESTful", role: "Stateless Microservices", icon: "Network", color: "#10B981" },
    { name: "Git", role: "Version Control & CI/CD", icon: "GitBranch", color: "#F05032" },
    { name: "Figma", role: "UI/UX & Design Systems", icon: "Figma", color: "#F24E1E" },
    { name: "Kafka", role: "Distributed Event Streaming", icon: "Activity", color: "#231F20" }
  ],

  projects: [
    {
      id: "nexaflow-telemetry",
      title: "NexaFlow Real-Time Telemetry",
      subtitle: "Cloud-native distributed observability and microservice mesh monitoring",
      category: "Distributed Systems",
      description: "A high-concurrency microservice observability platform that visualizes distributed service topologies, tracks live request throughput, and detects latency anomalies across 180+ microservices in real time.",
      metrics: ["142k+ req/sec processed", "P99 latency < 45ms", "99.98% uptime SLA"],
      techStack: ["Node.js", "Redis Pub/Sub", "PostgreSQL", "Docker", "TypeScript", "Tailwind CSS"],
      image: "/src/assets/images/project_distributed_engine_1793956240964.jpg",
      demoUrl: "https://example.com/nexaflow",
      githubUrl: "https://github.com/cynthiaokanda/nexaflow-telemetry",
      featured: true,
      architectureDetails: "Engineered using an event-driven worker topology. Redis handles in-flight packet streams with ring buffers, while PostgreSQL stores aggregated time-series telemetry. Features interactive node topologies with packet trace animation."
    },
    {
      id: "velocityx-payments",
      title: "VelocityX Global Payments Engine",
      subtitle: "Multi-currency financial gateway with sub-second checkout velocity",
      category: "Full-Stack",
      description: "A resilient financial transaction processing web platform supporting global multi-currency settlements, automated reconciliation, and bank-grade idempotency guarantees.",
      metrics: ["$1.4B monthly processing cap", "1.4s average settlement", "0.01% error fallback"],
      techStack: ["TypeScript", "React", "PostgreSQL", "AWS ECS", "Tailwind CSS", "REST"],
      image: "/src/assets/images/project_ecommerce_fintech_1793956241159.jpg",
      demoUrl: "https://example.com/velocityx",
      githubUrl: "https://github.com/cynthiaokanda/velocityx-payments",
      featured: true,
      architectureDetails: "Designed with distributed locking mechanisms in Redis to prevent double spending. Features real-time currency conversion rates, automated webhooks with exponential backoff, and full audit trail encryption."
    },
    {
      id: "cocreate-studio",
      title: "CoCreate Design & App Platform",
      subtitle: "Collaborative design system builder and responsive web platform engine",
      category: "UI/UX Design",
      description: "An intuitive collaborative web application allowing cross-functional engineering teams to compose production-ready React layouts, test responsive breakpoints, and export standardized design tokens.",
      metrics: ["40% faster sprint delivery", "Zero style divergence", "100+ component library"],
      techStack: ["React 19", "Figma API", "Tailwind CSS", "Motion", "TypeScript", "Node.js"],
      image: "/src/assets/images/project_creative_studio_1793956240748.jpg",
      demoUrl: "https://example.com/cocreate",
      githubUrl: "https://github.com/cynthiaokanda/cocreate-studio",
      featured: true,
      architectureDetails: "Built with bidirectional token synchronization between Figma variables and Tailwind CSS configurations. Features live canvas zoom, nested component reordering, and instant theme preview."
    },
    {
      id: "pulsar-queue-mesh",
      title: "Pulsar Event Mesh & Queue Broker",
      subtitle: "Lightweight message broker with guaranteed at-least-once delivery",
      category: "Distributed Systems",
      description: "An asynchronous queueing service built for bursty workloads, featuring intelligent dead-letter queue recovery, priority queues, and horizontally scalable subscriber worker pools.",
      metrics: ["10k messages/sec per node", "Sub-10ms delivery overhead", "Zero message loss"],
      techStack: ["Python", "Docker", "Redis", "FastAPI", "WebSockets", "Prometheus"],
      image: "/src/assets/images/project_distributed_engine_1793956240964.jpg",
      demoUrl: "https://example.com/pulsar",
      githubUrl: "https://github.com/cynthiaokanda/pulsar-queue-mesh",
      featured: false,
      architectureDetails: "Implements distributed worker consensus using heartbeat healthchecks. Dynamically routes high-priority packets while gracefully throttling background ingestion."
    }
  ] as Project[],

  services: [
    {
      id: "scalable-backend",
      title: "Scalable Backend & API Design",
      tagline: "Resilient server architectures engineered for millions of requests.",
      iconName: "Server",
      description: "Architecting high-throughput, low-latency REST and GraphQL APIs, event-driven microservices, and database schemas that eliminate bottlenecks and scale gracefully under load.",
      deliverables: [
        "Microservices architecture blueprint",
        "Sub-100ms API response endpoints",
        "Database indexing, partitioning & caching layers",
        "Automated stress testing & load simulation"
      ],
      idealFor: "Startups scaling beyond MVP limits or companies modernizing legacy monoliths."
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      tagline: "Modern, responsive, and blazing-fast web applications.",
      iconName: "Globe",
      description: "End-to-end web engineering with React, Next.js, TypeScript, and modern backend frameworks. Focused on clean maintainable code, Core Web Vitals, and responsive cross-browser perfection.",
      deliverables: [
        "Complete SPA or full-stack web platform",
        "Mobile-first responsive interface (320px to 4K)",
        "State management & live API integration",
        "WCAG AA accessibility and SEO optimization"
      ],
      idealFor: "SaaS products, client portals, interactive dashboards, and web applications."
    },
    {
      id: "ui-ux-design",
      title: "Web Design & UI/UX Systems",
      tagline: "Human-centered interfaces with distinctive visual polish.",
      iconName: "Palette",
      description: "Transforming complex business logic into intuitive, visually compelling user journeys. I build cohesive design systems, Figma component libraries, and interactive prototypes.",
      deliverables: [
        "Figma design system & reusable tokens",
        "High-fidelity responsive wireframes",
        "Interactive motion prototypes & micro-interactions",
        "Design-to-code export & engineering handoff"
      ],
      idealFor: "Brands needing an elevated digital presence that converts visitors into customers."
    },
    {
      id: "cloud-architecture",
      title: "Cloud Architecture & DevOps",
      tagline: "Automated CI/CD, containerization, and zero-downtime deployments.",
      iconName: "Cloud",
      description: "Setting up production-grade cloud environments on AWS or GCP. Containerizing services with Docker, orchestrating with Kubernetes, and automating deployments with GitHub Actions.",
      deliverables: [
        "Infrastructure as Code & Docker setup",
        "Automated CI/CD test & release pipelines",
        "Zero-downtime rolling deployment strategies",
        "Security hardening, secrets & IAM setup"
      ],
      idealFor: "Teams aiming to ship faster with confidence and automated reliability."
    },
    {
      id: "technical-consulting",
      title: "Technical Consulting & Audits",
      tagline: "Actionable code reviews, architecture audits, and performance tuning.",
      iconName: "Compass",
      description: "Independent evaluation of existing codebases, database performance, security vulnerabilities, and architectural bottlenecks. Delivers clear roadmaps and hands-on remediation.",
      deliverables: [
        "Comprehensive architectural audit report",
        "Database query & bottleneck diagnosis",
        "Frontend performance & Core Web Vitals audit",
        "Actionable tech roadmap & prioritization"
      ],
      idealFor: "CTOs and engineering leads needing expert eyes on challenging technical hurdles."
    }
  ] as Service[],

  experienceAndEducation: [
    {
      id: "exp-1",
      period: "2023 - Present",
      role: "Lead Software & Systems Engineer",
      organization: "CloudPulse Technologies",
      location: "Nairobi / Hybrid",
      type: "experience",
      highlights: [
        "Architected core distributed ingestion pipeline handling over 120M events daily with 99.99% availability.",
        "Refactored legacy monolith into modular microservices with Redis caching, reducing server infrastructure costs by 34%.",
        "Spearheaded the internal frontend design system in TypeScript and Tailwind, accelerating UI engineering velocity across 4 cross-functional squads."
      ],
      technologies: ["Node.js", "TypeScript", "Redis", "PostgreSQL", "Docker", "Kubernetes", "React"]
    },
    {
      id: "exp-2",
      period: "2021 - 2023",
      role: "Full-Stack Web Developer & UI Designer",
      organization: "Apex Digital Solutions",
      location: "Nairobi, Kenya",
      type: "experience",
      highlights: [
        "Built responsive client web applications, fintech dashboards, and e-commerce portals with React, Next.js, and Express.",
        "Created custom Figma design systems with automated token synchronization to Tailwind CSS.",
        "Boosted client Core Web Vitals to 95+ average performance scores through code-splitting and asset optimization."
      ],
      technologies: ["React", "Next.js", "Figma", "Tailwind CSS", "REST APIs", "AWS S3"]
    },
    {
      id: "exp-3",
      period: "2019 - 2021",
      role: "Software Engineer",
      organization: "InnovateTech Labs",
      location: "Nairobi, Kenya",
      type: "experience",
      highlights: [
        "Developed scalable RESTful APIs in Python and Node.js for high-volume enterprise data collection.",
        "Implemented relational schemas, automated migration pipelines, and Redis session stores.",
        "Collaborated with QA to integrate comprehensive unit and end-to-end integration test suites."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Git", "Jest"]
    },
    {
      id: "edu-1",
      period: "2015 - 2019",
      role: "Bachelor of Science in Computer Science",
      organization: "University of Nairobi",
      location: "Nairobi, Kenya",
      type: "education",
      highlights: [
        "First Class Honours. Specialization in Distributed Systems, Algorithms, and Human-Computer Interaction.",
        "President of the University Developer Student Club; organized tech hackathons with 200+ attendees.",
        "Capstone: Decentralized Peer-to-Peer Data Synchronization Engine under constrained bandwidth."
      ],
      technologies: ["Algorithms", "Data Structures", "Computer Networks", "Distributed Computing", "Software Architecture"]
    }
  ] as TimelineItem[],

  testimonials: [
    {
      id: "t1",
      quote: "Cynthia transformed our chaotic backend architecture into an ultra-reliable system that easily handles our 5x traffic surges. Her rare combination of deep systems engineering and modern UI aesthetics is truly exceptional.",
      clientName: "David Mwangi",
      role: "Chief Technology Officer",
      company: "Kioo Health Technologies",
      avatar: "DM",
      rating: 5
    },
    {
      id: "t2",
      quote: "Working with Cynthia was a masterclass in engineering discipline. She delivered our entire web platform on schedule, with sub-50ms API response times and a design that blew our investors away.",
      clientName: "Amara Okonkwo",
      role: "Co-Founder & CEO",
      company: "PayStream Africa",
      avatar: "AO",
      rating: 5
    },
    {
      id: "t3",
      quote: "Cynthia doesn't just write code; she thinks deeply about the user experience and business outcomes. Her architectural guidance saved us months of rework and thousands of dollars in cloud infrastructure.",
      clientName: "Liam Vance",
      role: "VP of Product Engineering",
      company: "Stratum Cloud Labs",
      avatar: "LV",
      rating: 5
    }
  ] as Testimonial[],

  architectureShowcase: {
    title: "Scalable Systems Architecture",
    tagline: "Interactive demonstration of high-concurrency request routing, multi-tier caching, and resilient persistence.",
    nodes: [
      { id: "client", name: "Client Requests", type: "traffic", description: "Browsers, mobile apps, and external webhook integrations sending bursty workloads." },
      { id: "lb", name: "Load Balancer", type: "gateway", description: "Round-robin & least-connections SSL termination, rate-limiting, and DDoS mitigation." },
      { id: "services", name: "Microservices", type: "compute", description: "Stateless containerized service replicas auto-scaled via Kubernetes horizontal pod autoscalers." },
      { id: "cache", name: "Redis In-Memory Cache", type: "cache", description: "Sub-millisecond data retrieval with cache-aside pattern, reducing database reads by 80%+." },
      { id: "db", name: "PostgreSQL Database", type: "storage", description: "ACID compliant primary-replica database with read-sharding, indexing, and WAL streaming." }
    ],
    concepts: [
      {
        title: "Microservices Isolation",
        iconName: "Boxes",
        summary: "Decoupled domain boundaries allow independent scaling, localized fault tolerance, and autonomous deployments."
      },
      {
        title: "Multi-Tier Caching",
        iconName: "Zap",
        summary: "Redis in-memory caching with intelligent TTL invalidation guarantees sub-5ms reads for hot data paths."
      },
      {
        title: "Asynchronous Queues",
        iconName: "GitPullRequest",
        summary: "Decoupled message queues absorb traffic spikes and guarantee at-least-once processing without dropping requests."
      },
      {
        title: "Horizontal Scaling",
        iconName: "Maximize2",
        summary: "Stateless service instances spin up and down dynamically based on CPU, memory, and queue backlog metrics."
      },
      {
        title: "Full Observability",
        iconName: "Activity",
        summary: "Distributed tracing, centralized structured logging, and real-time metric thresholds pinpoint anomalies in seconds."
      }
    ]
  }
};
