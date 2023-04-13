import { FlatList, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { api, type RouterOutputs } from "../utils/api"
import React from 'react';

const WorkoutCard: React.FC<{
    workout: RouterOutputs["workout"]["all"][number];
    onDelete: () => void;
}> = ({ workout, onDelete }) => {
    return (
        <View className="flex flex-row rounded-lg bg-white/10 p-4">
        <View className="flex-grow">
            <Text className="text-xl font-semibold text-pink-400">
                {workout.name}
            </Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <Text className="font-bold uppercase text-pink-400">Delete</Text>
        </TouchableOpacity>
        </View>
    );
};

const Home = () => {
	const utils = api.useContext();
	const user = api.user.test.useQuery();
	const workouts = api.workout.all.useQuery({ id: user.data!.id });
	const deleteWorkoutMutation = api.workout.delete.useMutation({
		onSettled: () => utils.workout.all.invalidate(),
	  });

	if (user.data == null) return <Text>loading...</Text>
    if (user.error) return <Text>Error...</Text>

	return (
		<SafeAreaView>
			<View>
				<FlatList
					data={workouts.data}
					renderItem={(workout) => (
						<WorkoutCard 
							workout={workout.item} 
							onDelete={() => deleteWorkoutMutation.mutate(workout.item.id) }
						/>
					)}
				/>	
			</View>
		</SafeAreaView>
	);
}

export default Home;