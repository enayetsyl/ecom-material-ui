import { useTheme } from "@emotion/react";
import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const columns = [
  { id: 'thumbnail', label: 'Thumbnail', minWidth: 120 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'rprice', label: 'R.Price', minWidth: 80 },
  { id: 'sprice', label: 'S.Price', minWidth: 80 },
  { id: 'edit', label: 'Edit', minWidth: 80, button: true },
  { id: 'delete', label: 'Delete', minWidth: 80, button: true },
 
  
];






const AllProducts = () => {
  // TYPOGRAPHY VARIANT RESPONSIVENESS
  const {data} = useQuery({
    queryKey:['allproducts'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/api/v1/allproducts')
      return res.data
    }
  })
  
  const products = data?.products;
  
  const rows = []
  
  if(products){
    products.forEach((product) => {
      const {title, category, featured_image, rprice, sprice, _id} = product
      rows.push({title, category, thumbnail:featured_image, rprice, sprice, _id,
      edit: 'Edit',
    delete: 'Delete'})
    })
  }
  console.log(products)
  console.log('rows', rows)
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.down('xs'));
const sm = useMediaQuery(theme.breakpoints.down('sm'));
const md = useMediaQuery(theme.breakpoints.down('md'));
const lg = useMediaQuery(theme.breakpoints.down('lg'));

const variant =
  xs ? 'h4' :
  sm ? 'h4' :
  md ? 'h3' :
  lg ? 'h2' :
  'h2';

  // Table states

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Container maxWidth='xl'>
      {/* page heading */}
      <Typography 
      mt={8}
      variant={variant}
      align="center"
      mb={2}
      >
        Manage Products
      </Typography>

    {/* table start */}

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                {column.id === 'thumbnail' ? (
                  <img src={value} 
                  alt="Thumbnail" style={{ width: '50px', height:'50px' }} />
                ) : column.button ? (
                  <Button 
                  variant="contained">
                    {value}
                  </Button>
                ) : column.format && typeof value === 'number' ? (
                  column.format(value)
                ) : (
                  value
                )}
              </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
};

export default AllProducts;