export const fetchAskHnStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/askstories.json').then((resp) =>
    resp.json(),
  )
