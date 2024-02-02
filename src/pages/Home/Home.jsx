import { CARDS_PER_PAGE } from '@/config';
import ItemsLimit from '@/components/ItemsLimit/ItemsLimit';
import PageLayout from '@/components/Layout/PageLayout';
import Pagination from '@/components/Pagination/Pagination';
import PropertiesContainer from './PropertiesContainer';
import SortersList from '@/components/SortersList/SortersList';
import { sortByStrategy } from '@/utils/Array';
import { usePropertyList } from '@/hooks/usePropertyList';
import { useSorters } from '@/hooks/useSorters';
import { useState } from 'react';

export default function Home() {
	const [currentPage, setPage] = useState(1);
	const [limit, setLimit] = useState(CARDS_PER_PAGE);

	const { selectedSort } = useSorters();

	const { isLoading, isEmpty, error, apiPagination, response, totalItems } =
		usePropertyList({
			currentPage,
			limit,
		});

	const properties =
		response && selectedSort
			? sortByStrategy(response, selectedSort)
			: response;

	const handlePageChange = page => {
		setPage(page);
	};

	if (error) return <div>Fetch failed</div>;

	if (isEmpty) return <div>No data to show</div>;

	return (
		<>
			<SortersList />
			<PageLayout>
				<PropertiesContainer isLoading={isLoading} properties={properties} />
			</PageLayout>
			{apiPagination && (
				<Pagination
					currentPage={currentPage}
					config={apiPagination}
					onClick={handlePageChange}
				/>
			)}
			{totalItems && (
				<ItemsLimit selected={limit} onClick={setLimit} total={totalItems} />
			)}
		</>
	);
}
