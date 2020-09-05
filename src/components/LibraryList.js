import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View} from 'react-native';

class LibraryList extends Component {
    render() {
debugger;
        console.log(this.props);
        return (
            <View>
                <Text>{this.props.libraries[0].title}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};


export default connect(mapStateToProps)(LibraryList);