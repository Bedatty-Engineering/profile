---
locale: pt
translationKey: aws-governance-automation
pathSlug: automacao-de-governanca-aws
title: "Automação de Governança AWS com Control Tower e Config"
description: "Uma base de governança para ambientes AWS multi-conta usando controles preventivos, regras de detecção e fluxos automatizados de remediação."
technologies:
  - AWS Control Tower
  - AWS Organizations
  - AWS Config
  - Lambda
  - Step Functions
github_link: "https://github.com/Bedatty-Engineering/aws-governance-automation"
demo_link: "https://example.com/aws-governance-automation"
architecture_notes: "Os guardrails são distribuídos entre Organizations e Control Tower, enquanto regras do AWS Config disparam remediações orientadas a eventos com Lambda, SSM Automation e Step Functions."
---

Este projeto descreve uma arquitetura de conformidade e governança para ambientes AWS que precisam de controles repetíveis sem depender de ciclos manuais de revisão.

## Destaques

- Baselines de conta são aplicados no nível organizacional para manter postura de segurança consistente.
- O AWS Config avalia conformidade continuamente e dispara fluxos de remediação quando detecta drift.
- Step Functions é usado para orquestrar remediações de múltiplas etapas quando aprovação, ramificação ou auditabilidade importam.

## Resultado

O sistema foi pensado para reduzir o tempo de remediação, melhorar a visibilidade de conformidade e facilitar a escala de operações AWS multi-conta.
