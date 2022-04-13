import './datatable.scss'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container, styled } from '@mui/material'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  {
    field: 'author',
    headerName: 'Author',
    flex: 1,
    editable: true,
  },
  {
    field: 'images',
    headerName: 'Images',
    flex: 1,
    editable: false,
    sortable: false,
  },
]

const actionColumn = [
  {
    field: 'actions',
    headerName: 'Action',
    flex: 0.25,
    renderCell: () => (
      <div className='action-button'>
        <div className='edit'>
          <EditIcon />
        </div>
        <div className='delete'>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
]

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .MuiDataGrid-cell': {
    '&:focus': {
      outline: 'none',
    },
  },
}))

const rows = [
  { id: 1, author: 'Snow', images: 'Jon', age: 35 },
  { id: 2, author: 'Lannister', images: 'Cersei', age: 42 },
  { id: 3, author: 'Lannister', images: 'Jaime', age: 45 },
  { id: 4, author: 'Stark', images: 'Arya', age: 16 },
  { id: 5, author: 'Targaryen', images: 'Daenerys', age: 12 },
  { id: 6, author: 'Melisandre', images: 'Hello', age: 150 },
  { id: 7, author: 'Clifford', images: 'Ferrara', age: 44 },
  { id: 8, author: 'Frances', images: 'Rossini', age: 36 },
  { id: 9, author: 'Roxie', images: 'Harvey', age: 65 },
]
const Datatable = () => {
  return (
    <Container sx={{ height: '80vh', marginTop: '2rem' }}>
      <div className='title-container'>
        <span className='title'>Users</span>
        <Button className='title-button' variant='contained'>
          Add
        </Button>
      </div>
      <StyledDataGrid
        sx={{ background: 'white' }}
        rows={rows}
        columns={columns.concat(actionColumn)}
        autoHeight
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        editMode='row'
      />
    </Container>
  )
}

export default Datatable
