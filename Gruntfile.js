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
			    },
			    options: {
		            preserveComments: false
		        }
		    }
		},
		watch: {			
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass'],
	            options: {
	              spawn: false,
	            },
			},
			scripts: {
			    files: ['scripts/**/*js'],
			    tasks: ['concat','uglify'],
			    options: {
	              spawn: false,
	            },
			},		

		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}