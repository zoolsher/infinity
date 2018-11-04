import { getTemplate } from './parser/xml';

function bootstrap(data: string) {
  const result = getTemplate(data);
}

bootstrap(`
<template>
<block></block>
</template>
<script lang="text/typescript">
const a = 1;
</script>
<style lang="less">
.a{
  color:red;
}
</style>
`);