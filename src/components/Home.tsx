import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

import {fetchData} from '../utils/fetch-data';

import {styles} from './styles';

const Home = () => {
  const [advice, setAdvice] = useState('');

  const getAdvice = useCallback(async () => {
    const data = await fetchData();

    // this line is not covered
    setAdvice(data.advice);
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
