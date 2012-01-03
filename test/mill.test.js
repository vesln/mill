/**
 * mill - Readable milliseconds for you and other humans.
 * 
 * Author: Veselin Todorov <hi@vesln.com>
 * Licensed under the MIT License.
 */

/**
 * Dependencies.
 */
var mill = require('../');
var Time = mill;

describe('mill', function() {
  it('should export methods', function() {
    var expected = {
      year: 'years',
      years: 'years',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
    };
    
    mill.methods.should.eql(expected);
  });
  
  it('should have version', function() {
    mill.version.should.be.ok;
  });
  
  it('should export Time', function() {
    (typeof mill).should.eql('function');
  });
  
  it('should define properties to Number', function() {
    (1).second.should.eql(1000);
    (1).seconds.should.eql(1000);
    
    (1).minute.should.eql(1000 * 60);
    (1).minutes.should.eql(1000 * 60);
    
    (1).hour.should.eql(1000 * 60 * 60);
    (1).hours.should.eql(1000 * 60 * 60);
    
    (1).day.should.eql(1000 * 60 * 60 * 24);
    (1).days.should.eql(1000 * 60 * 60 * 24);
    
    (1).week.should.eql(1000 * 60 * 60 * 24 * 7);
    (1).weeks.should.eql(1000 * 60 * 60 * 24 * 7);
    
    (1).month.should.eql(1000 * 60 * 60 * 24 * 30.4368499);
    (1).months.should.eql(1000 * 60 * 60 * 24 * 30.4368499);
    
    (1).year.should.eql(1000 * 60 * 60 * 24 * 365.242199);
    (1).years.should.eql(1000 * 60 * 60 * 24 * 365.242199);
  });
  
  describe('Time', function() {
    it('should cache the passed time', function() {
      var time = new Time(5);
      time.number.should.eql(5);
    });
    
    describe('seconds', function() {
      it('should convert seconds to milliseconds', function() {
        var time = new Time(2);
        time.seconds().should.eql(2 * 1000);
      });
    });
    
    describe('minutes', function() {
      it('should convert minutes to milliseconds', function() {
        var time = new Time(2);
        time.minutes().should.eql(2 * 1000 * 60);
      });
    });
    
    describe('hours', function() {
      it('should convert hours to milliseconds', function() {
        var time = new Time(2);
        time.hours().should.eql(2 * 1000 * 60 * 60);
      });
    });
    
    describe('days', function() {
      it('should convert days to milliseconds', function() {
        var time = new Time(2);
        time.days().should.eql(2 * 1000 * 60 * 60 * 24);
      });
    });
    
    describe('weeks', function() {
      it('should convert weeks to milliseconds', function() {
        var time = new Time(2);
        time.weeks().should.eql(2 * 1000 * 60 * 60 * 24 * 7);
      });
    });
    
    describe('months', function() {
      it('should convert months to milliseconds', function() {
        var time = new Time(2);
        time.months().should.eql(2 * 1000 * 60 * 60 * 24 * 30.4368499);
      });
    });
    
    describe('years', function() {
      it('should convert years to milliseconds', function() {
        var time = new Time(2);
        time.years().should.eql(2 * 1000 * 60 * 60 * 24 * 365.242199);
      });
    });
  });
});