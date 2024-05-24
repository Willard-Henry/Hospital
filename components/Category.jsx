import { View, Text, Image } from "react-native";

function Category() {
  return (
    <View>
      <View className="flex-row justify-between p-5">
        <Text className="text-xl text-slate-500 font-semibold ">Category</Text>
        <Text className="text-slate-500 text-base">view all</Text>
      </View>
      <View className="flex-row items-center  gap-5 justify-center">
        <View className="flex-col justify-center items-center bg-white py-4 px-1 rounded-md ">
          <View className="py-2 ">
            <Image
              className="h-16 w-16 rounded-full"
              source={{
                uri: "https://as1.ftcdn.net/v2/jpg/01/98/20/78/1000_F_198207827_6HbWAkPlkLJMR1yBQO1jwMMLpa5Kv8ms.jpg",
              }}
            />
          </View>
          <View>
            <Text className="text-xs font-medium">Dental Specialist</Text>
          </View>
        </View>
        <View className="flex-col justify-center items-center bg-white py-4 px-2 rounded-md ">
          <View className="py-2">
            <Image
              className="h-16 w-16 rounded-full"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz9WU3K4z-g5vnBieTI9II0qnjlgHcj5tuQ&usqp=CAU",
              }}
            />
          </View>
          <View>
            <Text className="text-xs font-medium">Heart Specialist</Text>
          </View>
        </View>

        <View className="flex-col justify-center items-center bg-white py-4  px-1 rounded-md">
          <View className="py-2">
            <Image
              className="h-16 w-16 rounded-full"
              source={{
                uri: "https://lh3.googleusercontent.com/proxy/LpURyY7T7XNv0dAKRJltg71K6qU8NiVOb1UO9gamZiuaosegp0h5v5rc5Srn7zYFwBMy6jsO5-qM507bfdURDWzMZa6We16P5IgeYGVXgJLq5i5uKpUaNc4rB4RlUKNxwKEFE-VPYw",
              }}
            />
          </View>
          <View>
            <Text className="text-xs font-medium">Brain Specialist</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Category;
