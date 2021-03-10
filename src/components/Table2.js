import React from 'react';
import { useTable, useSortBy } from 'react-table';

const Table2 = ({ data }) => {

	const columns = React.useMemo(
		() => [
			{
				Header: 'Sensor Table 2',
				columns: [
					{
						Header: 'Id',
						accessor: 'id',
					},
					{
						Header: 'Box Id',
						accessor: 'box_id',
					},
					{
						Header: 'Sensor Type',
						accessor: 'sensor_type',
					},
					{
						Header: 'Name',
						accessor: 'name',
					},
					{
						Header: 'Range L',
						accessor: 'range_l',
					},
					{
						Header: 'Range U',
						accessor: 'range_u',
					},
					{
						Header: 'Longitude',
						accessor: 'longitude',
					},
					{
						Header: 'Latitude',
						accessor: 'latitude',
					},
					{
						Header: 'Profile Progress',
						accessor: 'reading',
					},
					{
						Header: 'Profile Progress',
						accessor: 'unit',
					},
					{
						Header: 'Profile Progress',
						accessor: 'reading_ts',
					},
				],
			},
		],
		[]
	);
	
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable(
		{
			columns,
			data,
		},
		useSortBy
	);
    
	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								// Add the sorting props to control sorting. For this example
								// we can add them into the header props
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render('Header')}
									{/* Add a sort direction indicator */}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? ' 🔽'
												: ' 🔼'
											: ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
		</>
	);
}

export default Table2;