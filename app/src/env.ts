import { defineEnvVars } from '@sveltejs/kit/env';

// @migration-task Review usage of dynamic environment variables. They fall back to the empty string if not present, which may not be what you want.
export const variables = defineEnvVars({
	PUBLIC_PH_TOKEN: { public: true, schema: (input) => input ?? '' },
	PH_PROJECT_ID: { schema: (input) => input ?? '' },
	PH_API_KEY: { schema: (input) => input ?? '' }
});
