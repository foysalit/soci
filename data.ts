import { isExpressionWithTypeArguments } from "typescript";

export const Posts = [
      {
            id: 1,
            title: 'Post 1',
            content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem isExpressionWithTypeArguments.",
            reactions: [{
                  id: 1,
                  type: 'like',
                  user: {
                        name: 'User 1'
                  }
            }, {
                  id: 2,
                  type: 'laugh',
                  user: {
                        name: 'User 2'
                  }
            }],
            comments: [{
                  id: 1,
                  content: 'Comment 1',
                  user: {
                        name: 'User 1'
                  }
            }, {
                  id: 2,
                  content: 'Comment 2',
                  user: {
                        name: 'User 4'
                  }
            }]
      },
      {
            id: 2,
            title: 'Post 2',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            reactions: [{
                  id: 3,
                  type: 'like',
                  user: {
                        name: 'User 6'
                  }
            }],
            comments: [{
                  id: 3,
                  content: 'Comment 3',
                  user: {
                        name: 'User 2'
                  }
            }, {
                  id: 4,
                  content: 'Comment 4',
                  user: {
                        name: 'User 3'
                  }
            }]
      }
];

export const getCommentsForPost = (postId: number) => {
      return Posts.find(post => post.id === postId)?.comments;
};

export const getReactionsForPost = (postId: number) => {
      return Posts.find(post => post.id === postId)?.reactions;
};