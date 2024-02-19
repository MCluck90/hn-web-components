export const enum StoryType {
  AskHn = 'ask-hn',
  Best = 'best',
  Job = 'job',
  New = 'new',
  ShowHn = 'show-hn',
  Top = 'top',
}

export const isStoryType = (value: unknown): value is StoryType =>
  value === StoryType.AskHn ||
  value === StoryType.Best ||
  value === StoryType.Job ||
  value === StoryType.New ||
  value === StoryType.ShowHn ||
  value === StoryType.Top
