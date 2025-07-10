export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isAbsolute = src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')
  if (isAbsolute) return src
  
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${prefix}${src}`
}
