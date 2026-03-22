export const site = {
  name: "Lucas C. Bedatty",
  domain: "https://bedatty.com",
  location: "Brazil",
  email: "contato@bedatty.com",
  linkedin: "https://www.linkedin.com/in/lucas-bedatty",
  github: "https://github.com/bedatty",
  ogImage: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630
};

export const localizedSite = {
  en: {
    title: "Senior DevOps Engineer",
    summary:
      "Senior DevOps engineer focused on AWS platforms, infrastructure automation, security guardrails, and resilient systems for production workloads.",
    description:
      "Lucas Bedatty builds secure, scalable AWS platforms with infrastructure as code, Kubernetes operations, governance automation, and cost-aware architecture for real production environments.",
    ogImageAlt: "Preview card for Lucas C. Bedatty portfolio with terminal-inspired design and DevOps branding.",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
      switchTo: "PT"
    },
    footer: {
      status: "system.status",
      email: "Email"
    },
    common: {
      detailView: "Detail View",
      openEntry: "open entry",
      github: "GitHub",
      demo: "Demo",
      copy: "Copy",
      copied: "Copied",
      copyFailed: "Failed",
      emailCopied: "Email copied to clipboard.",
      emailCopyFailed: "Unable to copy email automatically.",
      skipToContent: "Skip to content",
      backToTop: "Back to top",
      toggleNavigation: "Toggle navigation",
      openNavigation: "Open navigation menu",
      closeNavigation: "Close navigation menu",
      switchThemeToMono: "Switch to black and white theme",
      switchThemeToColor: "Switch to color theme",
      skillGroup: "skill group",
      explore: "Explore"
    },
    home: {
      title: "DevOps Portfolio",
      badge: ["AWS Certified", "Senior DevOps Engineer"],
      kicker: "Cloud Engineer | DevOps & SRE | Platform Engineer",
      intro:
        "Designing secure, scalable AWS platforms with infrastructure as code, observability, governance and reliable delivery practices.",
      ctas: {
        about: "About Me",
        projects: "View Projects",
        contact: "Contact"
      },
      terminal: {
        title: "Senior DevOps Engineer",
        focus: "AWS, SRE, Platform Engineering",
        architecture: "secure, scalable, production-ready"
      }
    },
    about: {
      eyebrow: "About",
      title: "Cloud and platform engineer with hands-on AWS, automation and production operations experience.",
      copy:
        "Experience across AWS infrastructure, observability, governance and delivery workflows, with a focus on secure and reliable systems.",
      resumeLabel: "Download Resume",
      summaryLabel: "profile.summary",
      paragraphs: [
        "Lucas is a cloud engineer with strong hands-on experience in AWS and holds the AWS Cloud Practitioner certification. His background spans automation, infrastructure as code, DevOps practices and cloud security, applying production-minded standards to scalable and highly available environments.",
        "Over the years, he has developed practical depth in optimization across EKS and ECS using Karpenter, Spot Instances, Auto Scaling Groups and Elastic Load Balancing. His networking background includes VPC design, NAT Gateways, VPC Endpoints and secure connectivity patterns with AWS Transit Gateway.",
        "His work in cloud governance and compliance includes AWS Control Tower, AWS Organizations, AWS Config, CloudTrail auditing and automated remediation with AWS Lambda, SSM Automation and Step Functions. He has also contributed to secure provisioning with AWS Service Catalog and patch management through AWS Patch Manager and Systems Manager.",
        "Infrastructure is provisioned with AWS CDK in TypeScript, Terraform and CloudFormation, while delivery workflows are integrated through GitHub Actions and AWS CodePipeline. Security and observability remain central across the stack, including IAM, S3 security, WAF, AWS Shield, KMS, CloudWatch, CloudWatch Logs and CloudWatch Alarms.",
        "His technical experience also includes AWS Cost Explorer, Trusted Advisor, Amazon RDS, Aurora, DynamoDB, ElastiCache, SQS, SNS, Lambda, API Gateway, AWS Identity Center and SAML, with consistent emphasis on secure, scalable and cost-aware cloud solutions."
      ],
      profileCard: {
        title: "Profile",
        location: "Location",
        titleLabel: "Title",
        coreFocus: "Core Focus",
        focusValue: "AWS Platforms, SRE, DevOps"
      },
      stats: [
        { number: "4+", label: "Years in Cloud & DevOps" },
        { number: "Gov", label: "Security & Governance" },
        { number: "IaC", label: "Terraform, CDK, CFN" },
        { number: "K8s", label: "EKS & ECS Focus" }
      ],
      stack: {
        eyebrow: "Tech Stack",
        title: "Core tools and platforms used across cloud, automation, security and operations.",
        copy:
          "A structured overview of the technologies most present in day-to-day delivery and platform work."
      },
      experience: {
        eyebrow: "Experience",
        title: "Career path across infrastructure, platform operations and AWS delivery.",
        copy:
          "Progression from infrastructure support into cloud engineering, automation and platform-focused DevOps work."
      },
      education: {
        eyebrow: "Education",
        title: "Academic foundation aligned with infrastructure and systems work.",
        copy:
          "Education supporting the practical work in cloud operations, automation and platform delivery."
      },
      certifications: {
        eyebrow: "Certifications",
        title: "Credentials focused on AWS, infrastructure and practical operations.",
        copy: "Credentials covering cloud fundamentals, platform tooling and infrastructure operations."
      }
    },
    blog: {
      title: "Blog",
      description: "Blog posts on AWS, DevOps, and platform engineering by Lucas Bedatty.",
      eyebrow: "Blog",
      heading: "Operational notes on AWS, security, governance, and delivery pipelines.",
      copy:
        "Writing focused on practical engineering decisions across AWS operations, governance, security and delivery workflows."
    },
    projects: {
      title: "Projects",
      description: "Selected cloud, platform, and DevOps case studies by Lucas Bedatty.",
      eyebrow: "Projects",
      heading: "Case studies are coming soon.",
      copy:
        "Detailed write-ups covering architecture, automation and platform engineering work are being prepared for publication.",
      status: "in progress",
      statusChip: "coming soon",
      lead: "Selected project pages are being curated.",
      body:
        "This section will feature concise case studies on AWS platforms, infrastructure as code, governance, security and cost optimization.",
      note:
        "The goal is to publish technically relevant examples with clear context, architecture decisions and measurable outcomes.",
      ctas: {
        profile: "View Profile",
        contact: "Get In Touch"
      },
      terminal: {
        command: "cat projects/status.json",
        state: 'state: "coming soon"',
        focus: 'focus: ["AWS", "IaC", "platform", "security"]',
        format: 'format: "technical case studies"',
        timeline: 'timeline: "in preparation"'
      }
    },
    contact: {
      title: "Contact",
      description: "Contact Lucas Bedatty for cloud platform and DevOps opportunities.",
      eyebrow: "Contact",
      heading: "Cloud platform, DevOps and AWS infrastructure conversations.",
      copy:
        "Use the channels below for direct contact about platform engineering, infrastructure automation, consulting or full-time roles.",
      intro:
        "Direct contact for architecture discussions, consulting work and platform engineering opportunities.",
      linkedInLabel: "Open LinkedIn profile in a new tab",
      githubLabel: "Open GitHub profile in a new tab",
      jsonComment: "// contact.json",
      json: {
        languages: ["Portuguese (Native)", "English (Working)"],
        interests: ["Cloud Architecture", "Platform Engineering", "DevOps Culture", "Open Source"],
        focus: "AWS, automation and platform reliability"
      }
    },
    rss: {
      title: "Lucas C. Bedatty Blog",
      description: "AWS, platform engineering, and DevOps writing by Lucas Bedatty."
    },
    skillGroups: [
      {
        shortLabel: "☁️",
        title: "Cloud",
        items: ["AWS", "EKS", "ECS", "Lambda", "API Gateway", "CloudFront", "EC2", "S3"]
      },
      {
        shortLabel: "🧱",
        title: "Infrastructure as Code",
        items: ["Terraform", "AWS CDK", "CloudFormation", "GitOps", "GitHub Actions", "CodePipeline"]
      },
      {
        shortLabel: "🛡️",
        title: "Security & Governance",
        items: ["IAM", "KMS", "AWS WAF", "AWS Shield", "CloudTrail", "Config", "Control Tower", "Organizations"]
      },
      {
        shortLabel: "⚙️",
        title: "Observability & Operations",
        items: ["CloudWatch", "Karpenter", "Docker", "Kubernetes", "Bash", "SSM"]
      }
    ],
    experienceTimeline: [
      {
        role: "Senior DevOps Engineer",
        company: "Lerian",
        period: "Feb 2026 - Present",
        location: "SP, Brazil",
        summary: [],
        tags: ["DevOps", "SRE", "Platform Engineering"]
      },
      {
        role: "Software Engineer II",
        company: "Certta",
        period: "May 2024 - Feb 2026",
        location: "RS, Brazil",
        summary: [
          "Implemented Karpenter and Spot Instances to improve scaling behavior and reduce EKS costs.",
          "Configured Helm, ArgoCD and ALB Controller for workload delivery and traffic management.",
          "Designed VPC networks with NAT Gateways, VPC Endpoints and Transit Gateway connectivity.",
          "Applied Control Tower, SCPs and AWS Organizations for governance across accounts.",
          "Automated remediation workflows with SSM Automation, Lambda and Step Functions.",
          "Built infrastructure with AWS CDK, Terraform and CloudFormation.",
          "Delivered CI/CD pipelines with GitHub Actions and AWS CodePipeline."
        ],
        tags: ["EKS", "Karpenter", "Terraform", "CDK", "ArgoCD", "GitHub Actions", "Control Tower"]
      },
      {
        role: "Software Engineer I",
        company: "Certta",
        period: "Apr 2022 - May 2024",
        location: "RS, Brazil",
        summary: [
          "Managed EC2 environments with attention to performance, stability and cost efficiency.",
          "Configured VPCs, Security Groups and Route Tables for secure service communication.",
          "Provisioned infrastructure with Terraform and CloudFormation.",
          "Automated routine operations with Bash and Python scripts.",
          "Supported VPN environments and SQL and NoSQL database operations.",
          "Managed IAM roles and policies using least-privilege principles."
        ],
        tags: ["EC2", "VPC", "Terraform", "Python", "IAM", "S3"]
      },
      {
        role: "IT Assistant",
        company: "Certta",
        period: "Aug 2021 - Apr 2022",
        location: "RS, Brazil",
        summary: [
          "Provided AWS support and Linux and Windows server administration.",
          "Handled networking, security routines and hardware maintenance.",
          "Supported IT operations, databases and helpdesk activities."
        ],
        tags: ["AWS", "Linux", "Windows Server", "Networking"]
      }
    ],
    educationItems: [
      {
        institution: "UNOPAR",
        degree: "Associate Degree in Systems Analysis and Development",
        period: "Oct 2023 - Dec 2025"
      },
      {
        institution: "IFSUL - Instituto Federal Sul-rio-grandense",
        degree: "Technical High School in Information Technology",
        period: "Mar 2016 - Dec 2019"
      }
    ],
    certificationItems: [
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
      { name: "AWS Expert", issuer: "AWS Training" },
      { name: "AWS Events and Workflows", issuer: "AWS Knowledge" },
      { name: "Containers & Docker", issuer: "Professional Certification" },
      { name: "DevOps Initiative - Terraform", issuer: "Professional Certification" },
      { name: "Windows Server 2019 + AWS + Storage", issuer: "Professional Certification" }
    ]
  },
  pt: {
    title: "Engenheiro DevOps Sênior",
    summary:
      "Engenheiro DevOps sênior com foco em plataformas AWS, automação de infraestrutura, guardrails de segurança e sistemas resilientes para cargas de produção.",
    description:
      "Lucas Bedatty projeta plataformas AWS seguras e escaláveis com infraestrutura como código, operações em Kubernetes, automação de governança e arquitetura orientada a custo para ambientes reais de produção.",
    ogImageAlt: "Imagem de prévia do portfólio de Lucas C. Bedatty com visual inspirado em terminal e identidade DevOps.",
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      blog: "Blog",
      contact: "Contato",
      switchTo: "EN"
    },
    footer: {
      status: "status.do-sistema",
      email: "E-mail"
    },
    common: {
      detailView: "Detalhes",
      openEntry: "abrir artigo",
      github: "GitHub",
      demo: "Demo",
      copy: "Copiar",
      copied: "Copiado",
      copyFailed: "Falhou",
      emailCopied: "E-mail copiado para a área de transferência.",
      emailCopyFailed: "Não foi possível copiar o e-mail automaticamente.",
      skipToContent: "Pular para o conteúdo",
      backToTop: "Voltar ao topo",
      toggleNavigation: "Alternar navegação",
      openNavigation: "Abrir menu de navegação",
      closeNavigation: "Fechar menu de navegação",
      switchThemeToMono: "Mudar para o tema preto e branco",
      switchThemeToColor: "Mudar para o tema colorido",
      skillGroup: "grupo de skills",
      explore: "Explorar"
    },
    home: {
      title: "Portfólio DevOps",
      badge: ["Certificado AWS", "Engenheiro DevOps Sênior"],
      kicker: "Engenheiro Cloud | DevOps & SRE | Platform Engineer",
      intro:
        "Projetando plataformas AWS seguras e escaláveis com infraestrutura como código, observabilidade, governança e práticas confiáveis de entrega.",
      ctas: {
        about: "Sobre Mim",
        projects: "Ver Projetos",
        contact: "Contato"
      },
      terminal: {
        title: "Engenheiro DevOps Sênior",
        focus: "AWS, SRE, Engenharia de Plataforma",
        architecture: "segura, escalável, pronta para produção"
      }
    },
    about: {
      eyebrow: "Sobre",
      title: "Engenheiro de cloud e plataforma com experiência prática em AWS, automação e operações de produção.",
      copy:
        "Experiência em infraestrutura AWS, observabilidade, governança e fluxos de entrega, com foco em sistemas seguros e confiáveis.",
      resumeLabel: "Baixar Currículo",
      summaryLabel: "resumo.do.perfil",
      paragraphs: [
        "Lucas é um engenheiro de cloud com forte experiência prática em AWS e possui a certificação AWS Cloud Practitioner. Sua trajetória inclui automação, infraestrutura como código, práticas DevOps e segurança em cloud, aplicando padrões orientados à produção em ambientes escaláveis e altamente disponíveis.",
        "Ao longo dos anos, desenvolveu profundidade prática em otimização de ambientes EKS e ECS usando Karpenter, Spot Instances, Auto Scaling Groups e Elastic Load Balancing. Sua base em redes inclui desenho de VPCs, NAT Gateways, VPC Endpoints e padrões de conectividade segura com AWS Transit Gateway.",
        "Seu trabalho com governança e conformidade em cloud inclui AWS Control Tower, AWS Organizations, AWS Config, auditoria com CloudTrail e remediação automatizada com AWS Lambda, SSM Automation e Step Functions. Também contribuiu para provisionamento seguro com AWS Service Catalog e gestão de patches com Patch Manager e Systems Manager.",
        "A infraestrutura é provisionada com AWS CDK em TypeScript, Terraform e CloudFormation, enquanto os fluxos de entrega são integrados com GitHub Actions e AWS CodePipeline. Segurança e observabilidade seguem como pilares em toda a stack, incluindo IAM, segurança em S3, WAF, AWS Shield, KMS, CloudWatch, CloudWatch Logs e CloudWatch Alarms.",
        "Sua experiência técnica também inclui AWS Cost Explorer, Trusted Advisor, Amazon RDS, Aurora, DynamoDB, ElastiCache, SQS, SNS, Lambda, API Gateway, AWS Identity Center e SAML, com ênfase constante em soluções seguras, escaláveis e com consciência de custo."
      ],
      profileCard: {
        title: "Perfil",
        location: "Localização",
        titleLabel: "Cargo",
        coreFocus: "Foco Principal",
        focusValue: "Plataformas AWS, SRE, DevOps"
      },
      stats: [
        { number: "4+", label: "Anos em Cloud & DevOps" },
        { number: "Gov", label: "Segurança & Governança" },
        { number: "IaC", label: "Terraform, CDK, CFN" },
        { number: "K8s", label: "Foco em EKS & ECS" }
      ],
      stack: {
        eyebrow: "Stack",
        title: "Ferramentas e plataformas centrais usadas em cloud, automação, segurança e operações.",
        copy:
          "Uma visão estruturada das tecnologias mais presentes no dia a dia de entrega e trabalho de plataforma."
      },
      experience: {
        eyebrow: "Experiência",
        title: "Trajetória profissional em infraestrutura, operações de plataforma e entregas em AWS.",
        copy:
          "Evolução de suporte em infraestrutura para engenharia cloud, automação e trabalho DevOps orientado a plataforma."
      },
      education: {
        eyebrow: "Formação",
        title: "Base acadêmica alinhada ao trabalho com infraestrutura e sistemas.",
        copy:
          "Formação que sustenta o trabalho prático em operações cloud, automação e entrega de plataforma."
      },
      certifications: {
        eyebrow: "Certificações",
        title: "Credenciais focadas em AWS, infraestrutura e operações práticas.",
        copy: "Credenciais cobrindo fundamentos de cloud, ferramentas de plataforma e operações de infraestrutura."
      }
    },
    blog: {
      title: "Blog",
      description: "Artigos sobre AWS, DevOps e engenharia de plataforma por Lucas Bedatty.",
      eyebrow: "Blog",
      heading: "Notas operacionais sobre AWS, segurança, governança e pipelines de entrega.",
      copy:
        "Conteúdo voltado a decisões práticas de engenharia em operações AWS, governança, segurança e fluxos de entrega."
    },
    projects: {
      title: "Projetos",
      description: "Estudos de caso de cloud, plataforma e DevOps por Lucas Bedatty.",
      eyebrow: "Projetos",
      heading: "Estudos de caso em breve.",
      copy:
        "Materiais detalhados sobre arquitetura, automação e trabalho de engenharia de plataforma estão sendo preparados para publicação.",
      status: "em andamento",
      statusChip: "em breve",
      lead: "As páginas de projetos selecionados estão sendo curadas.",
      body:
        "Esta seção vai reunir estudos de caso concisos sobre plataformas AWS, infraestrutura como código, governança, segurança e otimização de custos.",
      note:
        "O objetivo é publicar exemplos tecnicamente relevantes com contexto claro, decisões de arquitetura e resultados mensuráveis.",
      ctas: {
        profile: "Ver Perfil",
        contact: "Entrar em Contato"
      },
      terminal: {
        command: "cat projects/status.json",
        state: 'state: "em breve"',
        focus: 'focus: ["AWS", "IaC", "plataforma", "segurança"]',
        format: 'format: "estudos de caso técnicos"',
        timeline: 'timeline: "em preparação"'
      }
    },
    contact: {
      title: "Contato",
      description: "Entre em contato com Lucas Bedatty para oportunidades em cloud platform e DevOps.",
      eyebrow: "Contato",
      heading: "Conversas sobre cloud platform, DevOps e infraestrutura AWS.",
      copy:
        "Use os canais abaixo para contato direto sobre engenharia de plataforma, automação de infraestrutura, consultoria ou posições full-time.",
      intro:
        "Contato direto para conversas sobre arquitetura, consultoria e oportunidades em engenharia de plataforma.",
      linkedInLabel: "Abrir perfil do LinkedIn em uma nova aba",
      githubLabel: "Abrir perfil do GitHub em uma nova aba",
      jsonComment: "// contato.json",
      json: {
        languages: ["Português (Nativo)", "Inglês (Profissional)"],
        interests: ["Arquitetura Cloud", "Platform Engineering", "Cultura DevOps", "Open Source"],
        focus: "AWS, automação e confiabilidade de plataforma"
      }
    },
    rss: {
      title: "Blog de Lucas C. Bedatty",
      description: "Textos sobre AWS, engenharia de plataforma e DevOps por Lucas Bedatty."
    },
    skillGroups: [
      {
        shortLabel: "☁️",
        title: "Cloud",
        items: ["AWS", "EKS", "ECS", "Lambda", "API Gateway", "CloudFront", "EC2", "S3"]
      },
      {
        shortLabel: "🧱",
        title: "Infraestrutura como Código",
        items: ["Terraform", "AWS CDK", "CloudFormation", "GitOps", "GitHub Actions", "CodePipeline"]
      },
      {
        shortLabel: "🛡️",
        title: "Segurança & Governança",
        items: ["IAM", "KMS", "AWS WAF", "AWS Shield", "CloudTrail", "Config", "Control Tower", "Organizations"]
      },
      {
        shortLabel: "⚙️",
        title: "Observabilidade & Operações",
        items: ["CloudWatch", "Karpenter", "Docker", "Kubernetes", "Bash", "SSM"]
      }
    ],
    experienceTimeline: [
      {
        role: "Engenheiro DevOps Sênior",
        company: "Lerian",
        period: "Fev 2026 - Atual",
        location: "SP, Brasil",
        summary: [],
        tags: ["DevOps", "SRE", "Platform Engineering"]
      },
      {
        role: "Software Engineer II",
        company: "Certta",
        period: "Mai 2024 - Fev 2026",
        location: "RS, Brasil",
        summary: [
          "Implementei Karpenter e Spot Instances para melhorar o comportamento de escala e reduzir custos em EKS.",
          "Configurei Helm, ArgoCD e ALB Controller para entrega de workloads e gerenciamento de tráfego.",
          "Desenhei redes VPC com NAT Gateways, VPC Endpoints e conectividade via Transit Gateway.",
          "Apliquei Control Tower, SCPs e AWS Organizations para governança entre contas.",
          "Automatizei fluxos de remediação com SSM Automation, Lambda e Step Functions.",
          "Construí infraestrutura com AWS CDK, Terraform e CloudFormation.",
          "Entreguei pipelines CI/CD com GitHub Actions e AWS CodePipeline."
        ],
        tags: ["EKS", "Karpenter", "Terraform", "CDK", "ArgoCD", "GitHub Actions", "Control Tower"]
      },
      {
        role: "Software Engineer I",
        company: "Certta",
        period: "Abr 2022 - Mai 2024",
        location: "RS, Brasil",
        summary: [
          "Gerenciei ambientes EC2 com foco em performance, estabilidade e eficiência de custo.",
          "Configurei VPCs, Security Groups e Route Tables para comunicação segura entre serviços.",
          "Provisionei infraestrutura com Terraform e CloudFormation.",
          "Automatizei operações rotineiras com scripts em Bash e Python.",
          "Dei suporte a ambientes VPN e operações com bancos SQL e NoSQL.",
          "Gerenciei roles e policies IAM seguindo princípios de menor privilégio."
        ],
        tags: ["EC2", "VPC", "Terraform", "Python", "IAM", "S3"]
      },
      {
        role: "Assistente de TI",
        company: "Certta",
        period: "Ago 2021 - Abr 2022",
        location: "RS, Brasil",
        summary: [
          "Prestei suporte em AWS e administração de servidores Linux e Windows.",
          "Atuei com rotinas de rede, segurança e manutenção de hardware.",
          "Apoiei operações de TI, bancos de dados e atividades de helpdesk."
        ],
        tags: ["AWS", "Linux", "Windows Server", "Networking"]
      }
    ],
    educationItems: [
      {
        institution: "UNOPAR",
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "Out 2023 - Dez 2025"
      },
      {
        institution: "IFSUL - Instituto Federal Sul-rio-grandense",
        degree: "Ensino Médio Técnico em Informática",
        period: "Mar 2016 - Dez 2019"
      }
    ],
    certificationItems: [
      { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
      { name: "AWS Expert", issuer: "AWS Training" },
      { name: "AWS Events and Workflows", issuer: "AWS Knowledge" },
      { name: "Containers & Docker", issuer: "Certificação Profissional" },
      { name: "DevOps Initiative - Terraform", issuer: "Certificação Profissional" },
      { name: "Windows Server 2019 + AWS + Storage", issuer: "Certificação Profissional" }
    ]
  }
} as const;

export type Locale = keyof typeof localizedSite;
