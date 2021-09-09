import React from 'react'
import {observer} from 'mobx-react-lite';
import {Text} from 'react-native';
import {useStores} from '../hooks/use-stores';

const Test = observer(() => {
  const {testStore} = useStores();
  return (
    <>
      <Text>{testStore.count}</Text>
    </>
  )
})

export default Test;