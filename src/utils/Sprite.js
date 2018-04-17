export class Sprite {
	constructor(image, cx, cy, width, height, angle) {
		this.x = null;
		this.y = null;
		this.angle = angle;
		this.image = image;
		this.width = width || this.image.width;
		this.height = height || this.image.height;
		this.cx = cx || 0;
		this.cy = cy || 0;
	}

	set cx(value) {
		this.x = Math.round(value - this.width / 2);
	}

	set cy(value) {
		this.y = Math.round(value - this.height / 2);
	}

	get cx() {
		return Math.round(this.width / 2);
	}

	get cy() {
		return Math.round(this.height / 2);
	}

	draw(ctx) {
		if (!this.angle) {
			return ctx.drawImage(this.image, this.x, this.y,
				this.width, this.height);
		}

		ctx.save();
		ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
		ctx.rotate(this.angle);
		ctx.drawImage(this.image, -this.width / 2, -this.height / 2,
			this.width, this.height);
		ctx.restore();
	}
}
