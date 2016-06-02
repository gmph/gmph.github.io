---
layout: default
title: Designing Messaging
heading: Designing Messaging
date: 2nd June 2016
category: note
published: true
private: false
format: markdown
permalink: /designing-messaging
version: 1.0
---

Since joining the team at [Yavi](http://yavi.co) in March to design new tools for shift-workers, I have been working on a messaging app. 

This is a transitional period for messaging, with bots, AI and assistants slipping into everyday communication. Messaging now more than ever allows you to design an extensible product. It is perfectly suited to atomic design. Each message can be a step in a flow and built up of flexible components. We have been designing Yavi's messaging to take advantage of this.

I have two examples to share. The first is sharing a work schedule with a team in Yavi. The flow for upload, conversion and sharing flow could be complex. Using messaging simplifies this to actions people use every day:

1. Send your team a message with a schedule file attached to it
2. A bot sees it and tells you it will start converting your schedule
3. The bot sends it back to the team in a neat format after converting

Our uploading is based on a smart system which can extract structured data from any photo or file. This could seem very complex, but messaging keeps the flow linear and clear. It connects these new interactions to an action people take every day: sending messages with attachments and receiving replies about them.

My second example is shift reminders. After converting a schedule, Yavi can find your name in it and send your reminders the morning or night before you have a shift. It looks like this:

1. You have a converted schedule in your team
2. You get a private message from a bot saying reminders are on
3. Before a shift, the shift details are sent privately by a bot

The history messaging gives you is useful here: you can quickly see a list of recent shifts in a chat. Messaging also means that notifications are sent by default. This massively simplifies building and testing new features. By using bots to replace feedback normally given by a tailored UI, we keep the app simple for the user and extensible for our engineers.

Yavi is a simple, smart messaging app for shift-working teams. These little additions and others automate things you do to make Yavi work for your team and help you.

I'll be sharing more learnings from working on Yavi soon.