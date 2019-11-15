// Link to bigcommerce wish list page.

const goFavorite = () => {

    chrome.storage.local.get(['favCartDetails'], function (result) {
        var favorites = JSON.parse(result.favCartDetails);
        chrome.runtime.sendMessage({
            greeting: 'sendShoppingCartDetails',
            data: favorites
        }, function (response) {
        });
        chrome.storage.local.get(['accessToken'], function (result) {
            var accessToken = 'Bearer ' + result.accessToken;
            $.ajax({
                // url: 'https://cors-anywhere.herokuapp.com/https://a657b664.ngrok.io/api/favorite-url',
                url: 'https://cors-anywhere.herokuapp.com/https://ex.travelcast.us/api/favorite-url',
                type: 'get',
                dataType: 'json',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', accessToken);
                },
                success: function (data) {
                    if (data) {
                        window.open(data.status);
                    }
                }
            });
        });
    });
};
