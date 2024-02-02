import { Route, Switch } from 'wouter';

import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import { GlobalProvider } from '@/context/GlobalState';
import HomePage from '@/pages/Home/Home';
import PropertyDetail from '@/pages/PropertyDetail/PropertyDetail';
import { SWRConfig } from 'swr';
import { providerConfig } from '@/config';

function App() {
	return (
		<GlobalProvider>
			<SWRConfig value={providerConfig}>
				<Switch>
					<Route component={HomePage} path='/' />
					<Route component={PropertyDetail} path='/vivienda/:type/:id' />
					<Route component={ErrorPage} path='/:rest*' />
				</Switch>
			</SWRConfig>
		</GlobalProvider>
	);
}

export default App;
