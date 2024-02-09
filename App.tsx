import * as Sentry from '@sentry/react-native';
import React from 'react';
import {View, Button} from 'react-native';

Sentry.init({
  dsn: 'https://d4d5ad48d094fdbb3cba24fbb88a2ead@o4506716538994688.ingest.sentry.io/4506716540436480', // Remplacer par votre DSN Sentry
});

const App = () => {
  const sendLog = () => {
    Sentry.captureMessage('Test Message from React Native', 'info');
  };
  const triggerError = () => {
    try {
      throw new Error('This is a test error from React Native');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  return (
    <View>
      <Button title="Send Log to Sentry" onPress={sendLog} />
      <Button title="Trigger Error" onPress={triggerError} />
    </View>
  );
};

export default App;
