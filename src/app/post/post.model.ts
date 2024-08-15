interface BasePost {
  title: string;
  content: string;
}

// Interface for posts as used in the application
export interface Post extends BasePost {
  id: string;
}

// Interface for posts as stored in MongoDB
export interface PostMongoDb extends BasePost {
  _id: string;
}