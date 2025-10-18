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
		const frame = requestAnimationFrame(() => {
			body.classList.add('page-fade-visible');
		});

		return () => {
			cancelAnimationFrame(frame);
			body.classList.remove('page-fade-visible');
			body.classList.remove('page-fade-ready');
		};
	}, []);

	return children;
}
