import { detect } from "detect-browser";
import { useEffect, useState } from "react";
const useGetBrowser = () => {
  const [browser, setBrowser] = useState<string>();

  useEffect(() => {
    const browser = detect();

    if (!browser) return;
    // @ts-ignore
    if (window.navigator.brave !== undefined) return setBrowser("brave");
    setBrowser(browser.name);
  }, []);

  const linkToStore = (browser: string | undefined): string => {
    switch (browser) {
      case "firefox":
        return "https://addons.mozilla.org/en-US/firefox/addon/arconnect/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search";
        break;
      case "brave":
        return "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap";
        break;
      default:
        return "https://chrome.google.com/webstore/detail/arconnect/einnioafmpimabjcddiinlhmijaionap";
    }
  };

  const browserLink = linkToStore(browser);

  return { browser, browserLink };
};

export default useGetBrowser;
