import React, { Component } from 'react'
import { List, ListItem } from 'react-native-elements'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { getIdeas } from '../actions';
import _ from 'lodash';

class IdeaList extends Component {
    componentDidMount() {
        this.props.getIdeas();
    }

    renderList() {
        return this.props.ideas.map((idea) => {
            return (
                <ListItem
                    key={idea.id}
                    title={idea.title}
                    leftIcon={{name: 'ligtbulb-outline'}}
                />
        )
     })
    }
  render() {
    return (
      <List>
          {this.renderList()}
      </List>
    )
  }
}

function mapStateToProps(state) {
    const ideas = _.map(state.ideas, (val, id) => {
        val['id'] = id;
        return val;
    });
    return { ideas };
}

export default connect(mapStateToProps, { getIdeas })(IdeaList);