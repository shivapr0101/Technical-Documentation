**Training Guide**

		**Beginner**

**Date of Issue: 2025**  
**Target Audience: Application Developers, Trainees.**

*A Training Manual for application creation, knowledge and work reference.*

# **Copyright**

Copyright © 2025 Procify Innovations Pvt. Ltd. All rights reserved.

No part of this publication may be reproduced or transmitted in any form or purpose without the permission of **Procify Innovations Pvt. Ltd.** The information contained in this document might change based on new developments without prior notice.

# **Disclaimer**

THESE MATERIALS ARE PROVIDED BY PROCIFY INNOVATIONS PVT LTD, ON AN "AS IS" BASIS, AND EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR APPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, CONCERNING THESE MATERIALS AND THE SERVICE, INFORMATION, TEXT, GRAPHICS, LINKS, OR ANY OTHER MATERIALS AND PRODUCTS CONTAINED HEREIN. IN NO EVENT SHALL PROCIFY INNOVATIONS PVT LTD BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND WHATSOEVER, INCLUDING WITHOUT LIMITATION LOST REVENUES OR LOST PROFITS, WHICH MAY RESULT FROM THE USE OF THESE MATERIALS OR INCLUDED SOFTWARE COMPONENTS.

**Training Procedure**

Welcome to the Procify Developer Training. This section explains the overall structure of the course, how sessions are designed, and what is expected of you as a trainee. Read this before starting Session 1\.

## Course Structure — 8 Sessions

The training spans 8 sessions. Each session introduces a new layer of the platform — starting with setup and ending with publishing a fully working application. Sessions must be taken in order; each one builds directly on the previous.

| Session | Topic |
| :---- | :---- |
| Session 1 | Platform Setup & Account Management |
| Session 2 | BOL — Entity Fundamentals & Initial Pages |
| Session 3 | Entity Configuration (Relations, Object Types, Status, ID Series) |
| Session 4 | Value Helps & Queries |
| Session 5 | BOL Logic & Validations  with dashboard creation |
| Session 6 | Bindings, Navigation & Styling |
| Session 7 | Controllers & Client-Side Behaviour |
| Session 8 | Menu Configuration & App Management, Versioning & Publishing |

## 

## The Learn-by-Building Approach

This training does not teach concepts in isolation. You will build one real application — a Customer complaint system — across all 89 sessions. Every concept is introduced exactly when you need it to make the next part of that application work.

| Why this matters for you You will always know WHY you are doing each step, not just HOW. By Session 8 you will have a working application demonstrating every major platform capability. The application grows session by session — if you miss a step it will affect later sessions. When you encounter a similar situation on a real project, you will have a concrete reference point from training. |
| :---- |

## What Is Expected of You

* Attend each session with the previous session's assignment completed and verified.

* Follow steps in this guide during hands-on time — do not skip ahead.

* Ask questions during the Review & Q\&A phase, not during the trainer demonstration.

| The Application You Will Build This training guide uses a REAL application: the Customer complaints Application. You are not building a demo — you are building a production-ready application for delivery personnel. Every concept taught in every session is applied directly to build this application. By Session 9 you will have a fully working, published Delivery Agent Application. |
| :---- |

# 

# **Session 1 — Platform Setup & Account Management**

## Session Objectives

By the end of this session, we will be able to:

* Understand the platform architecture.

* Create an application in the Workspace Hub.

* Define application roles and understand system vs. application roles.

* Create user accounts and assign them to an application with the correct role.

* Understands the role of data studio and page builder in application creation.

| ⚠  Why this session comes first The App you create today is built across ALL 9 sessions — treat it carefully. The Roles you define today are referenced in Session 5 (Validations) and Session 9 (Publishing access). The Users you create today are the test personas you will use to verify every screen built in Sessions 2–8. |
| :---- |

## Part A — Understanding the Customer complaint Application

Before touching any tool, you need a clear picture of the application you are building. Read this section carefully — every configuration decision in Sessions 1– traces back to this Business Requirement Document.

### Application Purpose

The Customer Complaints Application is a solution designed to manage customer complaints end-to-end across three personas:

• Log and track customer complaints with full lifecycle management.

• Route complaints from Employee → Manager → Responsible Team.

• Manage complaint line items, voice records, and file attachments.

• Monitor escalations, SLA (TAT), and resolution timelines.

• Provide dashboards per role so every user sees what they need.

 

### **Application Roles — Three Personas**

This application defines exactly three application roles, each mapped to a Procify role-rollup level for viewable and UI-Auth controls:

 

| Role ID | Business Name | Procify Role Rollup |
| :---- | :---- | :---- |
| Employee | Complaint Creator | Owner (s\_role\_rollup \= 10\) |
| Manager | Complaint Assignor | Supervisor (s\_role\_rollup \= 20\) |
| Responsible Team | Issue Resolver | Reviewer (s\_role\_rollup \= 30\) |

 

| 📘 Role Precedence Rule Precedence is a number. Lower \= higher priority. Employee: precedence 3, Manager: precedence 2, ResponsibleTeam: precedence 1\. This means if a user has multiple roles, the lower-precedence number overrides. Your developer account should be assigned Manager (precedence 2\) for full access during testing. |
| :---- |

 

### **Role Responsibilities**

| Action | Employee(Owner) | Manager(Supervisor) | Responsible Team(Reviewer) |
| :---- | :---- | :---- | :---- |
| Create a new complaint | ✅ Yes | — | — |
| View own complaints | ✅ Yes | ✅ Yes | ✅ Yes |
| Edit complaint description | ✅ Yes (OPEN only) | ✅ Yes | — |
| Assign responsible team | — | ✅ Yes | — |
| Move status → INPROCESS | — | ✅ Yes | ✅ Yes |
| Move status → ON HOLD | — | — | ✅ Yes |
| Move status → RESOLVED | — | ✅ Yes | ✅ Yes |
| Move status → CLOSED | ✅ Yes | ✅ Yes | — |
| Reopen a closed complaint | ✅ Yes | ✅ Yes | — |
| Add complaint items | ✅ Yes (OPEN/INPROCESS) | — | — |
| Add voice/comment records | ✅ Yes | ✅ Yes | ✅ Yes |
| Upload attachments | ✅ Yes | ✅ Yes | ✅ Yes |
| Escalate complaint | ✅ Yes | ✅ Yes | — |
| View all complaints (not just own) | — | ✅ Yes | ✅ Yes (assigned) |

 

### **Entities to be Built**

| Entity ID | Primary Key | Built in Session |
| :---- | :---- | :---- |
| d\_complaints | complaint\_id | Session 1 |
| d\_complaint\_item | item\_id | Session 2 |
| d\_complaint\_voices | voice\_id | Session 2 |
| d\_complaints\_attachment | attachment\_id | Session 2 |
| d\_customers | customer\_id | Session 2 |
| d\_resp\_team | emp\_id | Session 2 |

 

### **Complaint Status Flow**

The status lifecycle has 6 states. Each transition is triggered by a specific role:

 

| OPEN | INPROCESS | ON HOLD | RESOLVED | CLOSED | REOPEN |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **↓** | **↓** | **↓** | **↓** | **↓** |  |
| *Triggered by* **Employee** | *Triggered by* **Manager / Responsible Team** | *Triggered by* **Responsible Team** | *Triggered by* **Responsible Team / Manager** | *Triggered by* **Manager / Employee** | *Triggered by* **Employee / Manager** |

 

| Status | Badge Colour / Meaning |
| :---- | :---- |
| OPEN | Blue — complaint logged by Employee, awaiting Manager assignment |
| INPROCESS | Orange — Manager assigned responsible team; team working on it |
| ON HOLD | Purple — Responsible Team placed on hold pending information |
| RESOLVED | Green — Responsible Team marked as resolved |
| CLOSED | Grey — Manager confirmed resolution and closed the ticket |
| REOPEN | Red — Employee or Manager reopened a resolved/closed complaint |

 

| 📘 Status Transition Rules OPEN → INPROCESS: only Manager can trigger (by assigning responsible\_team).INPROCESS → ON HOLD / RESOLVED: only ResponsibleTeam can trigger.RESOLVED → CLOSED: only Manager can trigger.CLOSED → REOPEN: Employee or Manager can reopen; status resets to OPEN.ON HOLD → INPROCESS: only ResponsibleTeam can resume. |
| :---- |

 

**d\_complaint — Properties**plaints — All Properties

| Property ID | Data Type | Key Attr | Notes |
| :---- | :---- | :---- | :---- |
| complaint\_id | String | 🔑 PK | Auto-generated via ID Series — e.g. CMP-00001 |
| complaint\_desc | Text | ❗ Mandatory | Full description of the complaint |
| customer\_id | String | — | FK → d\_customers.customer\_id |
| priority | String | — | Values: Low / Medium / High / Critical |
| status | string | — | Status of the ticket. |
| first\_response\_date | Timestamp | — | Date of first response to customer |
| planned\_resolution\_date | Timestamp | — | Planned closure date |
| assigned\_to | String | — | Employee user ID who owns the complaint |
| responsible\_manager | String | — | FK → d\_sales\_team.emp\_id — Manager assigned |
| responsible\_team | String | — | Team assigned by Manager for resolution |
| remark | Text | — | Internal remarks or resolution notes |
| closed\_on | Timestamp | — | Date the complaint was closed |
| is\_escalated | Boolean | — | Default: false — true if escalated by Manager |
| complaint\_type | String | — | Type classification of the complaint |
| nature\_of\_complaint | String | — | Nature/category of the complaint |
| actual\_tat | Decimal | — | Actual turnaround time in days |
| standard\_tat | Decimal | — | SLA turnaround time in days |
| created\_on | Timestamp | — | Audit: auto-set on creation |
| created\_by | String | — | Audit: user who created the record |
| modified\_on | Timestamp | — | Audit: auto-updated on every save |
| modified\_by | String | — | Audit: user who last modified the record |

 

### **d\_complaint\_item — Properties**

| Property ID | Data Type | Key Attr | Notes |
| :---- | :---- | :---- | :---- |
| item\_id | String | 🔑 PK | Primary key — auto-generated |
| ticket\_id | String | — | FK → d\_complaints.complaint\_id |
| product | String | ❗ Mandatory | Product name related to the complaint item |
| issue\_observed | Text | — | Description of the issue observed |

 

### **d\_complaint\_voices — Properties**

| Property ID | Data Type | Key Attr | Notes |
| :---- | :---- | :---- | :---- |
| voice\_id | String | 🔑 PK | Primary key — auto-generated |
| ticket\_id | String | — | FK → d\_complaints.complaint\_id |
| customer | String | — | Customer providing the voice/comment |
| responsible\_team | String | — | Team responsible for this voice record |
| sales\_manager | String | — | FK → d\_sales\_team.emp\_id |