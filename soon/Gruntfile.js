module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
			      style: 'compressed',
			      compass: true
			    },
				files: {
					'stylesheets/screen.css' : 'sass/screen.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','cssmin']
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'stylesheets',
		      //src: ['*.css', '!*.min.css'],
		      src: ['screen.css'],
		      dest: 'stylesheets/mini',
		      ext: '.min.css'
		    }]
		  }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}