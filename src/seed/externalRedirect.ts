import type { Redirect } from '../payload-types'

export const externalRedirect: Partial<Redirect> = {
  from: 'https://payloadcms.com',
  to: {
    type: 'custom',
    url: 'https://www.payloadcms.com',
    reference: null,
  },
  createdAt: '2023-02-01T20:35:34.257Z',
  updatedAt: '2023-02-01T20:35:34.257Z',
}
