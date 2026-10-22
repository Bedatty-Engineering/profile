---
locale: en
translationKey: release-validation-platform
pathSlug: release-validation-platform
title: "Agentic and Non-Agentic Release Validation Platform"
description: "A release validation platform combining deterministic tests, AI-assisted change analysis, and chaos engineering with auditable evidence."
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
architecture_notes: "A Go orchestrator with a hexagonal domain coordinates change analysis, functional checks, and selection of at most one experiment. Isolated agents work within an approved catalog; a dedicated engine injects failures while probes observe the system. Agentic and deterministic modes keep separate runs and verdicts, correlated by release."
---

## Overview

The platform validates releases for financial systems beyond a basic availability signal. It combines adaptive change analysis with deterministic suites and records a verdict alongside the evidence used to reach it.

## Two validation modes

### Agentic

Isolated agents analyze the diff between versions, estimate risk, and propose focused checks and a failure scenario suited to the assessed severity. They can select only from a closed, approved set, and their output is validated before execution.

### Non-agentic

Human-reviewed suites provide a repeatable baseline. They cover functional checks, k6 load tests, malformed inputs, and chaos experiments defined as code.

Each mode has its own run, verdict, and artifacts. The shared release correlates the results without allowing one mode to mask a failure in the other.

## Workflow and architecture

1. Analyze the change to identify affected areas and estimate risk.
2. Run functional checks to confirm expected behavior before injection.
3. Use risk to select at most one authorized experiment for the run.
4. A dedicated chaos engine injects the failure in an isolated environment while probes observe availability, recovery, or asynchronous convergence.
5. Consolidate the results into a verdict, resilience score, and versioned report.

The Go orchestrator keeps the domain independent from integrations through ports and adapters, with real and simulated adapters. The agent layer runs in isolated environments; the versioned library holds LitmusChaos-style declarative experiments; and the per-application catalog defines what may run and preserves release history.

## Controls and evidence

- Closed list of experiments allowed per application, with at most one experiment per run.
- Separate coordination from injection: the orchestrator selects; the dedicated engine executes.
- Experiments, catalog, and history versioned in Git, with peer review and application owners.
- Compare functional state before, during, and after failure, distinguishing tolerated unavailability from unacceptable conditions.
- A release dossier with the validated plan, executed script, metadata, and readable report for later reconstruction.
- Generate standard experiments from declarative configuration; address application-specific needs with manually written suites under the same conventions.

## Design challenges

The main challenge is allowing analysis to adapt to the diff without making a release gate unpredictable. Separate modes, selection limits, and agent-output validation keep their evidence independent and comparable. Good probes are essential too: without observing recovery and integrity during failure, injection creates noise instead of an interpretable result.

## Outcome

The platform brings functional validation and resilience checks under the same release, with independent runs and evidence that can be reviewed later. This makes the gate more consistent and helps teams understand how the system behaves under failure without relying on scattered manual runbooks.

## Next steps

- Expand coverage across applications and test surfaces.
- Give agents more context about the diff while keeping selection within approved limits.
- Improve risk analysis and correlation between failures and impacted components.
