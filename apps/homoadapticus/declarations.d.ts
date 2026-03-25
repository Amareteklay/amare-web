declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.mdx' {
  import type { ComponentType } from 'react'
  const Component: ComponentType<{ components?: Record<string, ComponentType> }>
  export default Component
  export const metadata: {
    title: string
    category?: string
    readTime?: string
    date?: string
  }
}
