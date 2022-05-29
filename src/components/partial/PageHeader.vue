<template>
    <d-navbar fixed="top" type="dark" theme="light" class="d-flex flex-row justify-content-center">
        <d-navbar-nav class="d-flex flex-row justify-content-center">
            <d-button :disabled="isLoading" pill class="action-btn tracked_link" id="download_cv" size="sm" @click="getDownloadLink">
                <i class="far fa-file-pdf fa-2x"/>
                <div class="spinner-botton">
                    <span v-if="!isLoading"> Download PDF </span>
                    <half-circle-spinner v-else :animation-duration="1000" :size="26" color="#ffffff" class="spinner-botton"/>
                </div>
            </d-button>
            <!--
                <d-button class="action-btn" size="sm" pill @click="sendFileByEmail">
                    <i class="far fa-paper-plane fa-2x"/>
                    <div class="spinner-botton">
                        <span>Send email</span>
                    </div>
                </d-button>
            -->
        </d-navbar-nav>
    </d-navbar>
</template>

<script>
    import Axios from 'axios';
    import { HalfCircleSpinner } from 'epic-spinners';

    export default {
        name: 'PageHeader',
        components: {
            HalfCircleSpinner
        },
        data() {
            return {
                isLoading: false,
                options: [
                    {
                        title: 'ua',
                        cardImage: "../../assets/images/flags/uk.png"
                    },
                    {
                        title: 'en',
                        cardImage: "../../assets/images/flags/en.png"
                    },
                    {
                        title: 'ru',
                        cardImage: "../../assets/images/flags/ru.png"
                    }
                ],
                targetPageLink: `${ window.location.protocol }//${ window.location.host }`
            }
        },
        methods: {
            getDownloadLink() {
                this.isLoading = true;

                Axios({
                    method: 'POST',
                    url: `/v1/cv/download/pdf?host=${ this.targetPageLink }`,
                    responseType: 'blob'
                })
                    .then(({ data }) => {
                        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                        const link = document.createElement('a');
                        link.href = downloadUrl;
                        link.setAttribute('target', '_blank');
                        link.setAttribute('download', 'Junior_node_js-Konstantin_Peschanov.pdf'); //any other extension
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        this.isLoading = false;
                        this.$toast.open({
                            type: 'success',
                            message: 'PDF-file downloaded'
                        })
                    })
                    .catch(err => {
                        this.isLoading = false;
                        this.$toast.open({
                            type: 'danger',
                            message: err.message
                        });
                    })
            },
            sendFileByEmail() {
                this.$eventHub.$emit('modal_sendFileByEmail');
                this.$toast.open({
                    type: 'info',
                    message: 'tetet'
                })
            }
        }
    }
</script>

<style scoped>
    .navbar {
        height: 65px;
        padding: 0 1.25rem;
        background-color: #f5f6f6 !important;
    }
    .action-btn {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-width: 125px;
        width: 175px;
        padding: 5px 10px;
        margin: auto 5px;
    }
    .half-circle-spinner {
        margin-left: -10px;
    }
    .spinner-botton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;

    }
    .inner-button-spinner {
        position: relative;
    }

    .action-btn > span, .spinner-botton > span {
        font-size: .85rem;
    }

</style>
