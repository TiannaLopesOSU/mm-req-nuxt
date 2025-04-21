// import asana from 'asana';
// import { invalidDuplicateRequest } from './duplicateChecker';
// import { publishSNSEvent } from './sns';

// const client = asana.Client.create().useAccessToken(process.env.ASANA_ACCESS_TOKEN as string);

// export async function createMultimediaRequestHandler(content: any) {
//   const task1 = await createTask(content);

//   if (content.mediaType === 'Animation') {
//     content.mediaType = 'VO_Animation';
//     content.name = `${content.name} - VO`;
//     const task2 = await createTask(content);

//     await publishSNSEvent(
//       JSON.stringify([task2.gid, task1.gid]),
//       'Dependent Request',
//       `arn:aws:sns:us-west-2:709088102883:${process.env.ANIMATION_TASK_DEPENDENT}`
//     );

//     await publishSNSEvent(
//       JSON.stringify([task1.gid, task2.gid]),
//       'Dependencies Request',
//       `arn:aws:sns:us-west-2:709088102883:${process.env.ANIMATION_TASK_DEPENDENCY}`
//     );
//   }

//   return task1;
// }

// async function createTask(content: any) {
//   const duplicates = await invalidDuplicateRequest(content);
//   if (duplicates) {
//     throw createError({ statusCode: 409, statusMessage: 'Duplicate multimedia request', data: duplicates });
//   }

//   const follower = content.instructionalDesignerCustomField?.[0]?.gid === '1204007893854244'
//     ? []
//     : content.instructionalDesignerCustomField || [];

//   if (content.mediaType === 'Animation') {
//     follower.push({ gid: '941698411857946', resource_type: 'user', name: 'James Roberts' });
//     content.instructionalDesignerCustomField = content.instructionalDesignerCustomField?.filter(
//       (d: any) => d.gid !== '941698411857946'
//     );
//   }

//   const custom_fields = generateCustomFields(content);

//   const task = await client.tasks.create({
//     name: content.name,
//     followers: follower,
//     custom_fields,
//     projects: [process.env.ASANA_PROJECT],
//     html_notes: content.notes,
//     due_on: content.due_date || undefined,
//   });

//   const eventText = JSON.stringify(task);

//   if (content.mediaType === 'Video') {
//     await publishSNSEvent(eventText, 'Video Tasks Request', `arn:aws:sns:us-west-2:709088102883:${process.env.VIDEO_TASK_TOPIC}`);
//   }

//   if (content.mediaType === 'Lecture') {
//     await publishSNSEvent(eventText, 'Lecture Tasks Request', `arn:aws:sns:us-west-2:709088102883:${process.env.LECTURE_TASK_TOPIC}`);
//   }

//   if (content.mediaType === 'Recording') {
//     await publishSNSEvent(eventText, 'Recording Tasks Request', `arn:aws:sns:us-west-2:709088102883:${process.env.RECORDING_TASK_TOPIC}`);
//   }

//   if (content.mediaType === 'VO_Animation') {
//     await publishSNSEvent(eventText, 'VO_Animation Tasks Request', `arn:aws:sns:us-west-2:709088102883:${process.env.VO_ANIMATION_TASK_TOPIC}`);
//   }

//   return task;
// }

// function generateCustomFields(content: any) {
//   const mediaTypeMap: Record<string, string> = {
//     Timeline: '1208129618115736',
//     Glossary: '1208129618115744',
//     Web: '1208129531079122',
//     H5P: '1208129532629453',
//     Internal: '1208129532070562',
//     Reflect: '1208129617669941',
//     Lecture: '1208264378820118',
//     Video: '1208264378820119',
//     DIY: '1208264378820120',
//     Animation: '1208264378820121',
//     VO_Animation: '1208264378820118',
//     Graphics: '1208264378820122',
//     Support: '1208264378820123',
//     Consultation: '1208264689186435',
//   };

//   const mediaTypeAsanaId = mediaTypeMap[content.mediaType] || mediaTypeMap['Internal'];

//   const fields: Record<string, any> = {
//     '1208129345404332': '1208129614077492',
//     '1208129347619225': content.deliveryTerm,
//     '1208129386660985': content.quantity || undefined,
//     '1208129347619233': mediaTypeAsanaId,
//     '1208129301417200': content.needed_by || undefined,
//     '1208129300624885': content.instructor,
//   };

//   if (content.instructionalDesignerCustomField?.[0]?.gid !== '1204007893854244') {
//     fields['1208129387765521'] = content.instructionalDesignerCustomField;
//   }

//   return fields;
// }
