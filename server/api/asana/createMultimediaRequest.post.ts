// import { createMultimediaRequestHandler } from '~/server/utils/asana/createTask';

// export default defineEventHandler(async (event) => {
//   try {
//     const body = await readBody(event);
//     const result = await createMultimediaRequestHandler(body);
//     return result;
//   } catch (err) {
//     console.error('API Error:', err);
//     return sendError(event, createError({ statusCode: 500, statusMessage: 'Failed to create request' }));
//   }
// });
