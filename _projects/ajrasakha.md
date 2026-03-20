---
layout: project
title: Ajrasakha Reviewer System
order: 2
summary: AI-powered agricultural advisory platform with expert knowledge base and multi-level review system
color: "059669"
repo: "vicharanashala/ajrasakha"
features: []
mentors:
  - Aditya BMV
---

## **Project Overview**

The Ajrasakha Reviewer System is the quality control backbone that ensures farmers receive accurate, expert-verified information. When the chatbot uses AI language models to answer a farmer's question (because the answer wasn't found in the Golden Dataset or Package of Practices), that question and AI-generated answer are automatically sent to this reviewer system. Here, real agricultural experts review the question, evaluate the AI's response, and provide their expert opinion through multiple review phases. Once the review process is complete and experts approve the answer, it's added to the Golden Dataset, making it available as a verified answer for future farmers who ask similar questions.

## **Key Features**

The reviewer system receives questions that were answered by AI models in the chatbot. These questions go through multiple review phases where different agricultural experts independently evaluate both the question and the AI-generated answer. Each expert can approve, modify, or reject the answer, adding their professional insights and corrections.

Experts are tracked through a reputation system that rewards quality contributions. The system monitors each expert's approval rates, response times, and answer quality. Experts earn incentive points for thorough reviews, while penalties apply for rushed or low-quality evaluations. This gamification encourages experts to provide careful, thoughtful reviews.

After the final review phase, approved question-answer pairs are automatically added to the Golden Dataset. The analytics dashboard shows how the Golden Dataset grows over time, tracks expert contributions, monitors question review status, and identifies common agricultural topics that farmers ask about. This helps administrators understand farmer needs and optimize the knowledge base.

## **Technologies Used**

The backend uses TypeScript, Express.js, Node.js, MongoDB Atlas with Vector Search, InversifyJS for dependency injection, Firebase Authentication, and Sentry for error monitoring. The frontend is built with React, TypeScript, TanStack Router, TanStack Query, Shadcn UI, and Tailwind CSS.

For AI/ML, the platform uses DeepSeek-R1 (70B), Qwen3 (1.7B), and GPT-OSS (20B) LLMs via Ollama, HuggingFace BAAI/bge-large-en-v1.5 for embeddings, MongoDB Atlas as the vector database, and MCP servers for structured data access. Additional services include MCP tools for Golden Dataset and FAQ access, audio processing for voice queries, and Sarvam AI API for regional languages.

## **System Architecture**

When a farmer's question is answered by the AI language model in the chatbot (meaning it wasn't found in Golden Dataset or Package of Practices), the system automatically creates a review task. This task contains the original question, the AI-generated answer, and relevant context like the farmer's state and crop information.

The review task moves through multiple phases, with different agricultural experts assigned to each phase. Experts can view the question, see what the AI answered, and provide their assessment. They can approve the answer as-is, suggest modifications, or provide a completely new expert answer. After all review phases are complete, moderators perform a final quality check.

Once approved, the question-answer pair is added to the Golden Dataset with metadata including the expert who reviewed it, verification status, and agricultural domain (crop type, state, season, etc.). Future farmers asking similar questions will now receive this expert-verified answer instantly from the chatbot.

The platform serves three user types: Agricultural Experts (review AI-generated answers, earn reputation points), Moderators (perform final approval, ensure quality standards), and Admins (manage the review workflow, monitor expert performance, oversee system operations).

## **Data Structure**

The Golden Dataset stores question-answer pairs with embeddings, metadata (state, crop, season, domain, specialist, sources), similarity scores, and verification status. Expert performance tracking includes reputation scores, incentive tracking, penalty tracking, and response quality metrics.

## **Project Goals**

The Reviewer System ensures that AI-generated answers are validated by real agricultural experts before becoming part of the permanent knowledge base. This creates a growing library of expert-verified information that makes the chatbot smarter over time. As more questions are reviewed and approved, more farmers receive instant verified answers instead of AI-generated ones.

The multi-phase review process ensures quality through multiple expert opinions, reducing the chance of incorrect information reaching farmers. By tracking expert performance and providing incentives, the system motivates agricultural specialists to contribute their knowledge. The reputation system recognizes top contributors and maintains high review standards.

Ultimately, the Reviewer System builds a comprehensive, state and crop-specific agricultural knowledge base that reflects real expert wisdom. It helps identify which topics farmers ask about most frequently, guiding future content creation and expert recruitment. This continuous improvement cycle ensures the platform becomes more valuable to farmers every day.

## **GitHub Repository**

[Ajrasakha Reviewer System](https://github.com/{{ page.repo }}){:target="_blank"}

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
