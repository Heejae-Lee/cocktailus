import withRoot from '../../components/withRoot';
import { withStyles } from '@material-ui/core/styles';

import React, { Fragment, useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

// npm i material-ui-search-bar
import SearchBar from "material-ui-search-bar";

import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import AppHeader from '../../layout/Header';
import AppFooter from '../../layout/Footer';
import useStyles from './styles';
import Typography from '../../components/Typography';
import AppForm from '../../components/AppForm';

import axios from 'axios';
import { useSelector } from 'react-redux'

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
  { id: 'id', label: '글 번호', minWidth: 30 },
  { id: 'title', label: '제목', minWidth: 30 },
  {
    id: 'member_name',
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


function NoticePage() {
  const classes = useStyles();

  // const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한번에 보여줄 행 수
  const [searched, setSearched] = useState(""); // 검색어
  const [rows, setRows] = useState([]); // 행 데이터
  const [filteredRows, setFilteredRows] = useState(null); // 행 데이터
  const { token } = useSelector((state) => state.member);

  useEffect(() => {
    console.log('notice mount')
    getNoticeList();
    return () => {
      console.log("notice unmount");
    }
  }, [])


  const getNoticeList = () => {
    axios({
      url: "http://localhost:8080" + "/notices",
      method: 'get',
      headers: { 'Auth-Token': `${token}` },
      })
      .then((res) => {
        console.log("getNoticeList success");
        let datas = res.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.substr(0, 10);
        }
        setRows(res.data);
        setFilteredRows(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("getNoticeList fail");
        console.log(err);
      })
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchedVal) => {
    const filteredData = filteredRows.filter((row) => {
      return row.title.includes(searchedVal);
    });
    if (filteredData.length === 0) {
      setRows(filteredRows);
    } else {
      setRows(filteredData);
    }
  };
  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     runSearch();
  //   }
  // };

  // const runSearch = (event) => {
  //   setRows(filteredRows);
  // };

  const cancelSearch = () => {
    setSearched("");
    setRows(filteredRows);
    requestSearch(searched);
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
        <Link>
          <ColorButton
            component={RouterLink}
            variant=""
            to="/notice/write"
            className={classes.right}
          >
            글 작성
          </ColorButton>
        </Link>
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
                            to={`/notice/${row.id}`}
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
            placeholder="제목을 입력하세요"
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          // onKeyPress={handleKeyPress}
          />
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
    </Fragment>
  );
}


export default withRoot(NoticePage);