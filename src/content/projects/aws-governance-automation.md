---
title: "AWS Governance Automation with Control Tower and Config"
description: "A governance baseline for multi-account AWS environments using preventive controls, detective rules, and automated remediation workflows."
technologies:
  - AWS Control Tower
  - AWS Organizations
  - AWS Config
  - Lambda
  - Step Functions
github_link: "https://github.com/Bedatty-Engineering/aws-governance-automation"
demo_link: "https://example.com/aws-governance-automation"
architecture_notes: "Guardrails are layered across Organizations and Control Tower while AWS Config rules trigger event-driven remediation using Lambda, SSM Automation, and Step Functions."
---

This project maps out a compliance and governance architecture for AWS estates that need repeatable controls without relying on manual review cycles.

## Highlights

- Account baselines are enforced at the organizational level for consistent security posture.
- AWS Config evaluates compliance continuously and dispatches remediation workflows when drift is detected.
- Step Functions is used to orchestrate multi-step remediations where approval, branching, or auditability matter.

## Outcome

The system is intended to shorten time-to-remediation, improve compliance visibility, and make multi-account AWS operations easier to scale.
