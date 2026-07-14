import { CogIcon } from '@sanity/icons/Cog'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { type StructureBuilder, structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const singletonTypes = new Set(['siteSettings'])
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

const singletonListItem = (S: StructureBuilder, typeName: string, title?: string) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export default defineConfig({
  name: 'default',
  title: 'youthacks',

  projectId: '77myuhjy',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems().filter(
              // biome-ignore lint/style/noNonNullAssertion: assume always defined
              (listItem) => !singletonTypes.has(listItem.getId()!),
            ),
            S.divider(),
            singletonListItem(S, 'siteSettings', 'Site Settings').icon(CogIcon),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter singleton types from global “New document” menu
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, only include allowed actions in the document action menu
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})
