import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const backendClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Use false for server-side, ISR, or revalidation
  token: process.env.SANITY_API_TOKEN, // Only use token on server
});

