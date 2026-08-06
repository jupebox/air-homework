This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## What I Prioritized and Why

When I looked at the list of requirements, my first thought was "I am not getting all of that done in 4 hours." So my first step was to spend 20-30 minutes evaluating the criteria and looking through the provided design and live example, creating more detailed requirements lists and deciding what to work on and what to skip.

Top priorities:
1. Semantic, accessible markup
2. Well-organized code
3. The Most Basic Case: if there was no fancy javascript running this, would it still "work"?

So, I started with the toggle component. I focused on creating an accessible experience with a reusable component for consistency.

Next, I pulled in data, because I find when there is an existing API it's always a bad idea to make components blindly without taking the shape of your data constraints into account. There are optimizations I could make here, but for now I put all of the initial loading into the page file so that the data is usable by all later components.

Third, I started creating the card components and the grids to contain them. I spent longer than I should have futzing around with object fit and refreshing myself on the differences between flex and grid, and realized I'd need to cut back on my ambitions for overall functionality.

Next on my todo list, but weren't able to get to them were:
- a proper hook to resize grid items in the assets section, on page load, resize, and on assets moving
- better responsive design - changing the minimum sizes for smaller screens, maybe moving to a side scrolling flexbox for the boards section, etc
- finalized card styles and functionality
  - border (optional)
  - hover state
  - focus state
  - clickable text, either there always (boolean) or on hover/focus
  - text is a link that takes you Somewhere
    - has a tooltip above it that goes past borders of card white on black, shows whole name of asset
  - optional secondary information
    - not clickable
  - if type of asset is video, include video length always, remove on hover/focus
- infinite scroll (or even a load more functionality at all). I considered this part of "data" and really wanted to get to it, but ran out of time.
- a final pass for styles, fonts, general look and feel, cross-browser testing, etc

Things I purposely deprioritized were:

- context menu/ellipsis menu. This was my stretch goal, since I considered this part of the "card" component.
- select functionality. This might have been accomplishable, but there were a lot of corner case interactions I thought of and I wasn't confident I could deliver it with the level of polish I would want.
- drag and drop. I don't have familiarity with this type of interaction, and it seemed like it would have conflicting mouse events with the other functionality. A great place to spend a lot of time digging in and learning, not my last frantic 15 minutes.