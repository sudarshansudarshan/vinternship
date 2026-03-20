---
layout: page
title: Projects
permalink: /projects/
---

<div style="text-align: center; background-color: #f6f8fa; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; border-left: 4px solid #0366d6;">
  <p style="font-size: 1.1rem; line-height: 1.8; color: #24292e; margin: 0; max-width: 800px; margin-left: auto; margin-right: auto;">
    Explore our portfolio of innovative projects that apply modern web development technologies to solve real-world problems. Each project demonstrates practical implementations of full-stack development, from system architecture to user experience, showcasing comprehensive skills in building production-ready applications.
  </p>
</div>

{% assign projects = site.projects | sort: "order" %}
{% assign project_colors = "90EE90,059669,FF9800,3B82F6,A7F3D0,8B5CF6,FFFF00,FF6B6B" | split: "," %}

{% for project in projects %}
{% assign color = project_colors[forloop.index0] %}
{% assign accent = project.color | default: color %}

<div style="margin-bottom: 2.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
  <details style="margin: 0;">
    <summary style="cursor: pointer; font-size: 1.7rem; font-weight: bold; padding: 1.5rem 2rem; background: linear-gradient(135deg, #{{ accent }}20 0%, #{{ accent }}40 100%); border-left: 6px solid #{{ accent }}; display: flex; align-items: center; gap: 0.75rem;">
      <span>{{ project.title }}</span>
    </summary>
    
    <div style="padding: 2rem; background-color: white;">
      <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: #f6f8fa; border-radius: 8px; border-left: 4px solid #{{ accent }};">
        <p style="margin: 0; color: #586069; font-size: 1rem; text-align: justify;"><strong>Summary:</strong> {{ project.summary }}</p>
      </div>

      {% if project.mentors and project.mentors.size > 0 %}
      <div style="margin-bottom: 1.5rem; padding: 1.25rem; background-color: #f6f8fa; border-radius: 8px; border-left: 4px solid #{{ accent }};">
        <h3 style="margin: 0 0 0.75rem 0; color: #24292e; font-size: 1.1rem;">{% if project.mentors.size > 1 %}Mentors{% else %}Mentor{% endif %}</h3>
        <ul style="margin: 0; padding-left: 1.25rem; color: #24292e;">
          {% for mentor in project.mentors %}
          <li style="margin-bottom: 0.5rem; line-height: 1.6;">
            {% if mentor.name %}
              <strong>{{ mentor.name }}</strong>{% if mentor.role %} - {{ mentor.role }}{% endif %}{% if mentor.link %} (<a href="{{ mentor.link }}" target="_blank" rel="noopener noreferrer">Profile</a>){% endif %}
            {% else %}
              {{ mentor }}
            {% endif %}
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
      
      <div style="prose max-width: none; text-align: justify;">
        {{ project.content }}
      </div>
    </div>
  </details>
</div>

{% endfor %}

<style>
  details[open] summary {
    margin-bottom: 0;
  }
  
  details summary:hover {
    opacity: 0.9;
  }
  
  details div.prose h2 {
    color: #24292e;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e1e4e8;
  }
  
  details div.prose h3 {
    color: #24292e;
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  details div.prose h4 {
    color: #586069;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  
  details div.prose ul, details div.prose ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  details div.prose li {
    margin: 0.5rem 0;
    color: #24292e;
    line-height: 1.6;
  }
  
  details div.prose p {
    margin: 1rem 0;
    color: #24292e;
    line-height: 1.7;
    text-align: justify;
  }
  
  details div.prose strong {
    color: #24292e;
    font-weight: 600;
  }
  
  details div.prose a {
    color: #0366d6;
    text-decoration: none;
  }
  
  details div.prose a:hover {
    text-decoration: underline;
  }
</style>
