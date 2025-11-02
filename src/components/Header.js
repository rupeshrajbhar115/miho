// MODULES //
import { useState } from "react";

// COMPONENTS //
import Image from "next/image";
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Header.module.scss";

// IMAGES //
import Logo from "@/../public/img/logo.svg";

// DATA //

/** Header Component */
export default function Header() {
	const [openSidebar, setOpenSidebar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);

	/** Open sidebar on click of hamburger */
	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar);
	};

	/** Function to toggle dropdown */
	const toggleDropdown = (dropdownKey) => {
		setOpenDropdown((prevOpenDropdown) =>
			prevOpenDropdown === dropdownKey ? null : dropdownKey
		);
	};

	return (
		<div
			className={`${styles.main_header} ${
				openSidebar ? styles.sidebar_opened : ""
			}`}
		>
			<div className="container">
				<div className={`${styles.header_inside}`}>
					{/* Logo wrap */}
					<Link href="/">
						<div className={styles.image_wrap}>
							<img src={Logo.src} alt="Logo" className="img-responsive" />
						</div>
					</Link>

					{/* Links Wrap */}
					<div className={`${styles.links_wrap}`}>
						<div className={styles.links}>
							<Link href="">
								<div className={`${styles.link_title} ${styles.active}`}>Home</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>About Miho</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Taste</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Mihopedia</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Events</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Store Locator</div>
							</Link>
						</div>
						<div className={styles.links}>
							<Link href="">
								<div className={styles.link_title}>Store Locator</div>
							</Link>
						</div>
					</div>

					<div className={`${styles.button_section}`}>
						<a href="#" className="submitButton">
							Order Online
						</a>
					</div>

					{/* Hamburger icon visible in mobile only */}
					<div className={styles.hamburger_icon} onClick={toggleSidebar}>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
						<span className={styles.hamburger_line}></span>
					</div>
				</div>
			</div>
		</div>
	);
}
