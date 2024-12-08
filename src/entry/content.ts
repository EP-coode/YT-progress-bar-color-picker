/**
 * This is entry file for for content script
 * wich is injected into opened window
 */

import {
  DEFAULT_COLOR,
  PROGRESS_BAR_COLOR_KEY,
  setYtProgressBarColor,
} from "../common/progressbar";

// Listen to data source changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes[PROGRESS_BAR_COLOR_KEY]) {
    setYtProgressBarColor(changes[PROGRESS_BAR_COLOR_KEY].newValue);
  }
});

(async () => {
  const data = await chrome.storage.local.get();

  // set default color if no value set
  if (!data[PROGRESS_BAR_COLOR_KEY])
    chrome.storage.local.set({ [PROGRESS_BAR_COLOR_KEY]: DEFAULT_COLOR });

  setYtProgressBarColor(data[PROGRESS_BAR_COLOR_KEY]);
})();
