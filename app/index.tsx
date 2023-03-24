import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { Posts } from "../data";

const styles = StyleSheet.create({
  postWrapper: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 4,
    marginVertical: 8,
    paddingVertical: 4,
  },
  postTitle: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  postContent: {
    fontSize: 13,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  postActionWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
});

export default function Home() {
  const link = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Home" }} />
      {Posts.map((post) => (
        <TouchableOpacity
          key={`post_${post.id}`}
          style={styles.postWrapper}
          onPress={() => link.push(`/post/${post.id}/comments`)}
        >
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postContent}>{post.content}</Text>

          <View style={styles.postActionWrapper}>
            <Link href={`/post/${post.id}/reactions`}>
              {post.reactions.length} Reactions
            </Link>
            <Link href={`/post/${post.id}/comments`}>
              {post.comments.length} Comments
            </Link>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
