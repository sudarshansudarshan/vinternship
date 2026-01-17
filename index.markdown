---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Welcome to Pinternship

**Pinternship by VLED Lab** — A comprehensive full-stack development internship program for mastering the MERN stack under the guidance of **Prof. Sudarshan Iyengar** at IIT Ropar's VLED Lab. Learn TypeScript, React, Express.js, and MongoDB through hands-on case studies and real-world projects.

**Quick Guide:** To get a complete overview of the program structure and learning journey, start with the [Introduction](./intro/). Review the [FAQ](./faq/) to understand detailed policies and common questions. For current updates, deadlines, important messages, and upcoming activities, regularly check [Announcements](./announcements/). Visit the [Case Studies](./case-studies/) section for your MERN practice problems, and explore the [Projects](./projects/) section to discover and track the larger internship projects you may want to work on. For course completion criteria, and deadlines, check the [Milestones](./milestones/) page to keep an eye on the deadlines. When new activities are announced (such as LinkedIn Posts, Blogs, Vlogs, and Endorsements), use the **Activity** links in the top navigation to access detailed instructions. For additional references, guides, and helpful materials, visit the **Resources** section in the navigation. 

## 📊 Pinternship Live Dashboard
➡️ [Open Live Dashboard](./dashboard.html)

## 📢 Announcements

{% assign announcements_page = site.pages | where: "permalink", "/announcements/" | first %}
{% for announcement in announcements_page.announcements limit:2 %}
{{ forloop.index }}. **[{{ announcement.title }}](./announcements/)** ({{ announcement.date }})  
   {{ announcement.description | truncatewords: 20 }}
{% endfor %}

➡️ [View All Announcements](./announcements/)


<!-- ---
[Important Links](./important_links/) -->