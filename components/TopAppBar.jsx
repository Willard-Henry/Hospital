import { View, Text, Image } from "react-native";

// This is the header for the Homescreen
function TopAppBar() {
  return (
    <View className="flex-row justify-between p-5">
      <View className="gap-2 ">
        <Text className="text-base">👋 Hello!</Text>
        <Text className="text-xl font-bold">Mohammed A.</Text>
      </View>
      <View>
        <Image
          className="h-12 w-12 rounded-full "
          source={{
            uri: "https://media.istockphoto.com/id/912922804/photo/face-of-indian-man-wearing-traditional-clothing-against-white-background.jpg?s=612x612&w=0&k=20&c=5BNm9bKg7OnMmL9gfveJPqKSl5hAfRDgtJVLfwfJwnw=",
          }}
        />
      </View>
    </View>
  );
}
export default TopAppBar;
