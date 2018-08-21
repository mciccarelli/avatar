import { get, isEmpty } from 'lodash';

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const BreakLine = string => {
  return string.split('\n').map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });
};

// extract fields from contentful entry object
export const getFields = entry => {
  return entry && entry.fields && !isEmpty(entry.fields) ? entry.fields : {};
};

// extract image attributes from contentful entry
export const getImageAttributes = entry => {
  return get(entry, 'fields.file');
};

// check if asset url is a valid video source for playback on web (.mp4 or .webm)
export const validVideoSource = url =>
  url && (url.indexOf('.mp4') > -1 || url.indexOf('.webm') > -1);
