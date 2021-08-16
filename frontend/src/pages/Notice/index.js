import withRoot from '../../components/withRoot';

import React, { Fragment, useState, useEffect } from 'react';
import {
  Button,
  withStyles,
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination,
  TableRow,
  Link
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

// npm i material-ui-search-bar
import SearchBar from "material-ui-search-bar";

import { NavLink as RouterLink } from 'react-router-dom';

import AppHeader from '../../layout/Header';
import AppFooter from '../../layout/Footer';
import useStyles from './styles';
import Typography from '../../components/Typography';
import AppForm from '../../components/AppForm';

import { noticeAPI } from '../../utils/noticeAPI'

// 테이블 타이틀 셀
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// 버튼 커스텀
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const columns = [
  { id: 'id', label: '글 번호', minWidth: 10, maxWidth: 10, },
  { id: 'title', label: '제목', minWidth: 30 },
  {
    id: 'member_name',
    label: '작성자',
    minWidth: 20,
    maxWidth: 20,
    align: 'center',
  },
  {
    id: 'created',
    label: '작성일자',
    minWidth: 30,
    align: 'center',
  },
];


function NoticePage() {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한번에 보여줄 행 수
  const [searched, setSearched] = useState(""); // 검색어
  const [filteredRows, setFilteredRows] = useState(null); // 원본 데이터 저장용
  const [rows, setRows] = useState([]); // 보여줄 데이터
  
  useEffect(() => {
    noticeAPI.getNoticeList(setRows, setFilteredRows);
  }, [])
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const changeSearchedValue = (value) => {
    setSearched(value);
    if (value === "") { // 검색어 전부 지우면 전체 데이터
      requestSearch(value);
    }
  };

  const requestSearch = (searchedVal) => {
    const filteredData = filteredRows.filter((row) => {
      return row.title.includes(searchedVal);
    });
    setRows(filteredData); 
  };

  const cancelSearch = () => {
    setSearched("");
    setRows(filteredRows);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      requestSearch(searched);
      setPage(0);
    }
  };

  return (
    <Fragment>
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
        <ColorButton
          component={RouterLink}
          to="/notice/write"
          className={classes.right}
          variant="contained"
        >
          글 작성
        </ColorButton>
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
                          {/* 타이틀 누르면 디테일 페이지로 이동 */}
                          {column.id === 'title' ?
                          (<Link
                            component={RouterLink}
                            to={`/notice/detail/${row.id}`}
                            >
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </Link>) :
                          <div>{column.format && typeof value === 'number' ? column.format(value) : value}</div> 
                          }
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <br></br>
          <SearchBar
            className={classes.searchBar}
            placeholder="제목 입력 후 엔터키를 눌러주세요"
            value={searched}
            onChange={changeSearchedValue}
            onCancelSearch={() => cancelSearch()}
            onKeyPress={handleKeyPress}
          />
        </TableContainer>

        <TablePagination
          style={{ paddingRight: '30px' }}
          rowsPerPageOptions={[5, 10, 20]} // 5, 10, 20
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={(page > 0 && rows.length < rowsPerPage) ? 0 : page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows"
        />
      </Paper>
      <AppFooter />
    </Fragment>
  );
}


export default withRoot(NoticePage);