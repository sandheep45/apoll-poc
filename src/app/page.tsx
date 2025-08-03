"use client";

import { useGetAllPostsQuery } from "@/graphql/graphql";

export default function Home() {
  const { data } = useGetAllPostsQuery();

  return (
    <div>
      Hello WOrldd
      {JSON.stringify(data)}
    </div>
  );
}
