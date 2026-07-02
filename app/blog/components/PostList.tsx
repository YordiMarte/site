"use client";

import type { Blog as PostType } from "contentlayer/generated";
import Post from "./Post";
import React, { useRef, useState } from "react";

function getRelativeCoordinates(
  event: React.MouseEvent<HTMLUListElement>,
  referenceElement: HTMLUListElement | null
) {
  if (!referenceElement) {
    return { x: 0, y: 0 };
  }

  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.clientTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

type PostListProps = {
  posts: PostType[];
};

export default function PostList({ posts }: PostListProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 240,
    y: 0,
  });
  const listRef = useRef<HTMLUListElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    setMousePosition(getRelativeCoordinates(e, listRef.current));
  };

  return (
    <ul
      ref={listRef}
      onMouseMove={(e) => handleMouseMove(e)}
      className="flex flex-col animated-list"
    >
      {posts.length === 0 && <p>No posts found</p>}
      {posts.map((post) => (
        <Post key={post.slug} post={post} mousePosition={mousePosition} />
      ))}
    </ul>
  );
}