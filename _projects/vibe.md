---
layout: project
title: ViBe
order: 3
summary: AI-proctored video-based Learning Management System
color: "FF9800"
repo: "vicharanashala/vibe"
features:
  - title: "Filter Users by Role"
    description: "Filter students and instructors by their roles for easier management and bulk actions. This feature enables teachers to quickly identify and take actions on specific user groups."
    issue: 605
  - title: "Profile Picture Edit Option"
    description: "Enable users to edit and update their profile pictures directly from the profile page, enhancing personalization and user experience."
    issue: 596
  - title: "Forgot Password / Remember Password"
    description: "Implement password recovery functionality and \"remember me\" option to improve authentication convenience and security."
    issue: 594
  - title: "Password Visibility Toggle"
    description: "Add a toggle button allowing users to show or hide their password while typing, improving usability during login and signup."
    issue: 591
  - title: "Return to Video from Quiz"
    description: "Allow students to navigate back to the video from quiz screens, providing flexibility to review content before answering questions."
    issue: 561
  - title: "Engagement Games"
    description: "Interactive games integrated into the learning experience to boost student engagement and motivation through gamified learning activities."
    issue: 545
  - title: "Detect and Prevent Microphone Manipulation"
    description: "Detect malicious microphone manipulation such as reducing input to minimum or using external microphones placed far away. System will prompt users with random phrases to repeat, blocking access if they fail to respond and logging incidents for review."
    issue: 608
  - title: "Detect Background Blur / Virtual Background Usage"
    description: "Identify and block users employing virtual backgrounds or background blur effects during portal access. System logs all detection instances to enable action on repeated violations, ensuring authentic proctoring environments."
    issue: 607
mentors:
  - Meenakshi V
---

## **Project Overview**

ViBe is a comprehensive Learning Management System revolutionizing education through video-based and multimedia content delivery. The platform integrates AI-powered proctoring to ensure academic integrity while providing an engaging, interactive learning environment. ViBe combines online learning flexibility with security and monitoring features necessary for assessments and examinations.

## **Key Features**

ViBe delivers rich multimedia content through interactive video modules forming the core learning experience. AI proctoring uses facial recognition and behavior analysis to automatically monitor exams, ensuring integrity without human proctors. The course management system handles everything from course creation and student enrollment to detailed progress tracking.

Assessment tools cover the full spectrum—quizzes, assignments, and examinations—with automated grading providing immediate feedback. Progress analytics give students and instructors detailed visibility into performance and engagement patterns. During examinations, AI-monitored testing environments actively prevent cheating. Students access everything through a personalized dashboard visualizing their progress. Instructors have tools for content creation, student management, and grading integrated into a single streamlined interface.

## **Technologies Used**

Frontend: React, TypeScript. Backend: Express.js, Node.js. Database: MongoDB. AI Proctoring: Computer vision and deep learning models detecting unusual eye movements, multiple faces, and prohibited materials.

## **Project Goals**

ViBe builds a full-featured LMS with a video-first approach, recognizing video as the most engaging way to deliver educational material. Implementing reliable AI proctoring addresses a major online education challenge—maintaining exam integrity without human proctors. The platform creates intuitive interfaces ensuring technology enhances rather than hinders learning. Scalable video content delivery handles growing numbers of students and courses without performance degradation. Comprehensive analytics provide actionable insights into learning progress. Maintaining academic integrity through automated monitoring ensures certifications and grades carry real weight and credibility.

## **GitHub Repository**

[ViBe](https://github.com/{{ page.repo }}){:target="_blank"}

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
