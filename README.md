# Van Life

## Introduction

Simple app built to learn about **React Router 6**, for client-side routing,
following Bob Ziroll's Advanced React course on Scrimba, an awesome interactive
tutorial with a ton of practice exercises, and certainly the most comprehensive
there is out there. I later applied what I learned on my own project
[Bits&Bobs](https://bits-and-bobs.netlify.app) and a few others. It's still WIP
as I keep getting distracted by learning and building other things.

Topics covered - Part 1:

- Routing basics
- Navigation
- Layout and Index routes, relative vs absolute paths
- Nested routes, useOutletContext()
- Route and search/query params
- Coding 'happy path' vs 'sad path' (error handling, loading states, form
  validation etc)

Topics covered - Part 2: v6.4 -> Data Layer APIs

- Loaders
- Errors
- Actions
- Protected Routes
- Deferred data

## Functionalities

Single Page App with 10+ routes, features include:

- filter by van type
- active nav link styling
- nested routes multiple levels deep
- using a mock server to start with, to fake data fetching (Mirage.js)
- using a real database (Firebase)
- deployed on Netlify

## References

You can find the current state of this demo here:
[Van Life](https://heroic-blancmange-263065.netlify.app/).

The repo for the entire Scrimba course:
https://github.com/scrimba/learn-react-router-6

The Scrimba course: https://v2.scrimba.com/learn-react-router-6-c06

The youtube version of the Scrimba course:
https://www.youtube.com/watch?v=nDGA3km5He4&t=112s

## Setup

Quick start:

```
$ npm install
$ npm start
```

Warning: Vite enforces using jsx syntax inside jsx/tsx files, so it will
complain about that. Solution: rename `.js` files to `.jsx` :)

Head over to https://vitejs.dev/ to learn more about using vite

## A note from Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of
a gym membership! 💜 If we succeed with this, it will give anyone who wants to
become a software developer a realistic shot at succeeding, regardless of where
they live and the size of their wallets 🎉 The Frontend Developer Career Path
aims to teach you everything you need to become a Junior Developer, or you could
take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!
