# AI Research & Development: "Kin Rai Dee" (กินไรดี)
**Quality and Productivity Comparison: AI-Generated Apps vs. Human-Developed Apps**

This repository contains the research project developed for the **Institute of Digital Arts and Science, Suranaree University of Technology**. The study provides a systematic comparison between AI-exclusive code generation and traditional human development under identical software requirements.

---

## 📌 Project Overview
* **Objective:** To evaluate productivity via development time and assess software quality based on the **ISO/IEC 25010** international framework.
* **Application:** "Kin Rai Dee" - A food decision-making mobile app featuring menu filtering, random shuffle, and tournament modes.
* **Timeline:** October 2024 - January 2025[cite: 184].
* **Tech Stack:** React Native, Expo SDK, and libraries like `react-native-paper` and `react-native-reanimated`.

---

## 🧪 Methodology: Human-in-the-Loop (HITL)
The research utilized **Gemini 3 Pro** as the primary tool for the AI group. A key focus was the **Human-in-the-Loop** concept, where the AI handled rapid drafting while the human researcher managed verification, resolved technical conflicts (such as library version mismatches), and refined complex logic.

---

## 📊 Main Results & Findings

### 1. Productivity Analysis
AI demonstrated a significant speed advantage, particularly in the initial drafting phase.

| Development Phase | AI-Development | Human-Development |
|-------------------|----------------|-------------------|
| Phase 1: Drafting | 48 Mins  | 245 Mins  |
| Phase 2: Debugging| 40 Mins  | 50 Mins  |
| **Total Time** | **88 Mins**  | **295 Mins**  |

> **Insight:** AI was **3.3x faster** overall. However, AI spent nearly as much time as the human on debugging (Phase 2), accounting for ~45% of its total development time.

### 2. Software Quality (ISO/IEC 25010)
Quality was evaluated across 8 characteristics, including Functional Suitability, Reliability, and Maintainability.

| Metric | AI-Development | Human-Development |
|--------|----------------|-------------------|
| Total Defects | 6 Items | 3 Items  |
| High Severity Defects | 3 Items  | 2 Items  |
| Total Rework Cycles | 9 Cycles  | 4 Cycles  |

* **AI Weaknesses:** Prone to library version mismatches and logical errors in complex features (e.g., tournament pairings for odd-numbered items)].
* **AI Strengths:** Produced highly modular code structures comparable to human professional standards, ensuring high maintainability.

---

## 📂 Repository Structure
* 📁 `paper/`: Full academic research paper (PDF).
* 📁 `report/`: Complete project report including system design and full test cases.
* 📁 `src-ai/`: Source code generated primarily by Gemini 3 Pro.
* 📁 `src-human/`: Source code developed by the human researcher.

---

## 💡 Conclusion & Recommendations
The study concludes that while AI is a powerful accelerator for boilerplate code and rapid drafting, it is not yet a complete replacement for human expertise. 

**Key Takeaways for Developers:**
* **Specify Versions:** Always include specific tool/library versions in AI prompts to reduce incompatibility errors].
* **HITL is Essential:** The most efficient development model is **Human-in-the-Loop**, combining AI speed with human logical verification.
* **Strong Fundamentals:** Developers must maintain strong core coding skills to effectively manage and debug AI-generated output.

---
**Researcher:** Rachata Tieamkokkruad 
**Advisor:** Asst. Prof. Dr. Supakrit Niwattanakul 
**Contact:** rachata.gap@gmail.com 
