import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/avatar.minnduc.png',
    bio: 'Email: minnduc.nguyen@gmail.com',
    name: 'Minh Duc',
    status: '☁️',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'minnduc.github.io',
  lang: 'en-US',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'A sunless day',
  themeColor: '#3D4451',
  title: 'Minh Duc',
}
