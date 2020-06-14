import styles from './button.module.scss';

interface Props {
	disabled: boolean;
	className: boolean;
}

export const Button: React.FunctionComponent<Props> = (props) => {
	const { children, className } = props;
	return (
		<button className={`${styles.button} ${className}`}>{children}</button>
	)
}
