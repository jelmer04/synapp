function lookup(ean, result) {
  var url = "https://eandata.com/feed/?v=3&keycode=9323935E5A75F9BD&mode=json&find=" + ean;
  result.html("");
  $.getJSON(url, function(response) {
    console.log(response);
    if (response.status.message == "Product not found") {
      product = "Product not found";
    } else {
      product = response.product.attributes.product;
    }
    console.log(product);
    result.html('<a href="https://wlp.slimmingworld.co.uk/Syn/SynSearch?isSynsOnline=False&CurrentSynSearchType=Keyword&KeywordsSearchText=' + encodeURI(product) +'">' + product + '</a');
  });
}
