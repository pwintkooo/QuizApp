import React,{useState} from 'react';
import {ScrollView, Text, Image, View, Button, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";

const Quiz = ({question, choices, image, onSelect}) => {
    return (
        <View style={{marginTop: 20, marginLeft:5, marginRight: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 5}}>{question}</Text>
            <Image source={image} style={{width:'100%', height:300}}/>
            <RNPickerSelect
                onValueChange={onSelect}
                items={choices}
                placeholder={{label: 'Make a choice'}}
                style = {{
                    placeholder: {fontSize: 16}
                }}
            />
        </View>
    )
}

const App = () => {
    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');

    const correctAnswer = {
        q1: 'Golden Gate Bridge',
        q2: 'El Nido, Palawan Beach',
        q3: 'Montreal Botanical Garden',
        q4: 'Venezuela',
        q5: 'Norway'
    };

    const handleSubmit = () => {
        let score = 0;
        if (q1 === correctAnswer.q1) score++;
        if (q2 === correctAnswer.q2) score++;
        if (q3 === correctAnswer.q3) score++;
        if (q4 === correctAnswer.q4) score++;
        if (q5 === correctAnswer.q5) score++;

        if (score === 1) {
            Alert.alert(`You got ${score} point. Try better next time!`)
        } else if (score === 2 || score === 3) {
            Alert.alert(`You got ${score} point. Nice try!`)
        } else if (score === 4) {
            Alert.alert(`You got ${score} point. Almost there!`)
        } else if (score === 5) {
            Alert.alert(`You got ${score} point. Awesome!`)
        }

    }

  return (
      <ScrollView>
          <Text>{'\n'}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'green', marginLeft:5, marginRight: 5}}>Welcome to Quiz Session <Icon name='trophy' size={20}/></Text>
        <Quiz
            question = 'What bridge is this?'
            image = {require('./img/goldengate.jpeg')}
            choices = {[
                {label: 'Rialto Bridge', value: 'Rialto Bridge'},
                {label: 'Brooklyn Bridge', value: 'Brooklyn Bridge'},
                {label: 'Golden Gate Bridge', value: 'Golden Gate Bridge'},
                {label: 'Sydney Harbour Bridge', value: 'Sydney Harbour Bridge'}
            ]}
            onSelect={setQ1}
        />
          <Quiz
              question = 'What beach is this?'
              image = {require('./img/palawan.jpg')}
              choices = {[
                  {label: 'El Nido, Palawan Beach', value: 'El Nido, Palawan Beach'},
                  {label: 'Matira Beach', value: 'Matira Beach'},
                  {label: 'Hawaii Beach', value: 'Hawaii Beach'},
                  {label: 'Bondi Beach', value: 'Bondi Beach'}
              ]}
              onSelect={setQ2}
          />
          <Quiz
              question = 'What garden is this?'
              image = {require('./img/montreal.jpeg')}
              choices = {[
                  {label: 'Montreal Botanical Garden', value: 'Montreal Botanical Garden'},
                  {label: 'New YorkBotanical Garden', value: 'New YorkBotanical Garden'},
                  {label: 'Vallarta Botanical Garden', value: 'Vallarta Botanical Garden'},
                  {label: 'Kirstenbosch National Botanical Garden', value: 'Kirstenbosch National Botanical Garden'}
              ]}
              onSelect={setQ3}
          />
          <Quiz
              question = "In which country is the highest waterfall 'Angel Falls' located?"
              image = {require('./img/angelfalls.jpeg')}
              choices = {[
                  {label: 'Peru', value: 'Peru'},
                  {label: 'Venezuela', value: 'Venezuela'},
                  {label: 'Laos', value: 'Laos'},
                  {label: 'Argentina', value: 'Argentina'}
              ]}
              onSelect={setQ4}
          />
          <Quiz
              question = "Where can you see the Northern Lights?"
              image = {require('./img/northernlights.jpg')}
              choices = {[
                  {label: 'Japan', value: 'Japan'},
                  {label: 'Brazil', value: 'Brazil'},
                  {label: 'Australia', value: 'Australia'},
                  {label: 'Norway', value: 'Norway'},
              ]}
              onSelect={setQ5}
          />
          <Button title='SUBMIT ANSWERS' onPress={handleSubmit}/>
      </ScrollView>
  );
};

export default App;
