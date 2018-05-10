import _ from 'lodash';

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
  return entry && entry.fields && !_.isEmpty(entry.fields) ? entry.fields : {};
};

// extract image src from contentful image data object
export const getImageSrc = image => {
  return image && image.fields && image.fields.file && image.fields.file.url
    ? image.fields.file.url
    : '';
};

// check if asset url is a valid video source for playback on web (.mp4 or .webm)
export const validVideoSource = url =>
  url && (url.indexOf('.mp4') > -1 || url.indexOf('.webm') > -1);
