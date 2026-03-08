# AI Research & Development: "Kin Rai Dee" (กินไรดี)
**Quality and Productivity Comparison: AI-Generated Apps vs. Human-Developed Apps**

This repository contains the research project developed for the **Institute of Digital Arts and Science, Suranaree University of Technology**[cite: 7, 183]. The study provides a systematic comparison between AI-exclusive code generation and traditional human development under identical software requirements[cite: 10, 11, 195].

---

## 📌 Project Overview
* **Objective:** To evaluate productivity via development time and assess software quality based on the **ISO/IEC 25010** international framework[cite: 11, 16, 197].
* **Application:** "Kin Rai Dee" - A food decision-making mobile app featuring menu filtering, random shuffle, and tournament modes[cite: 13, 108, 112].
* **Timeline:** October 2024 - January 2025[cite: 184].
* **Tech Stack:** React Native, Expo SDK, and libraries like `react-native-paper` and `react-native-reanimated`[cite: 15, 120, 339].

---

## 🧪 Methodology: Human-in-the-Loop (HITL)
The research utilized **Gemini 3 Pro** as the primary tool for the AI group[cite: 14, 46]. A key focus was the **Human-in-the-Loop** concept, where the AI handled rapid drafting while the human researcher managed verification, resolved technical conflicts (such as library version mismatches), and refined complex logic[cite: 23, 27, 48].

---

## 📊 Main Results & Findings

### 1. Productivity Analysis
AI demonstrated a significant speed advantage, particularly in the initial drafting phase[cite: 17, 18, 47].

| Development Phase | AI-Development | Human-Development |
|-------------------|----------------|-------------------|
| Phase 1: Drafting | 48 Mins [cite: 17, 126] | 245 Mins [cite: 17, 126] |
| Phase 2: Debugging| 40 Mins [cite: 24, 126] | 50 Mins [cite: 24, 126] |
| **Total Time** | **88 Mins** [cite: 17, 126] | **295 Mins** [cite: 17, 126] |

> **Insight:** AI was **3.3x faster** overall[cite: 17, 830]. However, AI spent nearly as much time as the human on debugging (Phase 2), accounting for ~45% of its total development time[cite: 24, 806].

### 2. Software Quality (ISO/IEC 25010)
Quality was evaluated across 8 characteristics, including Functional Suitability, Reliability, and Maintainability[cite: 16, 82].

| Metric | AI-Development | Human-Development |
|--------|----------------|-------------------|
| Total Defects | 6 Items [cite: 20, 147] | 3 Items [cite: 21, 147] |
| High Severity Defects | 3 Items [cite: 20, 147] | 2 Items [cite: 147] |
| Total Rework Cycles | 9 Cycles [cite: 147] | 4 Cycles [cite: 147] |

* **AI Weaknesses:** Prone to library version mismatches and logical errors in complex features (e.g., tournament pairings for odd-numbered items)[cite: 20, 47].
* **AI Strengths:** Produced highly modular code structures comparable to human professional standards, ensuring high maintainability[cite: 21, 155, 808].

---

## 📂 Repository Structure
* 📁 `paper/`: Full academic research paper (PDF)[cite: 1].
* 📁 `report/`: Complete project report including system design and full test cases[cite: 171].
* 📁 `src-ai/`: Source code generated primarily by Gemini 3 Pro[cite: 355].
* 📁 `src-human/`: Source code developed by the human researcher[cite: 356].

---

## 💡 Conclusion & Recommendations
The study concludes that while AI is a powerful accelerator for boilerplate code and rapid drafting, it is not yet a complete replacement for human expertise[cite: 26, 48]. 

**Key Takeaways for Developers:**
* **Specify Versions:** Always include specific tool/library versions in AI prompts to reduce incompatibility errors[cite: 28, 158].
* **HITL is Essential:** The most efficient development model is **Human-in-the-Loop**, combining AI speed with human logical verification[cite: 27, 831].
* **Strong Fundamentals:** Developers must maintain strong core coding skills to effectively manage and debug AI-generated output[cite: 29, 161].

---
**Researcher:** Rachata Tieamkokkruad [cite: 4, 5]
**Advisor:** Asst. Prof. Dr. Supakrit Niwattanakul [cite: 163, 179]
**Contact:** rachata.gap@gmail.com [cite: 41]
