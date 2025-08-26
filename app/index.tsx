import { Alert, Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      {/* Big Box */}
      <View style={{
        backgroundColor: 'purple',
        padding: 30,
        borderRadius: 15,
        alignItems: 'center'
      }}>
        
        {/* Title */}
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: 'white', 
          marginBottom: 20 
        }}>
          Guessing Game
        </Text>

        {/* Name */}
        <Text style={{ 
          fontSize: 18, 
          marginBottom: 30, 
          color: 'white', 
          fontWeight: '600' 
        }}>
          Is my Name Shanmae Leigh P. de Gala?
        </Text>

        {/* Buttons */}
        <View style={{ flexDirection: 'row', gap: 20 }}>
          
          {/* Button 1 */}
          <Pressable
            onPress={() => Alert.alert("Wow, you're correct!")}
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Yes</Text>
          </Pressable>
          
          {/* Button 2 */}
          <Pressable
            onPress={() => Alert.alert("Aww you're wrong!")}
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>No</Text>
          </Pressable>
        
        </View>

      </View>
    </View>
  );
}
