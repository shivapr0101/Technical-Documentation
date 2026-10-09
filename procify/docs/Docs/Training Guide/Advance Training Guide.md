# Developer Training Guide

**Developer Level 2 — Advanced Track**

*Enhancing the Customer Complaints Application*

This track does not build a new application. Every session goes back into the SAME Customer Complaints app built in Developer Level 1, and layers a new advanced capability onto it — the same end-to-end build approach used in the Level 1 guide.

**Prerequisite: Developer Level 1 completion is mandatory.**

*Proposed dates are placeholders (one session per working day, starting Mon 07 Sep 2026) — confirm actual start date and cadence.*

# Purpose

Developer Level 1 was built as an end-to-end project: one real application — the Customer Complaints Application — built up session by session. This Level 2 guide follows the same approach: no new application is created. Every session below re-opens the entities, pages, entity files, and controllers already built in Level 1 and extends them with an advanced capability, so trainees see how real applications evolve rather than practicing features in isolation.

Topics are drawn from the Training Topics sheet, filtered to entries tagged “Developer Level 2,” and mapped onto concrete enhancements of the existing app. Tool names use the current naming glossary, with legacy names noted where relevant.

# Course Structure — 8 Sessions

Sessions must be taken in order — each session's steps assume the previous session's enhancement is already in place, exactly as in the Level 1 guide.

| Session | Date | Topic Area | Application Enhancement |
| :---- | :---- | :---- | :---- |
| **Session 1** | Mon, 07 Sep 2026 | Advanced BOL & Data Modelling | Network Modes — Offline-Ready Properties · Sort Order & Entity Index · Entity Rules — Auto-Escalation on Update · Query Rules — Role-Based Field Masking · BOL Transaction — Close Complaint with Feedback |
| **Session 2** | Tue, 08 Sep 2026 | Advanced Page Builder & Client-Side Debugging | Embedded Section — Complaint Timeline · Advanced kloControls · TransNode onArrive & navigateId · Server-Side Debugging & Auto Update Data |
| **Session 3** | Wed, 09 Sep 2026 | Security, Permissions & Data Access | Design-Time Permissions · Row Wise Auth · Data Access Rules & User Access Summary · Role Permissions (Runtime) & Permission Logs |
| **Session 4** | Thu, 10 Sep 2026 | Offline, Middleware & Bulk Data | Local Archive · Initial Downloads · Middleware — Device & SAP · KloSectionXlsx — Bulk Customer Import |
| **Session 5** | Fri, 11 Sep 2026 | Workflows, Scheduling & Notifications | Escalation Approval Workflow · Scheduler — Nightly SLA Sweep · Notifications · deeplink & Banner |
| **Session 6** | Mon, 14 Sep 2026 | Reporting — Charts & Pivot Modeller | kloChart — Status Breakdown · Advanced Chart — TAT Trend · Pivot Modeller |
| **Session 7** | Tue, 15 Sep 2026 | Monitoring & Troubleshooting | Scheduler & Log Monitoring · Notification & Queue Monitoring · APK/IPA & Query Console |
| **Session 8** | Wed, 16 Sep 2026 | App Management, Branding & Deployment | App Inheritance & Modification · Customer Branding · Git Repo & Active Sessions · App Migration to QA |

---

# Session 1 — Advanced BOL & Data Modelling

**Date:** Mon, 07 Sep 2026  
**Duration:** Full day  
**Topics:** `BOL, Data Modelling`

## Session Objectives

* Configure Network Modes so offline-relevant properties sync correctly to field devices.
* Apply Sort Order and an Entity Index to `d_complaints` for performance and predictable ordering.
* Extend the existing Entity Rules with a new auto-escalation rule.
* Extend the existing Query Rules with role-based field masking.
* Build a BOL Transaction that commits two entities atomically.

:::info What This Session Builds On
Developer Level 1 (Sessions 1–5) built `d_complaints` with its properties, one Entity Rule (`onCreateComplaint`) and one Query Rule (`beforeQ`) on `q_complaints`. This session does not start a new entity — it goes back into the same `d_complaints` and `q_complaints` files and adds the advanced BOL capabilities on top.
:::

### Scenario

A field IT Team member on a tablet needs complaint status and priority visible even with no signal, while internal notes stay server-side only. Meanwhile complaints are quietly sailing past SLA with no auto-flag, and a support rep spots that anyone on the IT Team can see a customer's full contact details in the list — details they never needed for their job.

### Part A — Network Modes — Offline-Ready Properties

*Not every property should sync to a field device the same way. Configure Network Mode per property on `d_complaints`.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Open properties** | Procify Data Studio → `d_complaints` → Properties tab. |
| **2** | **Restrict remark** | Set Network Mode = Online Only on `remark` — internal notes should not be cached on IT Team field devices. |
| **3** | **Always sync core fields** | Set Network Mode = Always on `complaint_id`, `s_status`, `priority` so they remain visible even when the device is offline. |
| **4** | **Save & update schema** | Save, then Update Schema, and confirm no errors. |

### Part B — Sort Order & Entity Index

*The complaints list currently has no defined default order and no index for the fields it is filtered on most.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Set Sort Order** | On `priority`: custom order CRITICAL > HIGH > MEDIUM > LOW. On `created_on`: DESCENDING as the secondary sort. |
| **2** | **Create Entity Index** | Entity Index tab → Add → ID: `idx_complaint_status_priority` — fields: `s_status`, `priority`. |
| **3** | **Update Schema** | Update Schema and verify the index is listed under the entity's Test → Data Browser diagnostics. |

### Part C — Entity Rules — Auto-Escalation on Update

*Reopen the same `d_complaints.ts` file from Level 1 Session 5 and add a second rule alongside `onCreateComplaint`.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Register the rule** | Rule tab → Add → Event Type: On Update \| Channel: Always on Server \| Clazz: this \| Invocation Method: `checkEscalation`. |
| **2** | **Implement checkEscalation** | If `s_status` is OPEN or INPROCESS and (today − `created_on`) > 3 days, set `is_escalated` = true. |
| **3** | **Test** | Backdate a test record's `created_on` in Data Browser to 4 days ago, save, and confirm `is_escalated` flips to true. |

### Part D — Query Rules — Role-Based Field Masking

*Extend `q_complaints.ts` — the same file where `beforeQ` was written in Level 1 Session 4 — with an `afterQ` rule.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add afterQ** | Event Type: After Query. In the handler, if the requesting role is IT_TEAM, replace customer contact fields in each result row with ‘•••’. |
| **2** | **Test as IT Team** | Log in as `it_<prid>` — confirm customer contact fields are masked in the list. |
| **3** | **Test as Manager** | Log in as `mgr_<prid>` — confirm the same fields show full data. |

### Part E — BOL Transaction — Close Complaint with Feedback

*Combine a status update and a new voice record into one atomic operation.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the transaction** | Data Studio → new BOL Transaction `Tx_CloseWithFeedback`, covering `d_complaints` (update `s_status` = CLOSED) and `d_complaint_voices` (create feedback record). |
| **2** | **Wire the button** | Add a ‘Close with Feedback’ action on `s_detail_header` that commits both TransNodes through this transaction. |
| **3** | **Test atomicity** | Force the voice record to fail validation (e.g. leave it blank) and confirm the status change also rolls back — not just the voice record. |

:::tip Session 1 Checkpoint
* ✔ Network Modes verified in an offline emulation for at least 3 properties.
* ✔ `s_complaints` defaults to priority order; `idx_complaint_status_priority` exists and is used.
* ✔ `checkEscalation` rule fires correctly on a backdated test record.
* ✔ `afterQ` masks customer fields for IT_TEAM but not for Manager.
* ✔ `Tx_CloseWithFeedback` commits both entities together or rolls back together.
:::

**Enhancement delivered:** Extends the existing `d_complaints` / `q_complaints` files from Level 1 (not a new entity) with offline sync control, performance indexing, automatic SLA escalation, field-level data masking by role, and an atomic close-with-feedback commit.

---

# Session 2 — Advanced Page Builder & Client-Side Debugging

**Date:** Tue, 08 Sep 2026  
**Duration:** Full day

## Session Objectives

* Build a reusable Embedded Section and use it on two different pages.
* Add Advanced kloControls (rating, file uploader) to the detail screen.
* Configure TransNode onArrive and navigateId behaviour.
* Debug the Session 1 server-side rule using Server-Side Debugging.
* Enable Auto Update Data so the Manager's list refreshes without manual action.

:::info What This Session Builds On
`p_complaints` was built manually in Level 1 Session 2 and styled in Session 6; `p_complaint_dashboard` was built in Session 5. Both existing pages are extended here — no new page is created from scratch.
:::

### Scenario

A Manager opens a complaint and has to hunt across screens to see whether this customer has complained before. A rep marks a complaint resolved but there's no way to capture how satisfied the customer actually was, or attach a photo of a damaged product without emailing it separately.

### Part A — Embedded Section — Complaint Timeline

*Build one timeline section and reuse it in two places.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the section** | New section `s_complaint_timeline` (screenType: timeline) bound to a TransNode combining voices and status-change history. |
| **2** | **Embed in detail** | In `pa_comp_details`, add a new section, mark it Embedded, and point its source to `s_complaint_timeline`. |
| **3** | **Reuse on dashboard** | Add the same embedded section to `p_complaint_dashboard` as a ‘Recent Activity’ panel — confirming true cross-page reuse. |

### Part B — Advanced kloControls

*Add two controls that were not covered in Level 1's basic control set.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add kloRating** | On `s_detail_header`, add a kloRating control bound to a new transient property `t_satisfaction_score`, visible only when `s_status` = CLOSED. |
| **2** | **Add kloFileUploader** | On the attachments section, add kloFileUploader bound to the `d_complaints_attachment` relation built in Level 1. |
| **3** | **Full Preview** | Confirm the rating control only appears on closed complaints and the uploader stores a file record correctly. |

### Part C — TransNode onArrive & navigateId

*Make the detail screen smarter about what loads automatically and where links resolve to.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure onArrive** | On the detail TransNode, set onArrive to auto-load the 5 most recent related voices — no extra click required. |
| **2** | **Configure navigateId** | On the `ticket_id` link control, set navigateId so it always resolves to `pa_complaint_details`, whether clicked from `p_complaints` or the dashboard's embedded timeline. |
| **3** | **Test both entry points** | Click a complaint from the main list, then from the dashboard timeline — confirm both land on the same detail area correctly populated. |

### Part D — Server-Side Debugging & Auto Update Data

*Debug the rule written in Session 1 and make the Manager's grid self-refreshing.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Attach debugger** | Set a breakpoint inside `checkEscalation` in VS Code and attach to the running Private Node. |
| **2** | **Step through** | Trigger a save on a test complaint and step through the rule execution line by line. |
| **3** | **Enable auto refresh** | On `s_complaints`, set Auto Update Data = true with a 30-second interval. |
| **4** | **Verify** | Create a complaint as Employee in one browser tab; confirm it appears in the Manager's grid within 30 seconds without a manual refresh. |

:::tip Session 2 Checkpoint
* ✔ `s_complaint_timeline` renders correctly on both `p_complaints` and `p_complaint_dashboard`.
* ✔ kloRating and kloFileUploader function as specified.
* ✔ onArrive auto-loads voices; navigateId resolves correctly from both entry points.
* ✔ Breakpoint debugging confirmed inside `checkEscalation`.
* ✔ Manager's grid auto-refreshes within 30 seconds of a new complaint being created.
:::

**Enhancement delivered:** Adds a reusable complaint-history timeline, a satisfaction rating and attachment capture on resolution, smarter auto-loading/navigation, and a self-refreshing Manager grid — all on the existing pages built in Level 1.

---

# Session 3 — Security, Permissions & Data Access

**Date:** Wed, 09 Sep 2026  
**Duration:** Full day

## Session Objectives

* Enforce CRUD restrictions server-side using design-time Permissions.
* Restrict IT Team visibility to their own team's complaints using Row Wise Auth.
* Scope customer data by region using Data Access Rules.
* Audit a user's effective access using User Access Summary.
* Grant, use, and revoke a temporary elevated Role Permission, and confirm it in Permission Logs.

:::info What This Session Builds On
Level 1 Session 7 hid or disabled buttons per role using Vienable — a UI-level control only. This session enforces the same rules at the platform/security level so they hold even if a user calls the API directly.
:::

### Scenario

An IT Team member who left last month still has delete rights if they call the API directly, even though the button is hidden in the UI. A regional manager can see every customer's complaints nationwide instead of just their region, and after an override was granted during an incident, nobody can say who approved it or when it was revoked.

### Part A — Design-Time Permissions

*Configure real CRUD restrictions, not just hidden buttons.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure Employee** | Employee role: Create + Read only. |
| **2** | **Configure Manager** | Manager role: Create + Read + Update + Delete. |
| **3** | **Configure IT Team** | IT Team role: Read + Update only. |
| **4** | **Test server-side block** | Log in as `emp_<prid>` and confirm Delete is blocked even if attempted outside the hidden button (e.g. via a direct API call). |

### Part B — Row Wise Auth

*Restrict IT Team to only the complaints assigned to their own team.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the rule** | Row Wise Auth on `d_complaints`: IT_TEAM role only receives rows where `responsible_team` = current user's team. |
| **2** | **Test** | Log in as `it_<prid>` — confirm only assigned complaints appear, even via direct navigation to a different complaint's URL. |

### Part C — Data Access Rules & User Access Summary

*Scope customer master data regionally and verify it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the rule** | New Data Access Rule scoping `d_customers` by region. |
| **2** | **Assign to Manager** | Assign the rule to `mgr_<prid>` for their region. |
| **3** | **Verify with User Access Summary** | Open User Access Summary for `mgr_<prid>` and confirm the rule and effective permissions are listed correctly. |

### Part D — Role Permissions (Runtime) & Permission Logs

*Simulate an incident requiring temporary elevated access, then audit it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Grant temporary access** | Create a runtime Role Permission override allowing IT_TEAM_LEAD to Delete during an incident. |
| **2** | **Use and revoke** | Apply, test the elevated Delete, then revoke the override. |
| **3** | **Audit in Permission Logs** | Confirm both the grant and the revoke appear in Permission Logs with timestamp and actor. |

:::tip Session 3 Checkpoint
* ✔ CRUD restrictions enforced server-side for all 3 roles.
* ✔ IT Team row-level filtering confirmed, including via direct URL access.
* ✔ Data Access Rule created, assigned, and confirmed via User Access Summary.
* ✔ Temporary Role Permission granted, used, revoked, and fully audited in Permission Logs.
:::

**Enhancement delivered:** Replaces Level 1's UI-only button hiding (Vienable) with rules enforced at the platform/security level, restricts IT Team visibility to assigned complaints, scopes customer data by region, and closes the audit gap on temporary access.

---

# Session 4 — Offline, Middleware & Bulk Data

**Date:** Thu, 10 Sep 2026  
**Duration:** Full day

## Session Objectives

* Enable offline access to assigned complaints for field IT Team users via Local Archive.
* Reduce first-login sync payload using Initial Downloads.
* Push closed complaints to an external SAP system via Middleware.
* Bulk-import customer master data using KloSectionXlsx.

:::info What This Session Builds On
The application has only worked online through Sessions 1–3. This session makes it usable by IT Team members working onsite without connectivity, and adds a bulk-data path for customer onboarding.
:::

### Scenario

An IT Team technician visiting a customer site with no signal can't pull up the complaint they're there to resolve. Every login re-downloads the full complaint history instead of just what's assigned, closed complaints aren't reaching the SAP billing system automatically, and onboarding 20 new customers means entering each one by hand.

### Part A — Local Archive

*Keep a working slice of data on the device for offline use.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure archive scope** | Local Archive on `d_complaints` and `d_complaint_voices` for the IT_TEAM role — retain the last 30 days of assigned complaints on-device. |
| **2** | **Test offline** | On a device/emulator, disconnect network and confirm assigned complaints and their voice history are still viewable. |

### Part B — Initial Downloads

*Reduce what gets pulled on first login.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the download set** | Only OPEN/INPROCESS complaints assigned to the logging-in IT Team user are included in the first sync — not full history. |
| **2** | **Verify** | Time a fresh login before and after the change and confirm a smaller payload. |

### Part C — Middleware — Device & SAP

*Integrate with an external billing system.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the channel** | New Middleware channel that pushes CLOSED complaints to an external SAP endpoint for billing reconciliation. |
| **2** | **Test** | Close a test complaint and confirm the outbound payload appears in the middleware queue. |

### Part D — KloSectionXlsx — Bulk Customer Import

*Add Excel-based bulk operations to the customer master entity.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add to d_customers** | Attach KloSectionXlsx to the customer section, enabling bulk Excel upload/download. |
| **2** | **Bulk import** | Prepare a sample sheet of 20 customers and import via the section. |
| **3** | **Verify** | Confirm all 20 records land correctly in Data Browser. |

:::tip Session 4 Checkpoint
* ✔ IT Team can view assigned complaints and voice history fully offline.
* ✔ Initial download payload measurably reduced and verified.
* ✔ One closed complaint confirmed pushed to the SAP middleware queue.
* ✔ 20 customers successfully bulk-imported via KloSectionXlsx.
:::

**Enhancement delivered:** Makes the app usable in the field without connectivity, shrinks the first-login sync payload, automates the SAP billing hand-off on closure, and adds bulk customer onboarding.

---

# Session 5 — Workflows, Scheduling & Notifications

**Date:** Fri, 11 Sep 2026  
**Duration:** Full day

## Session Objectives

* Route escalated complaints through a Manager approval Workflow.
* Add a nightly Scheduled Task as a server-side safety net for SLA breaches.
* Notify the right people by Email, SMS, and In-App at the right moments.
* Deep-link notification emails directly into the relevant complaint.
* Configure an app-wide Banner for planned maintenance.

:::info What This Session Builds On
Session 1 added a server-side `is_escalated` flag. This session adds the human workflow and communication layer that reacts to it.
:::

### Scenario

A complaint sits open for a week past SLA with no one following up, because there's no approval step and no nightly check catching it. A customer is never told their complaint was resolved unless someone remembers to call, and a support email can't deep-link straight to the complaint it's about.

### Part A — Escalation Approval Workflow

*Give escalation a human decision point.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the workflow** | When `is_escalated` becomes true, route an approval task to the Manager to confirm reassignment of `responsible_team`. |
| **2** | **Test** | Trigger escalation on a test complaint and confirm the Manager receives the task in Pending Approvals. |

### Part B — Scheduler — Nightly SLA Sweep

*Add a server-side safety net independent of individual saves.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the task** | Scheduled Task that runs nightly, re-checking all OPEN/INPROCESS complaints against the 3-day SLA rule from Session 1. |
| **2** | **Run manually and verify** | Trigger once via Running Tasks and confirm overdue complaints are correctly flagged. |

### Part C — Notifications

*Close the communication loop for assignment and resolution.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Assignment email** | Email notification to `responsible_team` the moment a complaint is assigned. |
| **2** | **Resolution in-app alert** | In-App notification to the originating Employee when status changes to CLOSED. |
| **3** | **Verify delivery** | Trigger both scenarios and confirm delivery in Notification History. |

### Part D — deeplink & Banner

*Make notifications actionable and announce planned downtime.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure deeplink** | The assignment email's ‘View Complaint’ link opens directly to the correct complaint detail screen. |
| **2** | **Configure Banner** | App-wide banner announcing a planned maintenance window, visible to all roles for 24 hours. |

:::tip Session 5 Checkpoint
* ✔ Escalation approval task correctly routed to and actionable by the Manager.
* ✔ Nightly scheduler flags overdue complaints on a manual run.
* ✔ Assignment email and resolution in-app alert both confirmed delivered in Notification History.
* ✔ Deeplink opens the exact correct complaint; banner visible to all 3 roles.
:::

**Enhancement delivered:** Adds a human approval step on escalation, a nightly check independent of individual saves, closes the communication loop on assignment/resolution, and makes notifications actionable.

---

# Session 6 — Reporting — Charts & Pivot Modeller

**Date:** Mon, 14 Sep 2026  
**Duration:** Full day

## Session Objectives

* Replace static dashboard tiles with a live kloChart.
* Build an advanced TAT trend chart over a rolling 30-day window.
* Build a Pivot Modeller report for cross-team, cross-type analysis.

:::info What This Session Builds On
Level 1 Session 5 built `p_complaint_dashboard` with static status-count tiles fed by `status_count_query`. This session replaces and extends those same tiles with real charts.
:::

### Scenario

A Manager glances at the dashboard and sees numbers that were already stale this morning, with no way to see the SLA trend over the last month or drill into which team is falling behind — only static totals.

### Part A — kloChart — Status Breakdown

*Turn the existing tile counts into a live chart.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add the chart** | Add a kloChart bar chart to `p_complaint_dashboard` bound to the existing `status_count_query` TransNode. |
| **2** | **Cross-check and replace** | Verify the chart's counts match the old static tiles, then remove the tiles. |

### Part B — Advanced Chart — TAT Trend

*Add a second, more advanced chart tracking service-level performance.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the query** | New query aggregating `actual_tat` vs `standard_tat` by week for the last 30 days. |
| **2** | **Configure the chart** | Advanced line chart with two series (actual vs standard) and custom axis formatting. |

### Part C — Pivot Modeller

*Give Managers a drillable cross-tab report.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the pivot** | Rows = `complaint_type`, Columns = `responsible_team`, Values = count of complaints, Filter = current month. |
| **2** | **Publish & verify** | Publish to the EAM Portal and confirm a Manager can drill into a specific cell to see the underlying records. |

:::tip Session 6 Checkpoint
* ✔ Static dashboard tiles fully replaced by a live kloChart with matching counts.
* ✔ TAT trend chart renders 30 days of actual-vs-standard data.
* ✔ Pivot report published to EAM Portal and drill-down verified.
:::

**Enhancement delivered:** Replaces static dashboard tiles with live, trend-aware reporting and adds a drillable cross-tab view for Managers.

---

# Session 7 — Monitoring & Troubleshooting

**Date:** Tue, 15 Sep 2026  
**Duration:** Full day

## Session Objectives

* Diagnose a simulated scheduler failure end-to-end using platform monitoring tools.
* Confirm notification delivery and resolve a stuck offline sync record.
* Confirm the SAP middleware payload was processed via Legacy Queue Monitoring.
* Trace a native control rendering issue on a built APK.
* Independently verify dashboard numbers using Query Console.

:::info What This Session Builds On
The app is feature-complete after Sessions 1–6 (automation, offline sync, integrations, reporting). This session is entirely about operating and troubleshooting what was built, not adding new features.
:::

### Scenario

The nightly SLA sweep silently failed last night and nobody noticed until complaints started piling up unflagged. A customer insists they never got a resolution notification, and there's no way to check; finance says a closed complaint never showed up in SAP and nobody can tell whether it's stuck or lost.

### Part A — Scheduler & Log Monitoring

*Break the Session 5 scheduler on purpose, then find and fix it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Simulate a failure** | Introduce a bad condition into the nightly SLA-sweep task and trigger it. |
| **2** | **Observe the failure** | Confirm the failure appears in Scheduler Monitoring and Task History. |
| **3** | **Trace the root cause** | Find the underlying error in Google Logs. |
| **4** | **Fix and re-run** | Correct the task and confirm success via Running Tasks. |

### Part B — Notification & Queue Monitoring

*Confirm the Session 4 and 5 integrations are actually working end-to-end.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Verify notifications** | Check Notification History for the assignment/resolution messages from Session 5 — confirm delivered status. |
| **2** | **Diagnose a stuck sync** | Simulate a stuck offline record on Server Queue / Mobile Sync Queue for an IT Team device from Session 4, and resolve it. |
| **3** | **Check the SAP channel** | Review Legacy Queue Monitoring to confirm the Session 4 closed-complaint payload to SAP was processed. |

### Part C — APK/IPA & Query Console

*Trace a native rendering issue and cross-verify reporting data.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build and test the APK** | Build a debug APK including the kloRating control from Session 2. |
| **2** | **Debug if needed** | If the control fails to render natively, use APK/IPA debugging tools to trace the issue. |
| **3** | **Cross-verify dashboard data** | Use Query Console to independently confirm the raw row counts behind the Session 6 dashboard charts. |

:::tip Session 7 Checkpoint
* ✔ Simulated scheduler failure diagnosed via Scheduler Monitoring + Google Logs and resolved.
* ✔ Notification delivery confirmed; one stuck sync record identified and resolved.
* ✔ SAP payload confirmed processed in Legacy Queue Monitoring.
* ✔ APK rendering issue for kloRating traced (fixed or root-caused).
* ✔ Dashboard chart numbers cross-verified against raw data via Query Console.
:::

**Enhancement delivered:** Shifts the training from building features to operating and troubleshooting everything Sessions 1–6 put in place.

---

# Session 8 — App Management, Branding & Deployment

**Date:** Wed, 16 Sep 2026  
**Duration:** Full day

## Session Objectives

* Create a client-specific child flavor using App Inheritance.
* Customize the child flavor without touching the base app via App Modification.
* Apply Customer Branding to the login page, menus, and headers.
* Version-control all Level 2 code in a Git repo.
* Migrate the fully enhanced application to QA and confirm every enhancement survived.

:::info What This Session Builds On
The base Customer Complaints app is now feature-rich after Sessions 1–7. This final session prepares it for a real client rollout — a branded, inherited child flavor, migrated to QA.
:::

### Scenario

The business is onboarding a new client, Acme, who needs their own complaint categories and branded login screen without touching the shared base app every other client depends on. Before go-live, someone has to confirm a departed developer's session is revoked and that the whole app still works correctly once it's moved to QA.

### Part A — App Inheritance & Modification

*Create a client-specific variant without duplicating the whole app.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the child flavor** | New flavor `customer_complaints_acme_<prid>` inheriting from the base application. |
| **2** | **Override safely** | Use App Modification to override `complaint_type` values for Acme's business categories, without changing the base flavor. |

### Part B — Customer Branding

*Make the child flavor visually distinct.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Update login/registration** | Modify the index file for the Acme child flavor with Acme's logo and welcome text. |
| **2** | **Apply CSS** | Style menus and headers to match Acme's brand colors, scoped to `.procify__customer_complaints_acme_<prid>`. |

### Part C — Git Repo & Active Sessions

*Clean up before go-live.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Push code to Git** | Push all entity rules, controller code, and CSS written across Sessions 1–8 into a Git repo. |
| **2** | **Review sessions** | Check Active Sessions for the app and revoke any stale developer sessions before go-live. |

### Part D — App Migration to QA

*Ship the enhanced application and prove every feature survived the move.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Release the flavor** | Release the Acme child flavor. |
| **2** | **Migrate** | Run App Migration (Transport) from DEV to QA. |
| **3** | **Full smoke test** | On QA, verify: escalation rule (S1), embedded timeline (S2), permissions/row-level auth (S3), offline sync (S4), workflow + notifications (S5), dashboard charts (S6), and Acme branding (S8) all work correctly. |

:::tip Session 8 Checkpoint
* ✔ Acme child flavor created, visually distinct, and functionally overridden without touching the base app.
* ✔ All Level 2 code version-controlled in Git.
* ✔ Stale developer sessions reviewed and revoked.
* ✔ Application migrated to QA with every Session 1–8 enhancement verified working end-to-end.
:::

**Enhancement delivered:** Delivers a branded, client-specific flavor without touching the shared base app, and proves every Session 1–8 enhancement survives the move to QA.