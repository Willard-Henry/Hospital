import { Text, View, Image } from "react-native";

function Doctors() {
  return (
    <View className="pt-3">
      <View className="flex-row justify-between p-5">
        <Text className="text-xl text-slate-500 font-semibold ">
          Top Doctors
        </Text>
        <Text className="text-slate-500 text-base">view all</Text>
      </View>

      <View className="flex-col gap-5  p-5 rounded-lg">
        <View className="flex-row bg-white rounded-md py-2">
          <View className="flex-col">
            <View className="p-3">
              <Image
                className="h-24 w-24 rounded-lg"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/portrait-positive-black-doctor-holding-medical-chart-male-over-white-background-178499631.jpg",
                }}
              />
            </View>
            <View>
              <Text className="text-slate-500 text-xs px-3">
                🕘 9:30am - 3:00pm
              </Text>
            </View>
          </View>
          <View className="flex-col gap-3">
            <View className="flex-col p-3">
              <Text className="text-xl font-semibold">Dr. Hakim</Text>
              <Text className="text-base ">Dental Specialist</Text>
              <View className="flex-row gap-7">
                <Text className="">Dhaka </Text>
                <Text>⭐ 4.8</Text>
              </View>
            </View>
            <View className="flex-row gap-2">
              <Text>Clinic Fees</Text>
              <Text>$ 350.00</Text>
            </View>
          </View>
        </View>
        <View className="flex-row bg-white rounded-lg py-2">
          <View className="flex-col">
            <View className="p-3">
              <Image
                className="h-24 w-24 rounded-lg"
                source={{
                  uri: "https://www.uclahealth.org/sites/default/files/styles/portrait_3x4_016000_480x640/public/images/female-doc-with-other-docs.jpg?h=dd028d5a&itok=ajLNibn5",
                }}
              />
            </View>
            <View>
              <Text className="text-slate-500 text-xs px-3">
                🕘 9:30am - 3:00pm
              </Text>
            </View>
          </View>
          <View className="flex-col gap-3">
            <View className="flex-col p-3">
              <Text className="text-xl font-semibold">Dr. Anika Hoque</Text>
              <Text className="text-base ">Heart Specialist</Text>
              <View className="flex-row gap-7">
                <Text className="">Dhaka </Text>
                <Text>⭐ 4.9</Text>
              </View>
            </View>
            <View className="flex-row gap-2">
              <Text>Clinic Fees</Text>
              <Text>$ 350.00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Doctors;
