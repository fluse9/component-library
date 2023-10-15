import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Anchor from '.';
import { AnchorProps } from './Anchor.types';

export default {
    title: 'Components/Anchor',
    component: Anchor,
} as Meta;

const Template: StoryFn<AnchorProps> = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Click me',
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
    children: 'Click me',
    innerStyles: {
        fontWeight: 'bold',
    },
};

export const WithCustomColor = Template.bind({});
WithCustomColor.args = {
    children: 'Click me',
    color: 'red',
};

export const WithOnClickHandler = Template.bind({});
WithOnClickHandler.args = {
    children: 'Click me',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
};

export const WithCustomClassName = Template.bind({});
WithCustomClassName.args = {
    children: 'Click me',
    innerAttributes: {
        className: 'custom-anchor',
    },
};
