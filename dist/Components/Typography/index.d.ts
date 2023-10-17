import { FC } from 'react';
import { TypographyProps } from './Typography';
/**
 * Define the Typography component, a functional component that renders a styled body of text.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param variant - The variant for the typography.
 * @param color - Text color for the typography.
 * @param innerAttributes - Inner HTML attributes for the typography.
 * @param innerStyles - Inner CSS styles for the typography.
 * @param children - Child elements to be rendered inside the typography.
 *
 * @returns {FC} - The rendered Typography functional component.
 */
declare const Typography: FC<TypographyProps>;
export default Typography;
