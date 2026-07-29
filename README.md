# Microsoft Azure Ops — Cloud Infrastructure Automation & Monitoring 🔧

> **Azure infrastructure lifecycle management with automated provisioning, monitoring, and cost optimization.**

[![Python](https://img.shields.io/badge/Python-3.9+-blue)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6)]()
[![Domain](https://img.shields.io/badge/Domain-Cloud%20Infrastructure-blue)]()

---

## 🎯 For Recruiters & Hiring Managers

This repository implements an **Azure infrastructure automation platform** — the tooling that provisions, monitors, and optimizes cloud resources at enterprise scale. It demonstrates:

- **Infrastructure-as-Code** patterns with declarative resource management
- **Cost optimization** algorithms analyzing resource utilization and right-sizing recommendations
- **Multi-region deployment** with automated failover and geo-redundancy
- **Compliance monitoring** ensuring resources meet security and governance policies

**Why this matters**: Cloud infrastructure management is the backbone of modern software delivery. This codebase shows the **DevOps engineering, cost optimization, and operational excellence** skills that every cloud-native organization needs.

---

## 🔬 For Engineers & Technical Reviewers

### Core Components

| Component | Language | Purpose |
|---|---|---|
| `src/azure_ops.py` | Python | Resource provisioning, cost analysis, compliance scanning |
| `src/monitor_gateway.ts` | TypeScript | Real-time metrics ingestion and alerting pipeline |
| `tests/` | Python | Infrastructure simulation with cost modeling |

---

## 🤖 ML/AI & Programmatic Mesh Integration

- **MCP Tool**: `azure_health()` — cloud resource health queryable by orchestrator agents
- **Mastermind Sidecar**: Publishes cost alerts to APEX Highway mesh
- **AI Extension**: Anomaly detection on cloud spend with automated right-sizing recommendations

```python
health = await mcp_client.call_tool("azure-ops", "resource_health")
```

---

## ⚡ Quick Start

```bash
python3 src/azure_ops.py
python3 tests/test_azure_ops.py
```
