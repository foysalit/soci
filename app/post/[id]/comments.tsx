import { StyleSheet, Text, View } from "react-native";
import { getCommentsForPost } from "../../../data";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  commentWrapper: {
    marginHorizontal: 16,
    marginVertical: 8,
    paddingBottom: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  commentUserName: {
    fontWeight: "bold",
  },
});

export default function Comments({ route }) {
  const postId = parseInt(route.params.id);
  const comments = getCommentsForPost(postId);
  return (
    <View>
      <Text style={styles.title}>{comments.length} Comments</Text>
      {comments.map((comment) => (
        <View
          key={`post_${postId}_comment_${comment.id}`}
          style={styles.commentWrapper}
        >
          <Text style={styles.commentUserName}>{comment.user.name} commented</Text>
          <Text>{comment.content}</Text>
        </View>
      ))}
    </View>
  );
}
