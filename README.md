# my-yt

> MYGA - make *you*tube **great** again

A clean and minimal youtube frontend, without all the ads and whistles.
Supported by yt-dlp, and optionally your local AI model, to make your youtube experience local, mindful, succint and ad free.

## Features

- Channel management/Subscriptions
- Download videos from YouTube, using `yt-dlp` behind the scenes
- Summarize video content using your local AI model
- Ignore videos you don't want to watch
- Play videos in background
- Offline media playback
- No dependencies (except for `nano-spawn`), HTML/CSS only, no JS frameworks on client/server side
- Host it in your home network to playback videos on all your devices

Application runs on http://localhost:3000 

## Installation (node.js)

```bash
git clone https://github.com/christian-fei/my-yt.git
cd my-yt
npm i
# install yt-dlp, please see https://github.com/yt-dlp/yt-dlp

npm start
```

## Installation (docker)

```bash
git clone https://github.com/christian-fei/my-yt.git
cd my-yt
docker compose up --build -d
```

Download the project while you can before I get striked with a DMCA takedown request