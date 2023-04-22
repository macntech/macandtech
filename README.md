## macandtech.com Ghost Theme

Ghost Theme for my personal blog `macandtech.com`. You can use this theme under GPL for your own projects. 

### :bulb: Features
- [x] Node.js modules
- [x] Responsive Bootstrap v5 Design
- [x] Dark Mode
- [x] Font Awesome Icons
- [x] Code Highlighter and Clipboard with PRISM JS
- [x] Easy to customize SASS

### :wrench: Development

Theme based on Ghost v5. You need Node>v16 and npm>v8. The theme is based on npm installation and requires npm for development and deployment.

Clone repo locally and install deps with
```bash
npm install
```

Compile SASS before commit with:
```bash
npm run sass
```

This will bundle the sass files into one css file. The bootstrap files are linked via npm so there are no local copies of bootstrap sass required and you could update the bootstrap version by updating the node module. 

Theme has an deployment `workflow` with Github actions so that you can auto deploy any changes directly into your Ghost installation. 

Routes need to be manually updated based on the `routes.yaml`



