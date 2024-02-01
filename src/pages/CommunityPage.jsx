import React from "react";
import CategoryList from "../components/community/CategoryList";
import RecentPosts from "../components/community/RecentPosts";

export default function CommunityPage() {
  return (
    <>
      <main>
        <CategoryList />
      </main>
      <aside className="recent-posts">
        <RecentPosts />
      </aside>
    </>
  );
}
