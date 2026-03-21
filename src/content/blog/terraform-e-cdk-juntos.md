---
locale: pt
translationKey: terraform-cdk-together
pathSlug: terraform-e-cdk-juntos
title: "Usando Terraform e AWS CDK Juntos"
date: 2026-01-30
description: "Onde uma abordagem mista de IaC faz sentido e como manter os limites de ownership claros."
tags:
  - Terraform
  - AWS CDK
  - IaC
---

Times nem sempre precisam de uma única ferramenta de infraestrutura como código. Na prática, ambientes mistos são comuns, especialmente quando times de plataforma precisam padronizar fundações enquanto times de aplicação preferem abstrações de nível mais alto.

## Padrão

- Use Terraform para fundações compartilhadas de ambiente e primitivas entre times.
- Use AWS CDK quando stacks específicas de aplicação se beneficiarem de abstrações em TypeScript.
- Mantenha estado, ownership e limites de release explícitos.

O ponto principal não é pureza. É evitar acoplamentos ocultos entre stacks e manter os caminhos de revisão compreensíveis.
