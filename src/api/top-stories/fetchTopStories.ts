export const fetchTopStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then((resp) =>
    resp.json(),
  )
