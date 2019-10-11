class TotalPrice {
  constructor(wishList, $element) {
    this.wishList = wishList;
    this.$element = $element;
  }

  update() {
    this.$element.html(this.wishList.totalPrice());
  }

  notify() {
    this.update();
  }
}
