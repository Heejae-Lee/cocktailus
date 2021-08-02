import withRoot from '../../components/withRoot';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import AppHeader from '../../layout/Header';
import AppFooter from '../../layout/Footer';
import useStyles from './styles';
import Typography from '../../components/Typography';
import AppForm from '../../components/AppForm';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const columns = [
  { id: 'id', label: '글 번호', minWidth: 30 },
  { id: 'title', label: '제목', minWidth: 30 },
  {
    id: 'name',
    label: '작성자',
    minWidth: 30,
    align: 'center',
  },
  {
    id: 'created',
    label: '작성일자',
    minWidth: 30,
    align: 'center',
  },
];

function createData(id, title, name, created) {
  return { id, title, name, created };
}

const rows = [
  createData(1,'내가 바로 칵테일메이커', '칵테일러스', '2021.07.28'),
  createData(2,'내가 바로 칵테일메이커2', '칵테일러스', '2021.07.28'),
  createData(3,'내가 바로 칵테일메이커3', '칵테일러스', '2021.07.28'),
  createData(4,'내가 바로 칵테일메이커4', '칵테일러스', '2021.07.28'),
  createData(5,'내가 바로 칵테일메이커5', '칵테일러스', '2021.07.28'),
  createData(6,'내가 바로 칵테일메이커6', '칵테일러스', '2021.07.28'),
  createData(7,'내가 바로 칵테일메이커7', '칵테일러스', '2021.07.27'),
  createData(8,'내가 바로 칵테일메이커8', '칵테일러스', '2021.07.26'),
  createData(9,'내가 바로 칵테일메이커9', '칵테일러스', '2021.07.25'),
  createData(10,'내가 바로 칵테일메이커10', '칵테일러스', '2021.07.25'),
  createData(11,'내가 바로 칵테일메이커11', '칵테일러스', '2021.07.24'),
  createData(12,'내가 바로 칵테일메이커12', '칵테일러스', '2021.07.24'),
  createData(13,'내가 바로 칵테일메이커13', '칵테일러스', '2021.07.24'),
  createData(14,'내가 바로 칵테일메이커14', '칵테일러스', '2021.07.24'),
  createData(15,'내가 바로 칵테일메이커15', '칵테일러스', '2021.07.24'),
  createData(16,'내가 바로 칵테일메이커16', '칵테일러스', '2021.07.24'),
];


function NoticePage() {
  const classes = useStyles();
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
    <React.Fragment>
    <AppHeader />

    <Paper className={classes.root}>
        <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            공지사항
          </Typography>
          <Typography variant="h6" align="center">
            칵테일러스의 공지사항과 이벤트를 알려드릴게요!
          </Typography>
        </AppForm>
      {/* 관리자 권한이 있으면 */}
      <Button
          // component={RouterLink}
          variant="outlined" color="primary" to="/recipe/write"
          className={classes.right}
          >
          글 작성
      </Button>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead aria-label="customized table">
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    
      <TablePagination
        style={{ paddingRight: '40px' }}
        rowsPerPageOptions={[5, 10, 20]} // 5, 10, 20
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <AppFooter />
    </React.Fragment>
  );
}


export default withRoot(NoticePage);