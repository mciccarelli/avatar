const { createClient } = require('contentful');

// setup contentful client
export const contentfulClient = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
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
export const fetchEntriesForContentType = (
  type,
  limit = 10,
  order = '-sys.createdAt'
) => {
  return contentfulClient
    .getEntries({
      content_type: type,
      limit,
      order
    })
    .then(response => response.items)
    .catch(error => {
      console.log(`Error occurred while fetching Entries: ${error}`);
    });
};
