<script>
    import Button from './Button.svelte';
</script>

<div class="advice-container">
    <h1>This page is not available yet!</h1>
    <p>But don't worry. We're working on it and soon it'll be ready! :)</p>
    <Button text="Return home" linkUrl="/" style={`width: 150px; height: 50px; margin:0`}/>
</div>

<style>
    div {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        text-align: center;
    }

    p {
        margin: 30px 0px;
        color: #ddd;
    }
</style>