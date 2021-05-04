import React from 'react'
import Table from 'react-bootstrap/Table'
import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import { Country } from '../../types'
import '../MainTable/style.css'

type MainTableProps = {countries: Country[]}

export default function MainTable({ countries }: MainTableProps) {
  return (
    <div className="table-wrapper">
    <Table responsive className="fl-table">
      <TableHeader />
      <tbody>
        {countries.map((country: Country) => (
          <TableRow
            key={country.name}
            country={country}
          />
        ))}
      </tbody>
    </Table>
    </div>
  )
}