import React from "react"
import { Button, SafeAreaView } from "react-native"
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Screen } from "react-native-screens";

type Props = {
    navigation: DrawerNavigationProp<any, any>;
  };
  
  const MyComponent: React.FC<Props> = ({ navigation }) => (
    <SafeAreaView>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="To Actions" onPress={() => {
        navigation.navigate("Tabs", {Screen:"Actions" });
      }}/>
    </SafeAreaView>
  );
  
  export default MyComponent;