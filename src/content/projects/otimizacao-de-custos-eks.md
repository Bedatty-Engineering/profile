---
locale: pt
translationKey: eks-cost-optimization
pathSlug: otimizacao-de-custos-eks
title: "Otimização de Custos em EKS com Karpenter e Spot"
description: "Uma estratégia de plataforma Kubernetes focada em reduzir custo computacional mantendo workloads resilientes e comportamento de autoscaling previsível."
technologies:
  - EKS
  - Karpenter
  - Spot Instances
  - Terraform
  - CloudWatch
github_link: "https://github.com/Bedatty-Engineering/eks-cost-optimization"
demo_link: "https://example.com/eks-cost-optimization"
architecture_notes: "A capacidade do cluster é dividida entre managed node groups e provisioners do Karpenter, com workloads preparados para interrupções e observabilidade usada para equilibrar economia e estabilidade em runtime."
---

Este projeto demonstra um modelo de otimização para EKS em workloads com perfil de produção, onde economia de custos não pode comprometer confiabilidade.

## Destaques

- O Karpenter provê capacidade elástica a partir do mercado Spot enquanto workloads centrais permanecem em managed node groups base.
- Pod disruption budgets e regras de posicionamento reduzem o blast radius de eventos de interrupção.
- Métricas do CloudWatch e telemetria de escala criam ciclos de feedback para rightsizing e análise de falhas.

## Resultado

A plataforma resultante foi desenhada para reduzir custo computacional, melhorar elasticidade e manter o comportamento de escala explícito para times que operam serviços em containers.
