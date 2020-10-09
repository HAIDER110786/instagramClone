import React from 'react'
import { View, ScrollView } from 'react-native';
import Header from './header';
import Statusbar from './statusbar';
import Posts from './posts';

const Home = () => {
    return (
        <>      
            <Header/>
            <ScrollView>
                <Statusbar/>
                <Posts/>
                <Posts/>
                <Posts/>
            </ScrollView>
        </>
    )
}

export default Home;
