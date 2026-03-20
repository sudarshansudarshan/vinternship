---
layout: project
title: Vi-Notes
order: 8
summary: Authenticity verification platform that ensures genuine human writing through keyboard activity monitoring and statistical signature analysis
color: "FF6B6B"
repo: "vicharanashala/vi-notes"
features:
  - title: "Basic Writing Editor"
    description: "Create a simple text editor that allows users to type their content. This editor will be the primary location for writing within the application. It does not need formatting options like bold or headings. The goal is to provide a clean and distraction-free space where text input can be captured reliably."
    issue: 1
  - title: "User Login and Registration"
    description: "Implement basic user registration and login so that each writing session can be associated with a specific user. Users should be able to sign up using an email and password and log in using the same credentials. Advanced features like roles, password reset are not required at this stage."
    issue: 2
  - title: "Capture Keystroke Timing"
    description: "While a user is typing in the editor, record basic keystroke timing information. This includes the time difference between key presses and releases. The actual characters typed must not be stored. This data will be used later to understand typing behaviour, not the content itself."
    issue: 3
  - title: "Detect Pasted Text"
    description: "Detect when a user pastes text into the editor instead of typing it manually. When a paste happens, record that event and the amount of text pasted. This will help differentiate pasted content from naturally typed content in analysis."
    issue: 4
  - title: "Save Writing Session Data"
    description: "Save the written text along with related session information so it can be accessed later. Each writing session should be stored in a way that links the content to the user and the captured typing metadata. The initial implementation can focus on simple storage and retrieval without complex analysis."
    issue: 5
mentors:
  - Jinal Gupta
---

## **Project Overview**

Vi-Notes verifies human-written content authenticity by monitoring writing in real-time. Users write freely while the platform captures keyboard activity patterns, typing rhythm, editing behaviors, and statistical signatures that distinguish genuine human composition from AI-generated or AI-assisted text.

## **Key Features**

The platform provides a distraction-free writing interface with silent background monitoring capturing typing speed, pause patterns, deletions, and composition rhythm. The keyboard monitoring tracks micro-patterns like hesitations before sentences, corrections during idea refinement, and variable typing speeds that reflect natural thinking processes.

Statistical analysis examines linguistic patterns, vocabulary diversity, sentence structure variations, and stylistic consistency. AI-generated text exhibits regularities like excessive consistency in sentence length or uniform vocabulary distribution that mismatch keyboard activity. After each session, Vi-Notes generates authenticity reports with confidence scores, suspicious patterns, and supporting evidence. Users share these reports to prove authorship in academic, professional, or publishing contexts. Real-time feedback flags unusual patterns like pasted text chunks or non-human typing behaviors.

## **Technologies Used**

Frontend: React, TypeScript, Electron for native desktop apps accessing keyboard events. Backend: Node.js, Express.js. OS-level APIs capture keystroke timing and patterns. ML models (TensorFlow, PyTorch) use supervised learning on human vs. AI text and unsupervised anomaly detection. NLP models analyze statistical signatures. MongoDB stores sessions, keystroke data, and reports with privacy-preserving encryption.

## **Detection Methods**

The system identifies behavioral patterns difficult for AI to replicate: natural sentence pauses, real-time corrections, variable typing speed based on cognitive load, and micro-pauses at punctuation. These signatures compare against known human patterns.

Text analysis reveals origin clues through variation in sentence length and structure, idiosyncratic vocabulary choices, and correlation between writing complexity and revision frequency. Human writers revise complex sections more than simple ones; AI-pasted text shows no such correlation.

Cross-referencing behavioral data with textual patterns provides the strongest verification. Paragraphs appearing without keystroke data, suspiciously constant typing speeds, or mismatched statistical signatures flag potential AI involvement.

## **Project Goals**

Vi-Notes restores trust in written content through reliable authorship verification, helping educators ensure academic integrity and enabling writers to prove authenticity. The platform develops accurate detection algorithms distinguishing human writing from various AI assistance levels while maintaining strict privacy protection. The system adapts continuously as AI writing tools evolve, staying ahead of new techniques attempting to mimic human writing patterns.

## **GitHub Repository**

[Vi-Notes](https://github.com/{{ page.repo }}){:target="_blank"}

{% if page.features.size > 0 %}
## **Upcoming Features**

{% for feature in page.features %}
<details style="margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
<summary style="cursor: pointer; padding: 1rem 1.5rem; background: linear-gradient(135deg, #{{ page.color }}20 0%, #{{ page.color }}40 100%); border-left: 6px solid #{{ page.color }}; font-weight: 600; list-style: none;">&nbsp;{{ feature.title }}</summary>
<div style="padding: 1.5rem; background-color: white;">
{{ feature.description }}
<br><br>
<a href="https://github.com/{{ page.repo }}/issues/{{ feature.issue }}" target="_blank" style="color: #{{ page.color }}; font-weight: 600; text-decoration: none;">View Feature Request #{{ feature.issue }} →</a>
</div>
</details>
{% endfor %}
{% endif %}
