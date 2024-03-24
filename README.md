![ReactAct](src/images/logo.png)

ReactAct is a single page application to collect and show your recent activities in the timeline.
ReactAct can be hosted by GitHub Pages because it only uses client side code.

### Services

- [x] Facebook
- [x] Instagram
- [x] GitHub

[Demo](http://uetamasamichi.com/ReactAct)

## SetUp

### Install node.js packages
```
npm install -g webpack gulp
npm install
```

### Set up your social accounts
#### Facebook
1. Create your facebook app.
2. Get your access token from graph api explorer.
> Important! Allow only user_posts permission.
3. Add your access token in config.js.

### Instagram
1. Create your instagram app.
2. Get your access token.
> Important! Allow only basic scope permission.
3. Add your access token in config.js.

### GitHub
1. Add your username in config.js.

## Build ReactAct

`npm run build`

## Serve ReactAct

`npm run serve`

## Deploy ReactAct
Create a repository on GitHub and create GitHub Pages.

#Creator

- [Masamichi Ueta](http://masamichiueta.github.io)
- Twitter: [@micchyboy](https://twitter.com/masamichiueta)
- GitHub:[@micchyboy1023](https://github.com/masamichiueta)

#License
MIT License
