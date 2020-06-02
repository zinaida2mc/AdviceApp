import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import axios from 'axios';

import {styles} from './styles';

export const API = 'https://api.adviceslip.com/advice';

const Home = () => {
  const [advice, setAdvice] = useState('');

  const getAdvice = useCallback(async () => {
    axios.get(API).then((res) => setAdvice(res.data.slip.advice));
  }, []);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  const onGetNewAdvice = useCallback(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <>
      {/*helps with displaying tab bar in ios on dark mode*/}
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView style={styles.scrollView}>
        <View style={{...styles.root}}>
          <View>
            <Text h4>Your Advice:</Text>
            <Text h2 style={styles.advice}>
              {advice}
            </Text>
          </View>
          <Button
            title={'Get another advice!'}
            onPress={onGetNewAdvice}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
