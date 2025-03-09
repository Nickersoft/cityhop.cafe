function mount(node: HTMLElement, selector: string) {
	const host = document.querySelector(selector);

	if (host) {
		host.insertBefore(node, null);
		return () => host.contains(node) && host.removeChild(node);
	}

	return () => {};
}

export function portal(node: HTMLElement, selector = 'body') {
	const destroy = mount(node, selector);
	return { destroy: () => destroy?.() };
}
