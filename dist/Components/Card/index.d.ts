import { FC } from 'react';
import { CardProps } from './Card';
/**
 * Define the Card component, a functional component that renders a styled card.
 * It accepts various props for customization and uses a state variable for inner attributes.
 *
 * @param background - Background color for the card.
 * @param innerAttributes - Inner HTML attributes for the card.
 * @param innerStyles - Inner CSS styles for the card.
 * @param children - Child elements to be rendered inside the card.
 *
 * @returns {FC} - The rendered Card component.
 */
declare const Card: FC<CardProps>;
export default Card;
