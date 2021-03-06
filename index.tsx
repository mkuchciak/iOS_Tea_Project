import React, { useEffect, useImperativeHandle, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Props } from './type';

const defaulProps = {
  style: {},
  textStyle: {},
  onTimes: (seconds: number) => { },
  onPause: (seconds: number) => { },
  onEnd: (seconds: number) => { },
};

let interval: any = null;
let hours = 0;
let minute = 0;
let seconds = 0;
let currentSeconds = 0;

const CountdownComponent = React.forwardRef((props: Props, ref) => {
  const { initialSeconds, style, textStyle, fontFamily, autoStart = false, onEnd, onTimes, onPause } = props;
  const [key, setKey] = useState(Math.random());

  useImperativeHandle(ref, () => {
    return { start, pause, resume, stop };
  });

  useEffect(() => {
    init();
    return () => {
      pause();
      init();
    }
  }, [initialSeconds]);

  useEffect(() => {
    if (autoStart) {
      start();
    }
  }, [autoStart]);

  const init = () => {
    if (initialSeconds) {
      currentSeconds = initialSeconds;
      hours = ~~(currentSeconds / 3600);
      minute = ~~((currentSeconds % 3600) / 60);
      seconds = ~~currentSeconds % 60;
    }
    clear();
    setKey(Math.random());
  };


  const timer = () => {
    interval = setInterval(() => {
      if (currentSeconds > 0) {
        currentSeconds = currentSeconds - 1;
        hours = ~~(currentSeconds / 3600);
        minute = ~~((currentSeconds % 3600) / 60);
        seconds = ~~currentSeconds % 60;

        if (onTimes) {
          onTimes(currentSeconds);
        }

      }
      if (currentSeconds <= 0) {
        if (onEnd) {
          onEnd(currentSeconds);
        }
        clear();
      }
      setKey(Math.random());
    }, 1000);
  };

  const start = () => {
    init();

    if (!interval) {
      timer();
    }
  };

  const pause = () => {
    if (onPause) {
      onPause(currentSeconds);
    }
    clear();
  };

  const resume = () => {
    if (!interval) {
      timer();
    }
  };

  const stop = () => {
    if (onEnd) {
      onEnd(currentSeconds);
    }

    init();
    clear();
  };

  const clear = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  const font = () => {
    if (fontFamily) {
      return {
        fontFamily: fontFamily
      }
    } else {
      return {}
    }
  };


  //modyfikacja biblioteki
  const renderTimer = () => {
    if (hours > 0) {
      //return <Text style={[styles.text, textStyle, font()]}>{`${hours}:${minute.toString().length === 1 ? '0' : ''}${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</Text>
      //return <TextInput style={[textStyle, font()]} placeholder='03:30' maxLength={5}  >{`${hours}:${minute.toString().length === 1 ? '0' : ''}${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</TextInput>
    } else {
      if (minute > 0) {
        //return <Text style={[styles.text, textStyle, font()]}>{`${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</Text>
        //return <TextInput style={[styles.time, textStyle, font()]} placeholder='03:30' keyboardType = 'numeric' maxLength={5}>{`${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</TextInput>
        if (minute < 10)  
        //tu
          return <Text style={[textStyle, font()]}>{`0${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</Text>
          //return <TextInput style={[textStyle, font()]} placeholder='03:30' maxLength={5} onChangeText={text => setText(text)} onEndEditing={onEnd}>{`0${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</TextInput>
        else
          return <Text style={[textStyle, font()]}>{`${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</Text>
          //return <TextInput style={[textStyle, font()]} placeholder='03:30' maxLength={5} >{`${minute}:${seconds.toString().length === 1 ? '0' : ''}${seconds}`}</TextInput>
      } else {
        if (seconds < 10)
          return <Text style={[textStyle, font()]}>{`00:0${seconds}`}</Text>
          //return <TextInput style={[textStyle, font()]} placeholder='03:30' maxLength={5}  >{`00:0${seconds}`}</TextInput>
        else
          return <Text style={[textStyle, font()]}>{`00:${seconds}`}</Text>
          // return <TextInput style={[textStyle, font()]} placeholder='03:30' maxLength={5}  >{`00:${seconds}`}</TextInput>
      }
    }
  }

  return (
    <View style={style} key={key}>
      {renderTimer()}
    </View>
  );
});

CountdownComponent.defaultProps = defaulProps;

export default CountdownComponent;
