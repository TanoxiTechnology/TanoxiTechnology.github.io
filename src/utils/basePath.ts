export function getBasePath() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
  }
  return ''
}

export function withBasePath(path: string) {
  return `${getBasePath()}${path}`
}
