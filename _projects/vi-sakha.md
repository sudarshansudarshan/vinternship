---
layout: project
title: Vi-Sakha
order: 9
summary: Personalized LLM assistant that answers queries using a RAG-based knowledge database
color: "38BDF8"
repo: "vicharanashala/visakha"
repo2: "vicharanashala/sakha-client"
features: []
mentors:
  - Aditya BMV
  - Nitin Sankar A
---

## **Project Overview**

Vi-Sakha is a personalized AI assistant designed to answer user queries using a Retrieval-Augmented Generation (RAG) system built on a curated knowledge database. Instead of generating answers blindly, the system first searches a structured RAG DB containing verified questions, FAQs, and reference data uploaded into the system. This ensures that users receive accurate, context-aware, and consistent responses.

The system follows a prioritized answer retrieval pipeline. It first checks the RAG Database for matching questions and answers, then searches the Golden Database containing verified responses, and finally uses a language model to generate an answer only if no reliable data is found. This approach reduces hallucination and ensures that most responses come from trusted sources.

Vi-Sakha is built as a personalized LLM interface that can be customized for specific platforms, allowing it to act as an internal knowledge assistant, FAQ bot, or support chatbot.

## **Key Features**

Users can ask questions through a chat interface, and the system retrieves answers from the RAG Database before using the LLM. This ensures responses are based on stored knowledge rather than random generation. The system supports smart answer prioritization. Verified answers from the Golden DB are returned first, followed by RAG DB matches, and finally AI-generated responses if no data is available. This makes the assistant reliable for official and academic use. The chatbot supports multilingual input through translation APIs, allowing users to ask questions in different languages while maintaining a consistent knowledge base. The chat interface is built to resemble modern AI assistants, making it easy for users to interact with the system without technical knowledge. All conversations are stored so that previous queries can be reused to improve the RAG Database over time. The system allows administrators to upload new questions into the database, making the assistant continuously improve as more data is added. Real-time response delivery ensures that users receive answers instantly whether the response comes from the database or the language model. The assistant can be integrated with external tools through MCP (Model Context Protocol), allowing structured data to be accessed dynamically.


## **Technologies Used**

The frontend is built using React and TypeScript, providing a responsive chat interface similar to modern AI platforms. The backend uses Node.js and Express.js to handle requests, route queries, and manage communication between the database, RAG engine, and language models. The RAG Database is implemented using MongoDB Atlas with vector search, allowing semantic matching of questions instead of simple keyword matching. Chroma / Vector DB is used to store embeddings of uploaded questions so that similar queries can be retrieved efficiently. LibreChat is used as the chat framework to provide a stable and customizable conversational interface. For language model responses, the system integrates LLMs such as DeepSeek, Qwen, GPT-OSS, or other Ollama models to generate answers when no database match is found. Authentication is handled using Firebase, ensuring secure login and access control. Translation and multilingual support can be handled using Sarvam AI API or similar language services. The system uses MCP servers to fetch structured information from external datasets when required.


## **How It Works**

When a user asks a question, the system first converts the query into embeddings and searches the RAG Database using vector similarity. If a matching question exists, the stored answer is returned immediately. If no match is found in the RAG DB, the system checks the Golden Database, which contains verified and approved answers. These answers are prioritized to ensure reliability. If neither database contains a suitable response, the system sends the query to the language model, which generates a response based on context and available knowledge. The generated response can then be reviewed and added to the Golden DB so that future users receive a verified answer instead of an AI-generated one. This pipeline ensures that the assistant becomes more accurate over time as more questions are added to the database.


## **Benefits for Users**

Users receive accurate answers because responses are taken from stored knowledge instead of relying only on AI generation. The assistant becomes smarter over time as more questions are uploaded into the RAG Database. Administrators can control what the assistant knows by updating the database instead of retraining the model. The system reduces incorrect answers by prioritizing verified data before using the LLM. Users get instant responses through a familiar chat interface. The platform can be used for FAQs, internal tools, course assistants, or support bots. The assistant is available 24/7 and can answer multiple users simultaneously.

## **GitHub Repository**

1. [Vi-Sakha](https://github.com/{{ page.repo }}){:target="_blank"}
2. [Sakha-Client](https://github.com/{{ page.repo2 }}){:target="_blank"}

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
