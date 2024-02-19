export const fetchNewStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/newstories.json').then((resp) =>
    resp.json(),
  )
