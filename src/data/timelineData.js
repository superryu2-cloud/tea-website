import timelineData from './timelineData.json';

function validateTimelineData(data) {
  if (data == null || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('timelineData 必須是物件');
  }

  Object.entries(data).forEach(([eraKey, events]) => {
    if (!Array.isArray(events)) throw new Error(`timelineData.${eraKey} 必須是陣列`);

    events.forEach((event, index) => {
      if (event == null || typeof event !== 'object') {
        throw new Error(`timelineData.${eraKey}[${index}] 必須是物件`);
      }

      ['year', 'title', 'content', 'world'].forEach((field) => {
        if (typeof event[field] !== 'string') {
          throw new Error(`timelineData.${eraKey}[${index}].${field} 必須是字串`);
        }
      });
    });
  });
}

validateTimelineData(timelineData);

export default timelineData;

