(function ($) {
  const wishList = new WishList($('.wish-list .wish-list-items'));
  const totalPrice = new TotalPrice(wishList, $('.wish-list .wish-list-sum'));
  wishList.subscribe(totalPrice);

  $('.wish-list .wish-add').on('click', function() {
    wishList.addWish(
      new Wish(
        $('.wish-list input[name="name"]'), $('.wish-list input[name="price"]')
      )
    );
  });
}(jQuery));
