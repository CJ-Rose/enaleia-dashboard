// import { useQuery } from '@tanstack/react-query'
// import { getDirectusClient } from '../lib/directus'

// export const fetchHero = (key, postId) =>
//   axios.get(`/api/posts/${postId}`).then((res) => res.data)

// export default function usePost(postId) {
//   return useQuery(postId && ['post', postId], fetchPost)
// }

import { getDirectusClient } from "../lib/directus";
import { readItems } from "@directus/sdk";

export const fetchHero = async () => {
  const client = await getDirectusClient()
  const result = await client.request(readItems('home-hero'))
  console.log(result)
}
