<script>
    import Button from '../components/Button.svelte';
</script>

<div class="error-container">
    <h1><span class="greek">οἴμοι!</span> Looks like something went wrong.</h1>
    <img class="animate__animated animate__pulse" src='/aristotle.png' alt="Aristotle"/>
    <Button text="Return Home" linkUrl="/" style={`width: 150px; height: 50px; margin:0`}/>
</div>

<style>
    div {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        padding: 40px;  
    }

    div img {
        width: 15%;
        animation-iteration-count: infinite;
        animation-duration: 2s;
    }

    @media (max-width: 500px) {
        div img {
            width: 30%;
        }
    }
</style>