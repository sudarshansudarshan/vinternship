---
title: "Understanding Express Middlewares | My Vinternship Journey & Progress"
author: Badiganti Tejasri
vinternship_id: WIN25833
youtube_url: "https://youtu.be/es4ZRCHUF8M"
---

## 🎓 My Vinternship Experience

Hello everyone!  

I am Tejasri, currently pursuing my B.Tech third year at Gayatri Vidya Parishad college of Engineering , Visakhapatnam.

In this vlog, I share my Vinternship journey and how the structured learning approach helped me grow step by step. What I truly appreciate about this internship is how it is divided into:

- 📘 Guided Learning (ViBe)
- 🧩 Case Studies
- 💻 Project Work

Among these, solving case studies has been my favorite part. They helped me build the habit of self-learning and debugging independently. Understanding existing code and fixing bugs on my own has significantly improved my confidence as a developer.

---

## 🚀 Topic Explained: Express Middlewares

As part of this vlog activity, I explain the concept of **Express Middlewares** using a real-world analogy and demonstrate debugging inside Visual Studio Code.

### 🏥 Hospital Discharge Analogy

In the case study, middleware is introduced using a hospital discharge process:

Before a patient is discharged:
- Doctor's signature is required
- Pharmacy review is required
- Insurance approval is verified
- Follow-up appointment is scheduled

Each step must happen **in order**.

Similarly, in Express:
When a client sends a request, multiple middlewares execute sequentially before the final response is sent.

This helps in:
- Authentication
- Validation
- Logging
- Pre-processing
- Error handling

---

## 🔍 What is Middleware?

Middleware is pre-route logic that executes before the final route handler.

It:
- Inspects the request
- Validates data
- Modifies request objects
- Controls flow using `next()`

### Types of Middlewares:
1. Built-in Middleware (e.g., `express.json()`)
2. Third-party Middleware
3. Custom Middleware
4. Error-handling Middleware

---

## 🔁 Middleware Chaining

Middleware functions execute sequentially:

1. Log discharge step
2. Doctor sign-off check
3. Insurance approval
4. Pharmacy review
5. Follow-up check
6. Final handler (sends response)

The order matters a lot.

If one middleware does not call `next()`, the request gets stuck.

---

## 🐞 Debugging a Common Mistake

One major bug I encountered was forgetting to call `next()` inside a middleware.

Result:
- The request kept loading
- No response was sent
- The flow got stuck

By logging steps in the terminal, I identified where execution stopped and fixed the issue.

This debugging experience helped me deeply understand how middleware flow works internally.

---

## 🛠 Tools Used

- Node.js
- Express.js
- Visual Studio Code
- Postman / Hoppscotch for testing APIs
- Nodemon for automatic server restart

---

## 🌟 Key Takeaways

- Middleware controls request-response flow
- Order of middlewares is crucial
- Always call `next()` unless sending a response
- Logging helps track bugs effectively
- Debugging builds real confidence

---

This internship has helped me strengthen my backend fundamentals and develop structured thinking while solving problems.

Thank you for watching my vlog and being part of my learning journey!

---

## 🎥 Watch the Full Video Below

<iframe width="560" height="315" src="https://www.youtube.com/embed/es4ZRCHUF8M?si=voIlVCLo-uhidydq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>