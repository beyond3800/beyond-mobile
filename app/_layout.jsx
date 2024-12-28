
import { Stack } from 'expo-router';
import MainProvider from './context/mainContext';


export default function App() {

  return (
    <MainProvider>
      <Stack >
        <Stack.Screen name='index'
          options={
            { headerShown: false }
          }
        />
        <Stack.Screen name='(tabs)'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='show'
          options={{
            headerShown:false
          }}
        />
      </Stack>
    </MainProvider>
  );
}
