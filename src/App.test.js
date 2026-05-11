// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuestModel title', () => {
    render(<App />);
    const titleElement = screen.getByText(/QuestModel/i);
    expect(titleElement).toBeInTheDocument();
});
