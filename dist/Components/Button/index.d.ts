import { FC } from 'react';
import { ButtonProps } from './Button';
/**
 * Define the Button component, a functional component that renders a styled button.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param background - Background color for the button.
 * @param color - Text color for the button.
 * @param innerAttributes - Inner HTML attributes for the button.
 * @param innerStyles - Inner CSS styles for the button.
 * @param children - Child elements to be rendered inside the button.
 *
 * @returns {FC} - The rendered Button functional component.
 */
declare const Button: FC<ButtonProps>;
export default Button;
