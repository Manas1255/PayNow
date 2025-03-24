import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {onBoardingIcon1, onBoardingIcon2, onBoardingIcon3} from '../assets';
import {OnboardingStackParams} from '../OnboardingStack';
import {color, textSize, textWeight} from '../utils/theme';

type OnboardingScreenProps = NativeStackScreenProps<
  OnboardingStackParams,
  'OnboardingScreen'
>;

const OnboardingScreen: FC<OnboardingScreenProps> = ({navigation}) => {
  const {
    container,
    header,
    bottomContainer,
    pageCountContainer,
    pageSelection,
    getStartedButton,
  } = styles;

  const [stepCount, setStepCount] = useState(1);

  const onSkipPress = () => {
    setStepCount(stepCount + 1);
  };

  return (
    <SafeAreaView style={container}>
      <View style={header}>
        {stepCount <= 2 && (
          <Text style={{fontSize: textSize.h4}}>{stepCount}/3</Text>
        )}
        <TouchableOpacity onPress={onSkipPress}>
          <Text style={{fontSize: textSize.h4, color: color.blue}}>Skip</Text>
        </TouchableOpacity>
      </View>

      {stepCount === 1 && (
        <>
          <Image source={onBoardingIcon1} />

          <View style={bottomContainer}>
            <Text
              style={{
                fontSize: textSize.h4,
                fontWeight: textWeight.bold,
              }}>
              Add all accounts & Manage
            </Text>
            <Text style={{marginTop: 8, textAlign: 'center'}}>
              You can add all acconts in one place and use it to send and
              request
            </Text>
          </View>

          <View style={pageCountContainer}>
            <View style={[pageSelection, {backgroundColor: color.blue}]} />
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
          </View>
        </>
      )}

      {stepCount === 2 && (
        <>
          {' '}
          <Image source={onBoardingIcon2} />
          <View style={bottomContainer}>
            <Text
              style={{
                fontSize: textSize.h4,
                fontWeight: textWeight.bold,
              }}>
              Track your activity
            </Text>

            <Text style={{marginTop: 8, textAlign: 'center'}}>
              You can track your income, expenses activities and all statistics
            </Text>
          </View>
          <View style={pageCountContainer}>
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
            <View style={[pageSelection, {backgroundColor: color.blue}]} />
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
          </View>
        </>
      )}

      {stepCount === 3 && (
        <>
          <Image source={onBoardingIcon3} />
          <View style={bottomContainer}>
            <Text
              style={{
                fontSize: textSize.h4,
                fontWeight: textWeight.bold,
              }}>
              Send & request payments
            </Text>

            <Text style={{marginTop: 8, textAlign: 'center'}}>
              You can send or receive any payments from your accounts.
            </Text>
          </View>
          <View style={pageCountContainer}>
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
            <View style={[pageSelection, {backgroundColor: color.grey}]} />
            <View style={[pageSelection, {backgroundColor: color.blue}]} />
          </View>

          <TouchableOpacity style={getStartedButton}>
            <Text style={{color: color.white}}>Get started</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 32, alignItems: 'center'},
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.3,
  },
  bottomContainer: {alignItems: 'center', width: '80%'},
  pageCountContainer: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  pageSelection: {
    width: 15,
    height: 5,
    borderRadius: 2.5,
  },
  getStartedButton: {
    width: '100%',
    backgroundColor: color.blue,
    height: 50,
    borderRadius: 15,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;
