import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
// @ts-ignore
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BallerzSafeAreaView from '../../safeArea';
import { globalStyles } from '../../styles';
import { color } from 'react-native-reanimated';

export interface ISignupViewProps {
		onEmailInputChange: (input: string) => void;
		onPasswordInputChange: (input: string) => void;
		onConfirmPasswordInputChange(input: string): void;
		error: string | undefined;
		placeholders: {
				emailInput?: string 
		}
		onPressSignup(): void
		onPressSignIn(): void
}

export default function SignupView(props: ISignupViewProps) {
	const logo = "BALLERZ";
	const signUpButtonText = "Inscription";
	// const footerText = "Don't have account? "
	const footerText = "Vous possédez déjà un compte?"
	const goToSignupText = "Connectez vous";
	// const createNow = "Create now";

	return (
		<BallerzSafeAreaView>
			<KeyboardAvoidingView
				style={styles.container}
			>
				<View
						style={{flexGrow:1, justifyContent: 'flex-end', marginTop: 10, paddingBottom:15}}
					>
						<TouchableWithoutFeedback 
							style={{flexGrow:1,justifyContent: "flex-end", alignItems: "center"}}
							onPress={() => Keyboard.dismiss()}
						>
							<Image
								source={require('../../../assets/BallerzIconCopy.png')}
								resizeMode='stretch'
								style={{width:150, height:150}}
							/>			
						</TouchableWithoutFeedback>
				</View>		

				<View style={styles.loginContainer}>

					<TouchableWithoutFeedback 
						style={{justifyContent: "flex-end", alignItems: "center",}}
						onPress={() => Keyboard.dismiss()}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "600",
								fontSize: 34,
								fontStyle:"italic",
								padding: 10,
								marginHorizontal: 10,
							}}
						>
							Crées ton compte
						</Text>
					</TouchableWithoutFeedback>

					<View style={{}}>
						<Text style={styles.inputTitle}>Email</Text>
						<TextInput
							style={styles.input}
							placeholder="email@yahoo.com"
							placeholderTextColor='#94a3b8'
							keyboardType="email-address"
							onChangeText={(input) => {props.onEmailInputChange(input)}}
							autoCapitalize='none'
							autoCorrect={false}
							autoComplete='email'
						/>

						<Text style={styles.inputTitle}>Mot de passe</Text>
						<TextInput
							style={styles.input}
							placeholder=""
							placeholderTextColor='#94a3b8'
							// keyboardType='visible-password'
							autoComplete='password'
							secureTextEntry={true}
							onChangeText={(input) => {props.onPasswordInputChange(input)}}
						/>

						<Text style={styles.inputTitle}>Confirmer le mot de passe</Text>
						<TextInput
							style={styles.input}
							placeholder=""
							placeholderTextColor='#94a3b8'
							keyboardType='visible-password'
							secureTextEntry={true}
							// maxLength={10}
							onChangeText={(input) => {props.onConfirmPasswordInputChange(input)}}
						/>
										
						<TouchableOpacity
								style={styles.buttonLogin}
								onPress={() => {props.onPressSignup()}}
						>
								<Text style={{color: 'white', fontSize: 15}}>{signUpButtonText}</Text>
						</TouchableOpacity>
						{
							props.error?(
								<Text style={styles.errorMessage}>{props.error}</Text>
							):
							(<></>)
						}
						<View
							style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}
						>
							<Text style={styles.footer}>
								{footerText + '  '}
							</Text>
							<TouchableOpacity
								onPress={() => {props.onPressSignIn()}}
							>
								<Text style={styles.footerCreate}>{goToSignupText}</Text>
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
	  	backgroundColor: globalStyles.global.screenBackgroundColor,
		justifyContent: "space-between"
	},
	logoContainer: {		
		flexGrow: 1,
		width: 150,
		height: 150,
		alignItems: "center",
		justifyContent: "center",
	},	

	loginContainer: {
		flexGrow: 1,
		// alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: "white",
		paddingBottom: 100,
		// borderBottomWidth: 5,
		backgroundColor: globalStyles.global.screenBackgroundColor,
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
	  	// height: 3,
	  	margin: 7,
	  	borderWidth: 1,
	  	borderColor: 'transparent',
	  	borderBottomColor: 'gray',
	  	padding: 10,
	},	

	footer: {
		color: '#94a3b8',
		fontSize: 15,
	},	
	footerCreate: {
	 	color: '#e78b2f',
	 	fontWeight: 'bold',		
	 	fontSize: 15
	},

	errorMessage: {		
		fontSize: 15,		
		color: 'white'
	},

	inputTitle:{
		color: '#bfbfc4', 
		paddingLeft: 15,
		fontSize:14,
		fontWeight: '300',
		paddingTop: 12,
	},

});
