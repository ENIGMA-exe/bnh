import "./styles.css";

import Paper from '@mui/material/Paper'

import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from '@mui/material/TableRow'
import TableCell from "@mui/material/TableCell"


export default function App() {
  return (
    <>
        <TableContainer component={Paper}>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Heading 1</TableCell>
                <TableCell align={"center"}>Heading 2</TableCell>
                <TableCell align={"center"}>Heading 3</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

                <TableRow>
                  <TableCell align={"center"} style={{border:'2px solid black'}}>data 1</TableCell>
                  <TableCell align={"center"}>data 2</TableCell>
                  <TableCell align={"center"}>data 3</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align={"center"}>data 1</TableCell>
                  <TableCell align={"center"}>data 2</TableCell>
                  <TableCell align={"center"}>data 3</TableCell>
                </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}
