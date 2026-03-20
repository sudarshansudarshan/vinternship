---
layout: project
title: Ajrasakha Chatbot
order: 1
summary: Multilingual agricultural chatbot that connects farmers with verified knowledge through a smart answer retrieval system
color: "90EE90"
repo: "vicharanashala/ajrasakha-client"
features: []
mentors:
  - Aditya BMV
---

## **Project Overview**

Ajrasakha Chatbot is a farmer-friendly chat interface where agricultural workers can ask questions in their own language and receive reliable answers instantly. The system follows a smart three-tier approach to find the best answer: it first searches the Golden Dataset (a collection of expert-verified question-answer pairs), then checks the Package of Practices (PoP) database for standard agricultural guidelines, and finally uses advanced AI language models if neither source has the answer. This ensures farmers always get helpful responses, whether from verified expert knowledge or AI-generated guidance.

## **Key Features**

Farmers can ask questions in their native language, making the platform accessible to agricultural workers across different regions. The chat interface is simple and intuitive, designed for users who may not be tech-savvy. Questions are answered through a smart prioritization system: verified answers from the Golden Dataset appear first, followed by standard practices from the Package of Practices, and finally AI-generated responses when needed.

The platform supports multiple regional languages through the Sarvam AI API, ensuring farmers can communicate naturally in their preferred language. Voice input is available through speech-to-text capabilities, allowing farmers to ask questions by speaking rather than typing. All conversations are saved, so farmers can revisit previous answers anytime.

Real-time chat delivery ensures farmers receive answers instantly, whether from the knowledge base or AI models. The system is built on LibreChat technology, providing a reliable and modern chat experience similar to popular AI assistants but tailored specifically for agricultural needs.

## **Technologies Used**

The chat interface is built with React and TypeScript for a smooth, responsive user experience. The backend uses Node.js and Express.js to handle chat messages and route queries efficiently. LibreChat provides the foundation for the chat interface, offering a modern and reliable messaging platform.

For AI capabilities, the system integrates DeepSeek-R1, Qwen3, and GPT-OSS language models through Ollama. MongoDB Atlas stores the Golden Dataset and Package of Practices, using vector search to find semantically similar questions. The Sarvam AI API handles regional language translation, enabling farmers to communicate in their native languages.

Authentication is handled through Firebase, ensuring secure access for farmers. The system uses Model Context Protocol (MCP) servers to access structured agricultural data efficiently.

## **How It Works**

When a farmer asks a question, the system first searches the Golden Dataset for verified answers from agricultural experts. If a matching answer exists, it's delivered instantly. If not found, the system checks the Package of Practices database for standard agricultural guidelines and best practices relevant to the question.

When neither the Golden Dataset nor Package of Practices contain the answer, the system uses AI language models to generate a helpful response based on agricultural knowledge. This AI-generated answer is sent to the farmer's chat so they receive immediate guidance. Simultaneously, the question and AI-generated answer are forwarded to the Ajrasakha Reviewer System for expert validation.

This three-tier approach ensures farmers always receive timely answers while maintaining quality through expert review. Over time, as more questions are reviewed and approved, the Golden Dataset grows, meaning more farmers receive instantly verified answers instead of AI-generated ones.

## **Benefits for Farmers**

Farmers get instant answers to their agricultural questions without language barriers, as the system supports multiple regional languages. They can ask questions via text or voice, making it accessible even to those who struggle with typing. The chat interface is simple and familiar, similar to popular messaging apps.

By prioritizing verified expert knowledge from the Golden Dataset, farmers receive trusted information first. When AI generates answers, those responses still undergo expert review through the Ajrasakha Reviewer System, ensuring quality improves continuously. All conversations are saved, allowing farmers to reference previous answers whenever needed.

The platform is available anytime, providing 24/7 access to agricultural guidance regardless of expert availability. This helps farmers make timely decisions, especially during critical farming periods when immediate answers are essential.

## **GitHub Repository**

[Ajrasakha Chatbot](https://github.com/{{ page.repo }}){:target="_blank"}

{% if page.features.size > 0 %}
## **Upcoming Features**

{% for feature in page.features %}
<details style="margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
<summary style="cursor: pointer; padding: 1rem 1.5rem; background: linear-gradient(135deg, #{{ page.color }}20 0%, #{{ page.color }}40 100%); border-left: 6px solid #{{ page.color }}; font-weight: 600; list-style: none;">&nbsp;{{ feature.title }}</summary>
<div style="padding: 1.5rem; background-color: white;">
  <p style="margin: 0; color: #586069; line-height: 1.6;">{{ feature.description }}</p>
</div>
</details>
{% endfor %}
{% endif %}
