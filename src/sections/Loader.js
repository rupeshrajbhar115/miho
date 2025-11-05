// MODULES //
import { useState, useEffect } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/sections/Loader.module.scss";

// IMAGES //

// DATA //

/** Loader Section */
export default function Loader() {
	const [progress, setProgress] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [fullyLoaded, setFullyLoaded] = useState(false); // for fade-out timing

	useEffect(() => {
		let interval;
		let isPageLoaded = false;

		/** updateProgress */
		const updateProgress = () => {
			setProgress((prev) => {
				if (!isPageLoaded) {
					if (prev < 95) return prev + Math.random() * 3;
					return prev;
				} else {
					// ✅ After page load, continue until it reaches 100%
					if (prev < 100) return prev + (100 - prev) * 0.1;
					return 100;
				}
			});
		};

		// Run progress every 100ms (smooth animation)
		interval = setInterval(updateProgress, 100);

		/** Detect when everything is loaded */
		const handleLoad = () => {
			isPageLoaded = true; // mark page fully loaded
			// Wait 5 seconds for fade-out (progress still runs)
			setTimeout(() => {
				clearInterval(interval);
				setFullyLoaded(true); // triggers fade-out
				setTimeout(() => setLoaded(true), 1000); // actually remove loader after fade
			}, 5000);
		};

		// If already loaded (cache)
		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
		}

		return () => {
			clearInterval(interval);
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	if (loaded) return null;
	return (
		<section className={styles.Loader}>
			<div
				className={`${styles.loaderWrapper} ${fullyLoaded ? styles.fadeOut : ""}`}
			>
				<div className={styles.loaderContent}>
					<p className={styles.percent}>{Math.floor(progress)}%</p>
					<div className={styles.barOuter}>
						<div className={styles.barInner} style={{ width: `${progress}%` }}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
