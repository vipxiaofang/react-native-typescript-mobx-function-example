import React from 'react'
import {observer} from 'mobx-react-lite';
import {Text, Button} from 'react-native';
import {useStores} from '../hooks/use-stores';

const User = observer(() => {
  const {userStore, testStore} = useStores();
  return (
    <>
      <Text>{userStore.name}</Text>
      <Button title="increment" onPress={() => testStore.increment()} />
      <Button title="decrement" onPress={() => testStore.decrement()} />
    </>
  )
})

export default User;