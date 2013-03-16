# grunt-robot

> Grunt task for Robot, a Mustache template HTML generator


Allows the generation of HTML templates from a given folder structure.


The Grunt integration is not complete, configuration is done in a separate .json file.

The task comes without tests, haven't that figured out, yet.


````
data/
layouts/
partials/
templates/
pages/
````

These folders are required and cannot be changed.

The location of the folder structure and the rendered output is configurable, see below, "The robot task".

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-robot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-robot');
```

## The "robot" task

### Overview
In your project's Gruntfile, add a section named `robot` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  robot: {}
})
```
Create the following file/folder structure in the project root:

````
robot/
  robot.json
  output/
  source/
    data/
    layouts/
    partials/
    templates/
    pages/
````

The file robot.json
```json
{
  "source": "source/",
  "output": "output/"
}
```
### Options

You can change the name / location of the source and output folders in the robot.json file.

You can change the name / location of the folder robot
```js
grunt.initConfig({
  robot: {
    options: {
      templateRoot: 'relative/path/from/grunt/root'
    }
  },
})
```

## Release History
_(Nothing yet)_
