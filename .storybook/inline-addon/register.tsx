import { addons, types } from '@storybook/addons';
import { Icons, IconButton } from '@storybook/components';
import { styled } from '@storybook/theming';
import React from 'react';

import { ADDON_ID, TOOL_ID } from './constants';

export type Params = {
  themes: Record<string, string>;
  theme?: string;
  defaultTheme?: string;
};

const IconButtonWithLabel = styled(IconButton)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
}));

const ActiveViewportLabel = styled.div(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  padding: 10,
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '1',
  height: 40,
  border: 'none',
  borderTop: '3px solid transparent',
  borderBottom: '3px solid transparent',
  background: 'transparent',
}));

const Dropdown = () => {
  return (
    <IconButtonWithLabel>
        <Icons icon="paintbrush" />
        <ActiveViewportLabel>Inline addon</ActiveViewportLabel>
    </IconButtonWithLabel>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: 'Inline Addon',
    type: types.TOOL,
    match: ({ viewMode }) => (viewMode ? ['story', 'docs'].includes(viewMode) : false),
    render: () => <Dropdown />,
  });
});
