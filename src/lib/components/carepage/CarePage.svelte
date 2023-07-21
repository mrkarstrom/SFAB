<script>
	import Block from './CareBlock.svelte';
	import { TopbarPlain } from '$lib/components/sections/TopbarPlain.svelte';
</script>

<TopbarPlain />
<Block let:Title let:Description let:Button>
	<Title>Hello SlowFashion</Title>
	<Description>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur maiores illo
		corporis. Autem animi eius, harum tenetur pariatur nihil eveniet odio esse veniam unde, velit
		obcaecati? Blanditiis, aperiam? Eveniet.
	</Description>
	<Button>Get Started</Button>
</Block>
