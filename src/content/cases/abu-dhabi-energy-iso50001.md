---
title: "Energy management at a UAE renewables-utility operator"
client: "Renewables-utility operator"
industry: "Energy & Utilities"
industrySlug: "energy"
location: "Abu Dhabi"
standards:
  - "ISO 50001"
  - "ISO 14001"
timeline: "12 weeks"
summary: "A utility-scale solar and energy-storage operator integrated ISO 50001 energy management with the existing ISO 14001 environmental system. EnPIs are now tied to operational reporting, not retro-fitted to it."
challenge: "The operator already held ISO 14001 but was missing the energy-performance discipline that ISO 50001 codifies. Energy data sat in three separate systems — SCADA, the asset-management platform, and a finance ledger — none of which spoke to each other."
approach: "Energy baselines and EnPIs were defined at the asset class level (PV array, BESS, BOS). The data pipeline was rebuilt to flow from SCADA → asset-management platform → energy register, with weekly reconciliation against the finance ledger. Documentation reused the existing 14001 manual structure."
outcome: "Stage 2 closed with no major NCs. EnPIs are now reported quarterly to the operator's board as part of standard operating reports — not as ISO compliance artefacts."
metrics:
  - { label: "Asset classes baselined", value: "3" }
  - { label: "EnPIs in production", value: "11" }
  - { label: "Data sources unified", value: "3 → 1" }
publishedAt: 2024-09-18
order: 4
seoTitle: "Case study · ISO 50001 EnMS for a UAE renewables operator"
needsVerification:
  - "EnPI count subject to operator approval"
---

## Operating context

The operator runs a portfolio of utility-scale photovoltaic and battery-energy-storage assets across the UAE, with a 24/7 control centre in Abu Dhabi. The team had implemented ISO 14001 in 2022 and was preparing for ISO 50001 in line with internal sustainability commitments and emerging regulatory expectation around significant energy use.

## What we changed

The most important change was upstream of the management system: the data pipeline. SCADA telemetry, asset-management metadata and finance-ledger consumption data had three different timestamps and three different unit conventions. Before we could define EnPIs, we re-aligned the three sources into a single energy register with a one-hour resolution.

From there, EnPIs were defined per asset class (PV array, battery-energy-storage system, balance of system) rather than per site. This let baselines roll up cleanly at portfolio level for board reporting while still surfacing site-level variance for operations.

## Why this matters

ISO 50001 is not principally a documentation standard — it is a performance discipline. EnPIs that exist only inside the management system tend to drift from operational reality within a quarter. Building the EnMS on top of operational data, rather than alongside it, was the difference between a system that the operator's board uses to make decisions and a binder that the QHSE team maintains in isolation.

## The audit room

Stage 2 ran for four days. The lead auditor focused on data lineage — where the SCADA readings come from, how they're transformed, who validates the monthly close. No major NCs, two minor NCs, both closed inside two weeks.
