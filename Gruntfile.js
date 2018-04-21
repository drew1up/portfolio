module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
          engine: 'im',
          sizes: [{
            width: 320,
            suffix: '_small_2x',
            quality: 30
          },{
            width: 640,
            suffix: '_medium_2x'
          },{
            width: 1280,
            suffix: '_large_2x'
          },{
            width: 320, 
            suffix:'_small_1x'
          },{
            width: 640,
            suffix: '_medium_1x'
          },{
            width: 1280,
            suffix: '_large_1x'
          }]
        },

        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
			}
		},

		clean: {
      dev: {
        src: ['images'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
	});

	grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};

