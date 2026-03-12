---
title: "Secure Serverless API on AWS"
description: "A serverless backend pattern using API Gateway, Lambda, IAM, and KMS with strong defaults for encryption, logging, and least-privilege access."
technologies:
  - AWS Lambda
  - API Gateway
  - IAM
  - KMS
  - DynamoDB
github_link: "https://github.com/Bedatty-Engineering/secure-serverless-api"
demo_link: "https://example.com/secure-serverless-api"
architecture_notes: "Requests flow through API Gateway into Lambda functions with scoped IAM roles, encrypted data paths, structured logging, and service-level controls that reduce accidental exposure."
---

This project outlines a secure serverless API foundation for teams that want to move quickly without underinvesting in operational controls.

## Highlights

- IAM roles are scoped per function to keep access aligned with application responsibility.
- KMS and encrypted storage defaults protect sensitive data paths.
- API Gateway policies, observability, and structured logs make the system easier to audit and troubleshoot.

## Outcome

The architecture provides a lightweight delivery model with explicit security controls and minimal operational overhead.
