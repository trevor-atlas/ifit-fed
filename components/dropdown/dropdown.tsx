import { useState } from 'react';
import styles from './dropdown.module.scss';

class DropdownItem {
	constructor(
		public label: string,
		public value: string
	) {
	}
}

interface Props {
	items: DropdownItem[]
}

export const Dropdown: React.FunctionComponent<Props> = (props) => {
	const {items} = props;
	const [visible, setVisible] = useState(false);
	const [selected, setSelected] = useState('English');

	const toggleDropdown = () => {
		setVisible(!visible);
	}

	const showDropdownMenu = (event) => {
		setVisible(true);
	};

	const hideDropdownMenu = () => {
		setVisible(false);
	};

	const selectItem = (val: string) => () => {
		setSelected(val);
		hideDropdownMenu();
	}

	return (
		<div className={`${styles.dropdown} md:self-start`}>
			<div className={`${styles.button} flex`} onClick={toggleDropdown}>
				<span className="mr-2">{selected}</span>
				<img src="/line-down.svg" alt=""/>
			</div>
			{visible ? (
				<ul className={`${styles.menu} flex flex-col-reverse `}>
					{items.map((item, i) => (
						item.label !== selected && <li
							key={i}
							className={selected === item.label ? 'active' : 'inactive'}
							onClick={selectItem(item.label)}
						>{item.label}</li>
					))}
				</ul>
			) : null
			}
		</div>
	);
};

Dropdown.defaultProps = {
	items: [
		new DropdownItem('English', 'EN'),
		new DropdownItem('German', 'DE'),
		new DropdownItem('French', 'FR'),
		new DropdownItem('Spanish', 'ES'),
		new DropdownItem('Chinese', 'ZH'),
		new DropdownItem('Japanese', 'JA')
	]
}
