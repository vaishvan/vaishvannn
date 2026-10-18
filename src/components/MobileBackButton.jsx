import { useSafeBackNavigation } from "../lib/useSafeBackNavigation";
import backArrow from "../assets/back-arrow.svg";
import "./MobileBackButton.css";

export default function MobileBackButton({ onBeforeBack, label = "Back" }) {
	const { goBack } = useSafeBackNavigation("/");

	const handleBack = () => {
		onBeforeBack?.();
		goBack();
	};

	return (
		<button
			type="button"
			className="mobile-back-btn"
			onClick={handleBack}
			aria-label="Go back"
			title={label}>
			<img className="mobile-back-btn-arrow" src={backArrow} alt="" />
			<span className="mobile-back-btn-label">{label}</span>
		</button>
	);
}
