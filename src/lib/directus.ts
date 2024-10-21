import { 
  type DirectusClient, 
  type RestClient,
  createDirectus, 
  staticToken,
  rest,
  readItems
} 
from '@directus/sdk';

// biome-ignore lint/suspicious/noExplicitAny: type definition imported from @directus/sdk
let directusClient: (DirectusClient<any> & RestClient<any>) | null = null;

export const fetchHero = async () => {
  const client = getDirectusClient()
  console.log(client)
  const result = await client.request(readItems('home_hero'))
  console.log(result[0])
  return(result[0])
}

export const fetchMaterials = async () => {
  const client = getDirectusClient()
  console.log(client)
  const result = await client.request(readItems('material_hero'))
  console.log(result[0])
  return(result[0])
}


// Retrieves the singleton instance of the DirectusClient.
export const getDirectusClient = (): DirectusClient<any> & RestClient<any> => {
  if (directusClient) {
    return directusClient;
  }

  if (!import.meta.env.VITE_CMS_ENDPOINT) {
    throw new Error("CMS_ENDPOINT environment variable is not set");
  }

  if (!import.meta.env.VITE_CMS_ACCESS_TOKEN) {
    throw new Error("CMS_EMAIL environment variable is not set");
  }

  try {
    directusClient = createDirectus(import.meta.env.VITE_CMS_ENDPOINT)
      .with(staticToken(import.meta.env.VITE_CMS_ACCESS_TOKEN))
      .with(rest());
  } catch (error) {
    console.error(
      `Failed to create Directus client using endpoint ${import.meta.env.VITE_CMS_ENDPOINT}: ${error}`
    );
    throw new Error(
      `Failed to create Directus client using endpoint ${import.meta.env.VITE_CMS_ENDPOINT}: ${error}`
    );
  }

  return directusClient;
};