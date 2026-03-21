---
locale: pt
translationKey: secure-serverless-api
pathSlug: api-serverless-segura-aws
title: "API Serverless Segura na AWS"
description: "Um padrão de backend serverless com API Gateway, Lambda, IAM e KMS, com defaults fortes para criptografia, logs e acesso de menor privilégio."
technologies:
  - AWS Lambda
  - API Gateway
  - IAM
  - KMS
  - DynamoDB
github_link: "https://github.com/Bedatty-Engineering/secure-serverless-api"
demo_link: "https://example.com/secure-serverless-api"
architecture_notes: "As requisições passam pelo API Gateway até funções Lambda com roles IAM escopadas, caminhos de dados criptografados, logging estruturado e controles de serviço que reduzem exposição acidental."
---

Este projeto descreve uma fundação segura para APIs serverless voltada a times que precisam entregar rápido sem subinvestir em controles operacionais.

## Destaques

- Roles IAM são escopadas por função para manter o acesso alinhado à responsabilidade da aplicação.
- KMS e defaults de armazenamento criptografado protegem caminhos de dados sensíveis.
- Policies no API Gateway, observabilidade e logs estruturados tornam o sistema mais auditável e mais fácil de diagnosticar.

## Resultado

A arquitetura oferece um modelo leve de entrega com controles de segurança explícitos e baixa sobrecarga operacional.
