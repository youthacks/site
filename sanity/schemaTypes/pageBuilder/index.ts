import {defineType} from 'sanity'
import hero from './hero'
import homeHero from './homeHero'
import content from './content'
import homeMission from './homeMission'
import homeImpact from './homeImpact'
import homeEvents from './homeEvents'
import homeContent from './homeContent'
import events from './events'
import homeSupport from './homeSupport'
import team from './team'

const pageBuilder = defineType({
  type: 'array',
  name: 'pageBuilder',
  of: [
    {type: 'hero'},
    {type: 'events'},
    {type: 'team'},
    {type: 'content'},
    {type: 'homeHero'},
    {type: 'homeMission'},
    {type: 'homeImpact'},
    {type: 'homeEvents'},
    {type: 'homeSupport'},
    {type: 'homeContent'},
  ],
})

export default [
  hero,
  events,
  team,
  content,
  homeHero,
  homeMission,
  homeImpact,
  homeEvents,
  homeSupport,
  homeContent,
  pageBuilder,
]
