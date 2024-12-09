import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycling Guide</Text>
      <StatusBar style="auto"/>

      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Organic Waste')}>
          <Image
            source={require('./assets/images/organic-waste.png')} 
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Residual Waste')}>
      <Image
          source={require('./assets/images/residual-waste.png')} 
          style={styles.buttonImage}
      />
      </TouchableOpacity>
      </View>

       {/* Middle Row */}
        <View style={styles.middleRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Batteries')}>
      <Image
          source={require('./assets/images/batteries.png')} 
          style={styles.buttonImage}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Glass')}>
      <Image
          source={require('./assets/images/glass.png')} 
          style={styles.buttonImage}
      />
      </TouchableOpacity>
      </View>

      
       {/* Bottom Row */}
        <View style={styles.bottomRow}>
      <TouchableOpacity onPress={() => navigation.navigate('Paper and Cardboard')}>
      <Image
          source={require('./assets/images/paperncard.png')} 
          style={styles.buttonImage}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Packaging and Cartons')}>
      <Image
          source={require('./assets/images/packncart.png')} 
          style={styles.buttonImage}
      />
      </TouchableOpacity>
      </View>
    </View>
  );
}

function OrganicScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/organic-waste-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}

function ResidualScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/residual-waste-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}

function BatteriesScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/batteries-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}

function GlassScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/glass-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}

function PapernCardboardScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/paper-cardboard-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}

function PackagingCartonScreen() {
   const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Details Page</Text>
      
      {/* Back Button Overlay */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Image
          source={require('./assets/images/backbutton.png')}
          style={styles.backButtonImage}
        />

      </TouchableOpacity>
      <Image
        source={require('./assets/images/packaging-cardboard-guide.png')}
        style={styles.detailsImage}
      />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Organic Waste" component={OrganicScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Residual Waste" component={ResidualScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Batteries" component={BatteriesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Glass" component={GlassScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Paper and Cardboard" component={PapernCardboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Packaging and Cartons" component={PackagingCartonScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 24,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: 'bold',
    marginBottom: 40,
  },
topRow: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
middleRow: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
bottomRow: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    gap: 10,
  },
detailsImage: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover', 
  },
backButton: {
    position: 'absolute',
    top: 50, // Adjust as needed
    left: 23, // Adjust as needed
    zIndex: 1, // Ensures the button stays on top of the image
    padding: 10,
  },
  backButtonImage: {
    width: 25,  // Adjust the size of your back button image
    height: 25, // Adjust the size of your back button image
  },
});