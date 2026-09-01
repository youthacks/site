import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '77myuhjy',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'zchutmd96w53urmy0t1j4638',
  },
  schemaExtraction: {
    enabled: true,
    path: 'sanity.schema.json',
  },
  typegen: {
    enabled: true,
    path: '../src/**/*.{ts,tsx,js,jsx}',
    schema: 'sanity.schema.json',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
})
