import { Tabs, usePathname, useSearchParams } from "expo-router";

export default function Layout() {
  const { id } = useSearchParams();
  const postId = parseInt(id as string);
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarLabelPosition: "beside-icon" }}
    >
      <Tabs.Screen
        name="[id]/reactions"
        options={{
          href: `/post/${postId}/reactions`,
          title: "Reactions",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="[id]/comments"
        options={{
          href: `/post/${postId}/comments`,
          title: "Comments",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
