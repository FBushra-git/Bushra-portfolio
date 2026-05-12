const modules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default'
})

/** Map `image` filenames from `src/data/projects.json` to bundled URLs. Files live in `src/assets/`. */
export function resolveProjectImage(filename) {
  if (!filename) return ''
  const key = `../assets/${filename}`
  const url = modules[key]
  if (import.meta.env.DEV && !url) {
    console.warn(`[portfolio] Missing image in src/assets/: ${filename}`)
  }
  return url || ''
}
