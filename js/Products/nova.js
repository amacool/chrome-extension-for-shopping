const productNova = () => {
    var store = 'fashionnova';
    var available = true;
    var count = 1;
    var width = null;
    var isImageAvailable = null;
    var priceStr = $('[itemprop = offers] .deal span span').text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Nova>>>>>>', currencySymbol);
    var title = $.trim($('[itemprop = name]').text());
    title = title.replace("'", '');
    var sizeTemp = $('.single-option-selector option:selected').text();
    var size = sizeTemp ? sizeTemp : '';
    console.log('size>>>>>>', size);
    var colorExist = $('a[aria-selected=false]').attr('title');
    var color = colorExist ? ($('a[aria-selected=true]').attr('title')) : null;
    var imageUrl = $('.slick-current .productImage img').attr('src');
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;
    console.log('imageUrl', imageUrl);

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
