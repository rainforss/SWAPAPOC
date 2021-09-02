import { VStack, StackDivider, Box } from "@chakra-ui/react";
import React from "react";
import { BlogTile } from "./BlogTile";

interface BlogsProps {
  blogs?: any;
}

export const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <VStack
      pt="12"
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      {blogs.items.map((i: any) => (
        <BlogTile key={i.sys.id} blog={i} />
      ))}
      {/* <BlogTile
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="This is a test"
        date={now}
        imageString="iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFcSURBVHhe7dIxAQAADMOg+TfdicgLGrhBIBCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCEWwPnoXO3/FyM2kAAAAASUVORK5CYII="
      />
      <BlogTile
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="This is a test"
        date={now}
        imageString="iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFcSURBVHhe7dIxAQAADMOg+TfdicgLGrhBIBCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCEWwPnoXO3/FyM2kAAAAASUVORK5CYII="
      />
      <BlogTile
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        title="This is a test"
        date={now}
        imageString="iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFcSURBVHhe7dIxAQAADMOg+TfdicgLGrhBIBCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCkQhEIhCJQCQCEWwPnoXO3/FyM2kAAAAASUVORK5CYII="
      /> */}
    </VStack>
  );
};
