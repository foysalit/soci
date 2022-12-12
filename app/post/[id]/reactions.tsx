import { StyleSheet, Text, View } from "react-native";
import { getReactionsForPost } from "../../../data";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
  },
  reactionWrapper: {
    paddingHorizontal: 16,
    marginVertical: 4,
  },
});

const getReactionEmoji = (reactionType: string) => {
  if (reactionType === "like") {
    return "👍";
  } else if (reactionType === "laugh") {
    return "😂";
  }
};

export default function Reactions({ route }) {
  const postId = parseInt(route.params.id);
  const reactions = getReactionsForPost(postId);
  return (
    <View>
      <Text style={styles.title}>{reactions.length} Reactions</Text>
      {reactions.map((reaction) => (
        <View
          key={`post_${postId}_reaction_${reaction.id}`}
          style={styles.reactionWrapper}
        >
          <Text>
            {getReactionEmoji(reaction.type)} by {reaction.user.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
