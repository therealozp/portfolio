import React, { useRef, useEffect } from 'react';
import styles from '../../styles/cursor.module.scss';

const CustomCursor = () => {
	const primaryCursor = useRef(null);
	const primaryInnerCursor = useRef(null);
	useEffect(() => {
		document.addEventListener('mousemove', (event) => {
			const { clientX, clientY } = event;
			const target = event.target;
			const mouseX = clientX;
			const mouseY = clientY;
			primaryCursor.current.style.transform = `translate3d(${
				mouseX - primaryCursor.current.clientWidth / 110
			}px, ${mouseY - primaryCursor.current.clientHeight / 110}px, 0)`;

			const isHover = target.localName == ('button' || 'a' || 'input');
			const isHovered =
				primaryInnerCursor.current.classList.contains('hoveredCursor');

			if (isHover && !isHovered) {
				primaryInnerCursor.current.classList.add('hoveredCursor');
			} else if (!isHover && isHovered) {
				primaryInnerCursor.current.classList.remove('hoveredCursor');
			}
		});

		return () => {};
	}, []);

	useEffect(() => {
		document.addEventListener('mousedown', () => {
			primaryInnerCursor.current.classList.add('clickCursor');
		});
		document.addEventListener('mouseup', () => {
			primaryInnerCursor.current.classList.remove('clickCursor');
		});
		return () => {};
	}, []);

	useEffect(() => {
		document.addEventListener('mouseleave', () => {
			primaryInnerCursor.current.classList.add('hide');
		});
		document.addEventListener('mouseenter', () => {
			primaryInnerCursor.current.classList.remove('hide');
		});
	}, []);
	return (
		<div ref={primaryCursor} style={{ position: 'fixed', zIndex: 10000 }}>
			<div className={styles.cursor} ref={primaryInnerCursor} />
		</div>
	);
};

export default CustomCursor;
