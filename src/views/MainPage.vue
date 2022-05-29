<template>
    <d-container class="page">
        <d-row>
            <d-col cols="12" md="4" lg="3" class="contact-column">
                <div class="contact-column-container">
                    <PhotoBlock/>
                    <d-row>
                        <d-col>
                            <ContactBlock/>
                            <FollowmeBlock/>
                        </d-col>
                    </d-row>
                </div>
            </d-col>
            <d-col cols="12" md="8" lg="9" class="content-column">
                <NameBlock/>
                <d-row class="main-content">
                    <d-col>
                        <ProfileBlock/>
                        <ExperienceBlock/>
                    </d-col>
                </d-row>
            </d-col>
        </d-row>
    </d-container>
</template>

<script>
    import ContactBlock from '../components/content/ContactBlock';
    import ExperienceBlock from '../components/content/ExperienceBlock';
    import FollowmeBlock from '../components/content/FollowmeBlock';
    import NameBlock from '../components/content/NameBlock';
    import PhotoBlock from '../components/content/PhotoBlock';
    import ProfileBlock from '../components/content/ProfileBlock';

    export default {
        name: 'MainPage',
        components: {
            ContactBlock, ExperienceBlock, FollowmeBlock, NameBlock, PhotoBlock, ProfileBlock
        }
    }
</script>

<style scoped>
    .contact-column {
        position: relative;
        background-color: rgba(90, 97, 105, 0.06);
    }
    .contact-column-container {
        position: relative;
    }
    .main-content {
        margin-top: 80px;
    }
    @media (max-width: 768px) {
        .container {
            width: 100%;
            max-width: unset;
        }
        .contact-column {
            margin-top: 95px;
        }
        .main-content {
            margin-top: 15px;
        }
    }
</style>
