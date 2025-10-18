'use client';

import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

export default function BodyFade({ children }: PropsWithChildren) {
	useEffect(() => {
		const body = document.body;
		if (!body) {
			return;
		}

		body.classList.add('page-fade-ready');
		let shown = false;
		let frame = 0;

		const show = () => {
			if (shown) return;
			shown = true;
			frame = requestAnimationFrame(() => {
				body.classList.add('page-fade-visible');
			});
		};

		const handleReady = () => {
			show();
		};

		window.addEventListener('page-ready', handleReady);

		const fallback = window.setTimeout(show, 2200);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('page-ready', handleReady);
			window.clearTimeout(fallback);
			body.classList.remove('page-fade-visible');
			body.classList.remove('page-fade-ready');
		};
	}, []);

	return children;
}
