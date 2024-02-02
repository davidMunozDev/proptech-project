import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import matchers from '@testing-library/jest-dom/matchers';
import styledComponents from 'jest-styled-components';

expect.extend(matchers);
expect.extend(styledComponents);

describe('Button', () => {
	it('should render a button with the disabled style', () => {
		render(<Button disabled>Button</Button>);
		const component = screen.getByRole('button', { name: 'Button' });

		expect(component).toBeDisabled();
		expect(component).toHaveStyleRule(
			'background-color',
			'var(--brand-color_4)' //this should be theme color like disabled or primary
		);
	});

	it('should render a button with the default style', () => {
		render(<Button>Button</Button>);
		const component = screen.getByRole('button', { name: 'Button' });

		expect(component).toHaveStyleRule(
			'background-color',
			'var(--brand-color_2)'
		);
	});

	it('should render a button with circle presentation', () => {
		render(<Button circle>Button</Button>);
		const component = screen.getByRole('button', { name: 'Button' });

		expect(component).toHaveStyleRule('border-radius', '50%');
	});

	it('should render button children', () => {
		const component = render(<Button>Text</Button>);

		component.getByText('Text');
	});

	it('should call the function provided', () => {
		const mockHandler = vi.fn();

		const component = render(<Button onClick={mockHandler}>Text</Button>);
		const button = component.getByText('Text');
		fireEvent.click(button);

		expect(mockHandler.mock.calls).toHaveLength(1);
	});
});
