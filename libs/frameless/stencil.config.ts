import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'frameless',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate',
    },
  ],
};
