import { Tabs } from 'expo-router'
import {AntDesign} from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarStyle: {
          
        //   paddingTop: 0, // reduce if needed
        // },
      }}
    >
      <Tabs.Screen 
      name='index' 
        options={{
          title: 'For you',
          tabBarIcon: ({color}) => <AntDesign name="home" size={26} color={color} />
        }}
      />
      <Tabs.Screen 
      name='new' 
        options={{
          title: 'New post',
          tabBarIcon: ({color}) => <AntDesign name="plussquareo" size={26} color={color} />
        }}
      />
      <Tabs.Screen 
      name='about' 
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <AntDesign name="user" size={26} color={color} />
        }}
      />
    </Tabs>
  )
}