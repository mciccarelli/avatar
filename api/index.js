const { createClient } = require('contentful');
// import getConfig from 'next/config';
// const { publicRuntimeConfig } = getConfig();
// const { contentfulSpaceId, contentfulAccessToken } = publicRuntimeConfig;

export const contentfulClient = createClient({
  space: 'w2eolzxrklt3',
  accessToken:
    'b28067de98644aa290348dc8f434aad44582996cee17e23e86344745b03aaae0'
});

// get single entry by ID
export const fetchEntryById = id => {
  return contentfulClient
    .getEntry(id)
    .then(response => response)
    .catch(error =>
      console.log(`Error occurred while fetching Entry: ${error}`)
    );
};

// get asset by ID
export const fetchAssetById = id => {
  return contentfulClient
    .getAsset(id)
    .then(response => response)
    .catch(error =>
      console.log(`Error occurred while fetching Asset: ${error}`)
    );
};

// get all assets of space
export const fetchAllAssets = id => {
  return contentfulClient
    .getAssets()
    .then(response => response)
    .catch(error =>
      console.log(`Error occurred while fetching Assets: ${error}`)
    );
};

// get entries by content type
export const fetchEntriesForContentType = req => {
  return contentfulClient
    .getEntries(req)
    .then(response => response.items)
    .catch(error => {
      console.log(`Error occurred while fetching Entries: ${error}`);
    });
};
