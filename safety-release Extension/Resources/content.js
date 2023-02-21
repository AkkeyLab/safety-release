// browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//     console.log("Received response: ", response);
// });
//
// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log("Received request: ", request);
// });

// https://developer.apple.com/documentation/safariservices/safari_app_extensions/building_a_safari_app_extension

window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        let radios = document.getElementsByName("resetRatingsSelect:");
        if (radios.length > 0) {
            clearInterval(jsInitCheckTimer);

            for(var i = 0; i < radios.length; i++) {
                console.log("🦌 Disabled `Reset iOS Summary Rating` changes");
                radios[i].disabled = true;
            }
        }
    };
};
