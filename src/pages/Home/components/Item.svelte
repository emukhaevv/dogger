<script lang="ts">
	import { AUTO_POSITION, END_POSITION, START_POSITION } from '../constants';
	import dots from '../images/dots.svg';
	import trash from '../images/trash.svg';

	type Props = {
		id: number;
		title: string;
		description: string;
		onDelete: (id: number) => void;
	};

	const { id, title, description, onDelete }: Props = $props();

	let startedSlideClick = $state(0);
	let position = $state(START_POSITION);
	let startedPosition = $state(START_POSITION);

	let isMoving = $state(false);
	let isClicked = $state(false);
	let isBlocked = $state(false);
	let isDeleteAnimation = $state(false);

	const onTouchDown = (e: TouchEvent) => {
		if (isBlocked) return;

		isClicked = true;

		startedSlideClick = e.changedTouches[0].pageX;
		startedPosition = position === START_POSITION ? START_POSITION : END_POSITION;
	};

	const onTouchUp = () => {
		if (isClicked) {
			if (position <= AUTO_POSITION) {
				position = END_POSITION;
				isBlocked = true;
			} else {
				position = START_POSITION;
			}
		}

		isMoving = false;
		isClicked = false;
	};

	const onMove = (e: TouchEvent) => {
		if (isBlocked) return;

		isMoving = true;

		const positionDifference = startedSlideClick - e.changedTouches[0].pageX;
		const updatedPosition = startedPosition - positionDifference;

		if (updatedPosition < END_POSITION) return;
		position = updatedPosition;
	};

	const onDeleteEnd = () => {
		if (position > END_POSITION) return;

		isDeleteAnimation = true;

		setTimeout(() => {
			onDelete(id);
		}, 400);
	};

	$effect(() => {
		document.body.style.overflow = isMoving ? 'hidden' : 'auto';
	});
</script>

<div
	tabindex="0"
	role="button"
	class="content"
	ontouchmove={onMove}
	ontouchend={onTouchUp}
	ontouchstart={onTouchDown}
	class:content-delete={isDeleteAnimation}
>
	<div>
		<div class="title">{title}</div>
		<div class="description">{description}</div>
	</div>

	<img src={dots} alt="" />

	<div
		class="delete"
		ontransitionend={onDeleteEnd}
		class:delete-animation={!isClicked}
		style="transform: translateX({position}px)"
	>
		<img alt="" src={trash} class="trash" />
	</div>
</div>

<style>
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;
		border-bottom: solid 1px #f2f2f2;
		position: relative;
		transition: opacity 0.4s ease;
	}

	.content-delete {
		opacity: 0;
	}

	.title {
		font-size: 16px;
		font-weight: 500;
		margin-bottom: 1px;
	}

	.description {
		color: #999999;
		font-size: 13px;
	}

	.delete {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 100%;
		right: 0;
		position: absolute;
		transform: translateX(233px);
		background-color: #e2917f;
		border-radius: 14px 0 0 14px;
	}

	.delete-animation {
		transition: transform ease 0.4s;
	}
</style>
