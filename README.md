# Hacker News with Web Components

A simple [Hacker News](https://news.ycombinator.com) client written in 2 hours.

## Usage

### Prerequisites

- [Node.js](https://nodejs.org)
- [`http-server`](https://www.npmjs.com/package/http-server) or your favorite way of running a simple static server
  locally

### Build and Run

```sh
npm install # install dependencies
npm run build # build the app
npx http-server out # run it
```

## Why?

I recently wrote [a Hacker News client in 24 hours](https://github.com/MCluck90/one-day-hn) using React and experimenting
with [vanilla-extract](https://vanilla-extract.style/). Then I realized I had never really built anything with
[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) before.

## Design Goals

- Everything from scratch\*
- Stand-alone static site
- Built using web components

\* Pick my tools and tie them together myself. No boilerplates or `create-x-app` type commands.

## Non-Goals

- Be visually appealing

## Outcome

Writing it with Web Components was very easy. The end product takes up less than half as much memory as the React version.
