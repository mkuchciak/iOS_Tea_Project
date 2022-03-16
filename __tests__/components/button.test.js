import React from 'react';
import {create, act} from 'react-test-renderer';
import TimerScreen from '../../screens/TimerScreen';


it('button title', () => {
    
    const tree = create(<TimerScreen/>)
    const button = tree.root.findByProps({testId: 'button'}).props;
    expect(button.title).toEqual('START');
})

it('button text after button press', () => {
    const tree = create(<TimerScreen/>)
    const button = tree.root.findByProps({testId: 'button'}).props;
    act(() => button.onPress());
    
    const text = tree.root.findByProps({testId: 'myTEXT'}).props;
    expect(text.children).toEqual('STOP');
})

jest.useFakeTimers();