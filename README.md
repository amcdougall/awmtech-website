AWM Technologies Website code

Deploying this into Pages in GitHub
  Once the code is in Github - pull code into IntelliJ. 
  Next need to do npm install to make sure that any new libs are pulled into IntelliJ for building.
  Finally run npm run deploy - this will build and deploy the code to gh-pages branch in Github.

  Next check the Github Pages page to see if the settings are still good. 
  Next check the Web-Page out and see if it has launched.

package.json file
  Need to add homepage to the first line: "homepage": "https://amcdougall.github.io/awmtech-website"
  Next make sure predeploy and deploy is setup as well under scripts - "predeploy": "vite preview", "deploy": "gh-pages -d dist"
  Also under devDependencies make sure that gh-pages - "gh-pages": "^6.3.0"



If getting stuck on vite versions make sure to run npm install to get that worked out.

package.json - example file

{
  "homepage": "https://amcdougall.github.io/awmtech-website",
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.1.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "gh-pages": "^6.3.0",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

