<div class="flex flex-col w-full">
	<div class="spacer" />
</div>

<style>
	.spacer {
		display: flex;
		flex-direction: row;
		align-items: center;
		align-self: stretch;
		margin-top: 1rem /* 16px */;
		margin-bottom: 1rem /* 16px */;
		height: 1rem /* 16px */;
		white-space: nowrap;
	}
	.spacer:before,
	.spacer:after {
		content: '';
		flex-grow: 1;
		height: 0.125rem /* 2px */;
		width: 100%;
	}
	.spacer:before,
	.spacer:after {
		content: '';
		flex-grow: 1;
		height: 0.125rem /* 2px */;
		width: 100%;
	}
	.spacer:before {
		background-color: #fff;
		--tw-bg-opacity: 0;
	}
	.spacer:after {
		background-color: #fff;
		--tw-bg-opacity: 0;
	}
	.spacer:not(:empty) {
		gap: 1rem /* 16px */;
	}
</style>
