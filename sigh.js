/*globals babel, debounce, glob, merge, write*/
/* Sigh's "actions" are defined as globals... */

module.exports = function (pipelines) {
  pipelines['build-source'] = [
    merge([glob({basePath: 'lib'}, '*.js'), babel({modules: 'common'})]),
    debounce(500),
    write('dist/')
  ];

  pipelines.alias.build = ['build-source'];
};
