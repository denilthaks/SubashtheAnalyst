# Subash Gauchan
### Entry-Level Data Analyst | Business Analysis | BI & Operations Improvement

<p align="center">
  <img src="https://img.shields.io/badge/Portfolio-Analytics%20%26%20Business%20Insight-17365D?style=for-the-badge&logo=github" alt="Analytics and Business Insight Portfolio" />
  <a href="https://www.linkedin.com/in/subash-gauchan16/"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:thakalidenil@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://github.com/denilthaks"><img src="https://img.shields.io/badge/GitHub-Projects-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
</p>

---

## At a glance
- BSc (Hons) Applied Management student (BPP University). Open to entry-level/graduate roles in Data Analysis, Business Analysis, Business Intelligence and Operations Analysis.
- Core tools: Excel (PivotTables, lookups), Power BI, SQL basics; familiar with PDCA, 4Vs and TIMWOODS for operational analysis.
- This portfolio documents coursework and independent projects. Evidence status (data, workbooks) is noted per project below.

---

## About me

I am a BSc (Hons) Applied Management student at BPP University, interested in using data to understand business performance, investigate operational problems and support evidence-based decisions.

My approach combines business understanding with practical analytics. I use Excel and Power BI to structure information, analyse KPIs and communicate findings, while developing my SQL and quantitative skills.

My projects explore commercial performance, market-entry strategy, operational improvement and the responsible use of AI workflows. I aim to go beyond reporting what happened by asking why it may have happened and what to do next.

**Career interests:** Data Analysis · Business Analysis · Business Intelligence · Operations Analysis · Research Analysis

## Analytical approach

My workflow connects business questions to evidence and measurable decisions.

```mermaid
flowchart LR
    A["Business question"] --> B["Collect and validate data"]
    B --> C["Analyse KPIs and trends"]
    C --> D["Interpret findings"]
    D --> E["Recommend an action"]
    E --> F["Measure outcomes"]
    F -. "Review and improve" .-> A

    style A fill:#17365D,color:#FFFFFF,stroke:#17365D
    style C fill:#DCE6F1,color:#17365D,stroke:#5279A8
    style E fill:#DCECE3,color:#163D2B,stroke:#54856A
    style F fill:#FFF0D5,color:#664600,stroke:#C59B42
```

## Core skills

| Area | Skills and tools |
|---|---|
| Data analysis | Excel, PivotTables, SUMIFS, INDEX/MATCH, lookup functions, KPI reporting |
| Business intelligence | Power BI, dashboard design, performance monitoring, data visualisation |
| Quantitative methods | Descriptive statistics, trend analysis, hypothesis development, quantitative and qualitative research |
| Database foundations | SQL fundamentals and SQLite |
| Business and operations | PDCA, 4Vs, TIMWOODS, market-entry analysis, process improvement |
| Project analysis | Critical-path analysis, earned value management concepts, risk and performance assessment |
| Communication | Business reporting, insight communication, stakeholder support, coaching and collaboration |

*Skills are listed at their current practical level. Statistical modelling, regression and advanced forecasting are areas for continued development where not yet independently validated.*

-## Career timeline
 
```mermaid
gantt
  title Career timeline
  dateFormat YYYY-MM
  axisFormat %b %Y
 
  section Costa Coffee Ltd
  Barista            :done,   b0, 2025-04, 2026-01
  Barista Maestro    :active, b1, 2026-01, 2026-12
```
 
---

## Featured projects

## 1. Starbucks Nepal — Market-entry and affordability analysis

**Tools:** Excel · Strategic analysis · Macroeconomic research

### Business question

How could Starbucks evaluate a potential Nepal entry while accounting for premium positioning, local market conditions and customer affordability?

### Key analytical finding

The available project evidence does not verify a monthly-income affordability estimate for Nepal or the United States.

The project workbook contains a separate GDP-per-capita proxy; this is not a measure of monthly individual or household affordability.

**Evidence status:** The original affordability calculations and supporting inputs could not be verified from the available project evidence. The headline corporate statistics below are externally verifiable from Starbucks filings (linked).

**Authoritative corporate sources (Starbucks FY2025):**
- [Starbucks FY2025 results (official press release)](https://investor.starbucks.com/news/financial-releases/news-details/2025/Starbucks-Reports-Q4-and-Full-Fiscal-Year-2025-Results/default.aspx)
- Starbucks FY2025 Form 10-K — consult the annual report for detailed disclosures.

The official FY2025 results report **40,990 stores** at fiscal year-end, **US$37.2 billion in consolidated net revenue**, and a **7.9% GAAP operating margin**, down **710 basis points year over year**. These are global corporate figures; they do not establish Nepal-specific demand, affordability or commercial viability.
```mermaid
xychart-beta
    title "Nepal (bars = GDP growth %, line = inflation %)"
    x-axis ["FY2025", "FY2026 proj.", "FY2027 proj."]
    y-axis "Per cent" 0 --> 6
    bar [4.4, 2.3, 4.4]
    line [4.1, 4.3, 5.1]
```

**Macroeconomic proxies:**
- Nepal GDP per capita (current US$) — World Bank / country data: https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=NP
- United States GDP per capita (current US$) — World Bank / country data: https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?locations=US

> Note on income measures: GDP per capita, median household income, disposable income and individual wages are distinct measures. Affordability results depend strongly on which income measure is used; GDP per capita is a broad economic average and does not equal typical household or individual earnings.

### Affordability (current repository status)

| Location | Monthly affordability result | Evidence status |
|---|---|---|
| Nepal | Not reported | Original calculation and inputs not verified |
| United States | Not reported | Original calculation and inputs not verified |

*How to validate:* provide the original calculation model or a reproducible table listing each drink price, product size, location and date; currency and exchange-rate source; comparable monthly income measures and citations; and the calculation cells.

### Decision framework

```mermaid
flowchart TD
    A["Evaluate potential market entry"]
    A --> B["Macroeconomic context"]
    A --> C["Customer affordability"]
    A --> D["Coffee market and competition"]
    B --> E["Assess target customer segments"]
    C --> E
    D --> E
    E --> F["Evaluate entry modes and\nunit economics"]
    F --> G{"Commercial case\nsupported by evidence?"}
    G -->|Not yet| H["Validate demand, pricing\nand operating assumptions"]
    G -->|Yes| I["Explore a local partnership\nand pilot"]
    H --> F

    style E fill:#DCE6F1,color:#17365D,stroke:#5279A8
    style G fill:#FFF0D5,color:#664600,stroke:#C59B42
    style I fill:#DCECE3,color:#163D2B,stroke:#54856A
```

### Business implication

Affordability remains a question to validate for a premium coffee proposition. A local partnership may help evaluate market knowledge and operating fit, but this is a proposal to be tested rather than a concluded strategy.

**What this project demonstrates:** Market research, strategic reasoning and evidence-focused recommendations.

---

## 2. Sales Analytics — Historical performance and KPI analysis

**Tools:** Excel · PivotTables · Lookup functions

### Business question

How does performance vary over time and across product categories, and which changes deserve further investigation?

### Selected performance comparison

Earlier project notes list endpoint `Profit` values of **2.88 million (2011)** and **7.04 million (2016)**. These values remain under reconciliation with the raw-date grouping and cached pivot results; the source currency and formal definition of `Profit` have not been verified. No growth percentage is presented pending reconciliation.

**Evidence status:** The workbook is included in this repository as [Profit & Loss Dashboard project.xlsx](./Profit%20Loss%20Dashboard%20project.xlsx). Its cached annual summary does not fully reconcile with grouping raw records by actual date; source currency and the formal definition of `Profit` also remain unverified. See the [workbook data-quality audit](./workbook_data_quality_audit.md).

*How to validate:* confirm the source currency and profit definition, resolve date/year anomalies and repeated records against an authoritative source, and reconcile the annual pivot results to an approved aggregation basis in a separate working copy.

### Analytical workflow

```mermaid
flowchart TD
    A["Historical transaction data"]
    A --> B["Structure and validate records"]
    B --> C["Calculate revenue, profit\nand other KPIs"]
    C --> D["Compare performance\nby time and category"]
    D --> E{"Identify the change"}
    E --> F["Revenue: investigate\nprice and sales volume"]
    E --> G["Profit: investigate\ncosts and product mix"]
    E --> H["Margin: investigate\nprofitability"]
    F --> I["Validate potential drivers"]
    G --> I
    H --> I
    I --> J["Recommend action\nsupported by evidence"]

    style D fill:#DCE6F1,color:#17365D,stroke:#5279A8
    style E fill:#FFF0D5,color:#664600,stroke:#C59B42
    style J fill:#DCECE3,color:#163D2B,stroke:#54856A
```

**What this project demonstrates:** Data preparation, KPI analysis, trend interpretation, dashboard reporting and commercial problem‑solving. The workbook is available in this local checkout, but its annual summaries and source definitions remain under review.

---

## 3. AI Agent Workflow — Authorisation and safety controls

**Focus:** Workflow design · Risk awareness · Process review

### Business question

How can an AI-assisted workflow distinguish permitted requests from unauthorised actions and make its control boundaries more explicit?

### Control design

```mermaid
flowchart TD
    A["Incoming request"]
    A --> B["Validate requester and\nrouting context"]
    B --> C{"Authorised for\nthe requested action?"}
    C -->|No| D["Reject or safely ignore"]
    D --> E["Record event for review"]
    C -->|Yes| F["Apply action-specific\nsafety checks"]
    F --> G["Execute permitted workflow"]
    G --> H["Review logs and outcomes"]

    style C fill:#FFF0D5,color:#664600,stroke:#C59B42
    style D fill:#F7D9D9,color:#712B2B,stroke:#B65A5A
    style G fill:#DCECE3,color:#163D2B,stroke:#54856A
```

### Key insight

A workflow can function correctly under normal conditions and still contain an authorisation weakness. Access checks must be applied before protected actions, with appropriate logging and testing.

In my practical workflow exploration, I investigated an authorisation boundary issue and added a guard against unauthorised handling. The README now clarifies which parts are implemented and which are conceptual.

**What this project demonstrates:** Workflow reasoning, risk identification, control design and an interest in responsible AI adoption.

---

## 4. Green Motion — Operations analysis and improvement proposal

**Focus:** Operations management · PDCA · Forecasting · Process analysis

### Business question

How can operational imbalances and potential forecasting weaknesses be investigated systematically?

### Improvement framework

```mermaid
flowchart TD
    A["Identify operational imbalance"]
    A --> B["Measure demand, capacity\nand resource availability"]
    B --> C["Investigate forecasting,\nscheduling and process waste"]
    C --> D["Prioritise potential root causes"]
    D --> E["Plan a targeted intervention"]
    E --> F["Implement a controlled change"]
    F --> G["Measure operational KPIs"]
    G --> H{"Did performance improve?"}
    H -->|Yes| I["Standardise and monitor"]
    H -->|No| J["Review assumptions\nand revise intervention"]
    J --> B
    I --> K["Continue improvement cycle"]

    style A fill:#17365D,color:#FFFFFF,stroke:#17365D
    style H fill:#FFF0D5,color:#664600,stroke:#C59B42
    style I fill:#DCECE3,color:#163D2B,stroke:#54856A
```

### Key insight

Frameworks such as PDCA, 4Vs and TIMWOODS can structure an operational investigation, but a framework alone does not demonstrate an improvement. The outcome should be evaluated through appropriate before/after KPIs.

Potential measures include utilisation, forecast error (e.g. MAPE), turnaround time and resource imbalance, depending on the data available.

**What this project demonstrates:** Operations analysis, structured problem-solving and the translation of business frameworks into practical improvement proposals. This coursework does not report a measured productivity improvement.

---

## Education

**BSc (Hons) Applied Management — BPP University**  
Expected completion: 2028

Relevant study areas include:

- Business Analytics
- International Business
- Operations Management
- Strategic Management
- Sustainability Management
- Organisational Behaviour
- Finance

---

## Professional experience

### Barista Maestro — Costa Coffee Ltd
**January 2026 – Present | Woking, Surrey**

- Monitor daily sales and product mix to support stock and staffing decisions.
- Identify operational issues and coordinate with colleagues to maintain service standards.
- Coach new team members on customer service, operational procedures and consistency.
- Support day-to-day decisions in a fast-paced customer-facing environment.
- Nominated for Costa Barista of the Year UK in 2026.

### Barista — Costa Coffee Ltd
**April 2025 – January 2026 | Woking, Surrey**

- Progressed to Barista Maestro within the first year.
- Developed experience in customer service, teamwork, operational consistency and handling competing priorities.

---

## What I bring to an analyst role

- A business-first approach to data and performance analysis.
- Experience connecting operational context with KPI reporting.
- A willingness to validate assumptions rather than overstate conclusions.
- Clear communication of findings, limitations and potential actions.
- A self-directed learning mindset across analytics, business intelligence and quantitative methods.

I am particularly interested in opportunities where I can combine analytical skills with business understanding, contribute to evidence-led decisions and develop through practical experience.

## Contact

- **Email:** [thakalidenil@gmail.com](mailto:thakalidenil@gmail.com)
- **LinkedIn:** [linkedin.com/in/subash-gauchan16](https://www.linkedin.com/in/subash-gauchan16/)
- **GitHub:** [github.com/denilthaks](https://github.com/denilthaks)
- **Location:** Woking, Surrey, United Kingdom

---

## Evidence and limitations

The project files included here do not verify every original calculation. The following checks remain necessary before the affected figures can support decisions:

1. **Starbucks Nepal:** Validate the original affordability model or provide a reproducible table listing drink price, product size, location/date, currency and exchange-rate source, comparable monthly income measures, citations and calculation cells. GDP per capita is a broad economic average, not a proxy for an individual's or household's monthly disposable income.
2. **Sales Analytics:** Confirm source currency, the definition of `Profit`, date treatment, repeated-row handling and aggregation logic; then reconcile cached pivot summaries against an approved calculation from the underlying records. Until then, do not use unreconciled sales trends to guide inventory or other operational decisions.

Monthly affordability estimates and sales growth percentages are withheld because their inputs or calculations have not been sufficiently verified. The preliminary 2011 and 2016 endpoint values, 37.8% Profit-to-Revenue ratio and 72.5% Bikes revenue share should be treated as workbook-derived exploratory results, not independently validated financial measures. In particular, the ratio is not labelled gross margin, and no source currency is assumed.

See the [workbook data-quality audit](./workbook_data_quality_audit.md) for the sales-data limitations. Starbucks FY2025 corporate metrics are linked in the project section above and describe the global business, not Nepal-specific market demand.

---

<p align="center">
  <sub>Open to entry-level, graduate and internship opportunities in Data Analysis, Business Analysis, Business Intelligence, Operations Analysis and Research Analysis.</sub>
</p>
