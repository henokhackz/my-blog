// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== BLOG PARAMS
declare type CreateBlogParams = {
  title: string;
  content: string;
  authorId: string; // User ID of the author
  category?: string; // Optional category or tag
  tags?: string[]; // Optional array of tags
  createdAt?: Date; // Optional creation date
  updatedAt?: Date; // Optional last update date
};

declare type UpdateBlogParams = {
  blogId: string; // ID of the blog to update
  title?: string;
  content?: string;
  category?: string; // Optional category or tag
  tags?: string[]; // Optional array of tags
  updatedAt: Date; // Last update date
};

// ====== COMMENT PARAMS
declare type CreateCommentParams = {
  blogId: string; // ID of the blog the comment is associated with
  authorId: string; // User ID of the author of the comment
  content: string;
  createdAt?: Date; // Optional creation date
};

declare type UpdateCommentParams = {
  commentId: string; // ID of the comment to update
  content: string;
  updatedAt: Date; // Last update date
};

// ====== URL QUERY PARAMS
declare type SearchBlogParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type BlogUrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type BlogSearchParamProps = {
  params: { id: string; type: string }; // Adjust 'type' to fit your needs, e.g., category or tag
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type BlogFormProps = {
  action: "Add" | "Update";
  userId: string; // ID of the user creating or updating the blog
  data?: CreateBlogParams | null; // Data for the blog, if available
  config?: any; // Any additional configuration, if needed
};

declare type BlogProps = {
  blog: CreateBlogParams;
  isEditing: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
};
export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  link: string;
}
