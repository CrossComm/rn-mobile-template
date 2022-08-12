// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
export const api = create({
	baseURL: 'https://api.github.com',
	headers: { Accept: 'application/vnd.github.v3+json' },
});

// customizing headers per-request
void api.post('/users', { name: 'leavitdav01' }, { headers: { 'x-gigawatts': '1.21' } });