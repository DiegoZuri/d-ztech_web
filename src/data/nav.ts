export interface NavLink {
  label: string
  path: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const company = {
  name: 'D&Z Technologies',
  shortName: 'D&Z',
  tagline: 'Building technology that moves businesses forward.',
  email: 'hello@dz-technologies.com',
  phone: '+1 (000) 000-0000',
  location: 'Remote-first, working with clients worldwide',
  social: [
    { label: 'LinkedIn', url: '#' },
    { label: 'GitHub', url: '#' },
    { label: 'X / Twitter', url: '#' },
  ],
}
