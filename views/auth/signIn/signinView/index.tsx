import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Logo from "../../../../assets/BallerzIcon.svg"
import { globalStyles } from '../../../styles';
import BallerzSafeAreaView from '../../../safeArea';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface ISigninViewProps {
    onEmailInputChange: (input: string) => void;
    onPasswordInputChange: (input: string) => void;
    error: string | undefined;
    placeholders: {
        emailInput?: string 
    }
    onPressSignin(): void
    onPressCreateAccount(): void
}

export default function Yannick_SigninView(props: ISigninViewProps) {
	const logo = "BALLERZ";
	const login = "Connectez-vous";
	const texted = "Or continue with";
	const logIn = "Connexion";
	const Google = "Google";
	const Facebook = "Facebook"
	// const footerText = "Don't have account? "
	const footerText = "Nouveau baller?"
	const createNow = "Inscris toi en 1 minute!";
	// const createNow = "Create now";

  return (
        <BallerzSafeAreaView>
			
			<KeyboardAvoidingView
                style={styles.container}
			>
            		<View style={styles.logoContainer}>
						<TouchableWithoutFeedback 
							style={styles.logoContainer}
							onPress={() => Keyboard.dismiss()}
						>
							<Logo width={400} height={400}/>
						</TouchableWithoutFeedback>
            		</View>
					

        		<View style={styles.loginContainer}>
          			<View style={styles.loginBox}>
          				<Text style={{color: '#bfbfc4', paddingLeft: 15, fontSize:14, fontWeight: '300'}}>Email</Text>
          				<TextInput
          				  style={styles.input}
          				  placeholder="email@yahoo.com"
          				  placeholderTextColor='#94a3b8'
          				  keyboardType="email-address"
          				  onChangeText={(input) => {props.onEmailInputChange(input)}}
          				 />

        				<TextInput
        			    style={styles.input}
        			    	placeholder="Password"
        			    	placeholderTextColor='#94a3b8'
        			    	keyboardType='visible-password'
        			    	secureTextEntry={true}
							onChangeText={(input) => {props.onPasswordInputChange(input)}}
        				/>
        				<TouchableOpacity
        				  style={styles.buttonLogin}
        				  onPress={() => {

						  }}
        				>
        				    <Text style={{color: 'white', fontSize: 15}}>{logIn}</Text>
        				</TouchableOpacity>

        				<View
						style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}
						>
							<Text style={styles.footer}>
        					    {footerText + '  '}
        					</Text>
							<TouchableOpacity
            	                onPress={() => {props.onPressCreateAccount()}}
            	            >
        						<Text style={styles.footerCreate}>{createNow}</Text>
							</TouchableOpacity>
						</View>


        			</View>

        		</View>
			</KeyboardAvoidingView>
        </BallerzSafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
	flexGrow: 1,
    backgroundColor: globalStyles.global.screenBackGroundColor,
  },
  logoContainer: {
	flex: 1,
    backgroundColor: globalStyles.global.screenBackGroundColor,
  },

  links: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#263144',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
  },

  buttonLogin: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#e78b2f',
    borderRadius: 5,
    padding: 10,
  },

  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    color: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'gray',
    padding: 10,
  },

  H1: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
   },

   H1Login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
   },

   footer: {
    // paddingTop: 20,
    // textAlign: 'center',
    color: '#94a3b8',
    fontSize: 15,
   },

   footerCreate: {
    color: '#e78b2f',
    fontWeight: 'bold',
	fontSize: 15
   },

  loginContainer: {
    flex: 1.5,
    alignItems: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: globalStyles.global.screenBackGroundColor,
  },

  loginBox: {
    paddingTop: 40,
    width: '85%',
    height: '70%',
  },

});
