var express = require('express');

function follow_core_values(value) {
  core_values = {
    "focus_on_customer_success": "yes",
    "deliver_excellence": "yes",
    "adapt_continuosly_to_client_priorities": "yes",
    "inspire_a_culture_of_continuos_improvement": "yes",
    "empower_teams_to_achieve_the_unimaginable": "yes"
  }

  return core_values[value]
}

describe('nClouds - Sample App', function() {

  this.timeout(5000);

  it('should follow our core values', function(done) {
    if (follow_core_values("deliver_excellence") == "yes") {
      done();
    } else {
      done(new Error("Not sure what's happened."));
    }
  });


  it('should understand basic mathematical principles', function(done) {
    if (5 == 5) {
      done();
    } else {
      done(new Error("Not sure what's happened."));
    }
  });

  it('should perform basic math', function() {
    if (1+1 != 2) {
      throw new Error("Oh no.");
    }
  });

  it('should perform basic counting', function() {
    if ('abc'.length != 3) {
      throw new Error("Oh no.");
    }
  });

  it('should understand basic truths', function() {
    if (false) {
      throw new Error("Oh no.");
    }
  });

});