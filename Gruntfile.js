'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				options: {
					cleancss: true
				},
				files: [{
					expand: true,
					cwd: 'less/',
					src: ['*.less'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		watch: {
			options: {
				interrupt: true,
				livereload: true,
				preserveComments: 'some'
			},
			styles: {
				files: [
					'less/**/*.less'
				],
				tasks: ['newer:less']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-newer');

	// Register tasks
	grunt.registerTask('default', [
		'less'
	]);
	grunt.registerTask('dev', [
		'watch'
	]);

};
