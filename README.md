<p align=center>
  <img align=center src="/public/svg/Meditate.svg" width=256 height=256 />
  <h1 align=center>Meditate</h1>
</p>
<p align=center>
  <img src="https://img.shields.io/github/checks-status/RiceCX/Meditate/master?style=for-the-badge" />
  <a href="https://github.com/microsoft/Typescript">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/RiceCX/Meditate?style=for-the-badge">
  </a>
  <a href="https://github.com/RiceCX/Meditate/graphs/contributors">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/RiceCX/Meditate?style=for-the-badge">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/RiceCX/Meditate?style=for-the-badge">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/RiceCX/Meditate?style=for-the-badge">
  <a href="https://discord.gg/qvKEPrgTEt">
    <img alt="Discord" src="https://img.shields.io/discord/876733036471914536?color=%2313CDD1&style=for-the-badge">
  </a>
<a href="https://wakatime.com/badge/user/26e59af8-908b-4e22-beb7-3ee7031c19d6/project/04e33749-fb50-4f7d-93d2-b2792cfb7378"><img src="https://wakatime.com/badge/user/26e59af8-908b-4e22-beb7-3ee7031c19d6/project/04e33749-fb50-4f7d-93d2-b2792cfb7378.svg?style=for-the-badge" alt="wakatime"></a>
</p>
<p align=center>A modern meditation web app for you to meditate on your own terms. Track your progress and share your thoughts with others. </p>

## Table of Contents

- [Tech stack 📚](#tech-stack---)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Deployment](#deployment)
- [Contributions](#contributions)
- [License](#license)

## Tech stack 📚

This website built with [Next.js]() as the framework alongside multiple libraries.

### Frontend

- React
- TailwindCSS
- Next.js

### Backend

- Prisma
- PostgreSQL
- Vercel (Docker for local development)

## Deployment

To deploy this web app, you can either use Vercel:

> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRiceCX%2FMeditate&env=POSTGRES_USER,POSTGRES_PASSWORD,POSTGRES_DB,DB_HOST,DB_PORT,DB_SCHEMA&envDescription=Postgres%20authentication)

Or use [Docker]() and [docker-compose]() once you clone the website to your local computer.

If you are using docker, make sure you do `yarn install` in order to install all of the dependencies needed.
Afterwards you are now able to run `yarn docker:db` and `yarn dev` or `yarn build` & `yarn start`.

## Contributions

Feel free to contribute! Contributors are welcome to make adjustments or add features that seem cool! If you feel appriciative or like my work. Please consider donating! It helps a ton

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/M4M026ALH)

## License

Copyright (c) 2022 RiceCX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
