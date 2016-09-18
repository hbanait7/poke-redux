# DustDevil
The focus of dustDevil is to provide a minimal boilerplate for the creation of simple single page React, React Router and Redux apps.  Webpack-dev-server, a simple express server provided by Webpack, is used in development.  A final build script is also provided to package up all necessary code and assets for deployment for either an apache or node servers.


<a href="https://david-dm.org/joellongie/dustDevil">
  <img src="https://david-dm.org/joellongie/dustDevil/status.svg" alt="deps status"/>
</a>&nbsp;
<a href="https://david-dm.org/joellongie/dustDevil#info=devDependencies">
  <img src="https://david-dm.org/joellongie/dustDevil/dev-status.svg" alt="dev deps status"/>
</a>

![dustdevilcover](https://cloud.githubusercontent.com/assets/2322863/18085982/89c3f5cc-6e62-11e6-95b2-40cf05c8c156.png)

This repo is used as a boilerplate for my own SPA personal projects but feel free to fork it and make your own version.  I am currently not taking pull requests on this repo.

## Run DustDevil
- <code>npm install</code> to install dependencies.
- <code>npm start</code> to start in development mode, sourcemaps enabled.
- <code>npm run build</code> creates minified bundle.js and styles.css in /public folder for deployment.


## Todo
- Redux stub
- add testing
- add React Hot Loader 3
- create production pipeline to huroki / digital ocean
- refactor enviorment conditionals

## Deploy to Apache server

For React-Router to work correctly your domain must be configured so that all requests to the app are served from the index.html page.  To accomplish this on an Apache server add an .htaccess file at the root of your domain with the following code:

    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
     </IfModule>

## Deploy to Cloud Application Platform

Server script coming soon...

## Further research
- [Webpack Dev Server API (config)](https://webpack.github.io/docs/webpack-dev-server.html#api)
- [CSS Source maps](https://github.com/jtangelder/sass-loader#source-maps)
- [SASS-loader](https://github.com/jtangelder/sass-loader#source-maps)
- [Webpack UglifyJsPlugin](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
- [Webpack Built in Modules](http://webpack.github.io/docs/list-of-plugins.html)
- [Webpack Built in Modules 2](https://github.com/webpack/docs/wiki/list-of-plugins)
- [Passing environment-dependent variables in webpack](http://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack)
- [cross env package for windows](https://www.npmjs.com/package/cross-env) and [stack overflow](http://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-in-windows)
- [webpack-dev-server historyApiFallback: true](https://github.com/reactjs/react-router/issues/676)
- [webpack cli options](https://webpack.github.io/docs/cli.html)
- [custom bash color for console.log](https://help.ubuntu.com/community/CustomizingBashPrompt)
- [Webpack optimization](https://github.com/webpack/docs/wiki/optimization)


## React-Router Notes
browserHistory (HTML5 pushState "pretty" URLs), hashHistory (hash-based URLs).  To use browserHistory properly server must be configured to use HTML5 Pushstate.  If problems with browserHistory use hashHistory.  With Apache server, create .htaccess using this gist:  https://gist.github.com/joellongie/e6f4a3b5fa98c521782619e487aca15a
