'use strict';
var expect = require('chai').expect;

describe('The Tenant resource usage', function() {
  var Tenant;

  it('does not blow when loading', function() {
    expect(function() {
      Tenant = require('./../../../lib/api-client/resources/tenant');
    }).not.to.throw();
  });

  it('has a `path` static property', function() {
    expect(Tenant.path).to.eql('tenant');
  });

  it('has a `create` method', function() {
    expect(Tenant.create).to.be.a('function');
  });

  it('has a `count` method', function() {
    expect(Tenant.count).to.be.a('function');
  });

  it('has a `get` method', function() {
    expect(Tenant.get).to.be.a('function');
  });

  it('has a `list` method', function() {
    expect(Tenant.list).to.be.a('function');
  });

  it('has a `createUserMember` method', function() {
    expect(Tenant.createUserMember).to.be.a('function');
  });

  it('has a `createGroupMember` method', function() {
    expect(Tenant.createGroupMember).to.be.a('function');
  });

  it('has a `deleteUserMember` method', function() {
    expect(Tenant.deleteUserMember).to.be.a('function');
  });

  it('has a `deleteGroupMember` method', function() {
    expect(Tenant.deleteGroupMember).to.be.a('function');
  });

  it('has a `update` method', function() {
    expect(Tenant.update).to.be.a('function');
  });

  it('has a `delete` method', function() {
    expect(Tenant.delete).to.be.a('function');
  });
});
