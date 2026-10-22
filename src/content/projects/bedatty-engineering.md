---
locale: en
translationKey: bedatty-engineering
pathSlug: bedatty-engineering
title: "Bedatty Engineering: Open Engineering Workspace"
description: "A public engineering workspace for personal infrastructure, reusable automation, developer tools, and software experiments built in the open."
technologies:
  - GitHub Actions
  - Terraform
  - Cloudflare
  - Go
  - JavaScript
  - Bash
  - AWS CLI
  - GitHub CLI
  - Docker
  - Platform Engineering
  - Open Source
github_link: "https://github.com/Bedatty-Engineering"
architecture_notes: "Independent repositories share a public organization. modules-hub provides reusable GitHub Actions workflows and composite actions consumed through pinned refs. infra-cloudflare separates reusable Terraform modules from independent stacks, each with its own state; pull requests plan affected stacks and pushes to main apply them through per-stack GitHub Environments. The organization also publishes focused CLI tools and standalone applications."
---

## Overview

Bedatty Engineering is a public workspace for personal infrastructure, software, homelab experiments, and learning in the open. Its repositories range from reusable automation and cloud tooling to command-line utilities and small applications. Each repository has its own scope and maturity; the organization is a place to build and share useful patterns, not a single product roadmap.

## Workspace architecture

The repositories remain independently useful while shared automation and infrastructure patterns make recurring work easier to maintain.

```mermaid
flowchart TB
accTitle: Bedatty Engineering workspace map
accDescr: The public organization groups shared GitHub automation, Cloudflare infrastructure as code, command-line tools, and standalone applications and experiments.
  org["🏗️ Bedatty Engineering<br/>public workspace"]
  org --> hub["🧩 Shared automation<br/>modules-hub"]
  org --> infra["☁️ Cloud infrastructure<br/>infra-cloudflare"]
  org --> tools["⌨️ Developer utilities<br/>awsp · ghp"]
  org --> apps["🧪 Applications and experiments<br/>amatoken · counting-days"]
  hub --> actions["Reusable workflows<br/>composite actions"]
  infra --> stacks["Terraform modules<br/>independent stacks"]
  tools --> profiles["AWS profiles and SSO<br/>GitHub accounts and signing keys"]
  apps --> products["AI session usage dashboard<br/>calendar application"]
```

## Shared automation and cloud infrastructure

[`modules-hub`](https://github.com/Bedatty-Engineering/modules-hub) centralizes reusable GitHub Actions workflows and composite actions. Other repositories can consume them through version-pinned references, keeping common validation and automation in one place while allowing each caller to choose the checks it needs.

[`infra-cloudflare`](https://github.com/Bedatty-Engineering/infra-cloudflare) manages hosting, DNS, and deployment foundations with Terraform. Reusable modules are separated from stack roots. Each stack owns its backend and state, limiting the blast radius of changes. Pull requests run plans for affected stacks; pushes to `main` apply approved changes through stack-specific GitHub Environments.

```mermaid
flowchart TB
accTitle: Cloudflare infrastructure change flow
accDescr: A pull request plans only the changed Terraform stacks. After review and merge, GitHub Actions applies each changed stack through its own environment and state.
  change["📝 Terraform change"] --> detect["🔎 Detect affected stack"]
  detect --> plan["📋 Plan on pull request"]
  plan --> review["👀 Review and merge"]
  review --> apply["🚀 Apply on main"]
  apply --> env["🔐 Stack-specific GitHub Environment"]
  env --> state["🗃️ Independent remote state"]
```

## Developer tools and applications

The organization also publishes focused tools for recurring workflows. [`awsp`](https://github.com/Bedatty-Engineering/awsp) switches AWS CLI profiles, supports SSO login and logout, and exposes profile and region settings to the current shell. [`ghp`](https://github.com/Bedatty-Engineering/ghp) manages authenticated GitHub CLI accounts and can create or reuse Ed25519 SSH signing keys.

[`amatoken`](https://github.com/Bedatty-Engineering/amatoken) is a self-hosted Go dashboard that reads local Claude Code session data and Codex session data when available, then groups token usage and cost by session, project, and model. [`counting-days`](https://github.com/Bedatty-Engineering/counting-days) is a standalone calendar that highlights the current day and year progress.

## Security and operating boundaries

Infrastructure stacks use separate state and GitHub Environments, and sensitive inputs are kept out of the repository. The CLI tools use the existing AWS and GitHub authentication flows rather than introducing a central credential service. Individual repositories document their own requirements and contribution expectations, so a small experiment does not inherit unnecessary platform machinery.

## Results

The public organization provides reusable automation, a documented Terraform workflow for Cloudflare infrastructure, practical AWS and GitHub CLI utilities, and independently maintained applications. The repositories are available to inspect and reuse; no aggregate usage or adoption metrics are published.

## My role

I maintain the organization and build its shared automation, infrastructure code, developer tools, and personal software experiments, documenting how each repository can be used and operated.
