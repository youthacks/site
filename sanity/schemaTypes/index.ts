import contentBlocks from "./contentBlock";
import event from "./event";
import footer from "./footer";
import navbar from "./navbar";
import page from "./page";
import pageBuilder from "./pageBuilder";
import seo from "./seo";
import siteSettings from "./siteSettings";
import sponsor from "./sponsor";

export const schemaTypes = [
  sponsor,
  event,
  page,
  siteSettings,
  navbar,
  footer,
  seo,

  ...pageBuilder,
  ...contentBlocks,
];
