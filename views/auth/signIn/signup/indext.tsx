import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
// @ts-ignore
import Logo from "../../../../assets/BallerzIcon.svg"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import BallerzSafeAreaView from '../../../safeArea';
import { globalStyles } from '../../../styles';
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
	const login = "Connectez-vous";
	const texted = "Or continue with";
	const signUp = "Inscription";
	const Google = "Google";
	const Facebook = "Facebook"
	// const footerText = "Don't have account? "
	const footerText = "Vous possédez déjà un compte?"
	const createNow = "Connectez vous";
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
									autoCapitalize='none'
									autoCorrect={false}
									autoComplete='email'
								 />
							<TextInput
								style={styles.input}
								placeholder="Mot de passe"
								placeholderTextColor='#94a3b8'
								keyboardType='visible-password'
								secureTextEntry={true}
								onChangeText={(input) => {props.onPasswordInputChange(input)}}
							/>
							<TextInput
								style={styles.input}
								placeholder="Confirmez votre mot de passe"
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
									<Text style={{color: 'white', fontSize: 15}}>{signUp}</Text>
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

	errorMessageContainer: {
		marginTop: 30
	},

	errorMessage: {
		fontSize: 15,
		color: 'white'
	}

});
