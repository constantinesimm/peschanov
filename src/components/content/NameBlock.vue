<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="card-body fixed-element">
                <h3 class="card-title">Kostiantyn Peschanov</h3>
                <h6 class="card-subtitle text-muted">Fullstack JavaScript developer (Node.js / Vue.js)</h6>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "NameBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;

    }
    .fixed-container {
        height: 15px;
    }
    .fixed-element {
        position: fixed;
        background: white;
        z-index: 10;
        width: 850px;
    }

    @media (max-width: 768px) {
        .fixed-element {
            position: fixed;
            top: 65px;
        }
    }

    @media print {
        .fixed-container {
            position: relative;
        }
        .fixed-element {
            position: relative;
        }
    }
    .card-body {
        padding: 1rem 1.5rem;
    }

		.card-subtitle {
			padding-top: 5px;
		}
</style>
