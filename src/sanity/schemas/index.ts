import event from "./event";
import footer from "./footer";
import page from "./page";
import pageBuilder from "./pageBuilder";
import siteSettings from "./siteSettings";
import sponsor from "./sponsor";

export const schemaTypes = [
  sponsor,
  event,
  page,
  siteSettings,
  footer,
  ...pageBuilder,
];
