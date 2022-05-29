<template>
    <d-row>
        <d-col class="no-pd-left fixed-container">
            <div class="fixed-element">
                <div class="block-title block-title-primary">Contact Me</div>
                <ul>
                    <li >
                        <i class="fas fa-mobile-alt"/>
                        <a href="tel:+380672230967" class="tracked_link" id="tel_link">+38 (067) 223 09 67</a>
                    </li>
                    <li>
                        <i class="far fa-envelope"/>
                        <a href="mailto:c_simm@icloud.com" class="tracked_link" id="mail_link">c_simm@icloud.com</a>
                    </li>
                    <li>
                        <i class="fab fa-telegram-plane"/>
                        <a href="tg://resolve?domain=ConstantineSimm" class="tracked_link" id="tg_link" target="_blank">@ConstantineSimm</a>
                    </li>
                </ul>
            </div>
        </d-col>
    </d-row>
</template>

<script>
    export default {
        name: 'ContactBlock'
    }
</script>

<style scoped>
    .no-pd-left {
        padding-left: unset;
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

        li {
            font-size: 1.25rem!important;
        }
        li > a {
            font-size: 1rem!important;
        }
    }

    @media (max-width: 999px) {
        li > a {
            padding-left: 5px!important;
            font-size: .9rem;
        }
    }
    @media (min-width: 1000px) {
        li > a {
            padding-left: 10px!important;
            font-size: .95rem;
        }
    }
    @media (max-width: 1999px) {
        ul {
            width: 230px;
        }
        li {
            font-size: 1rem!important;
            padding-left: 10px;
        }

        li > i {
            padding-right: 5px!important;
        }

        li > a {
            padding-left: 10px!important;
        }
    }
    @media (min-width: 1200px) {
        ul {
            width: 280px;
        }
        li {
            font-size: 1.25rem;
            padding-left: 15px;
        }
        li > a {
            padding-left: 15px;
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
        margin-top: 10px;
    }
    li {
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.25rem!important;

    }
    li:hover {
        color: #007bff;
    }
    li > i {
        width: 30px;
        height: 30px;
        color: #868e96;
    }
    li > a {
        display: flex;
        flex-direction: row;
        color: #868e96;
        font-weight: 500;
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
</style>
