import React from 'react';
import renderer from 'react-test-renderer';
import Tag from './Tag';

describe('Tag', () => {
  it('renders correctly', () => {
    const tag = renderer.create(<Tag title="title" />).toJSON();
    expect(tag).toMatchSnapshot();
  });
});

describe('Tag', () => {
  it('renders correctly next function', () => {
    const tag = renderer.create(<Tag title="title" />).toJSON();
    expect(tag).toMatchInlineSnapshot();
  });
});
