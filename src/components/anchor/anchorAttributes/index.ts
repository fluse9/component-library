import PropTypes from 'prop-types';
import React from 'react';

interface AnchorAttributes {
    disabled?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    download?: string | boolean;
    type?: string;
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
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}

const ANCHOR_ATTRIBUTES: Record<keyof AnchorAttributes, any> = {
    disabled: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    type: PropTypes.string,
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

export default ANCHOR_ATTRIBUTES;
