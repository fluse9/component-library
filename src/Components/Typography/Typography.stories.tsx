import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Typography from '.';
import { TypographyProps } from './Typography.types';
import { Variant } from '../../Types';

export default {
    title: 'Components/Typography',
    component: Typography,
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Text',
};

export const Bold = Template.bind({});
Bold.args = {
    color: '#000000',
    children: 'Bold Text',
    innerAttributes: { className: 'bold' },
};

export const Italic = Template.bind({});
Italic.args = {
    color: '#000000',
    children: 'Italic Text',
    innerAttributes: { className: 'italic' },
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    variant: Variant.p,
    color: '#000000',
    children: 'Paragraph',
};

export const Heading6 = Template.bind({});
Heading6.args = {
    variant: Variant.h6,
    color: '#000000',
    children: 'Heading 6',
};

export const Heading5 = Template.bind({});
Heading5.args = {
    variant: Variant.h5,
    color: '#000000',
    children: 'Heading 5',
};

export const Heading4 = Template.bind({});
Heading4.args = {
    variant: Variant.h4,
    color: '#000000',
    children: 'Heading 4',
};

export const Heading3 = Template.bind({});
Heading3.args = {
    variant: Variant.h3,
    color: '#000000',
    children: 'Heading 3',
};

export const Heading2 = Template.bind({});
Heading2.args = {
    variant: Variant.h2,
    color: '#000000',
    children: 'Heading 2',
};

export const Heading1 = Template.bind({});
Heading1.args = {
    variant: Variant.h1,
    color: '#000000',
    children: 'Heading 1',
};

export const Custom = Template.bind({});
Custom.args = {
    children: 'Custom Text',
    variant: Variant.h2,
    color: '#FF5733',
    innerAttributes: { className: 'italic' },
    innerStyles: { fontSize: '20px' },
};
