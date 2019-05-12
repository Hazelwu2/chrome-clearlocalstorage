chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, {
        code: "localStorage.clear(); location.reload();"
    });
})