import React, { useState, useEffect } from "react";

export default ({ comments }) => {
  const renderdComment = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = "this comment is awaiting moderation";
    }

    if (comment.status === "reject") {
      content = "This comment is rejected";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderdComment}</ul>;
};
