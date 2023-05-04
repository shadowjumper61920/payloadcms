import type { PageOrder } from '../payload-types'

export const home: Partial<PageOrder> = {
  title: 'Page Order',
  slug: 'Order',
  pageOrder: [
    'About',
    'Porting',
    'Pricing',
    'Resources',
    'Customers',
  ],
  _status: 'published',
}
