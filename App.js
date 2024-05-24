import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import TopAppBar from "./components/TopAppBar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import Doctors from "./components/Doctors";

export default function App() {
  return (
    <View className="bg-gradient-to-r from-cyan-500 to-blue-500  p-2 pt-6">
      <ScrollView>
        <View className=" bg-primary p-2 rounded-xl">
          <TopAppBar />
          <SearchBar />
          <Category />
          <Doctors />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}
