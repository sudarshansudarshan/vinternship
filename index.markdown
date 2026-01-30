---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Welcome to Vinternship

**Vinternship by VLED Lab** — A comprehensive full-stack development internship program for mastering the MERN stack under the guidance of **Prof. Sudarshan Iyengar** at IIT Ropar's VLED Lab. Learn TypeScript, React, Express.js, and MongoDB through hands-on case studies and real-world projects.

**Quick Guide:** To get a complete overview of the program structure and learning journey, start with the [Introduction](./intro/). Review the [FAQ](./faq/) to understand detailed policies and common questions. For live dashboard, announcements and cohort specific information, please visit the Cohort specific page that you can access from the **Select Your Cohort** section below in this page. Visit the [Case Studies](./case-studies/) section for your MERN practice problems, and explore the [Projects](./projects/) section to discover and track the larger internship projects you may want to work on. For course completion criteria, and deadlines, check the [Milestones](./milestones/) page to keep an eye on the deadlines. When new activities are announced (such as LinkedIn Posts, Blogs, Vlogs, and Endorsements), use the **Activity** links in the top navigation to access detailed instructions. For additional references, guides, and helpful materials, visit the **Resources** section in the navigation.

---

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
  <div style="flex: 1; min-width: 300px; text-align: center; padding: 0.75rem; background: linear-gradient(135deg, #0088cc15 0%, #0088cc25 100%); border: 2px solid #0088cc; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,136,204,0.1);">
    <div style="font-size: 0.95rem; color: #24292e; margin-bottom: 0.4rem;">
      📢 <strong>Join Our Community</strong>
    </div>
    <div style="color: #586069; margin-bottom: 0.6rem; font-size: 0.85rem;">
      Stay updated with common announcements and information
    </div>
    <a href="https://t.me/+YZfjSErJWppkZTRl" target="_blank" style="display: inline-block; padding: 0.4rem 1rem; background: #0088cc; color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.85rem; transition: all 0.2s; box-shadow: 0 2px 4px rgba(0,136,204,0.3);">
      💬 Join Vinternship Telegram Channel
    </a>
    <div style="color: #586069; margin-top: 0.6rem; font-size: 0.8rem;">
      For cohort-specific Telegram channels, check the Forms and Links section on cohort-specific pages.
    </div>
  </div>

  <div style="flex: 1; min-width: 300px; text-align: center; padding: 0.75rem; background: linear-gradient(135deg, #FF000015 0%, #FF000025 100%); border: 2px solid #FF0000; border-radius: 6px; box-shadow: 0 2px 8px rgba(255,0,0,0.1);">
    <div style="font-size: 0.95rem; color: #24292e; margin-bottom: 0.4rem;">
      🎥 <strong>MERN Stack Course</strong>
    </div>
    <div style="color: #586069; margin-bottom: 0.6rem; font-size: 0.85rem;">
      Watch our MERN stack videos on YouTube
    </div>
    <a href="https://youtu.be/ksFx_fDMJPY?list=PL4ocL5uCKzQOHnCwuKKZGQ6N0DGXiKSS-" target="_blank" style="display: inline-block; padding: 0.4rem 1rem; background: #FF0000; color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.85rem; transition: all 0.2s; box-shadow: 0 2px 4px rgba(255,0,0,0.3);">
      ▶️ Watch on YouTube
    </a>
    <div style="color: #586069; margin-top: 0.6rem; font-size: 0.8rem;">
      Please note that completing the course on ViBe is required, as we are tracking progress only from there. The playlist is being released to help you learn more efficiently and thoroughly.
    </div>
  </div>

</div>

---

## 🎓 Select Your Cohort

Choose your cohort to view general information, live dashboard, announcements, and cohort-specific details.

{% if site.cohorts and site.cohorts.size > 0 %}
<div style="display: flex; gap: 1.5rem; margin: 2rem 0; flex-wrap: wrap;">
  {% for cohort in site.cohorts %}
    {% assign status_color = cohort.color %}
    {% if cohort.status == "Active" %}
      {% assign status_icon = "🟢" %}
    {% elsif cohort.status == "Completed" %}
      {% assign status_icon = "🔵" %}
    {% else %}
      {% assign status_icon = "🟡" %}
    {% endif %}
    
    <a href="{{ site.baseurl }}/{{ cohort.cohort_id }}/" style="text-decoration: none; display: block; flex: 1; min-width: 300px; padding: 2rem; border: 2px solid #e1e4e8; border-radius: 12px; background: linear-gradient(135deg, #{{ status_color }}10 0%, #{{ status_color }}20 100%); border-left: 6px solid #{{ status_color }}; transition: all 0.2s;">
      <div style="font-weight: 700; font-size: 1.5rem; color: #24292e; margin-bottom: 0.5rem;">
        {{ cohort.display_name }}
      </div>
      <div style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 12px; background: white; color: #{{ status_color }}; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.75rem;">
        {{ status_icon }} {{ cohort.status }}
      </div>
      <div style="color: #586069; font-size: 0.95rem;">
        {% if cohort.end_date != "" and cohort.end_date %}
          📅 Started: {{ cohort.start_date }} | Ended: {{ cohort.end_date }}
        {% elsif cohort.status == "Active" or cohort.status == "Completed" %}
          📅 Started: {{ cohort.start_date }}
        {% else %}
          📅 Starting: {{ cohort.start_date }}
        {% endif %}
      </div>
      <div style="color: #586069; font-size: 0.9rem; margin-top: 0.5rem; font-style: italic;">
        View dashboard, announcements & info →
      </div>
    </a>
  {% endfor %}
</div>
{% else %}
<div style="text-align: center; padding: 3rem; background-color: #f6f8fa; border-radius: 8px;">
  <p style="font-size: 1.2em; color: #586069; margin: 0;">🎓 No cohorts available at the moment</p>
  <p style="color: #959da5; margin: 1rem 0 0 0;">Check back later for cohort information</p>
</div>
{% endif %}


<!-- ---
[Important Links](./important_links/) -->