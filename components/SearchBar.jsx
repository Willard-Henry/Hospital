import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View className="p-5">
      <View className="bg-white p-3 flex-row justify-between">
        <View className="flex-row gap-2">
          <Feather name="search" size={26} color="gray" />
          <Text className="text-gray-300 text-base">Search Medical...</Text>
        </View>
        <View>
          <Octicons name="arrow-switch" size={26} color="gray" />
        </View>
      </View>
    </View>
  );
}
export default SearchBar;
