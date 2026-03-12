export const site = {
  name: "Lucas C. Bedatty",
  title: "Senior DevOps Engineer",
  domain: "https://bedatty.com",
  location: "Brazil",
  email: "contato@bedatty.com",
  linkedin: "https://www.linkedin.com/in/lucas-bedatty",
  github: "https://github.com/bedatty",
  ogImage: "/og-image.svg",
  summary:
    "Senior DevOps engineer focused on AWS platforms, infrastructure automation, security guardrails, and resilient systems for production workloads.",
  description:
    "Lucas Bedatty builds secure, scalable AWS platforms with infrastructure as code, Kubernetes operations, governance automation, and cost-aware architecture for real production environments."
};

export const skillGroups = [
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
];

export const experienceTimeline = [
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
];

export const educationItems = [
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
];

export const certificationItems = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services"
  },
  {
    name: "AWS Expert",
    issuer: "AWS Training"
  },
  {
    name: "AWS Events and Workflows",
    issuer: "AWS Knowledge"
  },
  {
    name: "Containers & Docker",
    issuer: "Professional Certification"
  },
  {
    name: "DevOps Initiative - Terraform",
    issuer: "Professional Certification"
  },
  {
    name: "Windows Server 2019 + AWS + Storage",
    issuer: "Professional Certification"
  }
];
