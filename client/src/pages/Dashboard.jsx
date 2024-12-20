import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashboardPosts";
import UsersDashboard from "../components/UsersDashboard";
import { CommentsDashboard } from "../components/CommentsDashboard";
import DashboardComponent from "../components/DashboardComponent";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {tab === "profile" && <DashProfile />}
      {tab === "posts" && <DashPosts />}
      {tab === "users" && <UsersDashboard />}
      {tab === "comments" && <CommentsDashboard />}
      {tab === "dashboard" && <DashboardComponent />}
    </div>
  );
}
