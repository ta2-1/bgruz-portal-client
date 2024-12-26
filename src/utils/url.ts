export function replaceImageSrc(html: string): string {
	console.log(html);
	return html
		.replace(/src="\/static\//g, 'src="https://TODO-YOUR-SITE/static/')
		.replace(/<p>(\s*<img[^>]*>\s*)<\/p>/g, '$1');
}
