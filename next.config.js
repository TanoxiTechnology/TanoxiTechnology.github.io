/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  // ❌ Remove or comment out this line to disable static export
  // output: 'export',

  assetPrefix: assetPrefix,
  basePath: basePath,

  // ✅ Remove or adjust image settings if not needed for dynamic
  images: {
    unoptimized: false, // or remove this line
    loader: 'default',  // use Next.js default loader
    // You can also remove loaderFile if you're not using a custom one
  },

  // optional: keep if you want URLs to end with /
  trailingSlash: true,
}

module.exports = nextConfig
