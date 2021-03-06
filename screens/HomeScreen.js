import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  //State Management
  const [isLogoColour, setIsLogoColour] = React.useState(true);

  // Toggle the value of isLogoColour
  function toggleLogo() {
    setIsLogoColour(!isLogoColour)
  }
  
  function showSettings() {
    props.navigation.replace('Root', {screen: 'Settings'});
  }

  function showViewAllStaff() {
    props.navigation.replace('Root', {screen: 'People'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
        {/* Logo */}

        <View style={Styles.homeLogoContainer}>
          <Pressable onPress={toggleLogo}>
            <Image 
              source={isLogoColour ? require("../assets/images/roi-logo.jpg") : require("../assets/images/roi-logo-monochrome.jpg")}
              style={Styles.homeLogo}
            />
          </Pressable>
        </View>

        {/* Heading */}

        <View style={Styles.homeHeadingContainer}>
          <Text style={Styles.homeHeading}>ROI HR Management System</Text>
        </View>
        
        {/* Buttons */}

        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="View All Staff"
            type="minor"    // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showViewAllStaff}
            buttonStyle={Styles.homeButton}
          />
          <MyButton
            text="Settings"
            type="minor"    // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showSettings}
            buttonStyle={Styles.homeButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}