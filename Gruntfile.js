module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {                  // Task
		    dist: {                   // Target
		      options: {              // Target options
		        sassDir: 'assets/styles/sass',
		        cssDir: 'assets/styles/stylesheets',
		        environment: 'production'
		      }
		    },
		    dev: {                    // Another target
		      options: {
		        sassDir: 'assets/styles/sass',
		        cssDir: 'assets/styles/stylesheets/dev'
		      }
		    }
	  	},	
		concat: {
			js: {
                src: [ 
                	'scripts/controllers/*.js',                 	
                	'scripts/filters/*.js',
                	'scripts/services/*.js',
                	'scripts/directives/*.js'
                ],
                dest: 'scripts/prjscript.js',
                
            },
	    },
	    uglify: {
		    my_target: {
		    	options:{
		    		mangle: false
		    	},
			    files: {
			    	'scripts/prjscript.min.js': ['scripts/prjscript.js']
			    }
		    }
		},
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass']
			},
			concat: {
			    files: ['**/*.js', '!**/prjscript.js', '!**/prjscript.min.js'],
			    tasks: ['concat', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['compass','concat','uglify','watch']);
}