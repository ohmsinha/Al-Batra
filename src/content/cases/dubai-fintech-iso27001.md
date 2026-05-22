---
title: "ISO 27001 ISMS for a DIFC-licensed FinTech operator"
client: "DIFC-licensed FinTech"
industry: "Professional Services"
industrySlug: "professional-services"
location: "Dubai · DIFC"
standards:
  - "ISO 27001"
  - "ISO 27701"
timeline: "16 weeks"
summary: "A DIFC-licensed FinTech needed ISO 27001 (and an aligned 27701 privacy extension) to satisfy enterprise client procurement requirements. We delivered an audit-ready ISMS in 16 weeks."
challenge: "The FinTech had grown from 12 to 80 staff in 18 months, with cloud-native infrastructure across three providers. Enterprise procurement reviews had begun requesting ISO 27001 as a pass/fail control. The team had no information-security documentation beyond a thin acceptable-use policy."
approach: "We scoped the ISMS narrowly — the platform team, the data-engineering team and the customer-success team. The shared infrastructure was treated as a managed-service input, with vendor-risk treatment documented separately. Statement of Applicability was kept lean: 84 of 93 Annex A controls in scope, with explicit, written exclusions for the remaining 9."
outcome: "Stage 2 closed without a major NC. ISO 27701 was added as a privacy-information overlay in week 14 with no additional documentation effort. Both certificates were issued within the same audit cycle."
metrics:
  - { label: "Annex A controls in scope", value: "84 of 93" }
  - { label: "Vendor risk register", value: "27 vendors" }
  - { label: "ISMS-trained staff", value: "100%" }
  - { label: "Stage 2 outcome", value: "0 major · 4 minor" }
publishedAt: 2024-11-30
order: 3
seoTitle: "Case study · ISO 27001 + 27701 for a DIFC FinTech"
needsVerification:
  - "Client identity not for publication"
  - "Procurement-pass outcome to be confirmed"
---

## Operating context

The FinTech is a DIFC-licensed payments operator with a cloud-native platform spanning AWS, Cloudflare and Snowflake. Workforce composition at engagement start: 80 staff (platform, data engineering, customer success, finance, compliance and operations).

The engagement driver was enterprise procurement — three of the FinTech's prospect accounts had moved to a procurement model that treated ISO 27001 as a pass/fail control, with no compensating alternative accepted.

## Scope discipline

The most important scope decision was negative. We did not certify the entire company. The ISMS was scoped to the platform, data-engineering and customer-success teams — the surface area through which client data flows. Finance, marketing, sales and HR were explicitly out of scope, with the boundary documented in the scope statement and re-confirmed during Stage 1.

This kept the Statement of Applicability lean: 84 of 93 Annex A controls in scope, with 9 explicit exclusions (mostly physical-security controls — the office is a managed coworking space, treated as a vendor).

## What we built

- A risk register with 41 risks, 27 of which carried treatment plans
- A vendor-risk register covering all 27 SaaS dependencies with renewal review cadence
- A change-management process integrated with the platform team's existing GitHub workflow — no parallel paper trail
- A bring-your-own-device policy aligned to the team's MacBook-led estate
- Mandatory awareness training delivered via the FinTech's existing LMS

## The audit room

Stage 2 ran for five days, with the lead auditor working from the operating site for three of them and Cloudflare-hosted documentation evidence for the remainder. Four minor NCs were raised, all closed within the auditor's 30-day window.

## ISO 27701 as an overlay

The privacy extension was added in week 14 without a new documentation pass. The privacy information management system (PIMS) sat as an overlay across the existing ISMS — most additional controls were already in place under GDPR-aligned procedures. The ISO 27701 certificate was issued in the same audit cycle.
