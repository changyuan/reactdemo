/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  Navigator
} from 'react-native';

class reactdemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
            测试一下啊
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        }
        return (
            <View style={styles.container}>
                <Image source={pic} style={{width: 193, height: 110}} />
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}! </Text>
        );
    }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}


class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText:true };

        setInterval(()=>{
            this.setState({ showText: !this.state.showText});
        },2000)
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        let color = this.props.style;
        return (
                <Text style={color}>{display}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Blink style={styles.red} text='I love to blink' />
                <Blink style={styles.blue} text='Yes blinking is so great' />
                <Blink style={styles.orange} text='Why did they ever take this out of HTML' />
                <Blink style={styles.purple} text='Look at me look at me look at me' />
            </View>
        );
    }
}


class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems:'flex-end'}}>
        <View style={{flex:1,height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex:2,height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex:1,height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class FlexDimensionsBasics extends Component {
  render() {
    return (
      // 试试去掉父View中的`flex: 1`。
      // 则父View不再具有尺寸，因此子组件也无法再撑开。
      // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};


class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class ScrollviewDemo extends Component {
  render() {
      return(
        <ScrollView>
          <Text style={{fontSize:20}}>Scroll me plz</Text>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Text style={{fontSize:20}}>If you like</Text>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Text style={{fontSize:20}}>Scrolling down</Text>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Text style={{fontSize:20}}>Whats the best</Text>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Text style={{fontSize:20}}>Framework around?</Text>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Image source={require('./cat.jpg')} style={{width:200,height:220}}/>
          <Text style={{fontSize:30}}>React Native</Text>
        </ScrollView>
    );
  }
}

class ListViewBasics extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John','Joel','James','Jimmy','Jackson','Jillian','Joel','Julie','Devin','List','Atom'
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView dataSource={this.state.dataSource} renderRow={(rowData) =>  <Text>{rowData}</Text>} />
            </View>
        );
    }
}

class FetchDemo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var promise = fetch('http://',{
            method: 'Get',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                'period':'-1'
            })
        });

        return (
            <View style={styles.container}>
                <Text></Text>
            </View>
        );
    }
}



import MyScene from './MyScene';
class YoDawgApp extends Component {
    render() {
      return (
        <Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <MyScene
              title={route.title}

              // Function to call when a new scene should be displayed
              onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

              // Function to call to go back to the previous scene
              onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
            />
          }
        />
      )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
     color: 'red',
  },
  blue: {
     color: 'blue',
  },
  orange: {
     color: 'orange',
  },
  purple: {
     color: 'purple',
 },
});

AppRegistry.register
AppRegistry.registerComponent('reactdemo', () => YoDawgApp);
