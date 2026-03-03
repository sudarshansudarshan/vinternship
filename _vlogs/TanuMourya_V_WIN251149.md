---
title: "Case Study 5: Testing & Debugging React Apps with TypeScript"
author: "Tanu Mourya"
vinternship_id: WIN251149
youtube_url: "https://youtu.be/wlegaPb1-SY?si=rCRYP971-F4iLNdG"
---

#  Challenge Overview
The goal of this case study was to **test and debug a React + TypeScript project**.  
Key requirements included:
- Writing a test for `CommentBox`.
- Adding an ESLint rule forbidding `console.log`.
- Debugging the failing `ArticleApproval` test.
- Ensuring all test suites pass.

#  Steps Taken

## 1. Environment Setup
- Verified dependencies: `react-scripts`, `@types/jest`, `@testing-library/react`, `@testing-library/jest-dom`, `eslint`, `prettier`.
- Removed duplicate Jest installs to avoid version conflicts.
- Updated `package.json` test script to use CRA’s built‑in runner:
  ```json
  "scripts": {
    "test": "react-scripts test"
  }

## 2. Debugging ArticleApproval
While debugging the `ArticleApproval` test, I found that the component was failing due to a mismatch in expected props. I resolved this by:
* Updating the Mock Data to include the missing `status` field.
* Wrapping the render in `act()` to handle asynchronous state updates.

## Watch the Vlog
<div align="center">
  <iframe width="560" height="315" src="https://youtu.be/wlegaPb1-SY?si=rCRYP971-F4iLNdG" title="Testing & Debugging React Apps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---
