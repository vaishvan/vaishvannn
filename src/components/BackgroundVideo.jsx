import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo({
	src,
	muted = true,
	className = "",
	style,
}) {
	const videoRef = useRef(null);
	const [isVideoReady, setIsVideoReady] = useState(false);

	useEffect(() => {
		setIsVideoReady(false);
	}, [src]);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		video.loop = true;
		video.playsInline = true;
		video.defaultMuted = true;
		video.muted = muted;
		const markReady = () => setIsVideoReady(true);
		const markLoading = () => setIsVideoReady(false);

		const applyDesiredMute = () => {
			// Chrome pauses the video if it is unmuted before any click/keypress.
			if (!muted && navigator.userActivation?.hasBeenActive === false) return;
			video.muted = muted;
		};

		const tryPlay = () => {
			video.muted = true;
			video
				.play()
				.then(() => {
					applyDesiredMute();
				})
				.catch(() => {
					// Autoplay can be blocked on some browsers until user interaction.
				});
		};

		const ensureLoopingPlayback = () => {
			if (video.ended) {
				video.currentTime = 0;
				tryPlay();
				return;
			}
			if (video.paused && !document.hidden) {
				tryPlay();
			}
		};

		const syncAudioAfterGesture = () => {
			if (muted) {
				video.muted = true;
				return;
			}
			if (video.paused) {
				tryPlay();
				return;
			}
			applyDesiredMute();
		};

		tryPlay();
		video.addEventListener("playing", markReady);
		video.addEventListener("playing", applyDesiredMute);
		video.addEventListener("canplay", tryPlay);
		video.addEventListener("loadeddata", tryPlay);
		video.addEventListener("waiting", markLoading);
		video.addEventListener("error", markLoading);
		video.addEventListener("stalled", markLoading);
		video.addEventListener("ended", ensureLoopingPlayback);
		video.addEventListener("pause", markLoading);
		window.addEventListener("pointerdown", syncAudioAfterGesture);
		window.addEventListener("keydown", syncAudioAfterGesture);
		window.addEventListener("touchstart", syncAudioAfterGesture, {
			passive: true,
		});

		const onVisibilityChange = () => {
			if (!document.hidden) ensureLoopingPlayback();
		};

		document.addEventListener("visibilitychange", onVisibilityChange);

		return () => {
			video.removeEventListener("playing", markReady);
			video.removeEventListener("playing", applyDesiredMute);
			video.removeEventListener("canplay", tryPlay);
			video.removeEventListener("loadeddata", tryPlay);
			video.removeEventListener("waiting", markLoading);
			video.removeEventListener("error", markLoading);
			video.removeEventListener("stalled", markLoading);
			video.removeEventListener("ended", ensureLoopingPlayback);
			video.removeEventListener("pause", markLoading);
			window.removeEventListener("pointerdown", syncAudioAfterGesture);
			window.removeEventListener("keydown", syncAudioAfterGesture);
			window.removeEventListener("touchstart", syncAudioAfterGesture);
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	}, [src, muted]);

	return (
		<div
			style={{
				position: "absolute",
				inset: 0,
				pointerEvents: "none",
				overflow: "hidden",
				// Plain white until the video is actually playing.
				background: "#ffffff",
			}}>
			<video
				ref={videoRef}
				src={src}
				autoPlay
				loop
				muted={muted}
				playsInline
				preload="auto"
				className={className}
				style={{
					pointerEvents: "none",
					opacity: isVideoReady ? 1 : 0,
					transition: "opacity 300ms ease",
					...style,
				}}
			/>
		</div>
	);
}
