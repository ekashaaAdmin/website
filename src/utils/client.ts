import sanityClient from "@sanity/client";

const client = sanityClient( {
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    useCdn: true
} );

export default client;
