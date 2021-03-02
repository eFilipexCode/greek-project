<script>
    export let linkUrl;
    export let text;
    export let className;
    export let style;
</script>

{#if linkUrl}
    <a href={linkUrl}>
        <button {style} class={className}>
            {text}
        </button>
    </a>
{:else}
    <button {style} class={className}>
        {text}
    </button>
{/if}
