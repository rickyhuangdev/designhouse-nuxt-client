// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  //look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /_base-[\w-]+\.vue$/
)
// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const fn = fileName
    .split('/').pop().replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(fn))
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
