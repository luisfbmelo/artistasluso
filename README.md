# AngularJS Base
> version 1.0.0

This repo serves as a base for any project that uses AngularjS.

##Development environment

To setup the development environment, it is necessary to install:
- [Node and npm](http://nodejs.org/)
- Ruby
- Grunt
- Sass
- Compass

After installing these requirements, run the following commands in the website's folder:
```
$ npm install
$ npm install -g bower
```

Th first command will install all dependencies and the second will install Bower.

### Getting started

```
$ grunt
```

This will compile all SCSS files with Compass, minify CSS and concatenate and uglify the Javascript.
With this, the system will stay in watch for any change in tese files and execute the corresponding tasks.

##License
The project is licensed under **The MIT License (MIT)**, see the LICENSE file for more details.