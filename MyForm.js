import React, {useState} from 'react';
import { Input, Stack, FormControl, Box, Badge } from 'native-base';
import { Text, Button, Alert} from 'react-native';

export default function MyForm()  {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")


    const handleSubmit = () => {
    var emailValid = false;
    if(email.length == 0){
    setEmailError("Email is required");
    }
    else if(email.length < 6){
    setEmailError("Email should be minimum 6 characters");
    }
    else if(email.indexOf(' ') >= 0){
    setEmailError('Email cannot contain spaces');
    }
    else{
    setEmailError("")
    emailValid = true
    }
    var passwordValid = false;
    if(password.length == 0){
    setPasswordError("Password is required");
    }
    else if(password.length < 6){
    setPasswordError("Password should be minimum 6 characters");
    }
    else if(password.indexOf(' ') >= 0){
    setPasswordError('Password cannot contain spaces');
    }
    else{
    setPasswordError("")
    passwordValid = true
    }
    if(emailValid && passwordValid){
    alert('Email: ' + email + '\nPassword: ' + password);
    setEmail("");
    setPassword("");
    }
    }

        
  return (
      <Box>
          {emailError.length > 0 &&
<Badge colorScheme="danger">
<Text>{emailError}</Text>
</Badge>}
    <FormControl>
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Enter Email</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Enter Email" onChangeText={text => setEmail(text)} value={email} />
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
        </Stack>
      </Stack>
    </FormControl>
    <Button onPress={handleSubmit}
      title="Learn More"
    />

    <Text>
    Email entered: {email}
    </Text>
    <Text>
    Password entered: {password}
    </Text>
    </Box>
  );
};
