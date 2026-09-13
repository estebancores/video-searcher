import {defineCliConfig} from 'sanity/cli'

import {dataset, projectId} from './src/env'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  typegen: {
    enabled: true,
    schema: './schema.json',
    path: ['./src/schemaTypes/**/*.*(ts|tsx|js|jsx)', '../sanity/lib/queries.ts'],
    generates: '../sanity/lib/sanity.types.ts',
  },
})
