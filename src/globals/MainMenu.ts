import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 9,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
