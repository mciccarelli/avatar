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

NOTE: starting next on PORT 8081, instead of 3000 (default), for running on AWS Elastic Beanstalk / EC2.

```bash
"start": "NODE_ENV=production next start -p 8081",
```

## REQUIRED ENV VARIABLES

place the following values inside an .env file at project root (un-tracked by git).

```
CONTENTFUL_SPACE_ID={GET_FROM_CONTENTFUL_DASHBOARD}
CONTENTFUL_ACCESS_TOKEN={GET_FROM_CONTENTFUL_DASHBOARD}
```
