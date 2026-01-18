import { View } from "react-native";
import PagerView from 'react-native-pager-view';
import ItemFirstComponent from "@/components/ItemFirstComponent";
import ItemSecondComponent from "@/components/ItemSecondComponent";
import ItemIndexComponent from "@/components/ItemIndexComponent";
import {userAuthenticated} from "@/hooks/auth/authUser";
import Home from "@/app/(tabs)/home";

export default function IndexScreen() {
    const userAuth = userAuthenticated();
    return ( userAuth
            ? <Home />
            : <PagerView style={{flex: 1}}>
                <View key="1">
                    <ItemIndexComponent />
                </View>
                <View className="justify-center items-center" key="2">
                    <ItemFirstComponent />
                </View>
                <View className="justify-center items-center" key="3">
                    <ItemSecondComponent />
                </View>
            </PagerView>

    )
}
