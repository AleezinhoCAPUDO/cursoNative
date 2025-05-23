import React, {useState, useEffect }  from 'react';
import { View,
   Text,
    StyleSheet,
     TextInput,
      Platform,
      FlatList,
     } from 'react-native';
import { Button } from './src/components/Button';
import { SkillCard } from './src/components/SkillCard';


export default function App(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');


  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }
  



useEffect(() => {
    const currentHour = new Date().getHours();
    
    if(currentHour < 12){
        setGretting('Good morning');
    }
else if(currentHour >= 12 && currentHour < 18){
}else{
    setGretting('Good night');
}

}, [ ] )




  return (
    <>
    <View style={ styles.container }>
      <Text style={styles.title}>Bem vindo Cuzão</Text>
      
<Text style={styles.grettings}>
    Bom dia
    { gretting }
w
</Text>

    <TextInput 
      style={styles.input}
      placeholder='New Skill'
      placeholderTextColor= '#555'
      onChangeText={setNewSkill}
    
    />

<Button onPress= {handleAddNewSkill}/>



<Text style={[styles.title, {marginVertical: 50 }]}>
  My Skills
</Text>




<FlatList
  data={mySkills}
  keyExtractor={item => item}
  renderItem={({ item })=> (
    <SkillCard skill={item}/>
  )}
/>

    </View>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#121015',
      paddingHorizontal: 20,
      paddingVertical: 70,
  },
    title: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: '#1F1e25',
      color: '#FFF',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 10,
      marginTop: 30,
      borderRadius: 7
    },
    grettings: {
      color:'#FFF'
    },
});