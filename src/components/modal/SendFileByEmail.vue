<template>
    <d-modal v-if="showModal" @close="handleVisibility">
        <d-modal-header>
            <d-modal-title>
                <i class="fas fa-at fa-lg"></i>
                Send CV to Email<i style="font-size: 1rem">(*.pdf format)</i>
            </d-modal-title>
        </d-modal-header>
        <d-modal-body>
            <d-input-group class="d-flex flex-column" seamless>
                <div class="d-flex flex-row">
                    <d-input-group-text :class="recipientName.error === null ? 'img-prepend' : recipientName.error ? 'img-prepend is-invalid' : 'img-prepend is-valid'" slot="prepend">
                        <i class="fas fa-user-secret fa-lg"/>
                    </d-input-group-text>
                    <d-form-input v-model="recipientName.value" @input="validate('recipientName', recipientName.value)" :class="recipientName.error === null ? 'input-field' : recipientName.error ? 'input-field is-invalid' : 'input-field is-valid'" name="recipientName" size="sm" autocomplete="off" placeholder="Type your name..."/>
                </div>
                <div class="input-group-errors" v-if="recipientName['error']">
                    <span>Name must contains min 4 and max 20 aplhabet characters</span>
                </div>
            </d-input-group>
            <d-input-group class="d-flex flex-column" seamless>
                <div class="d-flex flex-row">
                    <d-input-group-text :class="recipientMail.error === null ? 'img-prepend' : recipientMail.error ? 'img-prepend is-invalid' : 'img-prepend is-valid'" slot="prepend">
                        <i class="far fa-envelope fa-lg"/>
                    </d-input-group-text>
                    <d-form-input v-model="recipientMail.value" @input="validate('recipientMail', recipientMail.value)" :class="recipientMail.error === null ? 'input-field' : recipientMail.error ? 'input-field is-invalid' : 'input-field is-valid'" name="recipientMail" size="sm" autocomplete="off" placeholder="Type your email..."/>
                </div>
                <div class="input-group-errors" v-if="recipientMail['error']">
                    <span>Email format is incorrect, example: "login@example.com"</span>
                </div>
            </d-input-group>
        </d-modal-body>
        <d-modal-footer>
            <d-button :disabled="submitEnabled" class="submit-button d-flex flex-row justify-content-between" size="sm" pill>
                <div v-if="!isLoading">
                    <i class="far fa-paper-plane fa-lg mr-2" style="margin-left: -10px"/>
                    Send
                </div>
                <half-circle-spinner v-else :animation-duration="1000" :size="26" color="#ffffff" class="spinner-botton"/>
            </d-button>
        </d-modal-footer>
    </d-modal>
</template>

<script>
    import { HalfCircleSpinner } from 'epic-spinners';

    export default {
        name: 'SendFileByEmail',
        components: {
            HalfCircleSpinner
        },
        data() {
            return {
                recipientName: {
                    value: null,
                    error: null
                },
                recipientMail: {
                    value: null,
                    error: null
                },
                submitEnabled: false,
                showModal: false,
                isLoading: false
            }
        },
        methods: {
            validate(field, value) {
                let pattern = {
                    recipientName: /^(\w|\W){4,20}$/,
                    recipientMail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                };

                return this[field]['error'] = !pattern[field].test(value);

            },
            handleVisibility() {
                this.showModal = !this.showModal;

                this.recipientMail.value = null;
                this.recipientName.value = null
                this.recipientMail.error = null;
                this.recipientName.error = null
            },
            submitForm() {
                this.isLoading = true;
                this.submitEnabled = false;
            }
        },
        created () {
            this.$eventHub.$on('modal_sendFileByEmail', this.handleVisibility);
        },
        beforeDestroy() {
            this.$eventHub.$off('modal_sendFileByEmail')
        }
    }
</script>

<style scoped>
    .modal-header, .modal-footer {
        background-color: #f5f6f6 !important;
    }
    .modal-title {
        color: #007bff;
    }

    .input-group {
        margin: 15px 0;
    }

    .img-prepend {
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .img-prepend.is-valid {
        background-color: #17c67120;
    }
    .input-field.is-valid, .img-prepend.is-valid {
        border-color: #17c671;
        color: #17c671;
    }

    .img-prepend.is-invalid {
        background-color: #ff000020;
    }

    .input-field.is-invalid, .img-prepend.is-invalid {
        border-color: #ff0000;
        color: #ff0000;
    }

    .input-field {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .input-group-errors {
        padding: 2px 10px;
        color: #ff0000;
        font-size: .9rem;
    }
    .modal-footer{
        padding: 0.5rem 2.1875rem;
    }
    .submit-button {
        font-size: medium;
        padding: .25rem 1rem;
        width: 110px;
        display: flex;
        justify-content: center!important;
    }
</style>