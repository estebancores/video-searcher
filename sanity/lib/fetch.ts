import {type QueryParams} from 'sanity'

import {serverClient} from './server'

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: {
  query: QueryString
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
}) {
  return serverClient.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  })
}
