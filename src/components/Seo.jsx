import { useEffect } from 'react'
import site from '../data/site.json'

function setMeta(attrName, content, useProperty = false) {
  if (!content) return
  const selector = useProperty
    ? `meta[property="${attrName}"]`
    : `meta[name="${attrName}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(useProperty ? 'property' : 'name', attrName)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export default function Seo() {
  useEffect(() => {
    const { seo, contact, person, siteUrl } = site
    const keywords = seo.keywords?.join(', ') || ''

    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('keywords', keywords)
    setMeta('author', seo.author)
    setMeta('robots', 'index, follow')
    setMeta('googlebot', 'index, follow')

    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('og:type', 'profile', true)
    if (seo.ogImage) setMeta('og:image', seo.ogImage, true)
    if (siteUrl) setMeta('og:url', siteUrl, true)
    setMeta('og:site_name', seo.siteName || person.displayName, true)

    setMeta('twitter:card', seo.twitterCard || 'summary_large_image')
    if (seo.twitterSite) setMeta('twitter:site', seo.twitterSite)
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    if (seo.ogImage) setMeta('twitter:image', seo.ogImage)

    if (siteUrl) setLink('canonical', siteUrl)

    const sameAs = [contact.linkedin, contact.github, contact.telegram].filter(Boolean)
    const knowsAbout = [
      'Developer portfolio',
      'Frontend developer portfolio',
      'Full stack portfolio',
      'Full stack development',
      'Frontend development',
      'Backend development',
      'React',
      'Node.js',
      'TypeScript',
      'Mobile development'
    ]
    const url = siteUrl || contact.github
    const ld = [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: person.displayName,
        jobTitle: seo.jobTitle || 'Senior Full Stack Engineer',
        email: contact.email,
        url,
        sameAs,
        knowsAbout
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: seo.siteName || person.displayName,
        url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${url}?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        url,
        description: seo.description
      }
    ]

    let script = document.getElementById('ld-json-person')
    if (!script) {
      script = document.createElement('script')
      script.id = 'ld-json-person'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(ld)
  }, [])

  return null
}
