# Avatar

brochure-style website built with Contentful, Next.js + styled-components.

## DEV

install it and run:

```bash
npm install
npm run dev
```

## PRODUCTION

```bash
npm install
npm run build
npm run start

// pm2 start, etc..
```

## REQUIRED ENV VARIABLES

place the following values inside an .env file at project root (un-tracked by git).

```
CONTENTFUL_SPACE_ID={GET_FROM_CONTENTFUL_DASHBOARD}
CONTENTFUL_ACCESS_TOKEN={GET_FROM_CONTENTFUL_DASHBOARD}
```
