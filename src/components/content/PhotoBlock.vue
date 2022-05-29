<template>
    <d-row>
        <d-col class="fixed-container">
            <div class="d-flex justify-content-center mt-2 mb-2 fixed-element">
                <img src="../../assets/images/photo_2019-06-03_14-13-11.jpg" alt="Sierra Brooks" class="rounded-circle">
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "PhotoBlock"
    }
</script>

<style scoped>
    .fixed-container {
        height: 266px;
    }
    .fixed-element {
        position: fixed;
        z-index: 2;
    }
    @media (max-width: 768px) {
        .fixed-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .fixed-element {
            position: relative;
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
    @media (max-width: 992px) {
        img {
            width: 150px;
        }
    }
    @media (max-width: 1200px) {
        img {
            width: 200px;
        }
    }
    @media (min-width: 1200px) {
        img {
            width: 250px;
        }
    }
</style>