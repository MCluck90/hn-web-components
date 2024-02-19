export function formatContent(text: string | undefined): string {
  if (!text) {
    return ''
  }

  // Replace "> quote" with a blockquote
  text = text.replace(/<p>/g, '\n<p>')
  text = text.replace(/^&gt;([^\n]+)/g, '<blockquote>$1</blockquote>')

  // Remove extra indentation in code blocks
  text = text.replace(/<code>    /g, '<code>')
  text = text.replace(/\n    /g, '\n')

  // Replace backtick surrounded content with a codeblock
  text = text.replace(/`([^`\n]+)`/g, '<code>$1</code>')

  return text
}
