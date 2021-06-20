import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import { NewsCard } from "../components/NewsCard";




class NewsScreen extends Component {

    state = {

    }
    
    componentDidMount() {
        console.log(this.props);
        this.props.fetchNews();
    }

    render() {

        return (
            <View style={styles.news}>
                <NewsCard />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    news:{
        paddingTop: 20,
        paddingHorizontal: 0
    }
})


const mapState = (state) => ({
    news: state.News,
    count: state.count
})

const mapDispatch = (dispatch) => ({
    fetchNews: () => dispatch.News.fetchNews(),
})


export default connect(
    mapState,
    mapDispatch
)(NewsScreen);