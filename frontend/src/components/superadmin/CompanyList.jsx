import {
    Box,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@mui/material";
  import { useState } from "react";
  import AddCompanyModal from "./AddCompanyModal";
  
  const CompanyList = () => {
    const [open, setOpen] = useState(false);
  
    const companies = [
      { id: 1, name: "Oceanic Corp", email: "admin@oceanic.com", status: "Active" },
      { id: 2, name: "Marine Logistics", email: "contact@marine.com", status: "Pending" },
      { id: 3, name: "Sea Transporters", email: "sea@admin.com", status: "Active" },
    ];
  
    return (
      <Box mt={5}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight={600}>
            Manage Companies
          </Typography>
          <Button variant="contained" onClick={() => setOpen(true)}>
            + Add Company
          </Button>
        </Box>
  
        <TableContainer component={Paper} elevation={2}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies.map((company) => (
                <TableRow key={company.id}>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.email}</TableCell>
                  <TableCell>{company.status}</TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <AddCompanyModal open={open} handleClose={() => setOpen(false)} />
      </Box>
    );
  };
  
  export default CompanyList;
  