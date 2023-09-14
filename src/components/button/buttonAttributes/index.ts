import PropTypes from 'prop-types';
import React from 'react';

interface ButtonAttributes {
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    autoFocus?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    name?: string;
    value?: string;
    tabIndex?: number;
    accessKey?: string;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    title?: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaExpanded?: boolean;
    onClick?: () => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const buttonAttributes: Record<keyof ButtonAttributes, any> = {
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    autoFocus: PropTypes.bool,
    form: PropTypes.string,
    formAction: PropTypes.string,
    formEncType: PropTypes.string,
    formMethod: PropTypes.string,
    formNoValidate: PropTypes.bool,
    formTarget: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    tabIndex: PropTypes.number,
    accessKey: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
    ariaLabel: PropTypes.string,
    ariaDescribedBy: PropTypes.string,
    ariaExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export default buttonAttributes;
