import { BASE_URL, HEADERS, PROPERTIES } from '@/_mocks_/property-list';
import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from 'vitest';
import {
	fireEvent,
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';

import { GlobalProvider } from '@/context/GlobalState';
import Home from '@/pages/Home/Home';
import { SWRConfig } from 'swr';
import { providerConfig } from '@/config';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
	rest.get(BASE_URL, (req, res, ctx) => {
		return res(ctx.delay(100), ctx.set(HEADERS), ctx.json(PROPERTIES));
	})
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Home', () => {
	beforeEach(async () => {
		customRender(<Home />, cacheProvider);
	});

	it('is rendering all components correctly with data', async () => {
		await waitForElementToBeRemoved(() => screen.getByText('loading...'));

		const cards = screen.getAllByRole('article');
		const limit = screen.getByText('Limit:');
		const sorterSelector = screen.getByRole('option', { name: 'Chalet' });
		const sorterButton = screen.getByRole('button', {
			name: 'Precios más altos',
		});
		const pagination = screen.getByRole('button', {
			name: 'next',
		});

		expect(cards.length).toBe(PROPERTIES.length);
		expect(limit).toBeInTheDocument();
		expect(sorterSelector).toBeInTheDocument();
		expect(sorterButton).toBeInTheDocument();
		expect(pagination).toBeInTheDocument();
	});

	it('checking that sort the elements correctly', async () => {
		const sortButton = screen.getByRole('button', {
			name: 'Precios más altos',
		});

		fireEvent.click(sortButton);

		const articles = await screen.getAllByRole('article');
		const result = articles[0].innerHTML.includes('830.000');

		expect(result).toBeTruthy;
	});

	it('rendering expected message without data ', async () => {
		customRender(<Home />, providerWithoutCache);

		expect(screen.getByText('No data to show'));
	});
});

//this could be in test utils
const cacheProvider = ({ children }) => {
	return (
		<SWRConfig value={providerConfig}>
			<GlobalProvider>{children}</GlobalProvider>
		</SWRConfig>
	);
};

const providerWithoutCache = ({ children }) => {
	return (
		<SWRConfig value={{ provider: () => new Map() }}>
			<GlobalProvider>{children}</GlobalProvider>
		</SWRConfig>
	);
};
const customRender = (ui, provider) => render(ui, { wrapper: provider });
