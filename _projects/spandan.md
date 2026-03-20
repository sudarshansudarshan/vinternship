---
layout: project
title: Spandan
order: 4
summary: Live class interaction platform with AI-powered question generation
color: "3B82F6"
repo: "vicharanashala/poll-question-gen"
features:
  - title: "Teacher Dashboard for Student Performance Monitoring"
    description: "Comprehensive teacher dashboard providing real-time visibility into student engagement, performance trends, point distribution, and achievement progress. Features include session overview, student performance views with sorting/filtering, question analytics, points visibility, achievements monitoring, and post-session summaries. The dashboard updates in real-time during live sessions with read-only access for cohosts."
    issue: 22
  - title: "Student Dashboard (Performance & Achievement Overview)"
    description: "Centralized student dashboard showing performance summary, achievement showcase, question interaction history, and session analytics. Displays total points earned, session-wise breakdowns, accuracy percentages, badges earned, and upcoming achievements. Updates in near real-time during live sessions with full analytics available after completion."
    issue: 21
  - title: "Point Allocation & Time-Aware Scoring"
    description: "Advanced scoring system with configurable point allocation per question and time-based score reduction. Rewards faster responses while maintaining fairness across all students."
    issue: 20
  - title: "Achievement System (Badges & Rewards)"
    description: "Student-side achievement system with badges for milestones like first correct answer, winning streaks, fastest responder, and perfect accuracy. Enhances engagement through gamification and visible progress indicators."
    issue: 19
  - title: "Manual Question Generation (Host-Controlled Override)"
    description: "Allows teachers to manually create and inject questions during live sessions, overriding automatic generation. Provides flexibility for spontaneous assessment and custom question integration."
    issue: 18
  - title: "Automatic Question Generation (Real-Time, Interval-Based)"
    description: "Enhanced automatic question generation triggered at configurable time intervals during live lectures. Ensures consistent student engagement without manual intervention from teachers."
    issue: 17
  - title: "Cohost Feature (Poll Room Collaboration)"
    description: "Multi-host functionality enabling poll room collaboration where cohosts can assist with session management, question monitoring, and student interaction. Supports teaching assistants and co-teachers."
    issue: 16
mentors:
  - Rohit Sharma
---

## **Project Overview**

Spandan transforms live teaching sessions into engaging learning experiences. The system captures teacher speech in real-time, converts it into transcripts, automatically generates relevant questions from the content, and presents them to students through a dedicated portal for instant interaction and assessment.

## **Key Features**

Spandan captures teacher speech in real-time and converts it into accurate transcripts. AI automatically generates relevant questions from these transcripts, creating instant engagement opportunities. Students access questions through a dedicated portal to submit answers during or after class. The platform enables true live interaction, making classes dynamic and participatory. Everything is tracked—questions generated and student responses—giving teachers a complete view through their dashboard to monitor engagement and identify areas needing clarification.

## **Technologies Used**

Frontend: React, TypeScript. Backend: Express.js, Node.js. Database: MongoDB. Speech Recognition: OpenAI Whisper, ASR. Question Generation: Open source LLM models.

## **Project Goals**

Spandan enables seamless real-time classroom interaction, transforming passive lectures into active learning. Automating question generation removes the burden from teachers to constantly create engagement prompts while teaching. The platform provides instant engagement and feedback, allowing teachers to gauge understanding immediately rather than waiting for formal assessments. Tracking participation throughout sessions helps identify engaged students and those needing support. Creating accessible transcripts serves multiple purposes—students can review material, those who missed class can catch up, and teachers can reflect on their teaching.

## **GitHub Repository**

[Spandan](https://github.com/{{ page.repo }}){:target="_blank"}

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
