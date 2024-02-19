export const fetchJobStories = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then((resp) =>
    resp.json(),
  )
