import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSafeBackNavigation(fallbackPath = "/") {
	const navigate = useNavigate();
	const location = useLocation();

	const goBack = useCallback(() => {
		// "default" = first page loaded in this app; history -1 would leave the site.
		if (location.key !== "default") {
			navigate(-1);
			return;
		}

		navigate(fallbackPath, { replace: true });
	}, [fallbackPath, location.key, navigate]);

	return { goBack };
}
