import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, API_HOST, API_URL } from "@env";
import ExerciseCard from "../../components/ExerciseCard";
import { icons } from "../../constants";
import SearchBar from "../../components/SearchBar";

const Library = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.API_KEY;
  const apiHost = process.env.API_HOST;
  const url = process.env.API_URL;

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
      },
      params: {
        limit: "1400",
        offset: "0",
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(url, options);
      setExerciseList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // // Filter exercises based on search query
    const query = searchQuery.toLowerCase();
    const filteredExercises = exerciseList.filter((exercise) => {
      const name = exercise?.name?.toLowerCase() || "";
      const equipment = exercise?.equipment?.toLowerCase() || "";
      const muscle = exercise?.muscle?.toLowerCase() || "";
      return (
        name.includes(query) ||
        equipment.includes(query) ||
        muscle.includes(query)
      );
    });

  // console.log(searchQuery);

  return (
    <SafeAreaView className="h-full p-5 bg-primary">
      <Text className="text-white text-3xl font-Inter font-semibold">
        Library Page
      </Text>
      <SearchBar
        value={searchQuery}
        placeholder={`Search name, equipment, muscle`}
        handleChangeText={(e) => setSearchQuery(e)}
        imageUrl={icons.search}
      />
      {loading && (
        <ActivityIndicator size="large" color="#E4447C" className="my-10" />
      )}
      <View className="mt-10">
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ height: "88%", marginBottom: 110 }}
          data={filteredExercises}
          renderItem={({ item }) => <ExerciseCard {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Library;
