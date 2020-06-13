import styles from './button.module.scss';

interface Props {
	disabled: boolean;
	bold: boolean;
}

export const Button: React.FunctionComponent<Props> = (props) => {
	const {children} = props;
	const {className} = props;
	return (
		<button className={`${styles.button} ${className}`}>{children}</button>
	)
}
