// Environment is based on API url found in BaseApi.ts
import { api } from './src/services/BaseApi';

export enum Env {
  Production = 'production',
  Client = 'client',
  Internal = 'internal',
}

// prettier-ignore
export const env =
    api.includes('internal') ? Env.Internal
    	: api.includes('client') ? Env.Client
    		: /https:\/\/api.c/.test(api) ? Env.Production
    			: Env.Internal; // fallback onto internal.
