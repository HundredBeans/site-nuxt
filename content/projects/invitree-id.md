---
title: "Invitree.id"
description: "Digital Invitation website where user can create and share their invitation. The Invitation cover all the conventational invitation needs with many other features."
categories: ["Fullstack", "Serverless", "Product (Digital Invitation - Web)"]
period: October 2020 - Present
type: Product
links: [
  {
    text: "Landing Page",
    url: "https://invitree.id"
  },
  {
    text: "User Dashboard",
    url: "https://dashboard.invitree.id"
  },
  {
    text: "Status Page",
    url: "https://status.invitree.id"
  }
]
---
## Overview
Digital Invitation website where user can create and share their invitation. The Invitation cover all the conventational invitation needs with many other features such as online payment, customizable data & contents, RSVP, support multiple schedules, map locations & directions, reminders, custom message templates, monitoring dashboard, SEO friendly, etc.


## Tech Stacks
**Backend** - Typescript • Firebase Function • Firebase Auth • Firestore • Telegram API • Midtrans • Github Action for CI/CD • BunnyCDN for storage

**Frontend** - Nuxt + Vuetify for the main website • React + ChakraUI for the dashboards • Vercel

**Tools** - Better Uptime for monitoring • Google Analytics • Figma • Github

## Lessons Learned & Notes
Here are some notes and lessons that I learned in the process of developing this project:
- Development using Firebase with multi-environment
- Data migrations using Firebase + Firestore
- Automate deployment using Github Action for different environment
- Integrate google analytics on SPA. Apparently, googla analytics doesn't automatically log page_view event on every route change in the Single Page App
- Use a CDN service like BunnyCDN to store all media instead of Firebase Storage to save more money. In early time, 90% of my Firebase cost is from the storage and its bandwidth. After I move the content and media storage to BunnyCDN, I save >300K IDR per month (assume there are more than 5 invitations created in that month)
- You can literally deploy your product MVP for free using Firebase + Vercel combo and extend the stacks based on your needs
- Use external API monitoring service to periodically call your serverless function to reduce the cold start. My go-to choice is Better Uptime. Cause it can monitor multiple URL with low interval (per 3 minute), monitor from multiple regions, can generate the status page + connect to custom domain, email notification, add team members, and all of that for FREE
- Use static page or server side rendered page for the Landing Page for better SEO performance
- Use Telegram as an error logger and notification instead of other notification service
- Use lower image resolution as an Image graph meta so the link preview can be shown in WhatsApp and other social media
- Vue is better at handling form instead of react. Better use Vue if you want to create app that will handle many complex forms