---
layout: project
title: Vi-SlideS
order: 7
summary: AI-powered adaptive classroom platform that tailors teaching based on student questions and cognitive analysis
color: "FFFF00"
repo: "vicharanashala/vi-slides"
features:
  - title: "Teacher and Student Authentication"
    description: "Implement Google-based authentication that allows users to sign in using their Google account. During the first login, users should be identified as either a teacher or a student. This role will decide which interface they see after login. The goal is to make access simple while ensuring clear separation between teacher and student functionality."
    issue: 1
  - title: "Teacher Session Creation with Unique Code"
    description: "Create an option that allows teachers to start a new class session directly from their dashboard. When a session is created, the system should generate a unique session code. This code will represent a specific class or room and will be shared with students, ensuring that all submitted questions are linked to the correct session."
    issue: 2
  - title: "Student Join Session Using Session Code"
    description: "Add an option on the student interface where students can enter a session code provided by the teacher. Once a valid code is entered, the student should be joined to that session and allowed to submit questions. This ensures that student questions are routed only to the intended class."
    issue: 3
  - title: "Student Question Submission Interface"
    description: "Create a simple and distraction-free interface that allows students to submit questions after joining a session. The interface should include a text input for the question and a submit button. Each submitted question should be linked to the session and the user, and must be stored so that it can be viewed by the teacher in real-time."
    issue: 4
  - title: "Slides-Based Teacher View for Submitted Questions"
    description: "Develop an interface on the teacher's side that displays student questions in a slides-style layout. Each question should appear as a separate slide or card, making it easy for the teacher to navigate through questions one by one during the class. New questions should appear in real time, allowing the teacher to move through them sequentially while addressing student doubts. This view will serve as the teacher's primary interface for reviewing and discussing questions during the session."
    issue: 5
  - title: "Session Status Control (Start, Pause, and End Session)"
    description: "Allow teachers to control the session state by starting, pausing, and ending a session. When a session is paused, students should temporarily be unable to submit new questions, while previously submitted questions remain visible. Once a session is ended, students should no longer be able to submit questions to that session. This control helps teachers manage class flow and ensures questions remain tied to the correct class timeframe."
    issue: 6
  - title: "Minimal Session Summary with Class Mood Gist for Teachers"
    description: "After a session is ended by the teacher, provide a dedicated summary view for that session. This view should display basic information such as the session name or code, the total number of questions submitted, and the session duration. Additionally, include a summary of the students' mood generated from the overall tone of the submitted questions, such as a brief textual indication of engagement or confusion. The goal is to give teachers a quick reflection on student participation and overall class mood without introducing detailed analytics or complex visualisations."
    issue: 7
  - title: "AI-Based Question Analysis and Auto-Responses"
    description: "Add an AI system that analyses student questions during a session. Simple or factual questions should receive automatic AI-generated answers, while complex or conceptual questions should be routed to the teacher. Each question should clearly indicate whether it was answered by AI or requires teacher attention. The goal is to reduce teacher workload while maintaining meaningful, human-led discussions."
    issue: 8
mentors:
  - Rohit Sharma
---

## **Project Overview**

Vi-SlideS revolutionizes teaching by making it question-driven and adaptive. After a brief 5-10 minute topic introduction, students submit questions that shape class direction. AI analyzes collective questions, providing teachers with real-time insights into class mood, motivation, and conceptual understanding. AI automatically addresses straightforward questions, allowing teachers to focus on complex queries requiring deeper explanation and personalized attention.

## **Key Features**

Students submit questions after the topic introduction through a real-time interface. They can choose anonymous or identified submissions and track question status to see which AI answered versus teacher-addressed. AI detects overall class mood by examining sentiment and tone, assesses motivation levels, classifies questions by cognitive level, extracts main themes and concerns, and identifies learning gaps.

The system performs smart triage to determine auto-answerable questions versus those needing teacher attention. Straightforward questions get instant AI responses with relevant sources. Complex questions route to the teacher's prioritized dashboard. Teachers see real-time question overviews, class insights (mood, motivation, knowledge gaps), AI-prioritized questions, and suggested teaching direction. They can review and override AI answers as needed.

## **Technologies Used**

### Current Testing Phase
Google Forms for question collection, Google Sheets for data aggregation and analysis, Google Slides for presentation and visualization.

### Planned Stack
Frontend: React, TypeScript. Backend: Express.js, Node.js. Database: MongoDB. AI/NLP: LLMs for question analysis and response generation. Sentiment analysis: NLP models for mood and motivation detection. Classification models for cognitive complexity assessment. Real-time communication: WebSockets.

## **System Workflow**

Pre-class: Teacher presents 5-10 minute overview; students submit questions. AI Analysis: System collects questions, classifies by complexity, analyzes sentiment for mood/motivation, creates gist of understanding and concerns. Response: Straightforward questions get instant AI responses; complex questions route to prioritized teacher dashboard; teacher uses insights to guide discussion dynamically. Post-class: System generates comprehensive analytics report; questions/answers archived for future reference.

## **Question Classification**

AI auto-answers factual or definition-based queries, previously answered similar questions, and low cognitive complexity clarifications. Teachers address questions with high conceptual depth, novel perspectives, complex problem-solving scenarios, personalized explanation needs, and critical thinking queries.

## **Project Goals**

Vi-SlideS transforms traditional lectures into question-driven, adaptive learning experiences where student curiosity shapes class direction. The platform provides real-time insights into understanding and engagement, reducing teacher burden through automated responses and enabling focus on complex discussions. The responsive teaching approach improves engagement as students see their questions influencing class content. Identifying learning gaps early helps address problems before they become ingrained. The platform creates data-driven teaching strategies based on question analysis, fostering more interactive and student-centered classrooms.

## **GitHub Repository**

[Vi-SlideS](https://github.com/{{ page.repo }}){:target="_blank"}

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
