export interface NavLink {
  key: 'home' | 'services' | 'solutions' | 'about' | 'contact'
  path: string
}

export const navLinks: NavLink[] = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'solutions', path: '/solutions' },
  { key: 'about', path: '/about' },
  { key: 'contact', path: '/contact' },
]

export interface LegalLink {
  key: 'privacyPolicy' | 'termsConditions'
  path: string
}

export const legalLinks: LegalLink[] = [
  { key: 'privacyPolicy', path: '/privacy-policy' },
  { key: 'termsConditions', path: '/terms-and-conditions' },
]

export const company = {
  name: 'D&Z Technologies',
  shortName: 'D&Z',
  email: 'dz.technologiesllc@gmail.com',
  phone: '+591 79950444',
  social: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/diegozurita24' },
    { label: 'GitHub', url: 'https://github.com/DiegoZuri' },
    { label: 'Portfolio', url: 'https://portfolio-dz-three.vercel.app/' },
  ],
}
