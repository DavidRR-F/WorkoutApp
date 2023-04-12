import { Text } from 'react-native'
import { trpc } from "../lib/trpc"

export const Welcome = () => {
	const user = trpc.user.test.useQuery();

	if (user.data == null) return <Text>loading...</Text>
    if (user.error) return <Text>Error...</Text>

	return <Text>{user.data?.name}</Text>
}