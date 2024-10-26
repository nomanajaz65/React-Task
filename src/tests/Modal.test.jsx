import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../components/Modal';

test('renders modal content when open', () => {
  render(<Modal isOpen={true} onClose={() => {}} />);
  expect(screen.getByText(/modal title/i)).toBeInTheDocument();
});

test('does not render modal when closed', () => {
  render(<Modal isOpen={false} onClose={() => {}} />);
  expect(screen.queryByText(/modal title/i)).not.toBeInTheDocument();
});
