import { Image, View, useColorScheme } from 'react-native'
import ThemedText from './ThemedText'
import { useRouter } from 'expo-router'
import { useTheme } from '@react-navigation/native';
import {AntDesign, Ionicons, Feather} from '@expo/vector-icons';
// import { useTheme } from '@react-navigation/native';

type PostListItemProps = {
  post: {
    id: string,
    image: string,
    image_url: string,
    caption: string,
    user: {
      id: string,
      avatar_url: string,
      image_url: string,
      username: string
    }
  }
}

export default function PostListItem({post}: PostListItemProps) {
  const router = useRouter();
  const { colors } = useTheme();

  return (

    <View className='gap-3 bg-white dark:bg-black'>
      {/* Header */}
      <View className='flex-row items-center gap-4 mt-2 mx-2'>
        <Image source={{uri: post.user.image_url}} className='w-12 aspect-square rounded-full' />
        <ThemedText>{post.user.username}</ThemedText>
      </View>
      <Image source={{uri: post.image_url}} className='w-full aspect-[4/3]' />

      {/* Footer buttons */}
      <View className="flex-row gap-3 mb-4 px-3">
        <AntDesign name="hearto" size={20} style={{ color: colors.text }}/>
        <Ionicons name="chatbubble-outline" size={20} className='dark:text-white' />
        <Feather name="send" size={20} className='dark:text-white' />
        <Feather name="bookmark" size={20} className="ml-auto dark:text-white" />
      </View>

    </View>
  )
}