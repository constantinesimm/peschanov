<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="fixed-element">
                <d-alert show theme="primary" class="block-title"> Interest </d-alert>
                <ul>
                    <li class="phone-icon"></li>
                    <li class="email-icon"></li>
                    <li class="skype-icon"></li>
                    <li class="telegram-icon"></li>
                    <li class="viber-icon"></li>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "InterestBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;
    }

    .fixed-container {
        height: 266px;
    }

    .fixed-element {
        position: fixed;
        z-index: 2;
    }

    @media print {
        .fixed-element {
            position: relative;
        }
    }
    .alert {
        width: 200px;
        border-radius: 0 .75rem .75rem 0;
        padding: 0.25rem 1rem;
        font-size: 1rem;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .fixed-element {
            position: relative;
        }
        .alert {
            width: 75%;
        }
    }



    ul {
        list-style: none;
    }
</style>