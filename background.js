/* 
    > Extensions can monitor browser events in the background using the extension's service workers. 

    > Service workers are special JavaScript environments that are loaded to handle events and terminated when they're no longer needed. 

    > We always start by registering the service worker in the manifest.json file.

*/


chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});



const extensions = "https://developer.chrome.com/docs/extensions";
const webstore = "https://developer.chrome.com/docs/webstore";


chrome.action.onClicked.addListener(async (tab) => {

    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {

        // Retrieve the action badge to check the current state, that is, whether the extension is "ON" or "OFF".

        const currentState = await chrome.action.getBadgeText({ tabId: tab.id });

        // The next state will always be the opposite.

        const nextState = currentState === "ON" ? "OFF" : "ON";

        // Next, we set the action badge to the next state.

        await chrome.action.setBadgeText({

            tabId: tab.id,
            text: nextState

        });

        // Finally, we change the actual layout of the page accordingly.

        if (nextState === "ON") {

            // Insert the CSS file when the user turns the extension on.

            await chrome.scripting.insertCSS({
                files: ["focus-mode.css"],
                target: { tabId: tab.id }
            });

        } else if (nextState === "OFF") {

            // Remove the CSS file when the user turns the extension off.

            await chrome.scripting.removeCSS({
                files: ["focus-mode.css"],
                target: { tabId: tab.id }
            });

        }
    }

});




