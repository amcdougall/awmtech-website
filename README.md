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
