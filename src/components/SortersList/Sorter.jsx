import Button from '@/components/Button/Button';
import Select from '@/components/Select/Select';
import { useSorters } from '@/hooks/useSorters';

export default function Sorts({ config }) {
	const { selectedSort, setSort } = useSorters();
	const { key, name, strategy, values } = config;

	const handleOnChange = event => {
		setSort({
			strategy,
			key,
			value: typeof event === 'object' ? event.target.value : null,
		});
	};

	const isButtonDisabled =
		key + strategy === selectedSort.key + selectedSort.strategy;

	return (
		<div>
			{values ? (
				<Select
					placeholder={name}
					options={values}
					value={selectedSort.value}
					onChange={handleOnChange}
				/>
			) : (
				<Button disabled={isButtonDisabled} onClick={handleOnChange}>
					{name}
				</Button>
			)}
		</div>
	);
}
