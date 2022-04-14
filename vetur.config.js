module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": false
  },
  projects: [
    './apps/main',
    './apps/chart',
    './packages/model',
    './packages/build-config',
    './packages/common-type',
    './packages/tsconfig',
    './packages/vue2-eslintconfig',
    './packages/style',
  ]
}
