export const fetchMaxItemId = (): Promise<number> =>
  fetch('https://hacker-news.firebaseio.com/v0/maxitem.json').then((resp) =>
    resp.json(),
  )
