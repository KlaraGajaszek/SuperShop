import React from 'react';
import 'jest-styled-components';

import { screen, render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Tag from '../Tag';

describe('Tag', () => {
  it('render without crash', () => {
    render(<Tag title="text test" />);
    const tag = screen.getByText('text test');
    expect(tag).toBeInTheDocument();
  });
});
