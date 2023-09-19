import React, { ReactNode } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import Anchor from '.';

type AnchorProps = {
    background?: string;
    children?: ReactNode;
    className?: string;
    color?: string;
    innerAttributes?: StyledComponentPropsWithRef<'a'>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
};

export default {
    title: 'components/anchor',
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
    className: 'custom-anchor',
};
