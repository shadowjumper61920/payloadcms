import type { CollectionConfig } from 'payload/types'

import richText from '../fields/richText'
import { slugField } from '../fields/slug'

export const PageOrder: CollectionConfig = {
    slug: 'page-order',
    fields: [
      {
        name: 'slider', // required
        type: 'array', // required
        label: 'Page Orders',
        fields: [ // required
          {
            name: 'title',
            type: 'text',
          },
        ],
      }
    ]
  };