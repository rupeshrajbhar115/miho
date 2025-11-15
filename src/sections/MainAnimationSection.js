/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
// MODULES //
import { useEffect, useRef } from "react";
import Script from "next/script";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// UTILS //

// STYLES //
import styles from "@/styles/sections/MainAnimationSection.module.scss";

// IMAGES //
import BannerWave from "../../public/img/home/banner_wave.svg";
import RedBottle from "../../public/img/home/red_bottle.png";
import GreenBottle from "../../public/img/home/green_bottle.png";
import BannerLeaf from "../../public/img/home/BannerLeaf.png";
import bannerVector1 from "../../public/img/home/bannerVector1.png";
import bannerVector2 from "../../public/img/home/bannerVector2.png";
import bannerVector3 from "../../public/img/home/bannerVector3.png";
import bannerVector4 from "../../public/img/home/bannerVector4.png";
import AnimaVector1 from "../../public/img/home/AnimaVector1.png";
import AnimaVector2 from "../../public/img/home/AnimaVector2.png";
import AnimaVector3 from "../../public/img/home/AnimaVector3.png";
import AnimaVector4 from "../../public/img/home/AnimaVector4.png";
import AnimaVector5 from "../../public/img/home/AnimaVector5.png";
import Hand1 from "../../public/img/home/Hand1.png";
import Hand2 from "../../public/img/home/Hand2.png";
import CircleImg1 from "../../public/img/home/CircleImg1.png";
import CircleImg2 from "../../public/img/home/CircleImg2.png";
import CircleImg3 from "../../public/img/home/CircleImg3.png";
import AnimaCircle from "../../public/img/home/AnimaCircle.svg";
import SmallCircles1 from "../../public/img/home/SmallCircles1.png";
import LeftWave from "../../public/img/home/left_wave.png";
import RightWave from "../../public/img/home/right_wave.png";
import LeftLine from "../../public/img/home/left_line.png";
import CenterLine from "../../public/img/home/center_line.png";
import RightLine from "../../public/img/home/right_line.png";
import Leaf from "../../public/img/home/leaf.png";
import Mood from "../../public/img/home/moon.png";
import Flovare1 from "../../public/img/home/flovare1.png";
import Flovare2 from "../../public/img/home/flovare2.png";
import Flovare3 from "../../public/img/home/flovare3.png";
import Flovare4 from "../../public/img/home/flovare4.png";
import GreenVector1 from "../../public/img/home/GreenVector1.png";
import GreenVector2 from "../../public/img/home/GreenVector2.png";
import GreenVector3 from "../../public/img/home/GreenVector3.png";
import GreenVector4 from "../../public/img/home/GreenVector4.png";
import GreenVector5 from "../../public/img/home/GreenVector5.png";
import RedWaveTop from "../../public/img/home/red_wave_top.svg";
import GreenWaveBottom from "../../public/img/home/green_wave_top.svg";
import RedCircle from "../../public/img/home/red_circle.png";
import GreenCircle from "../../public/img/home/green_circle.png";
import RedVector1 from "../../public/img/home/RedVector1.png";
import RedVector2 from "../../public/img/home/RedVector2.png";
import RedVector3 from "../../public/img/home/RedVector3.png";
import RedVector4 from "../../public/img/home/RedVector4.png";
import RedVector5 from "../../public/img/home/RedVector5.png";
import RedVector6 from "../../public/img/home/RedVector6.png";
import GreenVector6 from "../../public/img/home/GreenVector6.png";
import Heand from "../../public/img/home/heand.svg";
import Love1 from "../../public/img/home/love1.png";
import Love2 from "../../public/img/home/love2.png";

// DATA //

/** MainAnimationSection Section */
export default function MainAnimationSection() {
	const modelRef = useRef(null);

	useEffect(() => {
		/** Wait for model-viewer to be defined */
		const waitForModel = () => {
			if (customElements.get("model-viewer") && modelRef.current) {
				const model = modelRef.current;

				// ✅ Disable all pointer events completely
				model.style.pointerEvents = "none";
				model.setAttribute("interaction-prompt", "none");
				model.setAttribute("camera-controls", ""); // keep camera-controls attribute if needed for animation
				model.removeAttribute("ar"); // optional, if AR shouldn’t trigger
			} else {
				requestAnimationFrame(waitForModel);
			}
		};

		waitForModel();

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const winH = window.innerHeight;
		const winW = window.innerWidth;
		const animationTimeline = gsap.timeline();
		const animationTimeline1 = gsap.timeline();
		const bannerTimeline = gsap.timeline({});
		let LeftBottleAnima = "32vw";
		let AnimaCircle = "scale(5)";
		let AnimaCircle1 = "scale(7)";
		let RedWaveTop = "-88px";
		let LeftHeand = "0";
		let RightHeand = "0";
		let LeftHeand1 = "-25%";
		let RightHeand1 = "-25%";
		if (window.innerWidth >= 0 && window.innerWidth <= 767) {
			LeftBottleAnima = "140px";
			AnimaCircle = "scale(9)";
			AnimaCircle1 = "scale(12)";
			RedWaveTop = "-22px";
			LeftHeand = "-7%";
			RightHeand = "-7%";
			LeftHeand1 = "-70%";
			RightHeand1 = "-70%";
		}

		bannerTimeline
			.to(
				`.${styles.BannerLeaf}`,
				{
					opacity: "1",
					delay: "6",
					duration: "1",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector1}`,
				{
					scale: "1",
					delay: "6",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector2}`,
				{
					scale: "1",
					delay: "6",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector3}`,
				{
					scale: "1",
					delay: "6",
				},
				"1st"
			)
			.to(
				`.${styles.bannerVector4}`,
				{
					scale: "1",
					delay: "6",
				},
				"1st"
			)
			.to(
				`.${styles.banner_title} h2`,
				{
					duration: 1,
					y: "0",
					delay: "6",
				},
				"1st"
			)
			.to(
				`.${styles.banner_desc} p`,
				{
					y: "0",
					delay: "6",
					duration: 1,
				},
				"1st"
			);

		animationTimeline
			.fromTo(
				".left_bottle_anima model-viewer",
				{
					cameraOrbit: "165deg 0 2m",
				},
				{
					rotate: "0",
					cameraOrbit: "545deg 0 2m",
				},
				"1st"
			)
			.fromTo(
				".GreenBottle model-viewer",
				{
					cameraOrbit: "165deg 0 2m",
				},
				{
					cameraOrbit: "550deg 0 2m",
				},
				"1st"
			)
			.to(
				".left_bottle_anima model-viewer",
				{
					width: LeftBottleAnima,
				},
				"1st"
			)
			.to(
				".left_bottle_anima",
				{
					top: "53%",
					left: "50%",
				},
				"1st"
			);

		// Attach ScrollTrigger
		ScrollTrigger.create({
			trigger: ".left_bottle_anima",
			start: "-100px top",
			end: "+=" + winH,
			animation: animationTimeline,
			scrub: true,
			// markers: true,
		});

		animationTimeline1
			.to(
				`.${styles.title_anima}`,
				{
					duration: 1,
					transform: "translateY(0%)",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector1}`,
				{
					duration: 1,
					left: "35%",
					opacity: "1",
					bottom: "40%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector2}`,
				{
					duration: 1,
					left: "42%",
					opacity: "1",
					bottom: "5%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector3}`,
				{
					duration: 1,
					left: "55%",
					opacity: "1",
					bottom: "10%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector4}`,
				{
					duration: 1,
					left: "67%",
					opacity: "1",
					bottom: "32%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector5}`,
				{
					duration: 1,
					left: "65%",
					opacity: "1",
					bottom: "43%",
				},
				"1st"
			)
			.to(
				`.${styles.AnimaVector1}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector2}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector3}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector4}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				`.${styles.AnimaVector5}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"2nd"
			)
			.to(
				".GreenBottleAnimationNew",
				{
					opacity: "1",
				},
				"2nd"
			)
			.fromTo(
				".left_bottle_anima model-viewer",
				{
					cameraOrbit: "545deg 0 2m",
				},
				{
					cameraOrbit: "900deg 0 2m",
				},
				"2nd"
			)
			.to(
				".GreenBottleAnimationNew model-viewer",
				{
					cameraOrbit: "1265deg 0 2m",
				},
				"2nd"
			)
			.to(
				".left_bottle_anima",
				{
					display: "none",
				},
				"2nd"
			)
			.to(
				`.${styles.GreenVector1}`,
				{
					duration: 1,
					left: "35%",
					opacity: "1",
					bottom: "40%",
				},
				"3rd"
			)
			.to(
				`.${styles.GreenVector2}`,
				{
					duration: 1,
					left: "35%",
					opacity: "1",
					bottom: "-5%",
				},
				"3rd"
			)
			.to(
				`.${styles.GreenVector3}`,
				{
					duration: 1,
					left: "65%",
					opacity: "1",
					bottom: "10%",
				},
				"3rd"
			)
			.to(
				`.${styles.GreenVector4}`,
				{
					duration: 1,
					left: "67%",
					opacity: "1",
					bottom: "45%",
				},
				"3rd"
			)
			.to(
				`.${styles.GreenVector5}`,
				{
					duration: 1,
					left: "65%",
					opacity: "1",
					bottom: "43%",
				},
				"3rd"
			)
			.to(
				`.${styles.GreenVector1}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"4th"
			)
			.to(
				`.${styles.GreenVector2}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"4th"
			)
			.to(
				`.${styles.GreenVector3}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"4th"
			)
			.to(
				`.${styles.GreenVector4}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"4th"
			)
			.to(
				`.${styles.GreenVector5}`,
				{
					duration: 1,
					left: "50%",
					opacity: "0",
					bottom: "0%",
				},
				"4th"
			)
			.to(
				`.${styles.title_anima}`,
				{
					duration: 1,
					opacity: "0",
					transform: "translateY(100%)",
				},
				"4th"
			)
			.to(
				".GreenBottleAnimationNew",
				{
					delay: "0.2",
					display: "none",
					duration: 1,
				},
				"4th"
			)
			.to(
				`.${styles.AnimaCircle}`,
				{
					duration: 1,
					transform: AnimaCircle,
				},
				"6th"
			)
			.to(
				`.${styles.LeftHeand}`,
				{
					duration: 1,
					left: LeftHeand,
				},
				"6th"
			)
			.to(
				`.${styles.RightHeand}`,
				{
					duration: 1,
					right: RightHeand,
				},
				"6th"
			)
			.to(
				`.${styles.LeftHeand}`,
				{
					duration: 1,
					left: LeftHeand1,
				},
				"7th"
			)
			.to(
				`.${styles.RightHeand}`,
				{
					duration: 1,
					right: RightHeand1,
				},
				"7th"
			)
			.to(
				`.${styles.para}`,
				{
					duration: 1,
					transform: "translateY(0%)",
				},
				"7th"
			)
			.to(
				`.${styles.img_section}`,
				{
					duration: 1,
					transform: "translateY(-10%)",
				},
				"7th"
			)
			.to(
				`.${styles.img_section}`,
				{
					duration: 1,
					transform: "translateY(100%)",
				},
				"8th"
			)
			.to(
				`.${styles.para}`,
				{
					duration: 1,
					transform: "translateY(-100%)",
				},
				"8th"
			)
			.to(
				`.${styles.desc_section}`,
				{
					delay: "0.8",
					transform: "translateY(0%)",
					duration: 1,
				},
				"8th"
			)
			.to(
				`.${styles.AnimaCircle}`,
				{
					transform: AnimaCircle1,
					duration: 1,
				},
				"9th"
			)
			.to(
				`.${styles.LeftHeand}`,
				{
					left: "-100%",
					duration: 1,
				},
				"9th"
			)
			.to(
				`.${styles.RightHeand}`,
				{
					right: "-100%",
					duration: 1,
				},
				"9th"
			)
			.to(
				`.${styles.desc_section}`,
				{
					transform: "translateY(100%)",
					duration: 1,
				},
				"9th"
			)
			.to(
				`.${styles.Flovare1}`,
				{
					scale: "1",
					opacity: "1",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.Flovare2}`,
				{
					scale: "1",
					opacity: "1",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.Flovare3}`,
				{
					scale: "1",
					opacity: "1",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.Mood}`,
				{
					opacity: "1",
					scale: "1",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.Flovare4}`,
				{
					scale: "1",
					opacity: "1",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.Leaf}`,
				{
					opacity: "1",
					right: "0",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.LeftLine}`,
				{
					left: "0",
					opacity: 1,
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.RightLine}`,
				{
					right: "0",
					opacity: 1,
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.CenterLine}`,
				{
					opacity: 1,
				},
				"10th"
			)
			.to(
				`.${styles.bottom_img}`,
				{
					transform: "translateY(10%)",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.one} h2`,
				{
					delay: "0.4",
					transform: "translateY(0%)",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.two} h2`,
				{
					delay: "0.4",
					transform: "translateY(0%)",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.three} h2`,
				{
					delay: "0.4",
					transform: "translateY(0%)",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.para_data} p`,
				{
					delay: "0.4",
					transform: "translateY(0%)",
					duration: 1,
				},
				"10th"
			)
			.to(
				`.${styles.IndianMade}`,
				{
					opacity: 0,
				},
				"11th"
			)
			.to(
				`.${styles.text_section_flavour_inner}`,
				{
					delay: "0.3",
					transform: "translateY(0%)",
					duration: 1,
				},
				"11th"
			)
			.to(
				`.${styles.love1}`,
				{
					delay: "1",
					opacity: 1,
					duration: 1,
				},
				"11th"
			)
			.to(
				`.${styles.love2}`,
				{
					delay: "1",
					opacity: 1,
					duration: 1,
				},
				"11th"
			)
			.to(
				`.${styles.RedWaveTop}`,
				{
					delay: "0.6",
					top: RedWaveTop,
					duration: 1,
				},
				"11th"
			)
			.to(
				`.${styles.EveryFlavour}`,
				{
					transform: "translateY(0%)",
					duration: 1,
				},
				"12th"
			)
			.to(
				`.${styles.RedVector1}`,
				{
					top: "30%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.RedVector2}`,
				{
					top: "20%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.RedVector3}`,
				{
					bottom: "10%",
					duration: 0.6,
				},
				"13th"
			)
			.to(
				`.${styles.RedVector4}`,
				{
					bottom: "20%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.RedVector5}`,
				{
					top: "15%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.RedVector6}`,
				{
					bottom: "0%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.span1}`,
				{
					duration: 1,
					transform: "translateY(-5%)",
				},
				"13th"
			)
			.to(
				`.${styles.FlavourBot1}`,
				{
					top: "50%",
					duration: 1,
				},
				"13th"
			)
			.to(
				`.${styles.flavour_section_2}`,
				{
					duration: 1,
					transform: "translateY(-100%)",
				},
				"14th"
			)
			.to(
				`.${styles.span1}`,
				{
					duration: 1,
					transform: "translateX(-105%)",
				},
				"14th"
			)
			.to(
				`.${styles.span2}`,
				{
					duration: 1,
					transform: "translateX(-105%)",
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector11}`,
				{
					top: "30%",
					duration: 1,
					opacity: 1,
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector21}`,
				{
					top: "20%",
					duration: 1,
					opacity: 1,
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector31}`,
				{
					bottom: "10%",
					opacity: 1,
					duration: 0.6,
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector41}`,
				{
					bottom: "20%",
					opacity: 1,
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector51}`,
				{
					top: "15%",
					duration: 1,
					opacity: 1,
				},
				"14th"
			)
			.to(
				`.${styles.GreenVector61}`,
				{
					opacity: 1,
					bottom: "0%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector1}`,
				{
					top: "120%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector2}`,
				{
					top: "120%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector3}`,
				{
					bottom: "-120%",
					duration: 0.6,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector4}`,
				{
					bottom: "-120%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector5}`,
				{
					top: "120%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedVector6}`,
				{
					bottom: "-120%",
					duration: 1,
				},
				"14th"
			)
			.to(
				`.${styles.RedBottleAnima}`,
				{
					duration: 1,
					clipPath: "polygon(0% 0%, 0% 0%, 20% 98%, 20% 99%)",
				},
				"14th"
			);

		ScrollTrigger.create({
			trigger: `.${styles.bottle_anima_section}`,
			start: "top top",
			end: "+=" + winH * 6,
			animation: animationTimeline1,
			scrub: true,
			pin: true,
			// markers: true,
		});
	}, []);

	return (
		<section className={styles.MainAnimationSection}>
			<Script
				type="module"
				src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.3.0/dist/model-viewer.min.js"
				strategy="beforeInteractive"
			/>
			<div className={styles.banner_section} id="home">
				<img
					src={bannerVector4.src}
					alt="image"
					className={`${styles.bannerVector4} img-responsive`}
				/>
				<img
					src={BannerWave.src}
					alt="image"
					className={`${styles.bannerWave} img-responsive`}
				/>
				<div className={styles.banner}>
					<div className={styles.left_section}>
						<div className={styles.banner_title}>
							<h2>Flavour Every Emotion.</h2>
						</div>
						<div className={styles.banner_desc}>
							<p>
								MIHO, the first Indian-Crafted Soju, for young at heart. Light, playful,
								and made for every MIHO-ment.
							</p>
						</div>
					</div>
					<div className={styles.right_section}>
						<img
							src={BannerLeaf.src}
							alt="image"
							className={`${styles.BannerLeaf} img-responsive`}
						/>
						<img
							src={bannerVector1.src}
							alt="image"
							className={`${styles.bannerVector1} img-responsive`}
						/>
						<img
							src={bannerVector2.src}
							alt="image"
							className={`${styles.bannerVector2} img-responsive`}
						/>
						<img
							src={bannerVector3.src}
							alt="image"
							className={`${styles.bannerVector3} img-responsive`}
						/>
						<div className={styles.bottle}>
							<div className={`${styles.GreenBottle} GreenBottle`}>
								<model-viewer
									ref={modelRef}
									src="/img/3d/SunDaze.glb"
									alt="3D Bottle"
									ar-modes="webxr scene-viewer quick-look"
									camera-controls
									camera-orbit="0deg 85deg 2m"
									shadow-intensity="1"
									disable-zoom
									interaction-prompt="none"
									style={{
										pointerEvents: "none",
									}}
								></model-viewer>
							</div>
							{/* <img
								src={RedBottle.src}
								alt="image"
								className={`${styles.RedBottle} img-responsive`}
							/> */}
							{/* <img
								src={GreenBottle.src}
								alt="image"
								className={`${styles.GreenBottle} img-responsive`}
							/> */}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.bottle_anima_section}>
				<div className={styles.anima_section}>
					<div className={styles.title_section}>
						<h2 className={`${styles.title_anima} section_big_title`}>
							<span>For the Wild Who Choose Mild.</span>
						</h2>
					</div>
					<div className={`${styles.left_bottle} left_bottle_anima`}>
						<model-viewer
							ref={modelRef}
							src="/img/3d/BerryBliss.glb"
							alt="3D Bottle"
							ar-modes="webxr scene-viewer quick-look"
							camera-controls
							camera-orbit="0deg 85deg 2m"
							shadow-intensity="1"
							disable-zoom
							interaction-prompt="none"
							className="modelViewer"
							style={{
								pointerEvents: "none",
							}}
						></model-viewer>
						{/* <model-viewer
							ref={modelRef}
							src="/img/3d/SunDaze.glb"
							alt="3D Bottle"
							ar-modes="webxr scene-viewer quick-look"
							camera-controls
							camera-orbit="0deg 85deg 2m"
							shadow-intensity="1"
							disable-zoom
							className={`${styles.SunDaze} modelViewer`}
							interaction-prompt="none"
						></model-viewer> */}
					</div>
					{/* <img
						src={redBottleAnima.src}
						alt="image"
						className={`${styles.RedBottle} img-responsive`}
					/> */}
					<div className={styles.vector_anima_section}>
						<img
							src={AnimaVector1.src}
							alt="image"
							className={`${styles.AnimaVector1} img-responsive`}
						/>
						<img
							src={AnimaVector2.src}
							alt="image"
							className={`${styles.AnimaVector2} img-responsive`}
						/>
						<img
							src={AnimaVector3.src}
							alt="image"
							className={`${styles.AnimaVector3} img-responsive`}
						/>
						<img
							src={AnimaVector4.src}
							alt="image"
							className={`${styles.AnimaVector4} img-responsive`}
						/>
						<img
							src={AnimaVector5.src}
							alt="image"
							className={`${styles.AnimaVector5} img-responsive`}
						/>
						{/* <img
							src={GreenVector1.src}
							alt="image"
							className={`${styles.GreenVector1} img-responsive`}
						/> */}
						<img
							src={GreenVector2.src}
							alt="image"
							className={`${styles.GreenVector2} img-responsive`}
						/>
						<img
							src={GreenVector3.src}
							alt="image"
							className={`${styles.GreenVector3} img-responsive`}
						/>
						<img
							src={GreenVector4.src}
							alt="image"
							className={`${styles.GreenVector4} img-responsive`}
						/>
						<img
							src={GreenVector5.src}
							alt="image"
							className={`${styles.GreenVector1} img-responsive`}
						/>
					</div>
				</div>

				<div
					className={`${styles.GreenBottleAnimationNew} GreenBottleAnimationNew`}
				>
					<model-viewer
						ref={modelRef}
						src="/img/3d/SunDaze.glb"
						alt="3D Bottle"
						ar-modes="webxr scene-viewer quick-look"
						camera-controls
						camera-orbit="0deg 85deg 2m"
						shadow-intensity="1"
						disable-zoom
						interaction-prompt="none"
						className="modelViewer"
						style={{
							pointerEvents: "none",
						}}
					></model-viewer>
					{/* <model-viewer
							ref={modelRef}
							src="/img/3d/SunDaze.glb"
							alt="3D Bottle"
							ar-modes="webxr scene-viewer quick-look"
							camera-controls
							camera-orbit="0deg 85deg 2m"
							shadow-intensity="1"
							disable-zoom
							className={`${styles.SunDaze} modelViewer`}
							interaction-prompt="none"
						></model-viewer> */}
				</div>

				{/* circle_anima */}
				<div className={styles.circle_anima}>
					<div className={styles.LeftHeand}>
						<img
							src={Hand1.src}
							alt="image"
							className={`${styles.Hand1} img-responsive`}
						/>
					</div>
					<div className={styles.RightHeand}>
						<img
							src={Hand2.src}
							alt="image"
							className={`${styles.Hand2} img-responsive`}
						/>
					</div>
					<div className={styles.main_circle}>
						<img
							src={AnimaCircle.src}
							alt="image"
							className={`${styles.AnimaCircle} img-responsive`}
						/>
					</div>
				</div>

				{/* heandTextAnima */}
				<div className={styles.heandTextAnima}>
					<div className={styles.text_section}>
						<div className={styles.desc}>
							<div className={styles.para}>
								MIHO is your chill in the chaos — the bottle that turns every hangout
								into a story. It&lsquo;s not about drinking hard; it&lsquo;s about
								living light — it&lsquo;s all about shared laughs, fun games, late-night
								gossip, and that one friend who always says &lsquo;just one more!&lsquo;
							</div>
						</div>
						<div className={styles.desc_section_wrapper}>
							<div className={styles.desc_section}>
								<div className={styles.para2}>Sip it, share it, shoot it</div>
								<h2 className={`${styles.title_anima_circle} section_big_title`}>
									<span>
										Every Sip is
										<br /> MIHO-licious.
									</span>
								</h2>
							</div>
						</div>
						<div className={styles.img_section_animation}>
							<div className={styles.img_section}>
								<img
									src={SmallCircles1.src}
									alt="image"
									className={`${styles.SmallCircles1} img-responsive`}
								/>
								<img
									src={SmallCircles1.src}
									alt="image"
									className={`${styles.SmallCircles2} img-responsive`}
								/>
								<div className={styles.one}>
									<img
										src={CircleImg1.src}
										alt="image"
										className={`${styles.CircleImg1} img-responsive`}
									/>
								</div>
								<div className={styles.two}>
									<img
										src={CircleImg2.src}
										alt="image"
										className={`${styles.CircleImg2} img-responsive`}
									/>
								</div>
								<div className={styles.three}>
									<img
										src={CircleImg3.src}
										alt="image"
										className={`${styles.CircleImg3} img-responsive`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.IndianMade} id="about">
					<img
						src={LeftLine.src}
						alt="image"
						className={`${styles.LeftLine} img-responsive`}
					/>
					<img
						src={CenterLine.src}
						alt="image"
						className={`${styles.CenterLine} img-responsive`}
					/>
					<img
						src={RightLine.src}
						alt="image"
						className={`${styles.RightLine} img-responsive`}
					/>
					<img
						src={Leaf.src}
						alt="image"
						className={`${styles.Leaf} img-responsive`}
					/>
					<img
						src={Mood.src}
						alt="image"
						className={`${styles.Mood} img-responsive`}
					/>
					<img
						src={Flovare1.src}
						alt="image"
						className={`${styles.Flovare1} img-responsive`}
					/>
					<img
						src={Flovare2.src}
						alt="image"
						className={`${styles.Flovare2} img-responsive`}
					/>
					<img
						src={Flovare3.src}
						alt="image"
						className={`${styles.Flovare3} img-responsive`}
					/>
					<img
						src={Flovare4.src}
						alt="image"
						className={`${styles.Flovare4} img-responsive`}
					/>

					<div className={styles.text_section}>
						<div className={styles.title_animation}>
							<div className={styles.two}>
								<h2 className="section_big_title">
									<span>K-Wave Inspired.</span>
								</h2>
							</div>
							<div className={styles.three}>
								<h2 className="section_big_title">
									<span>You-Approved.</span>
								</h2>
							</div>
							<div className={styles.para_data}>
								<p>
									MIHO blends the heart of India with the soul of Korean culture. Born
									out of a love for culture, friendship, and feel-good fun, it’s drink
									that flips the script.
									<span className={styles.br_padd}>
										Smooth and full of flavour, MIHO is designed for those who crave style
										without excess. We’re not chasing wild nights; we’re embracing mellow
										vibes.
									</span>{" "}
									Stylish, inclusive, and totally unpretentious — MIHO Soju is for those
									who believe life’s best moments are the ones you can remember.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.bottom_img}>
						<div className={styles.left_img}>
							<img src={LeftWave.src} alt="image" className="img-responsive" />
						</div>
						<div className={styles.right_img}>
							<img src={RightWave.src} alt="image" className="img-responsive" />
						</div>
					</div>
				</div>

				<div className={`${styles.top_text_section}`} id="taste">
					<div className={`${styles.text_section_flavour_wrapper}`}>
						<div className={`${styles.text_section_flavour_main}`}>
							<div className={`${styles.text_section_flavour_inner}`}>
								<div className={`section_big_title ${styles.text_animation}`}>
									<span className={styles.left_img}>Every Flavour, Loves</span>{" "}
									<span className={styles.right_img}>a Mood.</span>
									<div className={styles.text_animation_inner}>
										<img src={Heand.src} alt="image" className="img-responsive" />
										<img
											src={Love1.src}
											alt="image"
											className={`${styles.love1} img-responsive`}
										/>
										<img
											src={Love2.src}
											alt="image"
											className={`${styles.love2} img-responsive`}
										/>
									</div>
								</div>
								<h6>
									Soft on the senses.
									<br className="hidden_xs_mobile" /> Big on personality.
								</h6>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.EveryFlavour}>
					<img
						src={RedWaveTop.src}
						alt="image"
						className={`${styles.RedWaveTop} img-responsive`}
					/>
					<div className={`${styles.flavour_wrapper}`}>
						<div className={`${styles.flavour_section_1}`}>
							<div className={`${styles.text_animation}`}>
								<div className={`${styles.text_left}`}>
									<span className={`${styles.span1}`}>Berry</span>
									<span className={`${styles.span2}`}>sun</span>
								</div>
								<div className={`${styles.text_left} ${styles.text_right}`}>
									<span className={`${styles.span1}`}>
										<span>Bliss</span> <p>Sweet, happy, and a little flirty.</p>
									</span>
									<span className={`${styles.span2}`}>
										<span>Daze</span> <p>Zesty, bright, and sunshine in a sip.</p>
									</span>
								</div>
							</div>

							<div className={`${styles.bottle_section}`}>
								<img
									src={GreenBottle.src}
									alt="image"
									className={`${styles.FlavourBot1} ${styles.GreenBottleAnima} img-responsive`}
								/>
								<img
									src={RedBottle.src}
									alt="image"
									className={`${styles.FlavourBot1} ${styles.RedBottleAnima} img-responsive`}
								/>
							</div>
							<img
								src={RedCircle.src}
								alt="image"
								className={`${styles.RedCircle} img-responsive`}
							/>
							<img
								src={RedVector1.src}
								alt="image"
								className={`${styles.RedVector1} img-responsive`}
							/>
							<img
								src={RedVector2.src}
								alt="image"
								className={`${styles.RedVector2} img-responsive`}
							/>
							<img
								src={RedVector3.src}
								alt="image"
								className={`${styles.RedVector3} img-responsive`}
							/>
							<img
								src={RedVector4.src}
								alt="image"
								className={`${styles.RedVector4} img-responsive`}
							/>
							<img
								src={RedVector5.src}
								alt="image"
								className={`${styles.RedVector5} img-responsive`}
							/>
							<img
								src={RedVector6.src}
								alt="image"
								className={`${styles.RedVector6} img-responsive`}
							/>
							<img
								src={GreenVector1.src}
								alt="image"
								className={`${styles.GreenVector11} img-responsive`}
							/>
							<img
								src={GreenVector2.src}
								alt="image"
								className={`${styles.GreenVector21} img-responsive`}
							/>
							<img
								src={GreenVector3.src}
								alt="image"
								className={`${styles.GreenVector31} img-responsive`}
							/>
							<img
								src={GreenVector4.src}
								alt="image"
								className={`${styles.GreenVector41} img-responsive`}
							/>
							<img
								src={GreenVector5.src}
								alt="image"
								className={`${styles.GreenVector51} img-responsive`}
							/>
							<img
								src={GreenVector6.src}
								alt="image"
								className={`${styles.GreenVector61} img-responsive`}
							/>
						</div>
						<div className={`${styles.flavour_section_2}`}>
							<img
								src={GreenWaveBottom.src}
								alt="image"
								className={`${styles.RedWaveTop} img-responsive`}
							/>
							<img
								src={GreenCircle.src}
								alt="image"
								className={`${styles.GreenCircle} img-responsive`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
