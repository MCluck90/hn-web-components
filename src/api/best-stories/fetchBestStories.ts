export const fetchBestStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/beststories.json').then((resp) =>
    resp.json(),
  )
