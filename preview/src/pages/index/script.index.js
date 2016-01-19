'use strict';

module.exports = {
  template: require('raw!./view.index.html'),
  data: {
    msg: 'aaa'
  },
  methods: {
    myalert: function() {
      alert('aaa');
    },
    tapped: function() {
      alert('tapped');
    },
    panned: function(args) {
      console.log('panned', args.deltaX, args.deltaY);
    },
    notify: function() {
      for (var i = 0; i < 2; i++) {
        quasar.notify({html: 'dfsdfhsdjkfhskdfs', icon: 'alarm', timeout: 0});
        if (i == 1) {
          quasar.notify({
            html: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            icon: 'alarm', timeout: 0});
        }
      }
      _.forEach(['success', 'error', 'info', 'warning'], function(type) {
        quasar.notify[type]({html: _.capitalize(type) + ' message', timeout: 0});
      });
    }
  },
  ready: function() {
    console.log('Page index ready');
  },
  destroyed: function() {
    console.log('Page index destroyed');
  }
};