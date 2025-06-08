import ThemedText from '@/components/ThemedText';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const {colors} = useTheme();

  return (
    <View className='flex-1 p-1'>
      <ThemedText>Hiii</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});