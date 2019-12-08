const productKkwBeauty = () => {
    var store = 'kkwbeauty';
    var available = true;
    var priceStr = $('.js-variant-price').text();
    // var priceStr = $('.P__info .P__price').clone().children().remove().end().text();
    priceStr = priceStr.replace(',', '');
    console.log('priceStr>>>>>>', priceStr);
    var regex = /[+-]?\d+(\.\d+)?/g;
    var price = priceStr.match(regex)[0];
    console.log('price>>>>>', price);
    var currencySymbol = priceStr.replace(price, '');
    currencySymbol = currencySymbol.replace('USD', '');
    currencySymbol = currencySymbol.trim();
    console.log('currencySymbol-Revolve>>>>>>', currencySymbol);
    var title = $('h2[itemprop=name]').text();
    title = title.replace("'", '');
    var size = null;
    var width = null;
    console.log('size>>>>>>', size);
    console.log('width>>>>>>', width);
    var color = $('.js-item-dropdown span.width-100').text() || null;
    console.log('color>>>>>>', color);
    var imageUrl = $('.swiper-slide-active>div>img').attr('src');
    imageUrl = imageUrl.slice(0, imageUrl.indexOf('?'));
    imageUrl = 'https:' + imageUrl;
    var count = $('.js-quantity').val();
    console.log('imageUrl>>>>>', imageUrl);
    console.log('count>>>>>', count);
    price = price * count;
    var isImageAvailable = null;

    return {currencySymbol, price,  title, imageUrl, color, size, count, available, store, width, isImageAvailable};
};
