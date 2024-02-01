import React from "react";
import "../../styles/styles.css";

export default function RecentPosts() {
  const navigateToRecentPosts = () => {
    console.log("Navigating to recent posts");
    // Add logic for navigating to recent posts, if needed
  };

  return (
    <div>
      <h2 className="recent-posts-title" onClick={navigateToRecentPosts}>
        Recent Posts
      </h2>
      {/* Render individual post boxes */}
    </div>
  );
}
