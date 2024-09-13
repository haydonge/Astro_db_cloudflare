export const onRequest = async ({ request, next, env }) => {
  return next(request);
};
