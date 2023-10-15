import React, { ReactNode } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
    CSSObject,
    FlattenSimpleInterpolation,
    StyledComponentPropsWithRef,
} from 'styled-components';
import Button from '.';

type ButtonProps = {
    background?: string;
    children?: ReactNode;
    className?: string;
    color?: string;
    innerAttributes?: StyledComponentPropsWithRef<'button'>;
    innerStyles?: CSSObject | FlattenSimpleInterpolation;
};

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    background: '#4665AE',
    children: 'Primary Button',
    className: 'rounded',
    color: '#FFFFFF',
    innerAttributes: {
        onClick: () => console.log('test'),
    },
    innerStyles: {
        boxShadow: '0.125rem #C8C8C9',
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
    background: '#F8F8F8',
    children: 'Secondary Button',
    color: '#333',
    innerStyles: {
        border: '0.125rem solid #333',
    },
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled Button',
    innerAttributes: {
        disabled: true,
    },
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
    children: 'Custom Styles',
    innerStyles: {
        background: '#FF9800',
        color: '#FFFFFF',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        boxShadow: '0.125rem #C8C8C9',
    },
};
