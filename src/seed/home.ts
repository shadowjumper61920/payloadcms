import type { Page } from '../payload-types'

export const home: Partial<Page> = {
  title: 'Home Page',
  slug: 'home',
  richText: [
    { title: 'About' },
    { title: 'Porting' },
    { title: 'Pricing' },
    { title: 'Resources' },
    { title: 'Customers' },
  ],
  _status: 'published',
}
