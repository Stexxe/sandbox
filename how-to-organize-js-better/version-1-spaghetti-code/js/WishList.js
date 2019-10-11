class WishList {
  constructor($root) {
    this.$root = $root;
    this.list = [];
    this.subscribers = [];
  }

  addWish(wish) {
    this.list.push(wish);
    wish.appendTo(this.$root);
    this.notifySubscribers();

    wish.onRemove(() => {
      this.list.splice(this.list.indexOf(wish), 1);
      this.notifySubscribers();
    });
  }

  notifySubscribers() {
    this.subscribers.forEach(sub => sub.notify());
  }

  totalPrice() {
    return this.list.reduce((res, w) => res + w.price(), 0);
  }

  subscribe(sub) {
    this.subscribers.push(sub);
  }
}
