import asana from 'asana';

const client = asana.Client.create().useAccessToken(process.env.ASANA_ACCESS_TOKEN as string);

export const invalidDuplicateRequest = async (content: any) => {
  const { name, mediaType, course_code_number } = content;
  const disallowedTypes = ['Lecture', 'Video'];

  if (course_code_number === 'Internal Request') return null;
  if (!disallowedTypes.includes(mediaType)) return null;

  const response = await client.tasks.searchTasksForWorkspace(process.env.ASANA_WORKSPACE as string, {
    text: name,
    projects: [process.env.ASANA_CDT_MULTIMEDIA_INTAKE],
  });

  return response.data.filter((task: any) => task.name === name) || null;
};
