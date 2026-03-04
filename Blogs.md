---
layout: page
title: Blogs
parent: Activity
permalink: /blogs/
---

<style>
  .page-content {
    text-align: justify;
  }
</style>

### Writing a Blog as Part of Your Vinternship Journey with VLED Lab

<small>*(Activity: Call for Blogs)*</small>

<img src="../Blog_image.jpg" alt="Blog Writing" style="width: 100%; max-width: 600px; margin: 20px auto; display: block;">

As part of your internship with the **VLED Lab**, we are opening a **Call for Blogs**—an invitation for you to pause, reflect, and put your journey into words. This activity is not about technical writing skills or perfect grammar. It is about **capturing your experience honestly**, in your own voice, as you lived through this internship.

### The Journey

This internship has been intentionally designed as a learning journey rather than a checklist. You began with a fully hands-on **MERN stack course delivered through ViBe**, where learning happened through practice and persistence. You then moved into solving **case studies**, which required you to think, reason, and struggle like a developer. For those who complete the case studies, the journey extended further—into **real project work alongside our developers**, where learning became responsibility.
Along the way, many experiences quietly shaped you. Learning on ViBe, navigating case studies, consistently learning, discussing ideas in breakout rooms, preparing for the viva, receiving feedback, and working in teams—each of these meant something different to each of you. That difference is what makes your story worth telling.

To help you reflect, you may think about experiences such as learning through ViBe, working through the MERN course, solving case studies, doing coding, understanding the role of consistency, or contributing to real projects. These are only prompts to help you remember. Do not pick any of these as your blog topic directly. Writing on the “easiest” idea is not the goal. Writing from your heart is.

What we are **not looking for** is a summary of the internship or a step-by-step description of what happened.

What we **are looking for** is your lived experience—your doubts, your growth, your surprises, and your takeaways. Write about what stayed with you after the sessions ended. Write about moments that changed how you think or learn. Write as if you are speaking to someone who has never experienced learning in this way.

### Publication

Your blog should first appear on your LinkedIn profile under the article section. You should tag VLED lab and it's members in your article. If we found the article interesting, inspiring and aligning with the Vinternship. We will select your submitted blog and it will be **reviewed by the VLED Lab team**. You will receive **comments and suggestions to help you improve your writing and clarity**. This is part of the learning process—we see writing as something that evolves through feedback, just like code.

After review the selected blogs will be **published on the Vinternship website under the Blogs section**. Additionally, **selected blogs will be recognised for their** thoughtful reflection, originality, and authenticity.

### Submission Instructions

You are first required to publish your blog on your LinkedIn under the [Article](https://www.linkedin.com/article/new/){:target="_blank"} section and then you are required to submit your blog as **Markdown file** to **Vinternship** GitHub repository as a new pull request. Your blog will be rendered as a webpage, so ensure it is readable, well-structured, and personal. Follow the folder structure, naming conventions, and file structure provided below. Each blog must be written individually and should reflect your own journey.

***Repository:*** [https://github.com/sudarshansudarshan/vinternship](https://github.com/sudarshansudarshan/vinternship){:target="_blank"}

***Folder Structure:*** Place your blog in the `_blogs/` folder.

***Naming Convention***
Your file must be named: `Name_B_VinternshipID.md`, *Example:* `Mohit_B_Vinternship12345.md`

***File Structure:***
Your blog file must include front matter at the beginning with the following fields:
```markdown
---
title: "Your Blog Title Here"
author: Your Full Name
vinternship_id: YOUR_VINTERNSHIP_ID
---
```

Your blog must end with the following structure:
```markdown
---

Author: [Your Full Name](https://www.linkedin.com/in/your-linkedin-profile/){:target="_blank"}
LinkedIn Article: [Read on LinkedIn](https://www.linkedin.com/your-article-link/){:target="_blank"}
```

*Note: If your blog title contains special characters like colons (:), wrap it in double quotes.*

*Example:*
```markdown
---
title: "My Learning Journey: Reflections on Growth"
author: Mohit Kumar
vinternship_id: VID12345
---

Your blog content here...

---

Author: [Mohit Kumar](https://www.linkedin.com/in/mohit-kumar/){:target="_blank"}
LinkedIn Article: [Read on LinkedIn](https://www.linkedin.com/my-learning-journey-reflections-growth-mohit-kumar/){:target="_blank"}
```

<br>
<hr>

*This activity is not about being perfect. It is about being **honest**.*

*Not about choosing the safest topic. But about telling the **truest story**.*

*We look forward to reading your journey.*


{% assign blogs = site.blogs %}
{% if blogs.size > 0 %}
<br>

---

<br>

### **Published Blogs**

<div style="text-align: center; background-color: #f6f8fa; padding: 2rem; margin-bottom: 2rem; border-radius: 8px; border-left: 4px solid #0366d6;">
  <p style="font-size: 1.1rem; line-height: 1.8; color: #24292e; margin: 0; max-width: 800px; margin-left: auto; margin-right: auto;">
    Read the thoughtful reflections and experiences shared by our interns. Each blog captures personal journeys, challenges, and insights gained during the Vinternship program.
  </p>
</div>

{% for blog in blogs %}

<div style="margin-bottom: 1.5rem; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
  <details style="margin: 0;">
    <summary style="cursor: pointer; font-size: 1.2rem; font-weight: 600; padding: 1rem 1.5rem; background: linear-gradient(135deg, #3B82F620 0%, #3B82F640 100%); border-left: 4px solid #3B82F6; display: flex; align-items: center; gap: 0.5rem;">
      <span>{{ blog.title }} - {{ blog.author }} ({{ blog.vinternship_id }})</span>
    </summary>
    
    <div style="padding: 1.5rem; background-color: white;">
      <div style="prose max-width: none; text-align: justify;">
        {{ blog.content }}
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
</style>
