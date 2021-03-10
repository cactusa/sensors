const Table1 = ({data}) => {
    const getKeys = () => Object.keys(data[0]);

	const getHeader = () => {
		const keys = getKeys();

		return keys.map((key, index) => <th key={key}>{key.toUpperCase()}</th>);
	};

	const TableRow = ({ keys, data }) => {
		return keys.map((key, index) => <td key={data[key]}>{data[key]}</td>);
	};

	const getRowsData = () => {
		const keys = getKeys();

		return data.map((row, index) => (
			<tr key={index}>
				<TableRow key={index} data={row} keys={keys} />
			</tr>
		));
	};

	return (
		<table>
			<thead>
				<tr>
					<th colspan="11">Sensor Table 1</th>
				</tr>
				<tr>{getHeader()}</tr>
			</thead>
			<tbody>{getRowsData()}</tbody>
		</table>
	);
}

export default Table1;