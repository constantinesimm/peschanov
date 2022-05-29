<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="fixed-element">
                <div class="block-title block-title-primary">Follow me</div>
                <ul>
                    <li>
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/constantinesimm" class="tracked_link" id="github_link" target="_blank">constantinesimm</a>
                    </li>
                    <li>
                        <i class="fab fa-facebook-f"></i>
                        <a href="https://facebook.com/konstantin.peschanov" class="tracked_link" id="fb_link" target="_blank">Kostiantyn Peschanov</a>
                    </li>
                    <li>
                        <i class="fab fa-linkedin-in"></i>
                        <a href="https://linkedin.com/in/konstantin-peschanov-273812100/" class="tracked_link" id="linkedIn_link" target="_blank">Konstantin Peschanov</a>
                    </li>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: "FollowmeBlock"
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: 0;
    }
    .fixed-container .fixed-element > .block-title {
        padding: 5px 0 5px 25px;
        background-color: transparent!important;
        border-left-width: 0;
        border-top-left-radius: unset;
        border-bottom-left-radius: unset;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        font-size: 1.15rem;
        font-weight: bold;
    }
    .block-title:before {
        content:'';
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        width: 0;
        height: 39px;
        color: #007bff;
        background-color: #007bff42;
        border-radius: 0 10px 10px 0;
        transition: all 1.5s ease;
    }

    .fixed-container .fixed-element > .block-title-primary {
        color: #007bff;
    }
    .block-title-primary:hover {
        border-color: #007bff
    }
    .fixed-container {
        height: 235px;
    }
    .fixed-element {
        position: fixed;
        z-index: 2;
    }
    .fixed-element:hover .block-title:before {
        width: 100%;
    }

    @media (max-width: 768px) {
        .fixed-element {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        ul {
            width: 700px;
            max-width: 767px;
        }

        li > a {
            font-size: 1rem!important;
        }
    }
    @media (max-width: 1999px) {
        ul {
            width: 230px;
        }
    }
    @media (min-width: 1200px) {
        ul {
            width: 280px;
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

    ul {
        padding: 0;
        list-style: none;
    }
    li {
        margin: 10px 0;
        font-size: 1.25rem;
        display: flex;
        flex-direction: row;
        padding-left: 15px;
        align-items: center;
    }
    li:hover {
        color: #007bff;
    }
    li > i:first-child {
        width: 30px;
        height: 30px;
        padding-right: 15px;
    }
    li > a {
        display: flex;
        flex-direction: row;
        color: #868e96;
        font-size: 1rem;
        font-weight: 500;
        padding-left: 15px;
        text-decoration: none;
    }
    li:hover > a {
        color: #007bff;
    }

    li > a:before {
        content:'';
        position: absolute;
        display: inline-block;
        top: auto;
        margin-top: 25px;
        left: 50px;
        width: 0;
        height: 3px;
        background: #007bff;
        border-radius: 5px;
        transition: all 1.5s ease;
    }
    /*
    li > a:hover:before {
        width: 75%;
    }
     */
</style>
