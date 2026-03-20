---
layout: project
title: DDD
order: 5
summary: Dopamine Driven Dashboard - Integrated performance and engagement analytics across all projects
color: "A7F3D0"
linkColor: "059669"
repos:
  - name: "DDD"
    url: "vicharanashala/ddd"
  - name: "ViBe(DDD)"
    url: "vicharanashala/vibe"
  - name: "Spandan(DDD)"
    url: "vicharanashala/poll-question-gen"
  - name: "Peer Evaluation(DDD)"
    url: "vicharanashala/pes"
features:
  - title: "Teacher Dashboard for Student Performance Monitoring (Spandan)"
    description: "Comprehensive teacher dashboard providing real-time visibility into student engagement, performance trends, point distribution, and achievement progress. Features include session overview, student performance views with sorting/filtering, question analytics, points visibility, achievements monitoring, and post-session summaries. The dashboard updates in real-time during live sessions with read-only access for cohosts."
    repo: "vicharanashala/poll-question-gen"
    issue: 22
  - title: "Student Dashboard - Performance & Achievement Overview (Spandan)"
    description: "Centralized student dashboard showing performance summary, achievement showcase, question interaction history, and session analytics. Displays total points earned, session-wise breakdowns, accuracy percentages, badges earned, and upcoming achievements. Updates in near real-time during live sessions with full analytics available after completion."
    repo: "vicharanashala/poll-question-gen"
    issue: 21
  - title: "Module-wise Dashboard (ViBe)"
    description: "Comprehensive teacher dashboard showing analytics and insights organized by individual course modules, enabling granular performance tracking."
    repo: "vicharanashala/vibe"
    issue: 538
  - title: "Quiz-wise Dashboard (ViBe)"
    description: "Detailed teacher dashboard displaying quiz-specific analytics including student performance, question difficulty, and completion rates per quiz."
    repo: "vicharanashala/vibe"
    issue: 537
  - title: "Section-wise Dashboard (ViBe)"
    description: "Teacher dashboard organized by course sections, providing insights into section-level performance and progress tracking."
    repo: "vicharanashala/vibe"
    issue: 529
mentors:
  - Sakshi Sharma
---

## **Project Overview**

DDD is a comprehensive performance and engagement dashboard that provides real-time insights into user activity, progress, and achievements across the entire platform. Rather than being standalone, DDD integrates into all other projects (ViBe, Spandan, Peer Evaluation), providing unified analytics that motivates users through gamification and visual feedback.

## **Key Features**

DDD delivers real-time performance tracking with interactive charts and data visualizations. Users earn achievements, build streaks, and progress through levels as they engage with platform features. Progress indicators and milestones show users how far they've come and what they're working toward. The system provides personalized insights tailored to each user's activity patterns, along with motivational feedback and rewards that sustain engagement.

## **Technologies Used**

Built with React and TypeScript on the frontend, Express.js and Node.js on the backend, and MongoDB for data storage. Chart.js and D3.js power the interactive visualizations.

## **Integration Approach**

DDD embeds as a modular component within each project. In ViBe, it tracks video engagement, completion rates, and learning patterns. In Spandan, it monitors class participation, question responses, and interaction frequency. For Peer Evaluation, it analyzes evaluation activity, feedback quality, and review completeness.

## **Project Goals**

DDD creates a unified dashboard bringing together all user activities across platforms. Through engaging gamification mechanics, it keeps users motivated while providing actionable performance insights. The system enables cross-project analytics, allowing users and administrators to see patterns spanning multiple applications.

## **GitHub Repositories**

{% for repo in page.repos %}[{{ repo.name }}](https://github.com/{{ repo.url }}){:target="_blank"}{% unless forloop.last %}, {% endunless %}{% endfor %}

{% if page.features.size > 0 %}
## **Upcoming Features**

{% for feature in page.features %}
<details style="margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
<summary style="cursor: pointer; padding: 1rem 1.5rem; background: linear-gradient(135deg, #{{ page.color }}20 0%, #{{ page.color }}40 100%); border-left: 6px solid #{{ page.color }}; font-weight: 600; list-style: none;">&nbsp;{{ feature.title }}</summary>
<div style="padding: 1.5rem; background-color: white;">
{{ feature.description }}
<br><br>
<a href="https://github.com/{{ feature.repo }}/issues/{{ feature.issue }}" target="_blank" style="color: #{{ page.linkColor }}; font-weight: 600; text-decoration: none;">View Feature Request #{{ feature.issue }} →</a>
</div>
</details>
{% endfor %}
{% endif %}
