import 'server-only'

import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, readToken} from '../env'

export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: readToken,
})
