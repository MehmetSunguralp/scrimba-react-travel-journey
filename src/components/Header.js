import Logo from '../images/logo.svg';

export default function Header() {
	return (
		<header>
			<img src={Logo} />
			<h1 className="title">my travel journal.</h1>
		</header>
	);
}
