import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

test('renders button with correct label', () => {
    const { getByText } = render(
        <Button label="Test Button" onClick={() => {}} />
    );
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <Button label="Test Button" onClick={onClickMock} />
    );
    const buttonElement = getByText('Test Button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
});
