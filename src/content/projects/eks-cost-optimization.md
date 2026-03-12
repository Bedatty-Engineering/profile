---
title: "EKS Cost Optimization with Karpenter and Spot"
description: "A Kubernetes platform strategy focused on reducing compute spend while keeping workloads resilient and autoscaling behavior predictable."
technologies:
  - EKS
  - Karpenter
  - Spot Instances
  - Terraform
  - CloudWatch
github_link: "https://github.com/Bedatty-Engineering/eks-cost-optimization"
demo_link: "https://example.com/eks-cost-optimization"
architecture_notes: "Cluster capacity is split across managed node groups and Karpenter provisioners, with interruption-aware workloads and observability used to balance savings against runtime stability."
---

This project demonstrates an EKS optimization model for production-style workloads where cost savings must not come at the expense of reliability.

## Highlights

- Karpenter provisions burst capacity from Spot markets while core workloads remain anchored on baseline managed node groups.
- Pod disruption budgets and workload placement rules reduce the blast radius from interruption events.
- CloudWatch metrics and scaling telemetry provide feedback loops for rightsizing and failure analysis.

## Outcome

The resulting platform is designed to reduce compute spend, improve elasticity, and keep scaling behavior explicit for engineering teams operating containerized services.
