---
layout: page
title: Vlogs
parent: Activity
permalink: /vlogs/
---

<style>
  .page-content {
    text-align: justify;
  }
</style>

### Creating a Vlog as Part of Your Vinternship Journey with VLED Lab

<small>*(Activity: Call for Vlogs)*</small>

<img src="../Vlog_image.png" alt="Vlog Creating" style="width: 100%; max-width: 600px; margin: 20px auto; display: block;">

As part of your internship with the **VLED Lab**, we are opening a **Call for Vlogs**—an invitation for you to share your learning journey, technical skills, and project demonstrations through video. This activity is not about having professional equipment or perfect editing. It is about **showing your authentic experience**, sharing what you've learned, and helping others through visual storytelling.

### The Journey

Video is one of the most powerful ways to teach and motivate. When you show your screen while explaining code, walk through your debugging process, or demonstrate a feature you built—you create something that written words alone cannot capture. Your thought process, your real-time problem-solving, and your authentic voice make learning process easy and impactful.

What we are **not looking for** is highly polished, scripted content that feels impersonal.

What we **are looking for** is authentic and your honest experience of what worked and what didn't. Create content that you wish had existed when you were learning.

### Publication

Your vlog should first be uploaded to **your personal YouTube channel**. You should tag or mention **Vicharnashala** channel in your video description. If we find the video high-quality, informative, and aligned with Vinternship, we will select your submitted vlog and it will be **reviewed by the VLED Lab team**.

After review, the selected vlogs will be **embedded on the Vinternship website under the Vlogs section**. Additionally, **featured vlog creators will be recognised** for their contribution to the learning community.

### Submission Instructions

You are first required to upload your video to **your personal [YouTube](https://www.youtube.com/){:target="_blank"} channel** and then you are required to submit your vlog as a **Markdown file with embedded video** to the **Vinternship** GitHub repository as a new pull request. Your vlog page will be rendered as a webpage, so ensure the markdown file is well-structured and includes proper video embedding. Follow the folder structure, naming conventions, and file structure provided below.

***Repository:*** [https://github.com/sudarshansudarshan/vinternship](https://github.com/sudarshansudarshan/vinternship){:target="_blank"}

***Folder Structure:*** Place your vlog file in the `_vlogs/` folder.

***Naming Convention***
Your file must be named: `Name_V_VinternshipID.md`, *Example:* `Mohit_V_12345.md`

***File Structure:***
Your vlog file must include front matter at the beginning with the following fields:
```markdown
---
title: "Your Video Title Here"
author: Your Full Name
vinternship_id: YOUR_VINTERNSHIP_ID
youtube_url: "URL"
---

Brief description of what your video covers and what viewers will learn along with the video embedded.
```


<br>
<hr>

*This activity is not about perfection. It is about **sharing**.*

*Not about having the best equipment. But about **motivating others to learn**.*

*We look forward to featuring your content.*


{% assign vlogs = site.vlogs %}
{% if vlogs.size > 0 %}
<br>

---


<br>

### **Published Vlogs**

<div style="text-align: center; background-color: #f6f8fa; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; border-left: 4px solid #0366d6;">
  <p style="font-size: 1.1rem; line-height: 1.8; color: #24292e; margin: 0; max-width: 800px; margin-left: auto; margin-right: auto;">
    Watch video tutorials, project demonstrations, and learning journeys shared by our interns. Each vlog provides valuable insights and practical knowledge from the Vinternship program.
  </p>
</div>

{% for vlog in vlogs %}

<div style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
  <details style="margin: 0;">
    <summary style="cursor: pointer; font-size: 1.2rem; font-weight: 600; padding: 1rem 1.5rem; background: linear-gradient(135deg, #FF980020 0%, #FF980040 100%); border-left: 4px solid #FF9800; display: flex; align-items: center; gap: 0.5rem;">
      <span>{{ vlog.title }} - {{ vlog.author }} ({{ vlog.vinternship_id }})</span>
    </summary>
    
    <div style="padding: 1.5rem; background-color: white;">
      <div style="prose max-width: none; text-align: justify;">
        {{ vlog.content }}
      </div>
    </div>
  </details>
</div>

{% endfor %}

{% endif %}

<style>
  details[open] summary {
    margin-bottom: 0;
  }
  
  details summary:hover {
    opacity: 0.9;
  }
  
  details div.prose h1 {
    color: #24292e;
    font-size: 1.75rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e1e4e8;
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
  
  details div.prose iframe {
    max-width: 100%;
    margin: 1rem 0;
  }
</style>
