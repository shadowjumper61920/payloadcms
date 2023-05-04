import redirects from '@payloadcms/plugin-redirects'
import path from 'path'
import { buildConfig } from 'payload/config'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { PageOrder } from './collections/PageOrder'

export default buildConfig({
  collections: [Pages, Users, PageOrder],
  cors: [process.env.PAYLOAD_PUBLIC_SITE_URL],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  // plugins: [
  //   redirects({
  //     collections: ['pages'],
  //   }),
  // ],
})
