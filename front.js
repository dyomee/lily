'use strict';

// config
var APP = {
  bp: {
    mobile: 767
  }
};

var CFL = {
  UA: {
    raw: function raw() {
      return navigator.userAgent;
    },
    is: function is(_is) {
      var ua = CFL.UA.raw();
      if (_is === 'issp') {
        return CFL.UA.isSp();
      }
    },
    isSp: function isSp() {
      var ua = CFL.UA.raw();
      return ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0;
    },
    isTablet: function isTablet() {
      var ua = CFL.UA.raw();
      if (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) { } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        return true;
      }
      return false;
    },
    isEdge: function isEdge() {
      return this.raw().indexOf('Edge') != -1;
    },
    isIE: function isIE() {
      var ua = CFL.UA.raw();
      return this.raw().indexOf('Trident') != -1;
    }
  },
  Device: {
    isTouch: function isTouch() {
      return 'ontouchend' in document;
    }
  }
};

var isMobile = function isMobile() {
  return window.matchMedia('(max-width: ' + APP.bp.mobile + 'px)').matches;
};