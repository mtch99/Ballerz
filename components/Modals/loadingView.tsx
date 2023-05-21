import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../../views/styles';

export interface ILoadingModalProps {
	isVisible: boolean;
}

export function LoadingModalView(props: ILoadingModalProps){
	return(
		<Modal 
			isVisible={props.isVisible} 
			style={{ 
				backgroundColor: 'rgba(0, 0, 0, 0.5)', 
				margin: 0, 
				justifyContent: 'center' 
			}}
		>
			<ActivityIndicator
                size="large"
                color={globalStyles.global.logoColor}
			/>
		</Modal>
	)
}