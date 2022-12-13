const insert = (content) => {}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === 'inject') {
            const { content } = request;

            const result = insert(content);

            if (!result) {
                sendResponse({status:'failed'});
            }

            sendResponse({ status: 'success'});
        }
});