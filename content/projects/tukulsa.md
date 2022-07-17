---
title: "Tukulsa"
description: "Online chatbot via LINE platform which can automatically respond to users' chat and requests in order to make a purchase of a prepaid voucher for all cellular operators within Indonesia. The chatbot uses NLP build with TensorFlow (Python)."
categories: ["Fullstack", "Machine Learning", "Product (Digital Payment - Chatbot)"]
period: February 2020 - June 2020 (Suspended)
type: Product
links: [
  {
    text: "LINE Chat (Inactive)",
    url: "https://bit.ly/tukulsa"
  },
  {
    text: "Demo (Video)",
    url: "https://youtu.be/J13q0YFri2U?t=179"
  },
]
---
## Overview
Online chatbot via LINE platform which can automatically respond to users' chat and requests in order to make a purchase of a prepaid voucher for all cellular operators within Indonesia. The chatbot uses NLP build with TensorFlow (Python). 

This project is no longer active, cause the price to maintain EC2 + RDS instance in AWS is too expensive. It is impossible to migrate to the serverless function because the latency difference is too high for a chatbot and it needs high computing power to train and run the ML model itself. Also there are no market for this, since people just can use m-banking or other e-commerce to buy the prepaid voucher or "pulsa" anyway.


## Tech Stacks
**Backend** - Python • Flask • MySQL + SQL-Alchemy • Docker • EC2 + RDS • TensorFlow • LINE API • Midtrans + Pulsa Provider

**Frontend** - React + MaterialUI • Line Liff

**Tools** - Github • Travis CI

## Lessons Learned & Notes
Here are some notes and lessons that I learned in the process of developing this project:
- Integrate midtrans and pulsa provider
- Creating NLP model and integrate it with a chatbot
- EC2 + RDS is too expensive and hard to maintain
- You can develop a fully functional web app that runs on LINE chat and its very powerful. The framework is called LINE Liff
- You can customize chat response in LINE using Flex Message API to have beautiful interface in LINE chat. [Here is the documentation](https://developers.line.biz/en/docs/messaging-api/message-types/#flex-messages)