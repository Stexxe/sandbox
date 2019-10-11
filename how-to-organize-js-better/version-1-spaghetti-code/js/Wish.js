class Wish {
  constructor($name, $price) {
    this.$name = $name;
    this.$price = $price;
    this._onRemove = () => {};
  }

  name() {
    return this.$name.val();
  }

  price() {
    return this.$price.val() ? parseFloat(this.$price.val()) : 0;
  }

  appendTo($parent) {
    $parent.append(this.asJquery());
  }

  asJquery() {
    const $el = $(`<li>${this.name()} - ${this.price()} <a data-price="${this.price()}" href="#">(remove)</a></li>`);
    const self = this;

    $el.on('click', function(e) {
      e.preventDefault();
      $(this).detach();
      self._onRemove();
    });

    return $el;
  }

  onRemove(fn) {
    this._onRemove = fn;
  }
}
