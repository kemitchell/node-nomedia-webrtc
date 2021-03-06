// Generated by CoffeeScript 1.6.3
(function() {
  var NoMediaStream, uuid;

  uuid = require('uuid');

  NoMediaStream = (function() {
    function NoMediaStream(constraints) {
      this.constraints = constraints;
      this.id = new uuid();
    }

    NoMediaStream.prototype.get = function(success, failure) {
      return success(this);
    };

    NoMediaStream.prototype.setRemoteSession = function(session, success, failure) {
      return success();
    };

    NoMediaStream.prototype.stop = function() {};

    NoMediaStream.prototype.description = function() {
      return this.constraints.description;
    };

    return NoMediaStream;

  })();

  module.exports = {
    getUserMedia: function(constraints, success, failure) {
      var media;
      media = new NoMediaStream(constraints);
      return media.get(success, failure);
    },
    RTCPeerConnection: require('rtc-peer-connection'),
    RTCSessionDescription: require('rtc-session-description')
  };

}).call(this);

/*
//@ sourceMappingURL=index.map
*/
