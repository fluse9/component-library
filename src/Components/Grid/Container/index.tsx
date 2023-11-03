import React, { FC } from 'react';
import styled from 'styled-components';
import {
    ContainerProps,
    StyledContainerAttributes,
    StyledContainerProps,
} from './Container';

const StyledContainer = styled.div.attrs<StyledContainerProps>(
    ({ innerAttributes }): StyledContainerAttributes => ({
        ...innerAttributes,
    })
)<StyledContainerProps>`
    display: flex;
    flex-flow: ${({ direction }) => direction} ${({ wrap }) => wrap};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    gap: ${({ spacing }) => 4 * (spacing ?? 0)}px;
    ${({ innerStyles }) => innerStyles};
`;

/**
 * Define the Container component, a functional component that renders a styled container.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param innerAttributes - Inner HTML attributes for the container.
 * @param innerStyles - Inner CSS styles for the container.
 * @param children - Child elements to be rendered inside the container.
 *
 * @returns {FC} - The rendered Container component.
 */
const Container: FC<ContainerProps> = ({
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'center',
    alignItems = 'center',
    spacing = 0,
    children = null,
    innerAttributes = {},
    innerStyles = {},
}) => (
    <StyledContainer
        direction={direction}
        wrap={wrap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        spacing={spacing}
        innerAttributes={innerAttributes}
        innerStyles={innerStyles}
    >
        {children}
    </StyledContainer>
);

export default Container;
