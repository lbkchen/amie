import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Random } from 'meteor/random';

export const Displays = new Mongo.Collection('displays');

function _generateCode() {
  const codeLength = 8;
  const code = Random.id(codeLength);
  if (Displays.findOne({ code: code })) {
    return _generateCode();
  }
  return code;
}

// FIXME: Add authentication
Meteor.methods({
  'displays.create'(name) {
    check(name, String);

    Displays.insert({
      name,
      createdAt: new Date(),
      code: _generateCode(),
    });
  }
});
