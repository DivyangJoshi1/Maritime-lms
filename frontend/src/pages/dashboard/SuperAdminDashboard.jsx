import React, { useRef } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box } from "@mui/material";
import OverviewWidgets from "../../components/superadmin/OverviewWidgets";
import CompanyList from "../../components/superadmin/CompanyList";
import CourseList from "../../components/superadmin/CourseList";
import AnalyticsPanel from "../../components/superadmin/AnalyticsPanel";
import ActivityLogs from "../../components/superadmin/ActivityLogs";
import CrewMembersTable from "../../components/superadmin/CrewMembersTable";
import NoticesPanel from "../../components/superadmin/NoticesPanel";
import { DashboardScrollContext } from "../../context/DashboardScrollContext";

const SuperAdminDashboard = () => {
  const refs = {
    overview: useRef(null),
    courses: useRef(null),
    analytics: useRef(null),
    logs: useRef(null),
    crew: useRef(null),
    notices: useRef(null),
  };

  const sectionStyle = {
    scrollMarginTop: "80px", // Match your Header height exactly
    marginTop: "40px",       // Spacing between sections
  };

  return (
    <DashboardScrollContext.Provider value={refs}>
      <AdminLayout>
        <Box sx={{ px: 2, py: 4, }}>
          <div ref={refs.overview} style={sectionStyle}>
            <OverviewWidgets />
          </div>
          <div ref={refs.courses} style={sectionStyle}>
            <CourseList />
          </div>
          <div ref={refs.analytics} style={sectionStyle}>
            <AnalyticsPanel />
          </div>
          <div ref={refs.logs} style={sectionStyle}>
            <ActivityLogs />
          </div>
          <div ref={refs.crew} style={sectionStyle}>
            <CrewMembersTable />
          </div>
          <div ref={refs.notices} style={sectionStyle}>
            <NoticesPanel />
          </div>
        </Box>
      </AdminLayout>
    </DashboardScrollContext.Provider>
  );
};

export default SuperAdminDashboard;
