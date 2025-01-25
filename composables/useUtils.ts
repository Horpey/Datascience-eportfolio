import hljs from 'highlight.js'
import markdownit from 'markdown-it'

function useUtils() {
  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight(str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        }
        catch (error) {
          console.error(error)
        }
      }

      return ''
    },
  })

  return {
    md,
  }
}

export default useUtils
