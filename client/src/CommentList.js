import React, { useState, useEffect } from "react";

export default ({ comments }) => {
  const renderdComment = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderdComment}</ul>;
};
