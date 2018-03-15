import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import {Icon, Divider} from 'react-native-elements'
import UselessTextInput from '../../components/UselessTextInput'

class DialogItemHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveIcon: false,
    };
  }

  render () {
    return (
      <View style={styles.dialogItemHead}>
        <Image
          style={styles.avatar}
          source={require('./avatar.jpg')}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>PAIJO</Text>
          <Text style={styles.dialogTime}>今天 13:40</Text>
        </View>
        <View style={styles.dialogToolbar}>
          <Icon
            name="chat-bubble-outline"
            color="#666"
            iconStyle={{marginRight: 20}}
          />
          <Icon
            name={this.state.isActiveIcon ? 'favorite' : 'favorite-border'}
            color={this.state.isActiveIcon ? '#f00' : '#666'}
            iconStyle={{marginRight: 5}}
            onPress={() => {
              this.setState({isActiveIcon: !this.state.isActiveIcon})
            }}
          />
        </View>
      </View>
    )
  }
}

class DialogItemText extends Component {
  render () {
    return (
      <View>
        <Text style={styles.dialogText}>
          某一年回国，亲戚聚会吃饭。
          席间，亲戚C发问说"出去了也好几年了，怎么样生活还习惯么，语言应该很棒了吧。“
          我刚想说话，亲戚A就说”肯定的咯，语言嘛，生活在国外自然而然就会变好的."
          亲戚B在傍边搭腔说“是的呀，这种嘛，也不难的嘛”
          我全程在旁边观看，脸上微笑，心里默默骂了N边脏话。
          PS：亲戚A和亲戚B都没在国外生活过。
        </Text>
      </View>
    )
  }
}

class DialogListItem extends Component {
  render() {
    const {dialog} = this.props
    return (
      <Text style={styles.dialogListItem}>
        <Text style={styles.dialogUserColor}>{dialog.userName}</Text>
        {/*回答*/}
        {/*<Text style={styles.dialogUserColor}> {dialog.toUserName} </Text>*/}
        ：
        <Text> {dialog.content}</Text>
      </Text>
    )
  }
}

class DialogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      sendMsgBtnHidden: true,
      dialogList: [{
        userName: 'Tom',
        toUserName: 'PAIJO',
        content: '哈哈哈哈，这个逼装大了'
      }, {
        userName: 'DAS',
        toUserName: 'PAIJO',
        content: '太逗了'
      }]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <DialogItemHead />
        <DialogItemText />
        <Divider style={{height: 1, backgroundColor: '#ddd'}}/>
        <View style={styles.dialogList}>
          {this.state.dialogList.map((dialog, index) =>
            <DialogListItem key={index.toString()} dialog={dialog} />)
          }
        </View>
        <View style={styles.sendMsgContainer}>
          <View style={[styles.uselessTextInputContainer/**, {backgroundColor: this.state.text}**/]}>
            <UselessTextInput
              multiline={true}
              numberOfLines={1}
              value={this.state.text}
              style={{padding: 2}}
              onChangeText={(text) => this.setState({text})}
            />
          </View>
          <Button
            style={styles.sendMsgBtn}
            title="发送"
            onPress={() => {
            }}
          />
        </View>
      </View>
    )
  }
}

export default class DialogItemList extends Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <View key={number.toString()}>
        <Divider style={{height: 10, backgroundColor: '#efefef'}}/>
        <DialogItem/>
      </View>
    );
    return (
      <View>
        {listItems}
        <Divider style={{height: 10, backgroundColor: '#efefef'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
    // marginTop: 10,
  },
  dialogItemHead: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  username: {
    color: '#333',
  },
  dialogTime: {
    fontSize: 10,
  },
  dialogText: {
    paddingBottom: 10,
    lineHeight: 20,
    fontSize: 14,
    color: '#333',
  },
  dialogToolbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dialogList: {
    marginTop: 10,
    marginBottom: 10,
  },
  dialogListItem: {
    color: '#333'
  },
  dialogUserColor: {
    color: '#488aff'
  },
  sendMsgContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
  },
  uselessTextInputContainer: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    flexGrow: 2,
    marginRight: 5,
  },
  sendMsgBtn: {
    // marginLeft: 10,
    // flexGrow: 1,
  }
});