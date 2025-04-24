import {
    Box,
    Card,
    CardHeader,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Paper,
    Avatar,
    Chip,
    IconButton,
    InputAdornment,
    TextField,
  } from "@mui/material";
  import { Edit, Delete, Search } from "@mui/icons-material";
  import { motion } from "framer-motion";
  import { useState } from "react";
  import EditCrewMemberModal from "./EditCrewMemberModal";
  
  // Dummy data
  const initialCrewMembers = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@marine.com",
      rank: "Captain",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@marine.com",
      rank: "First Officer",
      status: "Inactive",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Samuel Green",
      email: "samuel.green@marine.com",
      rank: "Engineer",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];
  
  const CrewMembersTable = () => {
    const [crewMembers, setCrewMembers] = useState(initialCrewMembers);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
  
    const handleEditClick = (member) => {
      setSelectedMember(member);
      setOpenEdit(true);
    };
  
    const handleSave = (updatedMember) => {
      setCrewMembers((prev) =>
        prev.map((m) => (m.id === updatedMember.id ? updatedMember : m))
      );
    };
  
    return (
      <Box mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{ borderRadius: 3, boxShadow: 10 }}>
            <CardHeader
              title="Crew Members"
              titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
              sx={{
                borderBottom: "1px solid #ddd",
                px: 3,
                py: 2,
                backgroundColor: "#f0f8ff",
              }}
            />
            <CardContent sx={{ px: 3, pt: 2 }}>
              {/* Search Field */}
              <Box mb={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Search crew by name or email"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
  
              {/* Table */}
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Rank</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {crewMembers.map((member) => (
                      <TableRow key={member.id} hover>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={1}>
                            <Avatar src={member.avatar} />
                            <Typography>{member.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>{member.rank}</TableCell>
                        <TableCell>
                          <Chip
                            label={member.status}
                            color={member.status === "Active" ? "success" : "default"}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="primary"
                            size="small"
                            onClick={() => handleEditClick(member)}
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton color="error" size="small">
                            <Delete fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
  
          {/* Edit Modal */}
          <EditCrewMemberModal
            open={openEdit}
            handleClose={() => setOpenEdit(false)}
            member={selectedMember}
            onSave={handleSave}
          />
        </motion.div>
      </Box>
    );
  };
  
  export default CrewMembersTable;
  