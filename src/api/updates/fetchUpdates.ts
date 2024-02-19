export const fetchUpdates = (): Promise<{
  items: number[]
  profiles: string[]
}> =>
  fetch('https://hacker-news.firebaseio.com/v0/updates.json').then((resp) =>
    resp.json(),
  )
