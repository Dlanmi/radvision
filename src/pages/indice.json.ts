import type { APIRoute } from 'astro';
import { construirIndice } from '../lib/indice';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(construirIndice()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
