import { getDirectusClient } from "../lib/directus";
import { useQuery } from "@tanstack/react-query";
import { readItems } from "@directus/sdk";

export const fetchText = async () => {
  const client = getDirectusClient()
  const response = await client.request(readItems('home_text'))
  return response[0]
}

export const useText = () => {
  return useQuery({queryKey: ['home-text'], queryFn: fetchText})
}
