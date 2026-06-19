---
title: "MongoDB Aggregation Framework – Case Study"
author: Srushti Mote
vinternship_id: WIN251125
---

# MongoDB Aggregation Framework Case Study

## Problem
Find the average rating for each genre in 2024, including only genres with more than 10,000 total views.

## Aggregation Pipeline

```javascript
db.watchHistory.aggregate([
  { $match: { year: 2024 } },
  { $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
  }},
  { $match: { totalViews: { $gt: 10000 } }},
  { $project: {
      _id: 0,
      genre: "$_id",
      totalViews: 1,
      avgRating: { $round: ["$avgRating", 1] }
  }}
])
```

## Explanation

1. `$match` filters documents for the year 2024.
2. `$group` aggregates the data by genre and calculates total views and average rating.
3. Another `$match` filters genres with total views greater than 10,000.
4. `$project` formats the output and rounds the average rating to one decimal.

## Output

Example result:

- Drama — Total Views: 15000 — Avg Rating: 8.5  
- Sci-Fi — Total Views: 38000 — Avg Rating: 8.4

## Screenshots

### Aggregation Pipeline
![Pipeline Screenshot](pipeline.png)

### Output Result
![Result Screenshot](result.png)
