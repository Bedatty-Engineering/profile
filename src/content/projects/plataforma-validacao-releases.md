---
locale: pt
translationKey: release-validation-platform
pathSlug: plataforma-validacao-releases
title: "Plataforma de Testes Agênticos e Não Agênticos"
description: "Uma plataforma de validação de releases que combina testes determinísticos, análise assistida por IA e engenharia do caos com evidências auditáveis."
technologies:
  - Go
  - k6
  - LitmusChaos
  - Argo Workflows
  - GitOps
  - Python
  - AI Agents
  - Chaos Engineering
  - Hexagonal Architecture
  - Release Validation
architecture_notes: "Um orquestrador Go com domínio em arquitetura hexagonal coordena análise da mudança, verificações funcionais e a seleção de no máximo um experimento. Agentes isolados trabalham dentro de um catálogo aprovado; um motor dedicado injeta falhas enquanto sondas observam o sistema. Os modos agêntico e determinístico mantêm execuções e vereditos próprios, correlacionados pela release."
---

## Visão geral

A plataforma valida releases de sistemas financeiros além do sinal básico de disponibilidade. Ela combina análise adaptativa da mudança com suítes determinísticas, e registra um veredito acompanhado das evidências usadas para chegar a ele.

## Dois modos de validação

### Agêntico

Agentes isolados analisam o diff entre versões, estimam o risco e propõem verificações e um cenário de falha compatível com a severidade. Eles só podem selecionar itens de um conjunto fechado e aprovado, e a saída é validada antes de ser executada.

### Não agêntico

Suítes revisadas por pessoas oferecem uma linha de base repetível. Elas cobrem verificações funcionais, carga com k6, entradas malformadas e experimentos de caos definidos como código.

Cada modo tem execução, veredito e artefatos próprios. A release compartilhada correlaciona os resultados sem permitir que um modo esconda a falha do outro.

## Fluxo e arquitetura

1. A mudança é analisada para identificar áreas impactadas e estimar risco.
2. Verificações funcionais confirmam o comportamento esperado antes da injeção.
3. O risco define no máximo um experimento autorizado para a execução.
4. Um motor de caos dedicado injeta a falha em ambiente isolado, enquanto sondas observam disponibilidade, recuperação ou convergência assíncrona.
5. Os resultados são consolidados em um veredito, uma pontuação de resiliência e um relatório versionado.

O orquestrador Go mantém o domínio independente das integrações por meio de ports & adapters, com adaptadores reais e simulados. A camada de agentes executa em ambientes isolados; a biblioteca versionada reúne experimentos declarativos no padrão LitmusChaos; e o catálogo por aplicação define o que pode rodar e preserva o histórico das releases.

## Controles e evidências

- Lista fechada de experimentos permitidos por aplicação e no máximo um experimento por execução.
- Separação entre coordenação e injeção: o orquestrador seleciona; o motor dedicado executa.
- Experimentos, catálogo e histórico versionados em Git, com revisão por pares e responsáveis por aplicação.
- Comparação do estado funcional antes, durante e depois da falha, distinguindo indisponibilidade tolerada de condições inaceitáveis.
- Dossiê por release com plano validado, script executado, metadados e relatório legível para reconstrução posterior.
- Experimentos padrão gerados de configuração declarativa; necessidades específicas atendidas por suítes manuais sob as mesmas convenções.

## Desafios de projeto

O principal desafio é permitir que a análise se adapte ao diff sem tornar imprevisível um gate de release. A separação dos modos, os limites de seleção e a validação da saída dos agentes mantêm suas evidências independentes e comparáveis. Sondas adequadas também são essenciais: sem observar recuperação e integridade durante a falha, a injeção gera ruído em vez de um resultado interpretável.

## Resultado

A plataforma reúne validação funcional e resiliência sob a mesma release, com execuções independentes e evidências que podem ser revisadas depois. Isso torna o gate mais consistente e ajuda os times a entender como o sistema se comporta diante de falhas, sem depender de roteiros manuais dispersos.

## Próximos passos

- Ampliar a cobertura de aplicações e superfícies de teste.
- Dar aos agentes mais contexto sobre o diff, mantendo a seleção dentro dos limites aprovados.
- Enriquecer a análise de risco e a correlação entre falhas e componentes impactados.
