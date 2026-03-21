---
locale: en
translationKey: terraform-cdk-together
pathSlug: terraform-and-cdk-together
title: "Using Terraform and AWS CDK Together"
date: 2026-01-30
description: "Where a mixed IaC approach makes sense and how to keep ownership boundaries clear."
tags:
  - Terraform
  - AWS CDK
  - IaC
---

Teams do not always need a single infrastructure-as-code tool. In practice, mixed estates are common, especially when platform teams need standardized foundations while application teams prefer higher-level abstractions.

## Pattern

- Use Terraform for shared environment foundations and cross-team primitives.
- Use AWS CDK where application-specific stacks benefit from TypeScript abstractions.
- Keep state, ownership, and release boundaries explicit.

The important part is not purity. It is preventing hidden coupling between stacks and keeping review paths understandable.
