export const fetchShowHnStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/showstories.json').then((resp) =>
    resp.json(),
  )
