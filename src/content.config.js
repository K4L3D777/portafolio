
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
// Declaramos el módulo de la colección de posts
const postsCollection = defineCollection({
  // El loader 'glob' busca todos los archivos Markdown exclusivamente en src/posts
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  
  // Validamos que cada ensayo tenga la estructura exacta que necesitas
  schema: z.object({
    title: z.string(),
    description: z.string(), // Obligatorio para tu SEO
    // Capitaliza la primera letra de cada palabra sin importar cómo se escriba
    author: z.string().transform((str) => {
      return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
    date: z.coerce.date(), // Convierte tu string de fecha a un objeto Date válido
  }),
});

// Exportamos la colección para que Astro la registre
export const collections = {
  'posts': postsCollection,
};